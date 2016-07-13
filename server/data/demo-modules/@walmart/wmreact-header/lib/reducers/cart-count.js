"use strict";

exports.__esModule = true;
exports.cartCount = undefined;

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCartCountCookie = function setCartCountCookie(totalCount) {
  _electrodeCookies2.default.set("cart-item-count", totalCount, { path: "/", domain: ".walmart.com" });
};

var cartCount = exports.cartCount = function cartCount() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    // in order to sync server and client, cannot use the cookie
    // value as the initial state, since it's too early to fetch the cookies.
    // Instead, get the initial state as an action
    case _types.GET_CART_COUNT_FROM_COOKIE:
      return action.cartCount;
    case _types.SET_HEADER_CART_COUNT:
      setCartCountCookie(action.totalCount);
      return action.totalCount;
    case _types.ADD_HEADER_CART_COUNT:
      // ATC api response doesn't set "cart-item-count" cookie
      // it relies on the code to do so
      var totalCount = state + action.itemNum;
      setCartCountCookie(totalCount);
      return totalCount;
    default:
      return state;
  }
};