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
 * Save Price component
 * Component will display the price with "Save" prefixed to it
 *
 * @class PriceSave
 * @component PriceSave
 * @exports PriceSave
 * @import {PriceSave}
 *
 * @param {string} currency - Currency can be either symbol or ISO code
 * @param {number} price - Price should be a number but can have more than 2 decimal places
 *
 * @example
 * ```jsx
 * <Price.Save currency="$" price={10.89} />
 * ```
 *
 * @playground
 * Save Price
 * ```
 * <Price.Save currency="$" price={10.89} />
 * ```
 * @param {object} props object with following properties className, currency, price, outOfStock.
 * @returns {ReactElement} A React Element
 */

var PriceSave = function PriceSave(props) {
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;
  var _props$price = props.price;
  var price = _props$price === undefined ? 0 : _props$price;
  var _props$type = props.type;
  var type = _props$type === undefined ? "Save" : _props$type;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var _props$outOfStock = props.outOfStock;
  var outOfStock = _props$outOfStock === undefined ? false : _props$outOfStock;
  var otherProperties = (0, _objectWithoutProperties3.default)(props, ["className", "price", "type", "currency", "outOfStock"]);


  var classes = (0, _classnames2.default)("Savings-price", "arrange-fill", "font-semibold", "copy-small", outOfStock ? "u-textGray" : "u-textRed", className);

  return _react2.default.createElement(
    "div",
    { className: classes },
    _react2.default.createElement(
      "span",
      { className: "Price-save-text" },
      type
    ),
    _react2.default.createElement(_priceBase2.default, (0, _extends3.default)({ price: price, currency: currency, outOfStock: outOfStock }, otherProperties, {
      className: "display-inline-block xxs-margin-left" }))
  );
};

PriceSave.propTypes = {
  /**
   * Custom classes for customizing the Save Price component
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
  "outOfStock": _react2.default.PropTypes.bool,
  /*
   * Any string to be prefixed to the price
   */
  "type": _react2.default.PropTypes.string
};

exports.default = PriceSave;