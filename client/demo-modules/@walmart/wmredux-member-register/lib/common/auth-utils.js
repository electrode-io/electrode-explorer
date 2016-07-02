"use strict";

exports.__esModule = true;

var _reactCookie = require("react-cookie");

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY = "customer"; //TODO: Move cookie logic the electrode login proxy.
//Motivation is to keep all cookie logic central to a single layer
//in the architecture stack

var WHITELIST = {
  firstName: "firstName",
  lastName: "lastName",
  emailAddress: "emailAddress"
};

exports.default = {
  getCache: function getCache() {
    return _reactCookie2.default.load(KEY) || {};
  },
  clearCache: function clearCache() {
    return _reactCookie2.default.remove(KEY);
  },
  getCustomerEmail: function getCustomerEmail() {
    return this.getCache()[WHITELIST.emailAddress];
  },
  getCustomerFirstName: function getCustomerFirstName() {
    return this.getCache()[WHITELIST.firstName];
  },
  getCustomerLastName: function getCustomerLastName() {
    return this.getCache()[WHITELIST.lastName];
  }
};