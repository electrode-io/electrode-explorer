"use strict";

exports.__esModule = true;
exports.getUserName = undefined;

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserName = exports.getUserName = function getUserName() {
  var cookieName = arguments.length <= 0 || arguments[0] === undefined ? "customer" : arguments[0];

  // By default "customer" is the cookie to get userName
  var cookieValue = JSON.parse(_electrodeCookies2.default.get(cookieName) || null);
  var userName = "";
  if (cookieValue) {
    userName = cookieValue.firstName || "Welcome back";
    // Convert user firstName in sentense case
    userName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();
  }
  return {
    type: _types.GET_USER_NAME,
    userName: userName
  };
};