"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require("redux-actions");

var _actionTypes = require("./action-types");

var requestSignInWidgetState = (0, _reduxActions.createAction)(_actionTypes.REQUEST_SIGN_IN_WIDGET_STATE);

exports.requestSignInWidgetState = requestSignInWidgetState;
var POSSIBLE_STATES = {
  SIGN_IN: 0,
  FORGOT_PASSWORD: 1,
  RESET_PASSWORD: 2
};
exports.POSSIBLE_STATES = POSSIBLE_STATES;