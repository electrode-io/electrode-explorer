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
The controls section of Tabber
@component Tabber.Controls
@import {Tabber}
@references Tabber
*/

var Controls = function (_React$Component) {
  (0, _inherits3.default)(Controls, _React$Component);

  function Controls() {
    (0, _classCallCheck3.default)(this, Controls);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Controls.prototype._addChildRefs = function _addChildRefs(control, i) {
    if (!control) {
      return null;
    }

    var self = this;
    return _react2.default.cloneElement(control, {
      ref: i,
      handleControlClick: function handleControlClick(event) {
        self.props.setActiveTab(i, event);
      },
      isActive: i === this.props.activeTab,
      activeTabClass: this.props.activeTabClass
    });
  };

  Controls.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.className, style: this.props.style },
      _react2.default.Children.map(this.props.children, this._addChildRefs, this)
    );
  };

  return Controls;
}(_react2.default.Component);

exports.default = Controls;


Controls.propTypes = {
  /**
  Event handler for setting the active tab
  */
  setActiveTab: _react2.default.PropTypes.func,
  /**
  The active tab number
  */
  activeTab: _react2.default.PropTypes.number,
  /**
  The CSS class to apply to the active tab
  */
  activeTabClass: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  style: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
};