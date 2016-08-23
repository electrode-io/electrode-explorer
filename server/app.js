"use strict";

const Promise = require("bluebird");
const reduxRouterEngine = require("electrode-redux-router-engine");
const routes = require("../client/routes").routes;
const configureStore = require("../client/store").configureStore;

module.exports = (req) => {
  if (!req.server.app.routesEngine) {
    req.server.app.routesEngine = reduxRouterEngine(routes,  () => {
      const store = configureStore();

      return Promise.resolve(store);
    });
  }

  return req.server.app.routesEngine(req);
};
