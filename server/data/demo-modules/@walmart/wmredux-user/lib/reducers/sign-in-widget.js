"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require("redux-actions");

var _actionTypes = require("../actions/action-types");

var _captchaActionTypes = require("../actions/captcha-action-types");

var _widget = require("../actions/widget");

var _reduxForm = require("redux-form");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateState = function updateState(newState) {
  return function (state) {
    return _extends({}, state, newState);
  };
};

var actions = (_actions = {}, _defineProperty(_actions, _actionTypes.REQUEST_PASSWORD_TOKEN, updateState({ tokenRequested: true })), _defineProperty(_actions, _actionTypes.REQUEST_PASSWORD_TOKEN_COMPLETE, updateState({ tokenRequested: false })), _defineProperty(_actions, _actionTypes.REQUEST_PASSWORD_TOKEN_ERROR, updateState({ tokenRequested: false })), _defineProperty(_actions, _actionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS, updateState({
  compromised: false,
  tokenRequested: false,
  currentState: _widget.POSSIBLE_STATES.RESET_PASSWORD
})), _defineProperty(_actions, _actionTypes.ACCOUNT_COMPROMISED, updateState({
  compromised: true,
  currentState: _widget.POSSIBLE_STATES.FORGOT_PASSWORD
})), _defineProperty(_actions, _actionTypes.REQUEST_SIGN_IN_WIDGET_STATE, function (state, action) {
  return _extends({}, state, {
    compromised: false,
    currentState: action.payload.state
  });
}), _defineProperty(_actions, _reduxForm.actionTypes.CHANGE, function (state, action) {
  var tempForm = state.tempForm;
  var field = action.field;
  var value = action.value;

  return _extends({}, state, {
    tempForm: {
      "email": field === "email" && value || tempForm.email,
      "firstName": field === "firstName" && value || tempForm.firstName,
      "lastName": field === "lastName" && value || tempForm.lastName
    }
  });
}), _defineProperty(_actions, _captchaActionTypes.CAPTCHA_RESPONDED, updateState({ captchaAvailable: true })), _defineProperty(_actions, _reduxForm.actionTypes.STOP_SUBMIT, function (state, action) {
  return action.errors ? _extends({}, state, { captchaAvailable: undefined }) : state;
}), _defineProperty(_actions, _actionTypes.SUBMIT_SUCCESS, function (state, action) {
  return updateState({ submitSuccess: action.payload })(state);
}), _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });