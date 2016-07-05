import { combineReducers } from "redux";

import {
  BEGIN_FETCH,
  FETCH_COMPLETE,
  TOGGLE_VISIBILITY,
  TOGGLE_ZIP_SEARCHING,
  UPDATE_CURRENT_STORE,
  UPDATE_ZIP
} from "./actions";

import data from "./data";

const _getStoreIdAtIndex = (idx) => data.stores[idx].id;

const initialState = {
  stores: [],
  currentStore: _getStoreIdAtIndex(1), // Arbitrary current store
  zip: "98225",
  loading: false,
  isVisible: true,
  isSearchingForZip: false
};

const currentStore = (prevState = initialState.currentStore, action) => {
  switch (action.type) {
  case UPDATE_CURRENT_STORE:
    return action.id;
  default:
    return prevState;
  }
};

const isSearchingForZip = (prevState = initialState.isSearchingForZip, action) => {
  switch (action.type) {
  case TOGGLE_ZIP_SEARCHING:
    return !prevState;
  default:
    return prevState;
  }
};

const isVisible = (prevState = initialState.isVisible, action) => {
  switch (action.type) {
  case TOGGLE_VISIBILITY:
    return !prevState;
  default:
    return prevState;
  }
};

const loading = (prevState = initialState.loading, action) => {
  switch (action.type) {
  case BEGIN_FETCH:
    return true;
  case FETCH_COMPLETE:
    return false;
  default:
    return prevState;
  }
};

const stores = (prevState = initialState.stores, action) => {
  switch (action.type) {
  case FETCH_COMPLETE:
    return action.stores;
  default:
    return prevState;
  }
};

const zip = (prevState = initialState.zip, action) => {
  switch (action.type) {
  case UPDATE_ZIP:
    return action.zip;
  default:
    return prevState;
  }
};

const rootReducer = combineReducers({
  currentStore,
  isSearchingForZip,
  isVisible,
  loading,
  stores,
  zip
});

export default rootReducer;
