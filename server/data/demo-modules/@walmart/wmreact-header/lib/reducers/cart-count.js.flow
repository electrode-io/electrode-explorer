import Cookies from "@walmart/electrode-cookies";
import {
  GET_CART_COUNT_FROM_COOKIE,
  ADD_HEADER_CART_COUNT,
  SET_HEADER_CART_COUNT
} from "../types";

const setCartCountCookie = (totalCount) => {
  Cookies.set(
    "cart-item-count",
    totalCount,
    {path: "/", domain: ".walmart.com"}
  );
};

export const cartCount = (state = 0, action) => {
  switch (action.type) {
  // in order to sync server and client, cannot use the cookie
  // value as the initial state, since it's too early to fetch the cookies.
  // Instead, get the initial state as an action
  case GET_CART_COUNT_FROM_COOKIE:
    return action.cartCount;
  case SET_HEADER_CART_COUNT:
    setCartCountCookie(action.totalCount);
    return action.totalCount;
  case ADD_HEADER_CART_COUNT:
    // ATC api response doesn't set "cart-item-count" cookie
    // it relies on the code to do so
    const totalCount = state + action.itemNum;
    setCartCountCookie(totalCount);
    return totalCount;
  default:
    return state;
  }
};
