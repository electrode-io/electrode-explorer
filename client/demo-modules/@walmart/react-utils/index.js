"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isTouchDeviceUtils = require("./utils/is-touch-device-utils");

Object.defineProperty(exports, "isTouchDevice", {
  enumerable: true,
  get: function get() {
    return _isTouchDeviceUtils.isTouchDevice;
  }
});

var _urlUtils = require("./utils/url-utils");

Object.defineProperty(exports, "completeURL", {
  enumerable: true,
  get: function get() {
    return _urlUtils.completeURL;
  }
});