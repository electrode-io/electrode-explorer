import React from "react";
import { Route, IndexRoute} from "react-router";

import Config from "electrode-ui-config";

import { Page } from "./components/page";
import { Home } from "./components/home";
import Component from "./components/component";
import Search from "./components/search";

export const routes = (
  <Route path={Config.fullPath()} component={Page}>
    <IndexRoute component={Home}/>
    <Route path={Config.fullPath("/search/:term")} component={Search} />
    <Route path={Config.fullPath("/:org/:repo")} component={Component} />
    <Route path={Config.fullPath("/:org/:repo/:version")} component={Component} />
  </Route>
);
