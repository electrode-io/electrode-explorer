"use strict";

/* Handles updating (or creating) the component
 * data for demoing. Implemented in the server
 * as we want to be able to flash updates after
 * the server is up and running, without requiring
 * a restart */
const Fs = require("fs");
const Path = require("path");
const GitHubApi = require("github");
const Promise = require("bluebird");
const Config = require("@walmart/electrode-ui-config");
const ghToken = Config.ui.automaticUpdate && process.env.GHACCESS_TOKEN;
const github = new GitHubApi({
  version: "3.0.0",
  protocol: "https",
  host: "gecgithub01.walmart.com",
  pathPrefix: "/api/v3"
});

const fetchComponentCode = (org, repoName, path) => {
  github.authenticate({
    type: "oauth",
    token: ghToken
  });

  return new Promise((resolve, reject) => {
    github.repos.getContent({
      user: org,
      repo: repoName,
      path: `demo${path}`
    }, (err, response) => {
      if (err) {
        return reject(err);
      }

      return resolve(new Buffer(response.content, "base64").toString("ascii"));
    });
  });
};

const fetchRepo = (org, repoName, cb) => {
  github.authenticate({
    type: "oauth",
    token: ghToken
  });

  return new Promise((resolve, reject) => {
    github.repos.getContent({
      user: org,
      repo: repoName,
      path: "demo/index.jsx"
    }, (err, response) => {
      if (err) {
        return reject(err);
      }

      const indexContent = new Buffer(response.content, "base64").toString("ascii");
      const m = indexContent.match(/Index\.Components\s?=\s?(\[[\w\W]*\]);/);
      if (!m) {
        return reject(new Error("no Index.Components specified"));
      }

      let componentsStr = m[1];
      componentsStr = componentsStr.replace(/require\((.*)\)/g, (m, p1) => p1);
      ["title", "examples", "options", "image", "type", "code", "noRender"].forEach((k) => {
        componentsStr = componentsStr.replace(new RegExp(`${k}:`, 'g'), `"${k}":`);
      });
      componentsStr = componentsStr.replace("\n", "");

      // try catch this as JSON parse is so picky
      const components = JSON.parse(componentsStr);
      let pending = 0;
      components.forEach((component) => {
        component.examples.forEach((example) => {
          ++pending;
          fetchComponentCode(org, repoName, example.code.replace("raw!.", "")).then(
            (code) => {
              example.code = code;
              --pending;

              if (!pending) return resolve(components);
            }
          );
        });
      });

    });
  });
};

const ComponentData = {};

ComponentData.register = (server, options, next) => {

  server.route({
    path: "/portal/api/update/repo/{org}/{repoName}",
    method: "POST",
    handler: function (request, reply) {

      if (!ghToken) {
        // No token? No automatic updates.
        return reply("Automatic updating requires a Github access token. No token found.");
      }

      const { org, repoName } = request.params;

      fetchRepo(org, repoName).then((result) => {
        const orgDataPath = Path.join(__dirname, `../data/${org}`);

        try {
          Fs.statSync(orgDataPath);
        } catch (err) {
          Fs.mkdirSync(orgDataPath);
        }

        Fs.writeFile(`${orgDataPath}/${repoName}.json`, JSON.stringify(result), (err) => {
          if (err) {
            return reply("An error occurred saving this repo");
          }

          // update the map of known orgs
          const orgMap = Path.join(__dirname, `../data/orgs.json`);
          let orgs = Fs.readFileSync(orgMap);
          try {
            orgs = JSON.parse(orgs);
            if (!orgs[org]) {
              orgs[org] = 1;
              Fs.writeFileSync(orgMap, JSON.stringify(orgs));
            }
          } catch (err) {
            console.error("Problem checking org map", err);
          }
          return reply(`${org}:${repoName} done`);
        });
      });
    }
  });

  server.route({
    method: "GET",
    path: "/portal/data/{param*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "../data"),
        listing: true
      }
    }
  });

  return next();

};

ComponentData.register.attributes = {
  name: "portalComponentData",
  version: "1.0.0"
};

module.exports = ComponentData;
