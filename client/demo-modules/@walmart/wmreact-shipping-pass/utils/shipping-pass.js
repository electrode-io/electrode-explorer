"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNonTargeted = exports.isTargeted = exports.isSubscribed = undefined;

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// By default "SP" is the cookie to get shipping pass
var shippingPassValue = _electrodeCookies2.default.get("SP");

var isSubscribed = exports.isSubscribed = function isSubscribed() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? shippingPassValue : arguments[0];

  return value === "s";
};

var isTargeted = exports.isTargeted = function isTargeted() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? shippingPassValue : arguments[0];

  return value === "t";
};

var isNonTargeted = exports.isNonTargeted = function isNonTargeted() {
  var value = arguments.length <= 0 || arguments[0] === undefined ? shippingPassValue : arguments[0];

  return value === "n";
};