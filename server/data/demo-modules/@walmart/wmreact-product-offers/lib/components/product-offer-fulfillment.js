"use strict";

exports.__esModule = true;
exports.COMPONENT_CLASSES = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _productHelpFlyoutButton = require("@walmart/wmreact-product-buttons/lib/components/product-help-flyout-button");

var _productHelpFlyoutButton2 = _interopRequireDefault(_productHelpFlyoutButton);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPONENT_CLASSES = exports.COMPONENT_CLASSES = ["prod-BorderedContainer", "prod-OfferFulfillment"];

/**
 The offer fulfillment section. Displays
 - shipping pass (todo: this needs to be implemented)
 - shipping info
 -pickup info

 For example this is how we use this component.

 ```jsx
 <ProductOfferFulfillment shippable={true}
 pickupable={true}
 pickupToday={true}
 freeShippingThresholdPrice="$35"/>
 ```

 @import {ProductOfferFulfillment}
 @flags noVisibleRender
 @component ProductOfferFulfillment
 @playground
 ProductOfferFulfillment
 ```
 <ProductOfferFulfillment shippable={true}
 pickupable={true}
 pickupToday={true}
 freeShippingThresholdPrice="$35"/>
 ```
 */

var ProductOfferFulfillment = function (_Component) {
  (0, _inherits3.default)(ProductOfferFulfillment, _Component);

  function ProductOfferFulfillment() {
    (0, _classCallCheck3.default)(this, ProductOfferFulfillment);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ProductOfferFulfillment.prototype._getPriceClassNames = function _getPriceClassNames() {
    var isBelowSmall = _clientWidth2.default.isBelowBreakPoint("small");
    return (0, _classnames2.default)("display-inline-block-xs", "prod-ShowRightBorder--xs", "prod-MarginRight--xs", {
      "prod-PaddingRight--xs": !isBelowSmall,
      "copy-small": !isBelowSmall,
      "copy-mini": isBelowSmall
    });
  };

  ProductOfferFulfillment.prototype._getHelpIconClasses = function _getHelpIconClasses() {
    return (0, _classnames2.default)("wmicon", "wmicon-help", "u-textBlue", "font-normal", "copy-mini");
  };

  ProductOfferFulfillment.prototype._renderHelpText = function _renderHelpText() {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "span",
        null,
        "If your order totals"
      ),
      _react2.default.createElement(_price2.default, { currency: this.props.currency, price: this.props.freeShippingThresholdPrice,
        showMantissa: false, className: "xxs-margin-left" }),
      _react2.default.createElement(
        "span",
        { className: "xxs-margin-left" },
        "or more and you select Value shipping, this item and any other qualifying items ship for free!"
      )
    );
  };

  ProductOfferFulfillment.prototype._renderHelpFlyout = function _renderHelpFlyout() {
    if (this.props.freeShippingThresholdPrice) {
      return _react2.default.createElement(_productHelpFlyoutButton2.default, {
        className: "xxs-margin-left",
        helpIconsClass: this._getHelpIconClasses(),
        flyoutSize: "wide",
        content: this._renderHelpText() });
    }
  };

  ProductOfferFulfillment.prototype._renderFreeShippingThresholdPrice = function _renderFreeShippingThresholdPrice() {
    if (this.props.freeShippingThresholdPrice) {
      return _react2.default.createElement(
        "span",
        { className: "xxs-margin-left prod-OfferFulfillment-threshold" },
        _react2.default.createElement(
          "span",
          null,
          "on orders"
        ),
        _react2.default.createElement(_price2.default, { currency: this.props.currency, price: this.props.freeShippingThresholdPrice,
          showMantissa: false, className: "xxs-margin-left" }),
        "+"
      );
    }
  };

  ProductOfferFulfillment.prototype._renderFulfillmentComp = function _renderFulfillmentComp(primaryText, secondaryText) {
    var priceClassNames = (0, _classnames2.default)(this._getPriceClassNames(), "prod-OfferFulfillment-freeShipping");
    var freeShippingThresholdPrice = this.props.freeShippingThresholdPrice;

    var shippingLabel = freeShippingThresholdPrice ? primaryText : "+ " + primaryText;
    return _react2.default.createElement(
      "span",
      { className: priceClassNames },
      _react2.default.createElement(
        "span",
        { className: "font-semibold" },
        shippingLabel
      ),
      _react2.default.createElement(
        "span",
        null,
        " " + secondaryText
      ),
      this._renderFreeShippingThresholdPrice(),
      this._renderHelpFlyout()
    );
  };

  ProductOfferFulfillment.prototype._renderShippingComp = function _renderShippingComp() {
    var _props = this.props;
    var shippable = _props.shippable;
    var shippingPrice = _props.shippingPrice;
    var currency = _props.currency;

    if (shippable) {
      if (shippingPrice > 0) {
        var priceClassNames = (0, _classnames2.default)(this._getPriceClassNames(), "prod-OfferFulfillment-paidShipping");
        return _react2.default.createElement(
          "span",
          { className: priceClassNames },
          _react2.default.createElement(
            "span",
            { className: "font-semibold" },
            "+ "
          ),
          _react2.default.createElement(_price2.default, { currency: currency, price: shippingPrice,
            className: "xxs-margin-left font-semibold" }),
          " shipping"
        );
      }

      var primaryText = "FREE";
      var secondaryText = "shipping";
      return this._renderFulfillmentComp(primaryText, secondaryText);
    }
  };

  ProductOfferFulfillment.prototype._renderPickupComp = function _renderPickupComp() {
    var _props2 = this.props;
    var shippable = _props2.shippable;
    var pickupable = _props2.pickupable;

    if (!shippable && pickupable) {
      var priceClassNames = (0, _classnames2.default)(this._getPriceClassNames(), "prod-OfferFulfillment-pickup");
      var primaryText = "FREE";
      var secondaryText = "pickup";

      if (this.props.pickupToday) {
        secondaryText += " today";
      }

      return _react2.default.createElement(
        "span",
        { className: priceClassNames },
        _react2.default.createElement(
          "span",
          { className: "font-semibold" },
          "+ " + primaryText
        ),
        _react2.default.createElement(
          "span",
          null,
          " " + secondaryText
        )
      );
    }
  };

  ProductOfferFulfillment.prototype.render = function render() {
    var className = this.props.className;

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)(COMPONENT_CLASSES, className) },
      this._renderShippingComp(),
      this._renderPickupComp()
    );
  };

  return ProductOfferFulfillment;
}(_react.Component);

exports.default = ProductOfferFulfillment;


ProductOfferFulfillment.displayName = "ProductOfferFulfillment";

ProductOfferFulfillment.propTypes = {
  /**
   * Flag that determines if the product is shippable
   */
  "shippable": _react.PropTypes.bool,
  /**
   * Flag that determines if the product is pickupable
   */
  "pickupable": _react.PropTypes.bool,
  /**
   * Flag that determines if the product is pickupable today
   */
  "pickupToday": _react.PropTypes.bool,
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  "currency": _react.PropTypes.string,
  /**
   * The shipping threshold price
   */
  "freeShippingThresholdPrice": _react.PropTypes.number,
  /**
   * Any additional css classes that needs to be applied to the root element
   */
  "className": _react.PropTypes.string,
  /**
   * Shipping price, default value is 0, indicating its free shipping.
  */
  shippingPrice: _react.PropTypes.number
};

ProductOfferFulfillment.defaultProps = {
  shippable: false,
  pickupable: false,
  pickupToday: false,
  shippingPrice: 0,
  currency: "$",
  className: ""
};