"use strict";

const Fs = require("fs");
const Path = require("path");
const Config = require("@walmart/electrode-config").config;
const checkVersion = require("./utils/check-version");

const prefixes = Config.PREFIXES_INCLUDE;
const pattern = prefixes && prefixes.length && new RegExp(prefixes.join("|"));
const moduleDeps = [];

const checkDepVersions = (deps, isDev) => {

  Object.keys(deps).map((dep) => {

    if (pattern && !(pattern).test(dep)) {
      return;
    }

    // This just passes in the version we have as the wanted version
    // to get functionality working. We need to decide on the criteria
    // for desired version (latest?) and replace this with that value.
    let wantedVersion = deps[dep].replace(/[^\.\d]/g, "");
    if (!(/\./).test(wantedVersion)) {
      wantedVersion += ".0.0";
    }

    moduleDeps.push({
      uri: "#",
      displayName: dep,
      version: checkVersion(wantedVersion, deps[dep]),
      description: isDev ? "[dev]" : ""
    });

  });

};

module.exports = (moduleName, deps, devDeps) => {

  checkDepVersions(deps);
  checkDepVersions(devDeps, true);

  if (!moduleDeps.length) {
    return;
  }

  // Fetch the repo data file if it already exists
  let repoFile = {};
  try {
    repoFile = require(`../data/${moduleName}.json`);
  } catch (err) {}


  repoFile.deps = moduleDeps;

  const writePath = Path.join(__dirname, `../data/${moduleName}.json`);

  Fs.writeFile(writePath, JSON.stringify(repoFile), (err) => {
    if (err) {
      return console.error("Error writing file with dependencies", err);
    }
  });

};
