/* @flow */
import jsonp from "jsonp";
import {
  HEADER_FETCH_STORES_REQUEST,
  HEADER_FETCH_STORES_SUCCESS,
  HEADER_FETCH_STORES_ERROR
} from "../types";
import { getLocation } from "../utils/store-finder-utils";

const STORE_URL = "/store/ajax/preferred-flyout";

// Sync actions
export const fetchStoresRequest = () => {
  return {
    type: HEADER_FETCH_STORES_REQUEST
  };
};

export const fetchStoresSuccess = (response) => {
  return {
    type: HEADER_FETCH_STORES_SUCCESS,
    response
  };
};

export const fetchStoresError = () => {
  return {
    type: HEADER_FETCH_STORES_ERROR
  };
};

export const getStoresServiceUrl = (storeFinderUrl, location) => {
  let url = storeFinderUrl || STORE_URL;
  if (location) {
    const { latitude, longitude } = location;
    url = `${url}?latitude=${latitude}&longitude=${longitude}`;
  }
  return url;
};

export const onServiceResponse = (err, data, dispatch) => {
  if (err) {
    dispatch(fetchStoresError());
    return;
  }
  dispatch(fetchStoresSuccess({stores: data, status: 200}));
};

export const storesServiceRequest = ({storeFinderUrl, location, _jsonp, dispatch}) => {
  const url = getStoresServiceUrl(storeFinderUrl, location);
  const options = {timeout: 500};
  _jsonp(url, options, (err, data) => {onServiceResponse(err, data, dispatch);});
};

// async actions
export const fetchStores = (storeFinderUrl, _getLocation = getLocation, _jsonp = jsonp) => {
  return (dispatch) => {
    dispatch(fetchStoresRequest());
    _getLocation().then((location) => {
      storesServiceRequest({storeFinderUrl, location, _jsonp, dispatch});
    }).catch(() => {
      dispatch(fetchStoresError());
    });
  };
};
