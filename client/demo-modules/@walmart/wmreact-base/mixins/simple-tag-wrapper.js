"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapper = function wrapper(tagName, className) {
  return {
    render: function render() {
      var cloneProps = {};
      for (var k in this.props) {
        cloneProps[k] = this.props[k];
      }
      cloneProps.className = (0, _classnames2.default)(this.props.className, className);
      return _react2.default.createElement(tagName, cloneProps, this.props.children);
    }
  };
};

exports.default = wrapper;