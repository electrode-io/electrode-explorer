"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require("react-redux");

var _wmreactAds = require("@walmart/wmreact-ads");

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var ads = _ref.ads;
  return { ads: ads };
})(_wmreactAds.Ads);