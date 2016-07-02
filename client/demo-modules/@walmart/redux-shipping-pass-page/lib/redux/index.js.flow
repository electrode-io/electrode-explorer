import {createStore, applyMiddleware} from "redux";

// Middleware
import effects from "redux-effects";
import fetch from "redux-effects-fetch";
import multi from "redux-multi";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers/index";

const middleware = [
  multi,
  effects,
  fetch,
  thunk,
  logger()
];

const createStoreWithMiddleware = () => applyMiddleware(...middleware)(createStore);
const createReduxStore = function createReduxStore() {
  return createStoreWithMiddleware()(rootReducer);
};
export default createReduxStore;
