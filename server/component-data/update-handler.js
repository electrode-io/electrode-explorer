"use strict";

const Fs = require("fs");
const Path = require("path");
const semver = require("semver");

const Config = require("@walmart/electrode-config").config;
const ghToken = Config.automaticUpdate && process.env[Config.GHACCESS_TOKEN_NAME];

const ensureDirectoryExists = require("./utils/ensure-directory-exists");
const fetchRepo = require("./fetch-repo");
const fetchModuleDemo = require("./fetch-module-demo");

const UpdateHandler = function (request, reply) {

  if (!ghToken) {

    // No token? No automatic updates.
    return reply("Automatic updating requires a Github access token. No token found.");

  }

  const { org, repoName } = request.params;

  const { ref, ref_type } = request.payload || {};

  const waitingTime = request.query.updateNow ? 0 : Config.NPM_WAITING_TIME;

  return fetchRepo(org, repoName).then((result) => {

    const orgDataPath = Path.join(__dirname, `../data/${org}`);

    ensureDirectoryExists(orgDataPath);

    const repoFilePath = `${orgDataPath}/${repoName}.json`;

    // Preserve saved deps if already saved, prepare empty deps array if not
    let deps;
    let currentVersion;

    try {
      const repoFile = require(repoFilePath);
      deps = repoFile.deps || [];
      currentVersion = repoFile.meta && repoFile.meta.version;
    } catch (err) {
      return reply(err.message);
    }

    const latestVersion = result.meta.version;

    if (currentVersion && !semver.lt(currentVersion, latestVersion)) {
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
    Fs.writeFile(repoFilePath, JSON.stringify(result), (err) => {

      if (err) {
        console.log("repo file save error", err);
        return reply("An error occurred saving this repo");
      }

      // update the map of known orgs
      const orgMap = Path.join(__dirname, `../data/orgs.json`);

      Fs.readFile(orgMap, (err, catalog) => {
        try {
          catalog = JSON.parse(catalog);

          if (!catalog.allOrgs[org]) {
            catalog.allOrgs[org] = {
              repos: {}
            };
          }

          const current = catalog.allOrgs[org];

          current.repos[repoName] = {
            link: `${org}/${repoName}`
          };

          Fs.writeFile(orgMap, JSON.stringify(catalog), (err) => {
            if (err) {
              console.err(err);
              throw err;
            }
          });

        } catch (err) {
          console.error("Problem checking org map", err);
        }

        return reply(`${org}:${repoName} was saved.`);

      });


    });

  }).catch((e) => {

    console.log("e", e);
    return reply(`Error encountered: ${e.message}`);

  });

};

module.exports = UpdateHandler;
