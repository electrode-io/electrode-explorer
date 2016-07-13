"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Product Shipping Price component
 *
 * Component used to display shipping price message
 * Usage can be explored at @playground
 *
 * <ProductShippingPrice
 *  primaryShippingPrice={100}
 *  logo="seller-offer-shipping-pass-logo"
 *  secondaryMessage="shipping"
 *  currency="$"
 *  secondaryShippingPrice={123}
 *  showPlus={true}
 * />
 *
 */

var _renderShippingPass = function _renderShippingPass(logo) {
  return _react2.default.createElement("div", { className: (0, _classnames2.default)(logo) });
};

var _renderShippingPrice = function _renderShippingPrice(props) {
  var primaryShippingPrice = props.primaryShippingPrice;
  var currency = props.currency;

  return _react2.default.createElement(
    "span",
    null,
    _react2.default.createElement(_price2.default, { currency: currency, price: primaryShippingPrice,
      showMantissa: true, className: "xxs-margin-left price" })
  );
};

var _renderFreeMessage = function _renderFreeMessage() {
  return _react2.default.createElement(
    "span",
    { className: "font-semibold" },
    "FREE"
  );
};

var _renderPrimaryMessage = function _renderPrimaryMessage(props) {
  var primaryShippingPrice = props.primaryShippingPrice;

  return _react2.default.createElement(
    "span",
    null,
    " ",
    primaryShippingPrice ? _renderShippingPrice(props) : _renderFreeMessage()
  );
};

var _renderSecondaryMessage = function _renderSecondaryMessage(props) {
  var secondaryMessage = props.secondaryMessage;
  var currency = props.currency;
  var secondaryShippingPrice = props.secondaryShippingPrice;

  return _react2.default.createElement(
    "span",
    { className: "shipping-msg xxs-margin-left secondaryMessage" },
    secondaryMessage,
    " ",
    secondaryShippingPrice ? "+" : null,
    secondaryShippingPrice ? _react2.default.createElement(_price2.default, { currency: currency, price: secondaryShippingPrice,
      showMantissa: false }) : null
  );
};

var ProductShippingPrice = function ProductShippingPrice(props) {
  var logo = props.logo;
  var className = props.className;
  var showPlus = props.showPlus;
  var isResponsive = props.isResponsive;

  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("product-shipping-price display-inline-block", className, { "responsive-shipping-price display-block-m": isResponsive }) },
    _react2.default.createElement(
      "span",
      { className: "plus" },
      showPlus ? "+" : null
    ),
    _renderPrimaryMessage(props),
    _renderSecondaryMessage(props),
    _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("hide-content", className, { "display-inline-block-m": isResponsive }) },
      _renderShippingPass(logo)
    )
  );
};

ProductShippingPrice.propTypes = {
  /**
  * This is shipping price
  */
  "primaryShippingPrice": _react2.default.PropTypes.number,

  /**
  * This is secondary shipping message
  */
  "secondaryMessage": _react2.default.PropTypes.string,

  /**
  * logo to be displayed
  */
  "logo": _react2.default.PropTypes.string,

  /**
  * Currency to fed in as currency symbols
  * Can also use the ISO code for currency, but will not be translated to currency symbol
  */
  "currency": _react2.default.PropTypes.string,

  /**
  * Price if we have any for secondary message
  */
  "secondaryShippingPrice": _react2.default.PropTypes.number,

  /**
  * true if we have to show "+" before message
  */
  "showPlus": _react2.default.PropTypes.bool,

  /**
  * Any additonal style classes
  */
  "className": _react2.default.PropTypes.string

};

exports.default = ProductShippingPrice;