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
}, _actions[_signin.SIGN_IN_ERROR] = function (state, action) {
  var _action$payload = action.payload;
  var firstName = _action$payload.firstName;
  var emails = _action$payload.emails;
  var code = _action$payload.code;

  return (0, _extends3.default)({}, state, {
    firstName: firstName,
    emails: emails,
    code: code
  });
}, _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });