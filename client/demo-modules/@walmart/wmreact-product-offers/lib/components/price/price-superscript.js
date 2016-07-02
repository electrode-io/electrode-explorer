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
 * Superscript Price component
 * Component displays both currency and the mantissa part as a superscript in relation to the
 * characteristic part of Price
 *
 * @class PriceSuperscript
 * @component PriceSuperscript
 * @exports PriceSuperscript
 * @import {PriceSuperscript}
 *
 * @param {string} currency - Currency can be either symbol or ISO code
 * @param {number} price - Price should be a number but can have more than 2 decimal places
 *
 * @example
 * ```jsx
 * <Price.Sup currency="$" price={10.89} />
 * ```
 *
 * @playground
 * Superscript Price
 * ```
 * <Price.Sup currency="$" price={10.89} />
 * ```
 * @param {object} props object with following properties className, currency, price, outOfStock.
 * @returns {ReactElement} A React Element
 */

var PriceSup = function PriceSup(props) {
  var _props$price = props.price;
  var price = _props$price === undefined ? 0 : _props$price;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var outOfStock = props.outOfStock;
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;
  var otherProperties = (0, _objectWithoutProperties3.default)(props, ["price", "currency", "outOfStock", "className"]);


  var classes = (0, _classnames2.default)("display-inline-block", "arrange-fit", "Price", "Price--stylized", outOfStock ? "u-textGray" : "u-textBlue", className);

  return _react2.default.createElement(_priceBase2.default, (0, _extends3.default)({ price: price, currency: currency, outOfStock: outOfStock }, otherProperties, { className: classes }));
};

PriceSup.propTypes = {
  /**
   * Custom classes for customizing the Superscript Price component
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
   * Show out of stock treatment?
   */
  "outOfStock": _react2.default.PropTypes.bool
};

exports.default = PriceSup;