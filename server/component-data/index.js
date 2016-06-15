"use strict";

/* Handles updating (or creating) the component
 * data for demoing. Implemented in the server
 * as we want to be able to flash updates after
 * the server is up and running, without requiring
 * a restart */
const GitHubApi = require("github");
const Config = require("@walmart/electrode-ui-config");
const ghToken = Config.ui.automaticUpdate && process.env.GHACCESS_TOKEN;
const github = new GitHubApi({
  version: "3.0.0",
  protocol: "https",
  host: "gecgithub01.walmart.com",
  pathPrefix: "/api/v3"
});

const fetchRepo = (org, repoName) => {
  github.authenticate({
    type: "oauth",
    token: ghToken
  });

  github.repos.getContent({
    user: org,
    repo: repoName,
    path: "demo/index.jsx"
  }, (err, response) => {
    if (err) {
      return err;
    }

    console.log(response);
  });
};

const ComponentData = {};

ComponentData.register = (server, options, next) => {

  server.route({
    path: "/portal/api/update/repo/{org}/{repoName}",
    method: "POST",
    handler: (request, reply) => {

      if (!ghToken) {
        // No token? No automatic updates.
        return reply("Automatic updating requires a Github access token. No token found.");
      }

      fetchRepo(request.params.org, request.params.repoName);
      return reply(`Update ${request.params.org}:${request.params.repoName} please`);
    }
  });

  return next();

};

ComponentData.register.attributes = {
  name: "portalComponentData",
  version: "1.0.0"
};

module.exports = ComponentData;
