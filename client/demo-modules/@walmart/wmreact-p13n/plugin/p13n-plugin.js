"use strict";

exports.__esModule = true;

var _p13nRoutes = require("../routes/p13n-routes");

var _p13nService = require("../service/p13n-service");

var p13nPlugin = {
  apiRecommendationHandler: function apiRecommendationHandler() {
    return function (request, reply) {
      (0, _p13nService.irsServiceFetch)(request, reply);
    };
  },


  register: function register(server, options, next) {
    server.route({
      method: "GET",
      path: (0, _p13nRoutes.getIrsPluginPath)(server.app.config.ui.basePath),
      handler: p13nPlugin.apiRecommendationHandler()
    });
    next();
  }
};

p13nPlugin.register.attributes = {
  name: "p13nPlugin",
  version: "0.0.1"
};

exports.default = p13nPlugin;