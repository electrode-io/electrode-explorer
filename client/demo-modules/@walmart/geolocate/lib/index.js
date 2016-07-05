"use strict";

exports.__esModule = true;

var _geolocate = require("./utils/geolocate");

Object.defineProperty(exports, "Geolocate", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_geolocate).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }