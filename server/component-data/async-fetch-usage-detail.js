"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-config").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");
const Path = require("path");
const Fs = require("fs");
const contentToString = require("./utils/content-to-string");
const checkVersion = require("./utils/check-version");

const getOrgRepo = (uri) => {
  if (!uri || typeof uri !== "string") {
    throw new Error("uri problem for ", JSON.stringify(uri));
  }

  const parts = uri.replace("://","").split("/");
  return {
    org: parts[1],
    repo: parts[2]
  };
};

const getVersion = (moduleSearchedFor, moduleVersion, githubUri) => {
  github.authenticate(githubAuthObject);

  const orgRepo = getOrgRepo(githubUri);

  return new Promise((resolve, reject) => {
    if (typeof githubUri !== "string") {
      return reject("Not a string");
    }

    github.repos.getContent({
      user: orgRepo.org,
      repo: orgRepo.repo,
      path: "package.json"
    }, (err, res) => {
      if (err) {
        return reject(err);
      }

      const pkg = JSON.parse(contentToString(res.content));

      const version = pkg.dependencies && pkg.dependencies[moduleSearchedFor] ||
        pkg.devDependencies && pkg.devDependencies[moduleSearchedFor] ||
        "unknown";

      return resolve({
        uri: githubUri,
        displayName: `${orgRepo.org}/${orgRepo.repo}`,
        version: checkVersion(moduleVersion, version),
        description: pkg.description
      });

    });
  });
};

const AsyncFetchUsageDetail = (meta) => {
  const orgRepo = getOrgRepo(meta.github);

  try {
    const fileName = Path.join(__dirname, `../data/${orgRepo.org}/${orgRepo.repo}.json`);
    const repoFile = Fs.readFileSync(fileName);
    const repoData = JSON.parse(repoFile);
    const newUsage = [];

    const result = Promise.each(repoData.usage, uri => {
      return getVersion(meta.name, meta.version, uri)
        .then((detail) => {
          newUsage.push(detail);
        })
        .catch((err) => {
          if (err.code === "404") {
            console.log("Missing package.json?: " + meta.github);
          } else {
            console.log(err);
          }
        });
    }).then((arr) => {
      repoData.usage = newUsage;
      Fs.writeFileSync(fileName, JSON.stringify(repoData));
    }).catch((err) => {
      //console.log(err);
    });

  } catch (e) {
    console.error("Could not retrieve repo JSON file");
    console.log(e);
  }

};

module.exports = AsyncFetchUsageDetail;
