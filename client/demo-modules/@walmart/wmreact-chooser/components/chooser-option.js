"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _radonSelect = require("radon-select");

var _radonSelect2 = _interopRequireDefault(_radonSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A chooser option
@import Chooser
@component Chooser.Option
@references Chooser
*/
exports.default = _react2.default.createClass({
  displayName: "Chooser.Option",

  propTypes: {
    // TODO: Disabled
    /**
    The value of the option
    */
    value: _react2.default.PropTypes.string.isRequired,
    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]).isRequired
  },

  getInitialState: function getInitialState() {
    return {
      hovered: false
    };
  },
  setHover: function setHover(isHover) {
    this.setState({
      hovered: isHover
    });
  },
  render: function render() {
    return _react2.default.createElement(_radonSelect2.default.Option, _extends({}, this.props, {
      className: "chooser-option",
      activeClassName: "active",
      hoverClassName: "active" }));
  }
});