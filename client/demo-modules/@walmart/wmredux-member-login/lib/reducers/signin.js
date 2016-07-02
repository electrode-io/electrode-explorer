"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reduxActions = require("redux-actions");

var _signin = require("../actions/constants/signin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = (_actions = {}, _actions[_signin.REQUEST_SIGN_IN_WIDGET_STATE] = function (state, action) {
  return (0, _extends3.default)({}, state, {
    compromised: false,
    currentState: action.payload.state
  });
}, _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });