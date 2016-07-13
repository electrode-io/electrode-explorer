"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A child section of a Tabber
@component Tabber.Controls
@import {Tabber}
@references Tabber
*/

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Section.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      this.props,
      this.props.children
    );
  };

  return Section;
}(_react2.default.Component);

exports.default = Section;


Section.propTypes = {
  children: _react2.default.PropTypes.node
};