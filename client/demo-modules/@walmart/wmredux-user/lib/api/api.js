"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fetch = require("../common/fetch");

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signIn: function signIn(data) {
    return (0, _fetch2.default)(_config2.default.signInApiUrl, {
      username: data.email.trim(),
      password: data.password,
      captcha: data.captcha,
      rememberme: data.rememberme
    });
  },
  signUp: function signUp(data) {
    return (0, _fetch2.default)(_config2.default.signUpApiUrl, {
      personName: {
        firstName: data.firstName,
        lastName: data.lastName
      },
      email: data.email.trim(),
      password: data.password,
      //TODO: Remove after login-proxy makes this optional
      confirmPassword: data.password,
      emailNotificationAccepted: !!data.newsletter
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
      passcode: data.passcode.trim(),
      password: data.password,
      captcha: data.captcha,
      //TODO: Remove after login-proxy makes this optional
      confirmPassword: data.password
    });
  }
};