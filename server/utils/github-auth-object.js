"use strict";

const Config = require("electrode-confippet").config;
const ghToken = process.env[Config.GHACCESS_TOKEN_NAME];

module.exports = {
  type: "oauth",
  token: ghToken
};
