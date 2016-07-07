import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

// The middleware
import effects from "redux-effects";
import multi from "redux-multi";
import mockFetch from "./mockFetch"
import thunk from "redux-thunk";
import reducers from "../../src/redux/reducers/index";

import mocks from "./gift-cards-mock";
const reducer = combineReducers(reducers);

const middleware = [
  multi,
  effects,
  mockFetch(mocks),
  thunk
];

const createDefaultReduxStore = applyMiddleware(...middleware)(createStore);

export default () => {
  return createDefaultReduxStore(reducer);
}

