"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSSIBLE_STATES = exports.requestSignInWidgetState = undefined;

var _reduxActions = require("redux-actions");

var _actionTypes = require("./action-types");

var requestSignInWidgetState = exports.requestSignInWidgetState = (0, _reduxActions.createAction)(_actionTypes.REQUEST_SIGN_IN_WIDGET_STATE);

var POSSIBLE_STATES = exports.POSSIBLE_STATES = {
  SIGN_IN: 0,
  FORGOT_PASSWORD: 1,
  RESET_PASSWORD: 2,
  SIGN_UP: 3
};