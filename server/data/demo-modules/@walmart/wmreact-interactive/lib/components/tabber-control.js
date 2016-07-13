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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
The control for a Tabber
@component Tabber.Control
@import {Tabber}
@references Tabber
*/

var Control = function (_React$Component) {
  (0, _inherits3.default)(Control, _React$Component);

  function Control() {
    (0, _classCallCheck3.default)(this, Control);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Control.prototype.render = function render() {
    var child = this.props.children;

    var activeClassNames = {};

    activeClassNames[this.props.activeTabClass] = this.props.isActive;

    return _react2.default.cloneElement(child, {
      onClick: this.props.handleControlClick,
      className: (0, _classnames2.default)(child.props.className, activeClassNames)
    });
  };

  return Control;
}(_react2.default.Component);

exports.default = Control;


Control.propTypes = {
  children: _react2.default.PropTypes.node,
  activeTabClass: _react2.default.PropTypes.string,
  isActive: _react2.default.PropTypes.bool,
  handleControlClick: _react2.default.PropTypes.func
};