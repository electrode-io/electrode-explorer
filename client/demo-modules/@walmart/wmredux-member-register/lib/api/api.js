"use strict";

exports.__esModule = true;

var _fetch = require("../common/fetch");

var _fetch2 = _interopRequireDefault(_fetch);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  signUp: function signUp(data) {
    return (0, _fetch2.default)(_config2.default.signUpApiUrl, {
      email: data.email.trim(),
      password: data.password.trim(),
      membershipNumber: data.membershipNum.trim(),
      lastName: data.lastName.trim(),
      //TODO: Remove after login-proxy makes this optional
      emailNotificationAccepted: !!data.newsletter
    });
  },
  registerMembership: function registerMembership(data) {
    return (0, _fetch2.default)(_config2.default.registerMembershipUrl, {
      lastName: data.lastName.trim(),
      membershipNumber: data.membershipNum.trim()
    });
  }
};