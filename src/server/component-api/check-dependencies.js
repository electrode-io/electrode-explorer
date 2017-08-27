"use strict";

const Fs = require("fs");
const Promise = require("bluebird");
const Path = require("path");
const Config = require("electrode-confippet").config;
const checkVersion = require("../utils/check-version");
const execFile = require("child_process").execFile;

const prefixes = Config.MODULE_PREFIXES_INCLUDE;
const pattern = prefixes && prefixes.length && new RegExp(prefixes.join("|"));

const getDepLatest = (dep, version, isDev) => {
  return new Promise((resolve, reject) => {

    execFile("bash", [Path.join(__dirname, "../../scripts/info-module.sh"), dep], (err, stdout, stderr) => {
      if (err || stderr) {
        console.log("error getting module info", err || stderr);
        return resolve({});
      }

      const m = stdout.match(/latest:\s'([\d\.]+)'/);
      let wantedVersion = m ? m[1] : version.replace(/[^\.\d]/g, "");

      if (!(/\./).test(wantedVersion)) {
        wantedVersion += ".0.0";
      }

      resolve({
        uri: "#",
        displayName: dep,
        version: checkVersion(wantedVersion, version),
        description: isDev ? "[dev]" : ""
      });
    });
  });
};

const processDeps = (deps, isDev) => {

  const promises = [];

  if (deps) {
    Object.keys(deps).map((dep) => {

      if (pattern && !(pattern).test(dep)) {
        return;
      }

      const promise = getDepLatest(dep, deps[dep], isDev);
      promises.push(promise);

    });
  }

  return Promise.all(promises);

};

const checkDepVersions = (deps, isDev) => {
  return processDeps(deps, isDev)
    .then((depArr) => {
      return depArr;
    });
};

const writeDeps = (moduleName, moduleDeps) => {

  if (!moduleDeps.length) {
    return;
  }

  return new Promise((resolve) => {
    Fs.readFile(Path.join(__dirname, `../../data/${moduleName}.json`), (err, repoFile) => {
      let data = {};
      try {
        data = JSON.parse(repoFile);
      } catch (e) {}

      data.deps = moduleDeps;

      const writePath = Path.join(__dirname, `../../data/${moduleName}.json`);
      Fs.writeFile(writePath, JSON.stringify(data), (err) => {
        if (err) {
          console.error("Error writing file with dependencies", err);
        }
        resolve({});
      });
    });
  });
};

module.exports = (moduleName, deps, devDeps) => {

  return Promise.all([
    checkDepVersions(deps),
    checkDepVersions(devDeps, true)
  ])
    .then((depArrays) => {
      return writeDeps(moduleName, Array.concat(depArrays[0], depArrays[1]))
    })
    .catch((err) => {
      console.log("error getting module dependencies", err);
    });

};
