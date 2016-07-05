import thunkMiddleware from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducer";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const configureStore = (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
