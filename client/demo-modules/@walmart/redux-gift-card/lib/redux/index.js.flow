import {createStore, combineReducers, applyMiddleware} from "redux";

// The middleware
import effects from "redux-effects";
import fetch from "redux-effects-fetch";
import multi from "redux-multi";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const reducer = combineReducers(reducers);

const defaultMiddleware = [
  multi,
  effects,
  fetch,
  thunk
];

const createDefaultReduxStore = (middleware) => applyMiddleware(...middleware)(createStore);

const createReduxStore = function createReduxStore(middleware = defaultMiddleware) {
  return createDefaultReduxStore(middleware)(reducer);
};
export default createReduxStore;

