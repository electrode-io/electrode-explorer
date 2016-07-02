"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionsActionTypes = require("../actions/action-types");

exports["default"] = function (state, action) {
  if (state === undefined) state = {};

  switch (action.type) {
    case _actionsActionTypes.START_SIGN_IN:
      return Object.assign({}, state, {
        loading: true,
        alert: null
      });
    case _actionsActionTypes.END_SIGN_IN:
      return Object.assign({}, state, {
        loading: false,
        alert: null
      });
    case _actionsActionTypes.SET_SIGN_IN_ALERT:
      return Object.assign({}, state, {
        loading: false,
        alert: action.payload
      });
    default:
      return state;
  }
};

module.exports = exports["default"];