/**
 * Client entry point.
 */
/*globals document:false*/
import React from "react";

import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import { Resolver } from "react-resolver";
import { createHistory } from "history";

import { ElectrodeApplication } from "@walmart/electrode-application";
import { setListener } from "@walmart/electrode-fetch";
import { isBeaconMessage } from "@walmart/wmreact-analytics";

import { addLogMessage } from "./log-stream";
import { canary } from "./canary";
import { canaryRules } from "./canary-rules";

import "./styles/base.styl";

const rootEl = document.querySelector(".js-content");

const canaryMessage = (msg) => {};
global.React = React;
// Note: Change suffix to `.js` if not using actual JSX.
Resolver.render(
  () => (
    <ElectrodeApplication
      canary={canary}
      canaryMessage={canaryMessage}
      canaryRules={canaryRules}>
      <Router history={createHistory()}>{routes}</Router>
    </ElectrodeApplication>
  ),
  rootEl
);
