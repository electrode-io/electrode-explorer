import React from "react";
import { Route, IndexRoute} from "react-router";

import Config from "@walmart/electrode-ui-config";

import { Page } from "./components/page";
import { Home } from "./components/home";

export const routes = (
  <Route path={Config.fullPath()} component={Page}>
    <IndexRoute component={Home}/>
  </Route>
);
