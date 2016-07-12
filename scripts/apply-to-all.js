"use strict";

const Fs = require("fs");
const Path = require("path");
const Config = require("../config/default.json");

const allFiles = [];

module.exports = (actionMethod) => {
  Fs.readFile(Path.join(__dirname, "./server/data/orgs.json"), (err, data) => {
    if (err) {
      throw err;
    }

    try {
      const orgFile = JSON.parse(data);
      const orgs = Object.keys(orgFile.allOrgs);

      orgs.forEach((org) => {
        Object.keys(orgFile.orgs[org].repos).forEach((repo) => {
          allFiles.push(`${org}/${repo}.json`);
        });
      });

      allFiles.forEach((file) => actionMethod(file));

    } catch (err) {
      console.log("Error parsing JSON in orgs file");
      console.log(err);
    }
  });
};
