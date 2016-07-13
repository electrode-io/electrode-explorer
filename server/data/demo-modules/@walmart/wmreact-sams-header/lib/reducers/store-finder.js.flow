import {
  HEADER_FETCH_STORES_REQUEST,
  HEADER_FETCH_STORES_SUCCESS,
  HEADER_FETCH_STORES_ERROR
} from "../actions/action-types";

export default (state = {}, action) => {
  switch (action.type) {
  case HEADER_FETCH_STORES_REQUEST:
    return {
      ...state
    };

  case HEADER_FETCH_STORES_SUCCESS:
    const payload = action.payload;
    return {
      ...state,
      stores: {
        nearbyStores: payload.storesData.stores,
        preferredStores: payload.storesData.preferredStores,
        nbrOfStores: payload.nbrOfStores,
        singleLineAddr: payload.requestParams.singleLineAddr
      }
    };

  case HEADER_FETCH_STORES_ERROR:
    return {
      ...state
    };


  default:
    return {
      ...state
    };
  }
};
