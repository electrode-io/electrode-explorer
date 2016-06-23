"use strict";

const Config = require("@walmart/electrode-config").config;
const ghToken = Config.automaticUpdate && process.env[Config.GHACCESS_TOKEN_NAME];

module.exports = {
  type: "oauth",
  token: ghToken
};

