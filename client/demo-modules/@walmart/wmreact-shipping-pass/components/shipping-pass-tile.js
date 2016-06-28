"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._shippingPassEligible = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _shippingPass = require("../utils/shipping-pass");

var _automationUtils = require("@walmart/automation-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _shippingPassEligible = exports._shippingPassEligible = function _shippingPassEligible() {
  return (0, _shippingPass.isTargeted)() || (0, _shippingPass.isSubscribed)();
};

var ShippingPassTile = function ShippingPassTile(_ref) {
  var shippingPassEligible = _ref.shippingPassEligible;
  var dataAutomationId = _ref.dataAutomationId;

  if (shippingPassEligible()) {
    return _react2.default.createElement(
      "div",
      _extends({ className: "Tile-shippingPass"
      }, (0, _automationUtils.getDataAutomationIdPair)("shippingPass", dataAutomationId, process)),
      _react2.default.createElement("div", { className: "Tile-shippingPass-logo" }),
      _react2.default.createElement(
        "span",
        { className: "visuallyhidden" },
        "ShippingPass"
      )
    );
  }
  return _react2.default.createElement("div", null);
};

ShippingPassTile.displayName = "ShippingPassTile";

ShippingPassTile.propTypes = {
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string,
  shippingPassEligible: _react.PropTypes.func
};

ShippingPassTile.defaultProps = {
  dataAutomationId: "shipping-pass-tile",
  shippingPassEligible: _shippingPassEligible
};

exports.default = ShippingPassTile;