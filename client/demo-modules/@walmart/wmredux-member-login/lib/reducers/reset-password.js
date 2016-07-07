"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reduxActions = require("redux-actions");

var _resetPassword = require("../actions/constants/reset-password");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateState = function updateState(newState) {
  return function (state) {
    return (0, _extends3.default)({}, state, newState);
  };
};

var actions = (_actions = {}, _actions[_resetPassword.PRE_RESET_PASSWORD_SUCCESS] = function (state, newState) {
  return (0, _extends3.default)({}, state, {
    email: newState.payload
  });
}, _actions[_resetPassword.RESET_PASSWORD] = updateState({ resetPasswordRequested: true }), _actions[_resetPassword.RESET_PASSWORD_SUCCESS] = updateState({
  resetPasswordRequested: false,
  resetPasswordSucceed: true
}), _actions[_resetPassword.RESET_PASSWORD_ERROR] = updateState({ resetPasswordRequested: false }), _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });