"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _price = require("./price");

var _price2 = _interopRequireDefault(_price);

var _priceRange = require("./price-range");

var _priceRange2 = _interopRequireDefault(_priceRange);

var _automationUtils = require("@walmart/automation-utils");

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _priceTypes = require("../enums/price-types");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTOMATION_CONTEXT = "ProductOffer";

/**
 The secondary pricing component. Used for things like
 List price, was price, savings price etc..
 For example this is how we use this component.
 ```jsx
  <ProductSecondaryPrice currency="$" type="Was" oldPrice={55.99} savePrice={10.99} />
 ```
 @import {ProductSecondaryPrice}
 @flags noVisibleRender
 @component ProductSecondaryPrice
 @playground
 ProductSecondaryPrice
 ```
 <ProductSecondaryPrice currency="$" type="Was" oldPrice={55.99} savePrice={10.99} />
 ```
 */

var _renderPriceRangeComp = function _renderPriceRangeComp(_ref) {
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? "Was" : _ref$type;
  var _ref$currency = _ref.currency;
  var currency = _ref$currency === undefined ? "$" : _ref$currency;
  var minOldPrice = _ref.minOldPrice;
  var maxOldPrice = _ref.maxOldPrice;
  var _ref$outOfStock = _ref.outOfStock;
  var outOfStock = _ref$outOfStock === undefined ? false : _ref$outOfStock;

  return _react2.default.createElement(_priceRange2.default, (0, _extends3.default)({
    className: "display-inline",
    type: _priceTypes.OLD,
    typeLabel: type,
    minPrice: minOldPrice,
    maxPrice: maxOldPrice
  }, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, "WasPrice", process), { currency: currency, outOfStock: outOfStock }));
};

var _renderPriceComp = function _renderPriceComp(_ref2) {
  var _ref2$type = _ref2.type;
  var type = _ref2$type === undefined ? "Was" : _ref2$type;
  var _ref2$currency = _ref2.currency;
  var currency = _ref2$currency === undefined ? "$" : _ref2$currency;
  var oldPrice = _ref2.oldPrice;
  var _ref2$outOfStock = _ref2.outOfStock;
  var outOfStock = _ref2$outOfStock === undefined ? false : _ref2$outOfStock;

  return _react2.default.createElement(_price2.default.Old, (0, _extends3.default)({
    className: "display-inline",
    price: oldPrice
  }, { type: type, currency: currency, outOfStock: outOfStock }, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, "WasPrice", process)));
};

var ProductSecondaryPrice = function ProductSecondaryPrice(props) {
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;
  var _props$displayRange = props.displayRange;
  var displayRange = _props$displayRange === undefined ? false : _props$displayRange;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var outOfStock = props.outOfStock;
  var _props$savePrice = props.savePrice;
  var savePrice = _props$savePrice === undefined ? 0 : _props$savePrice;

  var isBelowSmall = _clientWidth2.default.isBelowBreakPoint("small");
  var extras = {
    "prod-PaddingTop--xs": isBelowSmall && !displayRange
  };
  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)(className, extras) },
    displayRange ? _renderPriceRangeComp(props) : _renderPriceComp(props),
    !displayRange && _react2.default.createElement(_price2.default.Save, (0, _extends3.default)({
      currency: currency,
      price: savePrice,
      outOfStock: outOfStock,
      className: "display-inline s-margin-left"
    }, (0, _automationUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, "SavePrice", process)))
  );
};

ProductSecondaryPrice.propTypes = {
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  "currency": _react.PropTypes.string.isRequired,
  /**
    Boolean to determine if we display price as a range or standalone price
  */
  displayRange: _react.PropTypes.bool,
  /**
   The label of secondary price.
   */
  "type": _react.PropTypes.string.isRequired,
  /**
   * Old Price to display
   */
  "oldPrice": _react.PropTypes.number.isRequired,
  /**
   * Old Price to display
   */
  "minOldPrice": _react.PropTypes.number,
  /**
   * Old Price to display
   */
  "maxOldPrice": _react.PropTypes.number,
  /**
   * Save Price to display
   */
  "savePrice": _react.PropTypes.number.isRequired,
  /**
   * Is it Out of stock?
   */
  "outOfStock": _react.PropTypes.bool,
  /**
   * Custom classes for customizing this component
   */
  "className": _react.PropTypes.string
};

exports.default = ProductSecondaryPrice;