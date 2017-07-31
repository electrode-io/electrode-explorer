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

const updateFiles = (repoFilePath, org, repoName, component, isLerna) => {
  return writeFile(repoFilePath, JSON.stringify(component))
    .then(() => {
      // update the map of known orgs
      const orgMap = Path.join(__dirname, `../../data/orgs.json`);

      return readFile(orgMap)
        .then(catalog => {
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
            let repoLink = isLerna ? `${org}/${component.meta.name}` : `${org}/${repoName}`;
            let repoPath = isLerna ? `${component.meta.name}` : repoName;
            current.repos[repoPath] = {
              link: repoLink
            };

            fs.writeFileSync(orgMap, JSON.stringify(catalog));
          } catch (err) {
            console.error("Problem checking org map", err);
          }
        })
        .then(writeResult => {
          console.log(" OrgMap Written::::");
        });
    })
    .catch(err => {
      console.log("repo file save error", err);
      throw err;
    });
};

const UpdateHandler = function(request, reply) {
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

  return fetchRepo(org, repoName)
    .then(result => {
      let isLerna = false;
      Promise.map(result, component => {
        let repoFilePath = `${orgDataPath}/${repoName}.json`;
        if (result.length > 1) {
          isLerna = true;
          repoFilePath = `${orgDataPath}/${component.pkg.name}.json`;
        }
        // Preserve saved deps if already saved, prepare empty deps array if not
        let deps;
        let currentVersion;

        return readFile(repoFilePath, "utf8")
          .then(data => {
            data = JSON.parse(data);
            deps = data.deps || [];
            currentVersion = data.meta && data.meta.version;
            const latestVersion = component.meta.version;
            if (!updateNow && currentVersion && !semver.lt(currentVersion, latestVersion)) {
              console.log(`${org}:${repoName} is at its latest version.`);
              return `${org}:${repoName} is at its latest version.`;
            }

            component.deps = deps;

            let version;
            if (ref_type === "tag") {
              version = semver.clean(ref);
            } else {
              version = component.pkg.version;
            }
            version = version.substring(0, version.indexOf("."));

            const keywords = component.pkg.keywords;
            setTimeout(() => {
              console.log(`fetching module ${component.meta.name}`);
              fetchModuleDemo(component.meta, version, request.server, keywords);
            }, waitingTime);

            delete component.pkg;

            return updateFiles(repoFilePath, org, repoName, component, isLerna)
              .then(() => console.log(`${org}:${repoName} was saved at ${repoFilePath}`))
              .catch(err => {
                console.log("ERROR UPDATING FILES::::", err);
              });
          })
          .catch(err => {
            console.log("READFILE ERR:::" + err);
            return "READFILE ERR:::" + err;
          });
      }).then(finalResult => {
        reply(`${org}:${repoName} was saved.`);
      });
    })
    .catch(e => {
      console.log("e", e);
      return reply(`Error encountered: ${e.message}`);
    });
};

module.exports = UpdateHandler;
