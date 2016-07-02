import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import createLogger from "redux-logger";
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  logger
)(createStore);

export default (reducers = {captcha: (state = {}) => state}, initialState = {}) =>
  createStoreWithMiddleware(
    combineReducers({...reducers}), initialState);
