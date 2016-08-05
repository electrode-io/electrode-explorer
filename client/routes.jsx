import React from "react";
import { Route, IndexRoute} from "react-router";

import Config from "@walmart/electrode-ui-config";

import { Page } from "./components/page";
import { Home } from "./components/home";
import Component from "./components/component";

export const routes = (
  <Route path={Config.fullPath()} component={Page}>
    <IndexRoute component={Home}/>
    <Route path={Config.fullPath("/:org/:repo")} component={Component} />
    <Route path={Config.fullPath("/:org/:repo/:version")} component={Component} />
  </Route>
);
