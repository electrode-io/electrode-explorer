"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reduxActions = require("redux-actions");

var _helpersFetch = require("./helpers/fetch");

var _reduxForm = require("redux-form");

var _reduxEffects = require("redux-effects");

var _actionTypes = require("./action-types");

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var onRequestPasswordToken = (0, _reduxActions.createAction)(_actionTypes.REQUEST_PASSWORD_TOKEN);
var onRequestPasswordTokenSuccess = (0, _reduxActions.createAction)(_actionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS);
var onRequestPasswordTokenError = (0, _reduxActions.createAction)(_actionTypes.REQUEST_PASSWORD_TOKEN_ERROR);
var onResetPassword = (0, _reduxActions.createAction)(_actionTypes.RESET_PASSWORD);
var onResetPasswordSuccess = (0, _reduxActions.createAction)(_actionTypes.RESET_PASSWORD_SUCCESS);
var onResetPasswordError = (0, _reduxActions.createAction)(_actionTypes.RESET_PASSWORD_ERROR);

var extractErrors = function extractErrors(res) {
  var genericMessage = "Something went wrong, verify your values or try again later";
  return {
    _error: res.value && res.value.message || genericMessage
  };
};

var requestPasswordToken = function requestPasswordToken(_ref) {
  var email = _ref.email;

  return [(0, _reduxForm.startSubmit)("forgotPassword"), onRequestPasswordToken({ email: email }), (0, _reduxEffects.bind)((0, _helpersFetch.postJson)(_config2["default"].forgotPasswordUrl, { email: email }), function (res) {
    return [(0, _reduxForm.stopSubmit)("forgotPassword"), onRequestPasswordTokenSuccess(res)];
  }, function (res) {
    return [(0, _reduxForm.stopSubmit)("forgotPassword", extractErrors(res)), onRequestPasswordTokenError(res)];
  })];
};

exports.requestPasswordToken = requestPasswordToken;
var resetPassword = function resetPassword(_ref2, onSuccess) {
  var email = _ref2.email;
  var passCode = _ref2.passCode;
  var password = _ref2.password;

  return [(0, _reduxForm.startSubmit)("resetPassword"), onResetPassword({ email: email, passCode: passCode }), (0, _reduxEffects.bind)((0, _helpersFetch.postJson)(_config2["default"].resetPasswordUrl, { email: email, passCode: passCode, password: password }), function (res) {
    if (onSuccess) {
      onSuccess();
    }
    return [(0, _reduxForm.stopSubmit)("resetPassword"), onResetPasswordSuccess(res)];
  }, function (res) {
    return [(0, _reduxForm.stopSubmit)("resetPassword", extractErrors(res)), onResetPasswordError(res)];
  })];
};
exports.resetPassword = resetPassword;