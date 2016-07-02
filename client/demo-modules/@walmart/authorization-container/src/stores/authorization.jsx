import { createStore, applyMiddleware } from "redux";
import authorizationReducer from "../reducers/authorization";
import thunk from "redux-thunk";

const store = (applyMiddleware(thunk)(createStore))(authorizationReducer);

export default store;
