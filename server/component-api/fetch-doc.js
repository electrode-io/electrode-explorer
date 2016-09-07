"use strict";

const GitHubApi = require("github");
const Config = require("electrode-confippet").config;
const github = new GitHubApi(Config.githubApi);
const githubAuthObject = require("../utils/github-auth-object");
const contentToString = require("../utils/content-to-string");

const fetchDoc = (request, reply) => {

  github.authenticate(githubAuthObject);

  const { org, repoName } = request.params;

  const opts = {
    user: org,
    repo: repoName,
    path: "components.md"
  };

  return github.repos.getContent(opts, (err, response) => {

    if (err) {
      return reply("An error occured").code(err.code || 500);
    }

    const doc = contentToString(response.content);

    reply({doc});
  });
};

module.exports = fetchDoc;
