"use strict";

exports.__esModule = true;
exports.POSSIBLE_STATES = exports.requestSignInWidgetState = undefined;

var _reduxActions = require("redux-actions");

var _signin = require("./constants/signin");

var requestSignInWidgetState = exports.requestSignInWidgetState = (0, _reduxActions.createAction)(_signin.REQUEST_SIGN_IN_WIDGET_STATE);

var POSSIBLE_STATES = exports.POSSIBLE_STATES = {
  SIGN_IN: 0,
  FORGOT_PASSWORD: 1,
  RESET_PASSWORD: 2
};