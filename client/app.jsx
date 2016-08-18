/**
 * Client entry point.
 */

/* globals document global */

import React from "react";

import fetch from "isomorphic-fetch";
import { routes } from "./routes";
import { Router } from "react-router";
import ReactDOM from "react-dom";
import { Resolver } from "react-resolver";
import { createHistory } from "history";

import "./styles/base.styl";

const rootEl = document.querySelector(".js-content");

global.React = React;
global.ReactDOM = ReactDOM;
global.fetchJSON = (url) => {
  return fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        throw res;
      }
      return res.json();
    });
};

// Note: Change suffix to `.js` if not using actual JSX.
Resolver.render(
  () => (
    <Router history={createHistory()}>{routes}</Router>
  ),
  rootEl
);
