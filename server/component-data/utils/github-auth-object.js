"use strict";

const Config = require("@walmart/electrode-ui-config");
const ghToken = Config.ui.automaticUpdate && process.env.GHACCESS_TOKEN;

module.exports = {
  type: "oauth",
  token: ghToken
};

