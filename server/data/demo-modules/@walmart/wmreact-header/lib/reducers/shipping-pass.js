"use strict";

exports.__esModule = true;
exports.shippingPass = undefined;

var _types = require("../types");

var shippingPass = exports.shippingPass = function shippingPass() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    // in order to sync server and client, cannot use the cookie
    // value as the initial state, since it's too early to fetch the cookies.
    // Instead, get the initial state as an action
    case _types.GET_SHIPPING_PASS:
      return action.shippingPass;
    default:
      return state;
  }
};