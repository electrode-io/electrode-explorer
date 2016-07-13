"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.PropTypes.shape({
  type: _react2.default.PropTypes.string.isRequired,
  text: _react2.default.PropTypes.string.isRequired
});