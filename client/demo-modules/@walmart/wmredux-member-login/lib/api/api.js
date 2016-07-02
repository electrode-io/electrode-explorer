"use strict";

exports.__esModule = true;

var _fetch = require("../common/fetch");

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signIn: function signIn(data) {
    return (0, _fetch2.default)(_config2.default.signInApiUrl, {
      email: data.email.trim(),
      password: data.password,
      captcha: data.captcha
    });
  },
  requestPasswordToken: function requestPasswordToken(data) {
    return (0, _fetch2.default)(_config2.default.forgotPasswordUrl, {
      email: data.email.trim(),
      captcha: data.captcha
    });
  },
  resetPassword: function resetPassword(data) {
    return (0, _fetch2.default)(_config2.default.resetPasswordUrl, {
      email: data.email.trim(),
      resetCode: data.passcode.trim(),
      passwordToReset: data.password,
      captcha: data.captcha
      // TODO: Remove after login-proxy makes this optional
      // https://jira.walmart.com/browse/MSUS-607
      // confirmPassword: data.password
    });
  },
  forgotEmail: function forgotEmail(data) {
    return (0, _fetch2.default)(_config2.default.forgotEmailUrl, {
      membershipNumber: data.membershipNumber.trim(),
      lastName: data.lastName.trim(),
      captcha: data.captcha
    });
  }
};