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

var _priceSuperscript = require("./price-superscript");

var _priceSuperscript2 = _interopRequireDefault(_priceSuperscript);

var _priceSubscript = require("./price-subscript");

var _priceSubscript2 = _interopRequireDefault(_priceSubscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Hero Price component
 * This price component is responsive, i.e. will show Superscripted currency and mantissa values
 * at breakpoints greater than 767px and will display inline currency and mantissa values for
 * breakpoints equal to or less than 767px
 *
 * @class PriceHero
 * @component PriceHero
 * @exports PriceHero
 * @import {PriceHero}
 * @param {string} currency - Currency can be either symbol or ISO code
 * @param {number} price - Price should be a number but can have more than 2 decimal places
 *
 * @example
 * ```jsx
 * <Price.Hero currency="$" price={10.89} />
 * ```
 *
 * @playground
 * Hero Price
 * ```
 * <Price.Hero currency="$" price={10.89} />
 * ```
 * @param {object} props object with following properties className, currency, price.
 * @returns {ReactElement} A React Element
 */

var PriceHero = function PriceHero(props) {
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;
  var _props$price = props.price;
  var price = _props$price === undefined ? 0 : _props$price;
  var _props$currency = props.currency;
  var currency = _props$currency === undefined ? "$" : _props$currency;
  var seoPriceProp = props.seoPriceProp;
  var otherProperties = (0, _objectWithoutProperties3.default)(props, ["className", "price", "currency", "seoPriceProp"]);


  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)(className) },
    _react2.default.createElement(
      "span",
      { className: "hide-content display-inline-block-m" },
      _react2.default.createElement(_priceSuperscript2.default, (0, _extends3.default)({ price: price, currency: currency }, otherProperties))
    ),
    _react2.default.createElement(
      "span",
      { className: "hide-content-m", itemProp: seoPriceProp },
      _react2.default.createElement(_priceSubscript2.default, (0, _extends3.default)({ price: price, currency: currency }, otherProperties))
    )
  );
};

PriceHero.propTypes = {
  /**
   * Custom classes for customizing the Hero Price component
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
  The name of the SEO price prop
  */
  "seoPriceProp": _react2.default.PropTypes.string
};

exports.default = PriceHero;