"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _actions;

var _reduxActions = require("redux-actions");

var _captcha = require("../actions/constants/captcha");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateState = function updateState(newState) {
  return function (state) {
    return (0, _extends3.default)({}, state, newState);
  };
};

var actions = (_actions = {}, _actions[_captcha.CAPTCHA_RESPONDED] = updateState({ captchaAvailable: true }), _actions);

exports.default = (0, _reduxActions.handleActions)(actions, { tempForm: {} });