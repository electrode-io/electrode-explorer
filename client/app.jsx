/**
 * Client entry point.
 */

/* globals document global */

import React from "react";

import { routes } from "./routes";
import { Router } from "react-router";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Resolver } from "react-resolver";
import { createHistory } from "history";
import { configureStore } from "./store";

import "./styles/base.styl";

const store = configureStore({});

global.React = React;
global.ReactDOM = ReactDOM;

global.webappStart = function () {
  const rootEl = document.querySelector(".js-content");
  Resolver.render(
    () => (
      <Provider store={store}>
        <Router history={createHistory()}>{routes}</Router>
      </Provider>
    ),
    rootEl
  );
};
