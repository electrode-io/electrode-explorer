"use strict";

exports.__esModule = true;
exports.userName = undefined;

var _types = require("../types");

var userName = exports.userName = function userName() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    // in order to sync server and client, cannot use the cookie
    // value as the initial state, since it's too early to fetch the cookies.
    // Instead, get the initial state as an action
    case _types.GET_USER_NAME:
      return action.userName;
    default:
      return state;
  }
};