//TODO: Move cookie logic the electrode login proxy.
//Motivation is to keep all cooie logic central to a single layer
//in the architecture stack
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _lodashPick = require("lodash.pick");

var _lodashPick2 = _interopRequireDefault(_lodashPick);

var _lodashValues = require("lodash.values");

var _lodashValues2 = _interopRequireDefault(_lodashValues);

var COOKIE_DOMAIN = ".walmart.com";
var COOKIE_PATH = "/";
var KEY = "customer";
var WHITELIST = {
  firstName: "firstName",
  lastName: "lastName",
  emailAddress: "emailAddress"
};

exports["default"] = {
  setCache: function setCache() {
    var customer = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    customer = (0, _lodashPick2["default"])(customer, (0, _lodashValues2["default"])(WHITELIST));

    customer.firstName = customer.firstName || customer.email && customer.emailAddress.split("@")[0];

    _reactCookie2["default"].save(KEY, JSON.stringify(customer), {
      domain: COOKIE_DOMAIN, path: COOKIE_PATH
    });
  },

  getCache: function getCache() {
    return _reactCookie2["default"].load(KEY) || {};
  },

  clearCache: function clearCache() {
    return _reactCookie2["default"].remove(KEY);
  },

  getCustomerEmail: function getCustomerEmail() {
    return this.getCache()[WHITELIST.emailAddress];
  }
};
module.exports = exports["default"];