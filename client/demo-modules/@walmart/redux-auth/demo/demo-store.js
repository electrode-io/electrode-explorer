import {createStore, applyMiddleware, combineReducers} from "redux";


import effects from "redux-effects";
import fetch from "redux-effects-fetch";
import multi from "redux-multi";
import thunk from "redux-thunk";

import createLogger from "redux-logger";

import signIn from "../src/reducers/sign-in";
import signUp from "../src/reducers/sign-up";
import signInWidget from "../src/reducers/sign-in-widget";
import {reducer as form} from "redux-form";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  multi,
  effects,
  fetch,
  thunk,
  logger
)(createStore);

export default createStoreWithMiddleware(
  combineReducers({
    signIn,
    signUp,
    signInWidget,
    form
  }), {});
