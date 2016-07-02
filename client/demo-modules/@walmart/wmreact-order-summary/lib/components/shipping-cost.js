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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShippingCost = function (_React$Component) {
  (0, _inherits3.default)(ShippingCost, _React$Component);

  function ShippingCost() {
    (0, _classCallCheck3.default)(this, ShippingCost);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ShippingCost.prototype._getLabel = function _getLabel() {
    var _props = this.props;
    var label = _props.label;
    var noSuffix = _props.noSuffix;


    if (/shipping\s*pass/i.test(label)) {
      return _react2.default.createElement("span", { className: "OrderSummary-shippingPassLogo--green" });
    } else if (noSuffix) {
      return "" + label;
    } else {
      return label + " shipping";
    }
  };

  ShippingCost.prototype.render = function render() {
    var _props2 = this.props;
    var flyout = _props2.flyout;
    var className = _props2.className;
    var showFree = _props2.showFree;
    var automation = _props2.automation;
    var automationIndex = _props2.automationIndex;


    var shippingCostFlyout = void 0;
    if (flyout) {
      var flyoutLabel = _react2.default.createElement(
        _button2.default,
        { className: "flyout-trigger", fakelink: true },
        flyout.label
      );
      shippingCostFlyout = _react2.default.createElement(
        "div",
        { className: "OrderSummary-flyout OrderSummary-label-line2" },
        _react2.default.createElement(
          _flyout2.default,
          { direction: flyout.direction || "left", trigger: flyoutLabel },
          flyout.content
        )
      );
    }

    var componentClassName = (0, _classnames2.default)("OrderSummary-ShippingCost OrderSummary-line clearfix", className);

    var automationLabel = automation.label + "-" + automationIndex;
    var automationPrice = automation.price + "-" + automationIndex;

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      _react2.default.createElement(
        "span",
        { className: "OrderSummary-label", "data-automation-id": automationLabel },
        this._getLabel(),
        " ",
        shippingCostFlyout
      ),
      _react2.default.createElement(_price2.default, (0, _extends3.default)({}, this.props, { zeroAlt: showFree, automationId: automationPrice }))
    );
  };

  return ShippingCost;
}(_react2.default.Component);

ShippingCost.defaultProps = {
  className: "",
  label: "Shipping",
  price: 0,
  showFree: true,
  noSuffix: false,
  flyout: null,
  automationIndex: 0,
  automation: {
    label: "order-summary-shipping-type",
    price: "order-summary-shipping-price"
  }
};

ShippingCost.displayName = "OrderSummary.ShippingCost";

ShippingCost.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  price: _react.PropTypes.number,
  showFree: _react.PropTypes.bool,
  noSuffix: _react.PropTypes.bool,
  flyout: _react.PropTypes.shape({
    direction: _react.PropTypes.string,
    label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]).isRequired,
    content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]).isRequired
  }),
  automationIndex: _react.PropTypes.number,
  automation: _react.PropTypes.shape({
    label: _react.PropTypes.string,
    price: _react.PropTypes.string
  })
};

exports.default = ShippingCost;