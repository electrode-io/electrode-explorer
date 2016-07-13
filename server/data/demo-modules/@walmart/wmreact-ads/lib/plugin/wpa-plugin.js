"use strict";

var wpaRoutes = require("../routes/wpa-routes");
var wpaService = require("../service/wpa-service");

var wpaPlugin = {
  apiHandler: function apiHandler() {
    return function (request, reply) {
      wpaService.wpaServiceFetch(request, reply);
    };
  },


  register: function register(server, options, next) {
    server.route({
      method: "GET",
      path: wpaRoutes.getWpaPluginPath(server.app.config.ui.basePath),
      handler: wpaPlugin.apiHandler()
    });
    next();
  }
};

wpaPlugin.register.attributes = {
  name: "wpaPlugin",
  version: "0.0.1"
};

module.exports = wpaPlugin;