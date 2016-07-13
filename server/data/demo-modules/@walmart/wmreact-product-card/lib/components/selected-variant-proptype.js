"use strict";

exports.__esModule = true;

var _react = require("react");

exports.default = _react.PropTypes.shape({
  name: _react.PropTypes.string.isRequired,
  isImageSwatch: _react.PropTypes.bool.isRequired,
  swatchImageUrl: _react.PropTypes.string
});