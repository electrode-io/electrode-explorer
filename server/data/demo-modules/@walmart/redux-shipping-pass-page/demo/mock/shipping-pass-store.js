import {createStore, applyMiddleware, compose} from 'redux';

//middleware
import effects from "redux-effects";
import multi from "redux-multi";
import thunk from "redux-thunk";
import logger from "redux-logger";
import mockFetch from "./mock-fetch";

import {rootReducer} from "../../src/index";
import mocks from "./credit-cards-mock";

const middleware = [
  multi,
  effects,
  mockFetch(mocks),
  thunk,
  logger()
];

export default function configureStore() {
  const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store; 
}
