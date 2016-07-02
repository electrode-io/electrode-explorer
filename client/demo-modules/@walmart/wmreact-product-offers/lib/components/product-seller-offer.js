"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _automationUtils = require("@walmart/automation-utils");

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _productShippingPrice = require("./product-shipping-price");

var _productShippingPrice2 = _interopRequireDefault(_productShippingPrice);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHIPPING = "shipping";
var PICKUP = "pickup";
var AUTOMATION_CONTEXT = "ProductSellerOffer";

var _renderShippingPass = function _renderShippingPass(props) {
  var showPlus = props.showPlus;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("display-inline-block", { "display-block-m": isResponsive })
    }, (0, _automationUtils.getDataAutomationIdPair)("ShippingPass", AUTOMATION_CONTEXT, process)),
    _react2.default.createElement(_productShippingPrice2.default, {
      secondaryMessage: "2-day shipping",
      logo: "seller-offer-shipping-pass-logo",
      showPlus: showPlus,
      isResponsive: isResponsive
    })
  );
};

var _renderThresholdShippingText = function _renderThresholdShippingText(props) {
  var freeShippingThresholdPrice = props.freeShippingThresholdPrice;
  var showPlus = props.showPlus;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("display-inline-block", { "display-block-m": isResponsive })
    }, (0, _automationUtils.getDataAutomationIdPair)("ThresholdShippingText", AUTOMATION_CONTEXT, process)),
    _react2.default.createElement(_productShippingPrice2.default, {
      secondaryMessage: "shipping on orders",
      secondaryShippingPrice: freeShippingThresholdPrice,
      showPlus: showPlus
    })
  );
};

var _getPickupText = function _getPickupText(pickupToday) {
  return PICKUP + " " + (pickupToday ? " today" : "");
};

var _getShippingText = function _getShippingText(isFreight) {
  return SHIPPING + " " + (isFreight ? " surcharge" : "");
};

var _renderShippingPrice = function _renderShippingPrice(props) {
  var isFreight = props.isFreight;
  var shipPrice = props.shipPrice;
  var showPlus = props.showPlus;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("display-inline-block", { "display-block-m": isResponsive })
    }, (0, _automationUtils.getDataAutomationIdPair)("ShippingPrice", AUTOMATION_CONTEXT, process)),
    _react2.default.createElement(_productShippingPrice2.default, {
      primaryShippingPrice: shipPrice,
      secondaryMessage: _getShippingText(isFreight),
      showPlus: showPlus
    })
  );
};

var _renderPickUp = function _renderPickUp(props) {
  var pickupable = props.pickupable;
  var pickupToday = props.pickupToday;
  var showPlus = props.showPlus;

  if (pickupable) {
    return _react2.default.createElement(_productShippingPrice2.default, {
      secondaryMessage: _getPickupText(pickupToday),
      showPlus: showPlus
    });
  }
};

var _renderPrice = function _renderPrice(props) {
  var price = props.price;
  var currency = props.currency;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(_price2.default.Hero, (0, _extends3.default)({
      price: price,
      currency: currency
    }, (0, _automationUtils.getDataAutomationIdPair)("Price", AUTOMATION_CONTEXT, process), {
      className: (0, _classnames2.default)("prod-PriceHero seller-offer-l-price hide-content", { "display-block-m": isResponsive })
    })),
    _react2.default.createElement(_price2.default, {
      price: price,
      currency: currency,
      className: (0, _classnames2.default)("prod-PriceHero font-semibold seller-offer-sm-price", { "hide-content-m": isResponsive })
    })
  );
};

var _renderShippingPickup = function _renderShippingPickup(props) {
  var shippable = props.shippable;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("display-inline-block", { "display-block-m": isResponsive })
    }, (0, _automationUtils.getDataAutomationIdPair)("ShippingPickup", AUTOMATION_CONTEXT, process)),
    shippable ? _renderShippingPrice(props) : _renderPickUp(props)
  );
};

var _renderSubmap = function _renderSubmap(submapType) {
  var checkoutContent = submapType === "CHECKOUT";
  var submapTrigger = _react2.default.createElement(
    "span",
    { className: "HelpFlyout-trigger" },
    _react2.default.createElement("i", { className: "wmicon wmicon-help hide-content-max-m copy-mini" }),
    _react2.default.createElement(
      "span",
      { className: "hide-content-m font-normal help-text-trigger" },
      "Why?"
    )
  );
  return _react2.default.createElement(_price2.default.Submap, {
    message: "See price in cart",
    showFlyout: true,
    flyoutOnly: false,
    checkoutFlyout: checkoutContent,
    className: "display-inline",
    buttonTrigger: submapTrigger
  });
};

var _renderThresholdShipping = function _renderThresholdShipping(props) {
  var freeShippingThresholdPrice = props.freeShippingThresholdPrice;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("display-inline-block", { "display-block-m": isResponsive })
    }, (0, _automationUtils.getDataAutomationIdPair)("ThresholdShipping", AUTOMATION_CONTEXT, process)),
    freeShippingThresholdPrice ? _renderThresholdShippingText(props) : _renderShippingPickup(props)
  );
};

var ProductSellerOffer = function ProductSellerOffer(props) {
  var shippingPass = props.shippingPass;
  var className = props.className;
  var isResponsive = props.isResponsive;
  var submapType = props.submapType;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("prod-ProductOffer prod-SellerOffer display-inline-block", className, { "responsive-seller-offer": isResponsive })
    }, (0, _automationUtils.getDataAutomationIdPair)("SellerOffer", AUTOMATION_CONTEXT, process)),
    _react2.default.createElement(
      "div",
      { className: "seller-offer-sort-active display-inline-block" },
      typeof submapType !== "undefined" ? _renderSubmap(submapType) : _renderPrice(props),
      shippingPass ? _renderShippingPass(props) : _renderThresholdShipping(props)
    ),
    shippingPass ? _react2.default.createElement("div", { className: (0, _classnames2.default)("seller-offer-shipping-pass-logo logo-inline", { "hide-content-m": isResponsive }) }) : null
  );
};

ProductSellerOffer.propTypes = {
  /**
   * Product hero price
   */
  "price": _react2.default.PropTypes.number.isRequired,

  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */

  "currency": _react2.default.PropTypes.string,

  /**
  * Shipping price
  */
  "shippingPrice": _react2.default.PropTypes.number,

  /**
   * Flag when product is pickable
   */
  "pickupable": _react2.default.PropTypes.bool,

  /**
   * Flag when product is eligible for pickup today
   */
  "pickupToday": _react2.default.PropTypes.bool,

  /**
   * Price if product is threshold shipping eligible
   */
  "freeShippingThresholdPrice": _react2.default.PropTypes.number,

  /**
   * Flag when product is shippable
   */
  "shippable": _react2.default.PropTypes.bool,

  /**
   * Flag when product is eligible for Freight delivery
   */
  "isFreight": _react2.default.PropTypes.bool,

  /**
   * Flag when product is shipping pass eligible
   */
  "shippingPass": _react2.default.PropTypes.bool,

  /**
  * true if we have to show "+" before message
  */
  "showPlus": _react2.default.PropTypes.bool,

  /**
   Any additonal style classes
   */
  "className": _react2.default.PropTypes.string

};

ProductSellerOffer.defaultProps = {
  "currency": "$",
  "price": 0
};

exports.default = ProductSellerOffer;