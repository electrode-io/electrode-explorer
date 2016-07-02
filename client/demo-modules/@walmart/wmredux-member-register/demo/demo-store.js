import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import {reducer as form} from "redux-form";
import customer from "../src/reducers/customer";
import signUp from "../src/reducers/signup";
import memberRegister from "../src/reducers/register-membership";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
	thunk,
  logger
)(createStore);

export default createStoreWithMiddleware(
  combineReducers({
    signUp,
    customer,
		memberRegister,
    form
  }), {});
