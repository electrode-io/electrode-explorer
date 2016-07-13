"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reduxActions = require("redux-actions");

var _requestPassword = require("../actions/constants/request-password");

var _account = require("../actions/constants/account");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateState = function updateState(newState) {
  return function (state) {
    return (0, _extends3.default)({}, state, newState);
  };
};

var actions = (_actions = {}, _actions[_requestPassword.REQUEST_PASSWORD_TOKEN] = updateState({ tokenRequested: true }), _actions[_requestPassword.REQUEST_PASSWORD_TOKEN_COMPLETE] = updateState({ tokenRequested: false }), _actions[_requestPassword.REQUEST_PASSWORD_TOKEN_ERROR] = updateState({ tokenRequested: false }), _actions[_requestPassword.REQUEST_PASSWORD_TOKEN_SUCCESS] = updateState({ compromised: false, tokenRequested: false }), _actions[_account.ACCOUNT_COMPROMISED] = updateState({ compromised: true }), _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });