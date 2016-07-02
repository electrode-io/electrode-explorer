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

var _subTotal = require("./sub-total");

var _subTotal2 = _interopRequireDefault(_subTotal);

var _lineItem = require("./line-item");

var _lineItem2 = _interopRequireDefault(_lineItem);

var _shippingCost = require("./shipping-cost");

var _shippingCost2 = _interopRequireDefault(_shippingCost);

var _genericFee = require("./generic-fee");

var _genericFee2 = _interopRequireDefault(_genericFee);

var _tax = require("./tax");

var _tax2 = _interopRequireDefault(_tax);

var _grandTotal = require("./grand-total");

var _grandTotal2 = _interopRequireDefault(_grandTotal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderSummary = function (_React$Component) {
  (0, _inherits3.default)(OrderSummary, _React$Component);

  function OrderSummary() {
    (0, _classCallCheck3.default)(this, OrderSummary);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  OrderSummary.prototype._getLineItems = function _getLineItems() {
    var lineItems = this.props.lineItems;

    return lineItems || [];
  };

  OrderSummary.prototype._getShippingCosts = function _getShippingCosts() {
    var _props = this.props;
    var shippingCosts = _props.shippingCosts;
    var lineItems = _props.lineItems;

    if (shippingCosts && shippingCosts.length <= 0 && (!lineItems || lineItems.length <= 0)) {
      return [{ label: "Shipping", price: 0, showFree: false }];
    } else {
      return shippingCosts || [];
    }
  };

  OrderSummary.prototype._getGenericFees = function _getGenericFees() {
    var genericFees = this.props.genericFees;

    if (genericFees) {
      return genericFees;
    } else {
      return [];
    }
  };

  OrderSummary.prototype._getGrandTotal = function _getGrandTotal() {
    var _props2 = this.props;
    var grandTotal = _props2.grandTotal;
    var subTotal = _props2.subTotal;
    var taxTotal = _props2.taxTotal;


    if (grandTotal !== null && grandTotal !== undefined) {
      return grandTotal;
    } else {
      var sumCost = function sumCost(total, cost) {
        return total + cost.price;
      };
      return subTotal + this._getLineItems().reduce(sumCost, 0) + this._getShippingCosts().reduce(sumCost, 0) + this._getGenericFees().reduce(sumCost, 0) + taxTotal;
    }
  };

  OrderSummary.prototype._getAutomationIndex = function _getAutomationIndex(item, index) {
    if (item.automationIndex === null || item.automationIndex === undefined) {
      return index;
    } else {
      return item.automationIndex;
    }
  };

  OrderSummary.prototype._renderSubTotal = function _renderSubTotal() {
    var _props3 = this.props;
    var automation = _props3.automation;
    var tealeaf = _props3.tealeaf;

    return _react2.default.createElement(_subTotal2.default, (0, _extends3.default)({}, this.props, { automation: automation.subtotal, tealeaf: tealeaf.subtotal }));
  };

  OrderSummary.prototype._renderLineItems = function _renderLineItems() {
    var _this2 = this;

    return this._getLineItems().map(function (lineItem, index) {
      return _react2.default.createElement(_lineItem2.default, (0, _extends3.default)({}, _this2.props, lineItem, { key: index,
        automation: lineItem.automation,
        automationIndex: _this2._getAutomationIndex(lineItem, index) }));
    });
  };

  OrderSummary.prototype._renderShippingCosts = function _renderShippingCosts() {
    var _this3 = this;

    return this._getShippingCosts().map(function (shippingCost, index) {
      return _react2.default.createElement(_shippingCost2.default, (0, _extends3.default)({}, _this3.props, shippingCost, { key: index,
        automation: shippingCost.automation,
        automationIndex: _this3._getAutomationIndex(shippingCost, index) }));
    });
  };

  OrderSummary.prototype._renderGenericFees = function _renderGenericFees() {
    var _this4 = this;

    return this._getGenericFees().map(function (genericFee, index) {
      return _react2.default.createElement(_genericFee2.default, (0, _extends3.default)({}, _this4.props, genericFee, { key: index,
        automation: genericFee.automation,
        automationIndex: _this4._getAutomationIndex(genericFee, index) }));
    });
  };

  OrderSummary.prototype._renderTax = function _renderTax() {
    var _props4 = this.props;
    var automation = _props4.automation;
    var tealeaf = _props4.tealeaf;

    return _react2.default.createElement(_tax2.default, (0, _extends3.default)({}, this.props, { automation: automation.tax, tealeaf: tealeaf.tax }));
  };

  OrderSummary.prototype._renderGrandTotal = function _renderGrandTotal() {
    var automation = this.props.automation;

    return _react2.default.createElement(_grandTotal2.default, (0, _extends3.default)({}, this.props, { grandTotal: this._getGrandTotal(),
      automation: automation.grandTotal }));
  };

  OrderSummary.prototype.render = function render() {
    var className = this.props.className;

    var componentClassName = (0, _classnames2.default)("OrderSummary", className);

    return _react2.default.createElement(
      "div",
      { className: componentClassName },
      this._renderSubTotal(),
      this._renderLineItems(),
      this._renderShippingCosts(),
      this._renderGenericFees(),
      this._renderTax(),
      this._renderGrandTotal()
    );
  };

  return OrderSummary;
}(_react2.default.Component);

OrderSummary.defaultProps = {
  className: "",
  subTotal: 0,
  lineItems: [],
  shippingCosts: [],
  genericFees: [],
  taxTotal: 0,
  grandTotal: null,
  automation: {},
  tealeaf: {}
};

OrderSummary.displayName = "OrderSummary";

OrderSummary.propTypes = {
  className: _react.PropTypes.string,
  subTotal: _react.PropTypes.number,
  lineItems: _react.PropTypes.arrayOf(_react.PropTypes.shape(_lineItem2.default.propTypes)),
  shippingCosts: _react.PropTypes.arrayOf(_react.PropTypes.shape(_shippingCost2.default.propTypes)),
  genericFees: _react.PropTypes.arrayOf(_react.PropTypes.shape(_genericFee2.default.propTypes)),
  taxTotal: _react.PropTypes.number,
  grandTotal: _react.PropTypes.number,
  automation: _react.PropTypes.shape({
    subtotal: _subTotal2.default.propTypes.automation,
    tax: _tax2.default.propTypes.automation,
    grandTotal: _grandTotal2.default.propTypes.automation
  }),
  tealeaf: _react.PropTypes.shape({
    subtotal: _subTotal2.default.propTypes.tealeaf,
    tax: _tax2.default.propTypes.automation
  })
};

exports.default = OrderSummary;