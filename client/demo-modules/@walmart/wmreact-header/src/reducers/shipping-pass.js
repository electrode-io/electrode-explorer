import { GET_SHIPPING_PASS } from "../types";

export const shippingPass = (state = false, action) => {
  switch (action.type) {
  // in order to sync server and client, cannot use the cookie
  // value as the initial state, since it's too early to fetch the cookies.
  // Instead, get the initial state as an action
  case GET_SHIPPING_PASS:
    return action.shippingPass;
  default:
    return state;
  }
};
