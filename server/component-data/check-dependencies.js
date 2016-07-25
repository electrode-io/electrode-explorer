"use strict";

const Fs = require("fs");
const Path = require("path");
const checkVersion = require("./utils/check-version");

const moduleDeps = [];

const checkDepVersions = (deps, isDev) => {

  Object.keys(deps).map((dep) => {

    if (!(/wmreact|electrode/).test(dep)) {
      return;
    }

    moduleDeps.push({
      uri: "#",
      displayName: dep,
      version: checkVersion(deps[dep].replace(/[^\.\d]/g, ""), deps[dep]),
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

  const repoFile = require(`../data/${moduleName}.json`);

  repoFile.deps = moduleDeps;

  Fs.writeFile(Path.join(__dirname, `../data/${moduleName}.json`), JSON.stringify(repoFile));

};
