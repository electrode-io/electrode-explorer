/**
 * Hapi plugin to poll all the repos under `ORGS` peoriodically
 * and update demo modules if there is a newer version.
 */

"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-config").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");

const Poll = {};

const HALF_DAY = 4320000;

function getRepos(org, page, repos) {
  return new Promise((resolve) => {
    github.repos.getForOrg({
      org,
      page,
      per_page: 100
    }, (err, res) => {
      res.forEach((repo) => {
        const fullName = repo.full_name.split("/");
        repos.push({
          org: fullName[0],
          repoName: fullName[1]
        });
      });

      if (res.length < 100) {
        return resolve(repos);
      } else {
        return resolve(getRepos(org, page + 1, repos));
      }
    });
  });
}

Poll.register = (server, options, next) => {
  github.authenticate(githubAuthObject);

  const ORGS = Config.ORGS;
  const repos = [];

  const promises = [];
  ORGS.forEach((org) => {
    promises.push(getRepos(org, 1, repos));
    setInterval(() => {
      getRepos(org, 1, repos).then();
    }, HALF_DAY);
  });

  return Promise.all(promises)
    .then(() => {
      repos.forEach((repo, index) => {
        setTimeout(() => {
          const { org, repoName } = repo;
          setInterval(() => {
            server.inject({
              method: "POST",
              url:`/portal/api/update/repo/${org}/${repoName}`
            }, (res) => {
              console.log(res.result);
            });
          }, Config.POLL_INTERVAL);
        }, 10000 + index * 300000);
      });

      return next();

    });
};

Poll.register.attributes = {
  name: "poll",
  version: "1.0.0"
};

module.exports = Poll;
