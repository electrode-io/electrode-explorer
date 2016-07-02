"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _constantsAuthorization = require("../constants/authorization");

var _apiAuthorization = require("../api/authorization");

var _apiAuthorization2 = _interopRequireDefault(_apiAuthorization);

exports["default"] = {
  update: function update() {
    return function (dispatch) {
      (0, _apiAuthorization2["default"])().then(function (data) {
        dispatch(_extends({}, data, {
          type: _constantsAuthorization.UPDATE
        }));
      });
    };
  }
};
module.exports = exports["default"];