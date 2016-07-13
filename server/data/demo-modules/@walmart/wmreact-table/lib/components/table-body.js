"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseClass = _react2.default.createClass({
  displayName: "BaseClass",

  propTypes: {
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    rowSpan: _react2.default.PropTypes.number,
    colSpan: _react2.default.PropTypes.number
  },
  render: function render() {
    return _react2.default.createElement(
      "tbody",
      { className: this.props.className },
      this.props.children
    );
  }
});

exports.default = BaseClass;