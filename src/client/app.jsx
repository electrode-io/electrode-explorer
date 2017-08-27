/**
 * Client entry point.
 */

/* globals document global */

import React from "react";
import { render } from 'react-dom';
import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createHistory } from "history";
import { configureStore } from "./store";

import "./styles/base.styl";

window.webappStart = () => {
  const initialState = window.__PRELOADED_STATE__;
  const store = configureStore(initialState);
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.querySelector('.js-content')
  );
};