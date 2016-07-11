"use strict";
const Path = require("path");
const Fs = require("fs");
const oldOrgs = require("../server/data/orgs.json");

const newOrgs = {
  allOrgs: {}
};

Object.keys(oldOrgs.orgs).forEach((org) => {
  newOrgs.allOrgs[org] = { repos: {} };

  const oldOrgData = oldOrgs.orgs[org];

  oldOrgData.repos.forEach((repo) => {
    newOrgs.allOrgs[org].repos[repo.name] = {
      "link": repo.link,
      "submodules": []
    }
  });

});

Fs.writeFileSync(Path.join(__dirname, "../server/data/orgs.json"), JSON.stringify(newOrgs));

