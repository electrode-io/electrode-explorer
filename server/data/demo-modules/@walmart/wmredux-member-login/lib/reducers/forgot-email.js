"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reduxActions = require("redux-actions");

var _forgotEmail = require("../actions/constants/forgot-email");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = (_actions = {}, _actions[_forgotEmail.FORGOT_EMAIL_SUCCESS] = function (state, action) {
  return (0, _extends3.default)({}, state, {
    compromised: false,
    email: action.payload.payload.email
  });
}, _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });