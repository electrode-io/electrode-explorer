import ExEnv from "exenv";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const reducer = (state = {}) => state;

export const configureStore = (initialState) => {
  if (process.env.NODE_ENV !== "production" && ExEnv.canUseDOM) {
    return createStoreWithMiddleware(
      reducer,
      initialState,
      window.devToolsExtension ? window.devToolsExtension() : (f) => f
    );
  }
  return createStoreWithMiddleware(reducer, initialState);
};
