import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { reducer as form } from "redux-form";
import { RouteMiddleware } from "../src/index";
import {
  signInReducer,
  forgotPasswordReducer,
  captchaReducer,
  customerReducer,
  resetPasswordReducer,
  forgotEmailReducer,
  lostStolenReducer,
  multipleEmailsReducer } from "../src/index";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger,
  RouteMiddleware
)(createStore);

export default createStoreWithMiddleware(
  combineReducers({
    signInReducer,
    forgotPasswordReducer,
    captchaReducer,
    customerReducer,
    resetPasswordReducer,
    forgotEmailReducer,
    lostStolenReducer,
    multipleEmailsReducer,
    form
  }), {});
