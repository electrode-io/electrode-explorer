"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

exports["default"] = (0, _reactRedux.connect)(function (state) {
  return { products: state.products };
})(function (props) {
  return _react2["default"].createElement(
    "div",
    null,
    _react2["default"].Children.map(props.children, function (child) {
      return _react2["default"].cloneElement(child, props);
    })
  );
});
module.exports = exports["default"];