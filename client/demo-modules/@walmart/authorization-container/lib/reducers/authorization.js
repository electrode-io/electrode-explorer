"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constantsAuthorization = require("../constants/authorization");

exports["default"] = function (state, action) {
  if (state === undefined) state = {
    cid: null,
    auth: null,
    type: null,
    info: {}
  };

  switch (action.type) {
    case _constantsAuthorization.UPDATE:
      state = _extends({}, action);
      return state;
    default:
      return state;
  }
};

module.exports = exports["default"];