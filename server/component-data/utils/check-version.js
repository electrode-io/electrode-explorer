"use strict";
const semver = require("semver");

const checkVersion = (wanted, got) => {
  return {
    status: semver.satisfies(wanted, got) ? "ok" : "bad",
    str: got
  };
};

module.exports = checkVersion;
