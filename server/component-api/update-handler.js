"use strict";

const Promise = require("bluebird");
const fs = require("fs");
const readFile = Promise.promisify(fs.readFile);
const writeFile = Promise.promisify(fs.writeFile);
const Path = require("path");
const semver = require("semver");

const Config = require("electrode-confippet").config;
const ghToken = process.env[Config.GHACCESS_TOKEN_NAME];

const ensureDirectoryExists = require("../utils/ensure-directory-exists");
const fetchRepo = require("./fetch-repo");
const fetchModuleDemo = require("./fetch-module-demo");

const updateFiles = (repoFilePath, org, repoName, data) => {
  return writeFile(repoFilePath, data)
    .then(() => {

      // update the map of known orgs
      const orgMap = Path.join(__dirname, `../../data/orgs.json`);

      return readFile(orgMap)
        .then((catalog) => {
          try {
            catalog = JSON.parse(catalog);

            if (!catalog.allOrgs) {
              catalog.allOrgs = {};
            }

            if (!catalog.allOrgs[org]) {
              catalog.allOrgs[org] = {
                repos: {}
              };
            }

            const current = catalog.allOrgs[org];

            current.repos[repoName] = {
              link: `${org}/${repoName}`
            };

            fs.writeFileSync(orgMap, JSON.stringify(catalog));

          } catch (err) {
            console.error("Problem checking org map", err);
          }
        });
    })
    .catch((err) => {
      console.log("repo file save error", err);
      throw err;
    });
};

const UpdateHandler = function (request, reply) {

  if (!ghToken) {
    // No token? No automatic updates.
    return reply("Automatic updating requires a Github access token. No token found.");
  }

  const { org, repoName } = request.params;

  const { ref, ref_type } = request.payload || {};

  const updateNow = request.query.updateNow;
  const waitingTime = updateNow ? 0 : Config.NPM_WAITING_TIME;

  const orgDataPath = Path.join(__dirname, `../../data/${org}`);

  ensureDirectoryExists(orgDataPath);

  return fetchRepo(org, repoName).then((result) => {
    const repoFilePath = `${orgDataPath}/${repoName}.json`;

    // Preserve saved deps if already saved, prepare empty deps array if not
    let deps;
    let currentVersion;

    return readFile(repoFilePath, "utf8")
      .then((data) => {
        data = JSON.parse(data);
        deps = data.deps || [];
        currentVersion = data.meta && data.meta.version;
        const latestVersion = result.meta.version;

        if (!updateNow && currentVersion && !semver.lt(currentVersion, latestVersion)) {
          return reply(`${org}:${repoName} is at its latest version.`);
        }

        result.deps = deps;

        let version;
        if (ref_type === "tag") {
          version = semver.clean(ref);
        } else {
          version = result.pkg.version;
        }
        version = version.substring(0, version.indexOf("."));

        const keywords = result.pkg.keywords;
        setTimeout(() => {
          console.log(`fetching module ${result.meta.name}`);
          fetchModuleDemo(result.meta, version, request.server, keywords);
        }, waitingTime);

        delete result.pkg;

        return updateFiles(repoFilePath, org, repoName, JSON.stringify(result))
          .then(() => reply(`${org}:${repoName} was saved.`));
      });
  }).catch((e) => {
    console.log("e", e);
    return reply(`Error encountered: ${e.message}`);
  });

};

module.exports = UpdateHandler;
