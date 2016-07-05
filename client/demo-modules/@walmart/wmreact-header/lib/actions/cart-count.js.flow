import Cookies from "@walmart/electrode-cookies";
import {
  GET_CART_COUNT_FROM_COOKIE,
  ADD_HEADER_CART_COUNT,
  SET_HEADER_CART_COUNT
} from "../types";

export const addCartCount = (itemNum = 1) => {
  // user can add multiple items at the same time.
  return {
    type: ADD_HEADER_CART_COUNT,
    itemNum
  };
};

export const getCartCount = (cookieName = "cart-item-count") => {
  // By default "cart-item-count" is the cookie to store the item number
  return {
    type: GET_CART_COUNT_FROM_COOKIE,
    cartCount: parseInt(Cookies.get(cookieName)) || 0
  };
};

export const setCartCount = (totalCount) => {
  return {
    type: SET_HEADER_CART_COUNT,
    totalCount
  };
};
