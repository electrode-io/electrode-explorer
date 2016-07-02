import {
  BEGIN_FETCH,
  FETCH_COMPLETE,
  FETCH_ERR,
  TOGGLE_VISIBILITY,
  TOGGLE_ZIP_SEARCHING,
  UPDATE_CURRENT_STORE,
  UPDATE_ZIP
} from "../actions/actions";

import getStateKeys from "./state-keys";

// ----------------------------------------------------------------------------
// If you'd like to store state under keys *other* than the defaults in `./state-keys`,
// you can specify keys of your choice:
//  * Create an override object of the shape `{ CONST_KEY_NAME: "keyYouPrefer"}`, e.g.,
//    `{ IS_LOADING_KEY: "storeFinderIsLoading"}` (can include any number of keys).
//  * Pass that object to the exported container as the prop `stateKeyOverrides`.
//  * When importing these reducers, rather than using the standard `import reducers
//    from "path"` syntax, import `configureReducers` instead, like this:
//    `import { configureReducers } from "path"`. Call `configureReducers` with
//    the same overrides object you passed to the container; it will return a normal
//    reducers object.
// ----------------------------------------------------------------------------

const _getInitialState = (stateKeys) => {
  return {
    [stateKeys.STORES_KEY]: [],
    [stateKeys.CURRENT_STORE_KEY]: 1,
    [stateKeys.ZIP_KEY]: "",
    [stateKeys.IS_LOADING_KEY]: false,
    [stateKeys.FETCH_ERR_KEY]: null,
    [stateKeys.IS_VISIBLE_KEY]: true,
    [stateKeys.IS_SEARCHING_FOR_ZIP_KEY]: false
  };
};

const _buildReducers = (stateKeyOverrides) => {

  const stateKeys = getStateKeys(stateKeyOverrides);
  const initialState = _getInitialState(stateKeys);

  const {
    STORES_KEY,
    CURRENT_STORE_KEY,
    ZIP_KEY,
    IS_LOADING_KEY,
    FETCH_ERR_KEY,
    IS_VISIBLE_KEY,
    IS_SEARCHING_FOR_ZIP_KEY
  } = stateKeys;

  return {
    [CURRENT_STORE_KEY]: (prevState = initialState[CURRENT_STORE_KEY], action) => {
      switch (action.type) {
      case UPDATE_CURRENT_STORE:
        return action.id;
      default:
        return prevState;
      }
    },

    [IS_SEARCHING_FOR_ZIP_KEY]: (prevState = initialState[IS_SEARCHING_FOR_ZIP_KEY], action) => {
      switch (action.type) {
      case TOGGLE_ZIP_SEARCHING:
        return !prevState;
      default:
        return prevState;
      }
    },

    [IS_VISIBLE_KEY]: (prevState = initialState[IS_VISIBLE_KEY], action) => {
      switch (action.type) {
      case TOGGLE_VISIBILITY:
        return !prevState;
      default:
        return prevState;
      }
    },

    [IS_LOADING_KEY]: (prevState = initialState[IS_LOADING_KEY], action) => {
      switch (action.type) {
      case BEGIN_FETCH:
        return true;
      case FETCH_COMPLETE:
        return false;
      case FETCH_ERR:
        return false;
      default:
        return prevState;
      }
    },

    [FETCH_ERR_KEY]: (prevState = initialState[FETCH_ERR_KEY], action) => {
      switch (action.type) {
      case FETCH_ERR:
        return action.err;
      default:
        return prevState;
      }
    },

    [STORES_KEY]: (prevState = initialState[STORES_KEY], action) => {
      switch (action.type) {
      case FETCH_COMPLETE:
        return action.stores;
      default:
        return prevState;
      }
    },

    [ZIP_KEY]: (prevState = initialState[ZIP_KEY], action) => {
      switch (action.type) {
      case UPDATE_ZIP:
        return action.zip;
      default:
        return prevState;
      }
    }
  };
};

// Default export works as expected:
export default _buildReducers();

// Optional configuration export takes overrides object and returns reducers:
export const configureReducers = (stateKeyOverrides) => _buildReducers(stateKeyOverrides);

export const getInitialState = _getInitialState; // Exported for testability
