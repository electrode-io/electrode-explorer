/**
 * Hapi plugin to poll all the repos under `ORGS` peoriodically
 * and update demo modules if there is a newer version.
 */

"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("electrode-confippet").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");
const fs = require("fs");
const path = require("path");
const exec = require('child_process').exec;

const Poll = {};

let command = "";

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

function addCronJob(cmd, index) {
  // 15 minutes between each job
  const minute = index % 4 * 15;
  const hour = Math.floor(index / 4) % 24;
  command += `${minute} ${hour} * * * ${cmd}\n`;
}

Poll.register = (server, options, next) => {
  if (options.enable === false) {
    return next();
  }

  try {
    github.authenticate(githubAuthObject);
  } catch (e) {
    console.log("A valid GitHub access token is needed.");
  }

  next();

  const ORGS = Config.ORGS;
  const repos = [];

  const promises = [];
  ORGS.forEach((org) => {
    promises.push(getRepos(org, 1, repos));
  });

  return Promise.all(promises)
    .then(() => {
      repos.forEach((repo, index) => {
        const { org, repoName } = repo;
        addCronJob(`curl -X POST http://localhost:3000/api/update/${org}/${repoName} > /dev/null`, index);
      });
    })
    .then(() => {
      const filePath = path.join(__dirname, "../myjob");
      fs.writeFile(filePath, command, "utf8", (err) => {
        if (err) {
          console.log(err);
          return;
        }

        exec(`crontab ${filePath}`, (error) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }

          console.log("Cron job set.");
        });
      });
    });
};

Poll.register.attributes = {
  name: "poll",
  version: "1.0.0"
};

module.exports = Poll;
