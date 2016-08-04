"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-config").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");
const contentToString = require("./utils/content-to-string");

const fetchModuleDemo = require("./fetch-module-demo");
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

const fetchRepo = (org, repoName, waitingTime, majorVersion) => {

  github.authenticate(githubAuthObject);

  const opts = {
    user: org,
    repo: repoName,
    path: "package.json"
  };

  return new Promise((resolve, reject) => {
    github.repos.getContent(opts, (err, response) => {

      if (err) {
        console.log("error fetchRepo", err);
        return reject(err);
      }

      const packageContent = contentToString(response.content);

      let meta;
      let pkg = {};
      try {

        pkg = JSON.parse(packageContent);
        meta = extractMetaData(pkg, response.html_url.replace("blob/master/package.json", ""));

        setTimeout(() => {
          console.log(`fetching module ${meta.name}`);
          fetchModuleDemo(meta, majorVersion);
        }, waitingTime);

      } catch (err) {

        console.error("Error parsing package.json", err);
        return reject(new Error("Could not get package.json as JSON"));

      }

      return Promise.all([
        fetchUsage(meta),
        checkDependencies(`${org}/${repoName}`, pkg.dependencies, pkg.devDependencies)
      ])
        .spread((usage) => {
          return resolve({meta, usage});
        }).catch((err) => {
          console.error(`Error fetching demo index for ${org}/${repoName}`, err);
          return reject(err);
        });
    });
  });
};

module.exports = fetchRepo;
