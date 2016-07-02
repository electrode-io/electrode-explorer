"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

require("es6-promise").polyfill();

var getAuthData = null;

if (_exenv2["default"].canUseDOM) {
  getAuthData = function () {
    return new Promise(function (resolve, reject) {
      (0, _isomorphicFetch2["default"])("http://localhost:3000/api/auth/status").then(function (res) {
        if (res.status >= 400) {
          reject();
        }
        return res.json();
      }).then(function (data) {
        resolve(data);
      })["catch"](function (e) {
        reject(e);
      });
    });
  };
} else {
  (function () {
    var authPlugin = require("@walmart/auth-plugin");
    getAuthData = function () {
      return new Promise(function (resolve) {
        resolve(authPlugin.getAuthData());
      });
    };
  })();
}

exports["default"] = getAuthData;
module.exports = exports["default"];