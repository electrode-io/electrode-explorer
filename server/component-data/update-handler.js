"use strict";

const Fs = require("fs");
const Path = require("path");
const Config = require("@walmart/electrode-config").config;
const ghToken = Config.automaticUpdate && process.env[Config.GHACCESS_TOKEN_NAME];

const ensureDirectoryExists = require("./utils/ensure-directory-exists");
const fetchRepo = require("./fetch-repo");

const UpdateHandler = function (request, reply) {

  if (!ghToken) {

    // No token? No automatic updates.
    return reply("Automatic updating requires a Github access token. No token found.");

  }

  const { org, repoName } = request.params;

  fetchRepo(org, repoName).then((result) => {

    const orgDataPath = Path.join(__dirname, `../data/${org}`);

    ensureDirectoryExists(orgDataPath);

    Fs.writeFile(`${orgDataPath}/${repoName}.json`, JSON.stringify(result), (err) => {

      if (err) {
        console.log("file save error", err);
        return reply("An error occurred saving this repo");
      }

      // update the map of known orgs
      const orgMap = Path.join(__dirname, `../data/orgs.json`);

      let catalog = Fs.readFileSync(orgMap);

      try {
        catalog = JSON.parse(catalog);

        if (!catalog.orgs[org]) {
          catalog.orgs[org] = {
            repos: [],
            hash: {}
          };
        }

        const current = catalog.orgs[org];

        if (!current.hash[repoName]) {

          current.hash[repoName] = 1;

          current.repos.push({
            name: repoName,
            link: `${org}/${repoName}`
          });

        }

        Fs.writeFileSync(orgMap, JSON.stringify(catalog));

      } catch (err) {

        console.error("Problem checking org map", err);

      }

      return reply(`${org}:${repoName} was saved.`);

    });

  }).catch((e) => {

    console.log("e", e);
    return reply(`Error encountered: ${e.message}`);

  });

};

module.exports = UpdateHandler;

