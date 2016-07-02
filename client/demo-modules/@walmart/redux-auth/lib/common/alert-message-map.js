"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require("./helpers");

exports["default"] = {
  /*eslint-disable camelcase*/
  user_auth_fail: {
    alertType: "error",
    message: (0, _helpers.i18n)("Your password and email address do not match.\n      Please try again or reset your password.")
  },
  generic: {
    alertType: "error",
    message: (0, _helpers.i18n)("Something went wrong with your request.\n      Please try again later.")
  },
  account_already_exist: {
    alertType: "error",
    message: (0, _helpers.i18n)("The email address you entered\n      is associated with another Walmart.com account.\n      Please sign in or use another email address")
  },
  validation_fail: {
    alertType: "error",
    message: "Please correct the errors below"
  },
  /*eslint-enable camelcase*/

  getAlert: function getAlert(key) {
    return this[key] || this.generic;
  }
};
module.exports = exports["default"];