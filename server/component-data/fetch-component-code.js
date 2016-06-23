"use strict";

const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-config").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("./utils/github-auth-object");
const contentToString = require("./utils/content-to-string");

const fetchComponentCode = (org, repoName, path) => {

  github.authenticate(githubAuthObject);

  return new Promise((resolve, reject) => {

    const opts = {
      user: org,
      repo: repoName,
      path: `demo${path}`
    };

    const resHandler = (err, response) => {

      return err ?
        reject(err) :
        resolve(contentToString(response.content));
    };

    github.repos.getContent(opts, resHandler);

  });

};

module.exports = fetchComponentCode;
