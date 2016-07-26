/**
 * Client entry point.
 */
/*globals document:false*/
import React from "react";

import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import ReactDOM from "react-dom";
import { Resolver } from "react-resolver";
import { createHistory } from "history";

import { ElectrodeApplication } from "@walmart/electrode-application";

import "./styles/base.styl";

const rootEl = document.querySelector(".js-content");

global.React = React;
global.ReactDOM = ReactDOM;

// Note: Change suffix to `.js` if not using actual JSX.
Resolver.render(
  () => (
    <ElectrodeApplication>
      <Router history={createHistory()}>{routes}</Router>
    </ElectrodeApplication>
  ),
  rootEl
);
