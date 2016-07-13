import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default (reducers = {captcha: (state = {}) => state}, initialState = {}) =>
  createStoreWithMiddleware(
    combineReducers({...reducers}), initialState);
