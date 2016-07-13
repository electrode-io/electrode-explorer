"use strict";

exports.__esModule = true;
exports.setCartCount = exports.getCartCount = exports.addCartCount = undefined;

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addCartCount = exports.addCartCount = function addCartCount() {
  var itemNum = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  // user can add multiple items at the same time.
  return {
    type: _types.ADD_HEADER_CART_COUNT,
    itemNum: itemNum
  };
};

var getCartCount = exports.getCartCount = function getCartCount() {
  var cookieName = arguments.length <= 0 || arguments[0] === undefined ? "cart-item-count" : arguments[0];

  // By default "cart-item-count" is the cookie to store the item number
  return {
    type: _types.GET_CART_COUNT_FROM_COOKIE,
    cartCount: parseInt(_electrodeCookies2.default.get(cookieName)) || 0
  };
};

var setCartCount = exports.setCartCount = function setCartCount(totalCount) {
  return {
    type: _types.SET_HEADER_CART_COUNT,
    totalCount: totalCount
  };
};