import React from "react";
import { Route, IndexRoute } from "react-router";

import { Page } from "./components/page";
import { Home } from "./components/home";
import Component from "./components/component";
import Search from "./components/search";

export const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={Home}/>
    <Route path="/search/:term" component={Search} />
    <Route path="/:org/:repo" component={Component} />
    <Route path="/:org/:repo/:version" component={Component} />
  </Route>
);
