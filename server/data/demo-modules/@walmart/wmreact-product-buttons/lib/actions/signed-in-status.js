"use strict";

exports.__esModule = true;
exports.getSignInStatus = undefined;

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSignInStatus = exports.getSignInStatus = function getSignInStatus() {
  var cookieName = arguments.length <= 0 || arguments[0] === undefined ? "hasCID" : arguments[0];

  var cookieValue = _electrodeCookies2.default.get(cookieName);
  return {
    type: "SIGN_IN_STATUS",
    isSignedIn: cookieValue === "1"
  };
};