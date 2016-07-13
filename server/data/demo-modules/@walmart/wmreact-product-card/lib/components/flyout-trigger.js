"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@private
*/

var FlyoutTrigger = function (_Component) {
  (0, _inherits3.default)(FlyoutTrigger, _Component);

  function FlyoutTrigger() {
    (0, _classCallCheck3.default)(this, FlyoutTrigger);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  FlyoutTrigger.prototype.render = function render() {
    return _react2.default.createElement(
      "button",
      (0, _extends3.default)({ className: "flyout-trigger",
        type: "button" }, this.props),
      _react2.default.createElement(_icon2.default, { name: "add", size: 0 })
    );
  };

  return FlyoutTrigger;
}(_react.Component);

exports.default = FlyoutTrigger;