import {
  P13N_ADD_TO_CART_REQUEST,
  P13N_ADD_TO_CART_SUCCESS,
  P13N_ADD_TO_CART_FAILURE,
  P13N_CLEAR_LATEST_ADD_TO_CART_RESULT
} from "../actions/index";

import ActionStatus from "../enums/action-status";

export const initialState = {
  // Stores the item ID of the latest success/failure result. This will ensure
  // that when a new item is added to the cart (or fails), its flyout should be
  // the only one shown, even if there were multiple in-flight add to cart
  // requests.
  latestResultId: null,
  // Stores a mapping of item IDs to objects containing `status` and
  // (potentially) `error` properties.
  requestsById: {}
};

export const addToCartStatus = (state = initialState, action) => {
  const { item, error } = action;
  switch (action.type) {
  case P13N_ADD_TO_CART_REQUEST:
    return {
      ...state,
      requestsById: {
        ...state.requestsById,
        [item.placementId]: {
          [item.id]: { status: ActionStatus.IN_PROGRESS }
        }
      }
    };
  case P13N_ADD_TO_CART_SUCCESS:
    return {
      ...state,
      latestResultId: `${item.placementId}-${item.id}`,
      requestsById: {
        ...state.requestsById,
        [item.placementId]: {
          [item.id]: { status: ActionStatus.ADDED_TO_CART }
        }
      },
      addedCountInfo: action.addedCountInfo
    };
  case P13N_ADD_TO_CART_FAILURE:
    return {
      ...state,
      latestResultId: `${item.placementId}-${item.id}`,
      requestsById: {
        ...state.requestsById,
        [item.placementId]: {
          [item.id]: { status: ActionStatus.ADD_TO_CART_ERROR, error }
        }
      }
    };
  case P13N_CLEAR_LATEST_ADD_TO_CART_RESULT:
    return {
      ...state,
      latestResultId: null
    };
  default:
    return state;
  }
};
