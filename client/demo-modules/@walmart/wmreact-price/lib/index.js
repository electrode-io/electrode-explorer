"use strict";

exports.__esModule = true;

var _price = require("./components/price");

Object.defineProperty(exports, "Price", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_price).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }