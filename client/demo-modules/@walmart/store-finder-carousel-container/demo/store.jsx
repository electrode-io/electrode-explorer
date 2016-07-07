import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { configureReducers } from "../src/reducers/reducers";
// import reducers from "../src/reducers/reducers";
// ^ If you don't need custom configuration, this still works as expected

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const configureStore = (initialState, stateKeyOverrides) => {
  const rootReducer = combineReducers(configureReducers(stateKeyOverrides));
  return createStoreWithMiddleware(rootReducer, initialState);
};
