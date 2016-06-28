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
    alt: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      alt: false
    };
  },
  render: function render() {
    var classes = [this.props.alt ? "table-header-alt" : "table-header", this.props.className];

    return _react2.default.createElement(
      "thead",
      { className: classes.join(" ") },
      _react2.default.createElement(
        "tr",
        null,
        this.props.children
      )
    );
  }
});

exports.default = BaseClass;