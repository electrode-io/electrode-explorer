"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _priceBase = require("./price-base");

var _priceBase2 = _interopRequireDefault(_priceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Old Price component
 * Component will display the passed in 'type' as a prefix to the given Price
 *
 * @class PriceOld
 * @component PriceOld
 * @exports PriceOld
 * @import {PriceOld}
 *
 * @param {string} currency - Currency can be either symbol or ISO code
 * @param {number} price - Price should be a number but can have more than 2 decimal places
 * @param {string} type - Type of pricing to be shown, i.e. any string value to be prefixed
 *
 * @example
 * ```jsx
 * <Price.Old currency="$" price={10.89} type="List"/>
 * ```
 *
 * @playground
 * List Price
 * ```
 * <Price.Old currency="$" price={10.89} type="List"/>
 * ```
 *
 * Was Price
 * ```
 * <Price.Old currency="$" price={10.89} type="Was"/>
 * ```
 * @param {object} props object with following properties className, currency,
 * price, type, outOfStock.
 * @returns {ReactElement} A React Element
 */

var PriceOld = function PriceOld(props) {
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;
  var _props$price = props.price;
  var price = _props$price === undefined ? 0 : _props$price;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var _props$type = props.type;
  var type = _props$type === undefined ? "Was" : _props$type;
  var outOfStock = props.outOfStock;
  var otherProperties = (0, _objectWithoutProperties3.default)(props, ["className", "price", "currency", "type", "outOfStock"]);


  var classes = (0, _classnames2.default)("Price-old", "display-inline-block", "arrange-fill", "font-semibold", outOfStock ? "u-textGray" : "u-textBlue", className);
  var priceOldTextClassName = props.type === "from" ? "Price-old-text sub" : "Price-old-text";
  return _react2.default.createElement(
    "div",
    { className: classes },
    _react2.default.createElement(
      "span",
      { className: priceOldTextClassName },
      type
    ),
    _react2.default.createElement(_priceBase2.default, (0, _extends3.default)({ price: price, currency: currency, type: type, outOfStock: outOfStock }, otherProperties, {
      className: "display-inline-block xxs-margin-left" }))
  );
};

PriceOld.propTypes = {
  /**
   * Custom classes for customizing the Old Price component
   */
  "className": _react2.default.PropTypes.string,
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  "currency": _react2.default.PropTypes.string.isRequired,
  /**
   * Price to display
   */
  "price": _react2.default.PropTypes.number.isRequired,
  /*
   * Any string to be prefixed to the price
   */
  "type": _react2.default.PropTypes.string.isRequired,
  /*
   * Show out of stock treatment?
   */
  "outOfStock": _react2.default.PropTypes.bool
};

exports.default = PriceOld;