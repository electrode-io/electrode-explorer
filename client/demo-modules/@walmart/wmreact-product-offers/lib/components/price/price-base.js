"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _priceFormatter = require("../../utils/price-formatter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base Price component
 * Component uses Price Formatter to format the passed in price into the following components:
 * - Characteristic part
 * - Mantissa part
 * Also takes in a currency to display as a prefix to the actual price display
 *
 * Note: If an invalid prop is passed in for price, the component will not render
 *
 * @class Price
 * @component Price
 * @exports Price
 * @import {Price}
 *
 * @param {string} currency - Currency can be either symbol or ISO code
 * @param {number} price - Price should be a number but can have more than 2 decimal places
 *
 * @example
 * ```jsx
 * <Price currency="$" price={10.89} />
 * ```
 *
 * @playground
 * Price
 * ```
 * <Price currency="$" price={10.89} />
 * ```
 * @param {object} props object with following properties className, currency, price,
    showMantissa, useComma.
 * @returns {ReactElement} A React Element
 */

var Price = function Price(props) {
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var _props$price = props.price;
  var price = _props$price === undefined ? 0 : _props$price;
  var _props$showMantissa = props.showMantissa;
  var showMantissa = _props$showMantissa === undefined ? true : _props$showMantissa;
  var useComma = props.useComma;
  var _props$ppu = props.ppu;
  var ppu = _props$ppu === undefined ? false : _props$ppu;
  var rest = (0, _objectWithoutProperties3.default)(props, ["className", "currency", "price", "showMantissa", "useComma", "ppu"]);


  var mainPriceComponent = void 0;

  var _getFormattedPrice = (0, _priceFormatter.getFormattedPrice)(price, { useComma: useComma });

  var characteristic = _getFormattedPrice.characteristic;
  var mantissa = _getFormattedPrice.mantissa;

  if ((0, _isNumber2.default)(price)) {
    if (ppu && characteristic === "0") {
      // if PPU and ppu price less than a dollar
      var formattedPPUPrice = (0, _priceFormatter.formatPPU)(price);
      mainPriceComponent = _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "span",
          { className: "Price-characteristic" },
          formattedPPUPrice.characteristic
        ),
        _react2.default.createElement(
          "span",
          { className: (0, _classnames2.default)("Price-mark", { "hide-content": !showMantissa }) },
          "."
        ),
        _react2.default.createElement(
          "span",
          { className: (0, _classnames2.default)("Price-mantissa", { "hide-content": !showMantissa }) },
          formattedPPUPrice.mantissa
        ),
        _react2.default.createElement(
          "span",
          { className: "Price-currency" },
          "¢"
        )
      );
    } else {
      mainPriceComponent = _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          "span",
          { className: "Price-currency" },
          currency
        ),
        _react2.default.createElement(
          "span",
          { className: "Price-characteristic" },
          characteristic
        ),
        _react2.default.createElement(
          "span",
          { className: (0, _classnames2.default)("Price-mark", { "hide-content": !showMantissa }) },
          "."
        ),
        _react2.default.createElement(
          "span",
          { className: (0, _classnames2.default)("Price-mantissa", { "hide-content": !showMantissa }) },
          mantissa
        )
      );
    }
  }

  return _react2.default.createElement(
    "span",
    (0, _extends3.default)({ className: className }, rest),
    mainPriceComponent
  );
};

Price.propTypes = {
  /**
   * Custom classes for customizing the Base Price component
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
  /**
   * Should the Mantissa part be displayed?
   */
  "showMantissa": _react2.default.PropTypes.bool,
  /**
   * Should the price be formatted with commas?
   */
  "useComma": _react2.default.PropTypes.bool,
  /**
   * A flag to enable ppu price
   */
  "ppu": _react2.default.PropTypes.bool
};

exports.default = Price;