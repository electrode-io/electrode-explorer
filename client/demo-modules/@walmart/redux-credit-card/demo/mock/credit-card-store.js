import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

// The middleware
import effects from "redux-effects";
import multi from "redux-multi";
import mockFetch from "./mockFetch"
import thunk from "redux-thunk";
import reducers from "../../src/redux/reducers/index";


const reducer = combineReducers(reducers);

export default (mock) => {
  return applyMiddleware(
    multi,
    effects,
    mockFetch(mock),
    thunk
  )(createStore)(reducer);
}

