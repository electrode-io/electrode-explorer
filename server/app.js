"use strict";

const Promise = require("bluebird");
const ReduxRouterEngine = require("electrode-redux-router-engine");
const routes = require("../client/routes").routes;
const configureStore = require("../client/store").configureStore;

const createReduxStore = () => {
  const store = configureStore();
  return Promise.resolve(store);
};

const engine = new ReduxRouterEngine({routes, createReduxStore});

module.exports = (req) => {
  return engine.render(req);
};
