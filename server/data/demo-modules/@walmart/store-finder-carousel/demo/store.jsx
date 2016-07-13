import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const configureStore = (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
