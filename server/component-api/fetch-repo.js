"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("electrode-confippet").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("../utils/github-auth-object");
const contentToString = require("../utils/content-to-string");
const _ = require("lodash");

const fetchUsage = require("./fetch-usage");
const checkDependencies = require("./check-dependencies");

const extractMetaData = (pkg, repoUrl) => {
  return {
    name: pkg.name,
    title: pkg.title,
    description: pkg.description,
    github: repoUrl,
    version: pkg.version
  };
};

const readPackageContent = (org, repoName, path) => {
  return new Promise((resolve, reject) => {
    github.authenticate(githubAuthObject);
    const packagesOpts = {
      owner: org,
      repo: repoName,
      path: path
    };
    github.repos
      .getContent(packagesOpts)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        console.log("READ PACKAGE CONTENT ERROR:::", err);
        reject(err);
      });
  });
};

const fetchRepo = (org, repoName) => {
  let isLernaStructure = false;
  //github.authenticate(githubAuthObject);
  return new Promise((resolve, reject) => {
    //fetch top level package.json for repo
    readPackageContent(org, repoName, "package.json")
      .then(response => {
        const packageContent = contentToString(response.content);
        let meta;
        let pkg = {};

        pkg = JSON.parse(packageContent);

        const isCorrectPkg =
          _.includes(_.keys(pkg.dependencies), "electrode-archetype-react-component") ||
          _.includes(_.keys(pkg.devDependencies), "electrode-archetype-react-component");

        isLernaStructure =
          _.includes(_.keys(pkg.dependencies, "lerna")) ||
          _.includes(_.keys(pkg.devDependencies), "lerna");

        if (!isCorrectPkg && isLernaStructure) {
          return readPackageContent(org, repoName, "packages").then(packagesArray => {
            return Promise.map(packagesArray, componentName =>
              readPackageContent(org, repoName, componentName.path + "/package.json")
            ).then(componentArray => {
              let componentResults = componentArray.map(arr => {
                let pkg = JSON.parse(contentToString(arr.content));
                let meta = extractMetaData(
                  pkg,
                  arr.html_url.replace("blob/master/", "tree/master/").replace("package.json", "")
                );
                return { pkg, meta };
              });
              return componentResults;
            });
          });
        } else {
          meta = extractMetaData(pkg, response.html_url.replace("blob/master/package.json", ""));
          return [{ pkg, meta }];
        }
      })
      .then(componentResults => {
        return Promise.all([
          componentResults,
          Promise.map(componentResults, component => fetchUsage(component.meta)),
          Promise.map(componentResults, component =>
            checkDependencies(
              isLernaStructure ? `${org}/${component.meta.name}` : `${org}/${repoName}`,
              component.meta,
              component.pkg.dependencies,
              component.pkg.devDependencies
            )
          )
        ]).spread(usageArray => {
          return resolve(usageArray);
        });
      })
      .catch(err => {
        console.error(`Error fetching demo index for ${org}/${repoName}`, err);
        return reject(err);
      });
  });
};

module.exports = fetchRepo;
