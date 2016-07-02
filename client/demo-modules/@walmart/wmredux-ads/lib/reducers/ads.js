"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ads = require("../actions/ads");

var initialState = {
  loading: true,
  midasConfig: {},
  midasContext: {}
};

var ads = function ads() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _ads.LOADING:
      return _extends({}, state, { loading: true });
    case _ads.LOADED:
      var midasContext = action.midasContext;
      var midasConfig = action.midasConfig;

      return _extends({}, state, { loading: false, midasContext: midasContext, midasConfig: midasConfig });
    default:
      return state;
  }
};
exports.default = ads;