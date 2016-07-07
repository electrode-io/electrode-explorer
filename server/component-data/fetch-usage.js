"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-config").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");
const ORGS = Config.ORGS_IN_USAGE_SEARCH;

const shouldIncludeRepo = (repo) => {
  return ORGS.some((org) => repo.indexOf(org) === 0 && repo.indexOf("electrode/portal") === -1);
};

const fetchUsage = (meta) => {
  github.authenticate(githubAuthObject);

  const moduleParts = meta.name.split("/");
  const moduleName = moduleParts[1] || meta.name;

  const opts = {
    q: `${moduleName}+in:file+language:json`
  };

  return new Promise((resolve, reject) => {
    github.search.code(opts, (err, res) => {
      if (err) {
        console.log("error fetchUsage", err);
        return reject(err);
      }

      const results = [];

      res.items.forEach((item) => {
        if (item.name === "package.json" &&
          meta.github.indexOf(item.repository.html_url) === -1 &&
          shouldIncludeRepo(item.repository.full_name)) {
            results.push(item.repository.html_url);
        }
      });

      results.sort();

      return resolve(results);
    });
  });
};

module.exports = fetchUsage;
