/* @flow */
import {
  HEADER_FETCH_STORES_REQUEST,
  HEADER_FETCH_STORES_SUCCESS,
  HEADER_FETCH_STORES_ERROR
} from "../types";

const DEFAULT_STATE = {
  loading: false,
  didInvalidate: false,
  response: {}
};

export const storeFinder = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case HEADER_FETCH_STORES_REQUEST:
    return Object.assign({}, state, {
      loading: true,
      didInvalidate: false,
      response: {}
    });
  case HEADER_FETCH_STORES_SUCCESS:
    const {response} = action;
    return Object.assign({}, state, {
      loading: false,
      didInvalidate: false,
      response
    });
  case HEADER_FETCH_STORES_ERROR:
    return Object.assign({}, state, {
      loading: false,
      didInvalidate: true,
      response: {}
    });
  default:
    return state;
  }
};
