import React from "react";
import { Route, IndexRoute} from "react-router";

import { Page } from "./components/page";
import { Home } from "./components/home";
import Component from "./components/component";
import Search from "./components/search";

export const routes = (
  <Route path="/explorer" component={Page}>
    <IndexRoute component={Home}/>
    <Route path="/explorer/search/:term" component={Search} />
    <Route path="/explorer/:org/:repo" component={Component} />
    <Route path="/explorer/:org/:repo/:version" component={Component} />
  </Route>
);
