"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _commonFetch = require("../common/fetch");

var _commonFetch2 = _interopRequireDefault(_commonFetch);

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

exports["default"] = {
  signIn: function signIn(data) {
    return (0, _commonFetch2["default"])(_config2["default"].signInApiUrl, {
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        username: data.email,
        password: data.password
      })
    });
  },

  signUp: function signUp(data) {
    return (0, _commonFetch2["default"])(_config2["default"].signUpApiUrl, {
      credentials: "include",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify({
        personName: {
          firstName: data.firstName,
          lastName: data.firstName
        },
        email: data.email,
        password: data.password,
        confirmPassword: data.passwordConfirmation,
        emailNotificationAccepted: data.newsletter
      })
    });
  }
};
module.exports = exports["default"];