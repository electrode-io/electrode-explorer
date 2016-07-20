"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _header = require("../src/components/header");

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(_header.Header, { searchExposed: true, quimbyData: _data.quimbyData });