import config from "../config";
import {createAction} from "redux-actions";
import {
  HEADER_FETCH_STORES_REQUEST,
  HEADER_FETCH_STORES_SUCCESS,
  HEADER_FETCH_STORES_ERROR
} from "../actions/action-types";
import { fetch } from "@walmart/electrode-fetch";

const onHeaderFetchStoresRequest = createAction(HEADER_FETCH_STORES_REQUEST);
const onHeaderFetchStoresSuccess = createAction(HEADER_FETCH_STORES_SUCCESS);
const onHeaderFetchStoresError = createAction(HEADER_FETCH_STORES_ERROR);

const generateQueryParams = ({
  singleLineAddr = null,
  distance = config.defaultDistance,
  nbrOfStores = config.defaultNbrOfStores,
  storeTypes = config.defaultStoreTypes
}) => {
  const result = [
    `singleLineAddr=${singleLineAddr}`,
    `distance=${distance}`,
    `nbrOfStores=${nbrOfStores}`,
    `storeTypes=${storeTypes}`
  ];

  return `?${result.join("&")}`;
};

export const fetchStoresRequest = (args) => {
  const queryParams = generateQueryParams(args);
  return function (dispatch) {
    onHeaderFetchStoresRequest();
    return fetch(config.apiFullPath + queryParams, {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json"
      }
    }).then((response) => {
      dispatch(onHeaderFetchStoresSuccess(response));
    }).catch((err) => {
      dispatch(onHeaderFetchStoresError(err));
    });
  };
};
