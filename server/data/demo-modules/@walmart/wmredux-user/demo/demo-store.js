import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import {reducer as form} from "redux-form";
import customer from "../src/reducers/customer";
import signInWidget from "../src/reducers/sign-in-widget";
import { authReducer } from "../src/index";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
	thunk,
  logger
)(createStore);

export default createStoreWithMiddleware(
  combineReducers({
    signInWidget,
    customer,
    form
  }), {});
