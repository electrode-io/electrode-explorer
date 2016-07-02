"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _priceBase = require("./price-base");

var _priceBase2 = _interopRequireDefault(_priceBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PPU price component
 * Component will display ppu price.
 */

var PricePPU = function PricePPU(_ref) {
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? "" : _ref$className;
  var _ref$currency = _ref.currency;
  var currency = _ref$currency === undefined ? "$" : _ref$currency;
  var _ref$price = _ref.price;
  var price = _ref$price === undefined ? 0 : _ref$price;
  var _ref$unit = _ref.unit;
  var unit = _ref$unit === undefined ? "" : _ref$unit;
  var _ref$outOfStock = _ref.outOfStock;
  var outOfStock = _ref$outOfStock === undefined ? false : _ref$outOfStock;

  var classes = (0, _classnames2.default)("display-inline-block", outOfStock ? "u-textGray" : "u-textBlue", className);

  return _react2.default.createElement(
    "div",
    { className: classes },
    _react2.default.createElement(
      "span",
      { className: "ppu-price" },
      _react2.default.createElement(_priceBase2.default, { currency: currency, price: price, ppu: true, className: "product-ppu-price" }),
      _react2.default.createElement(
        "span",
        { className: "xxs-margin-left" },
        "/"
      ),
      _react2.default.createElement(
        "span",
        { className: "xxs-margin-left" },
        unit
      )
    )
  );
};

PricePPU.propTypes = {
  /**
   * Custom classes for customizing the ppu price component
   */
  className: _react2.default.PropTypes.string,
  /*
   * Currency code
   */
  currency: _react2.default.PropTypes.string.isRequired,
  /*
   * PPU price amount
   */
  price: _react2.default.PropTypes.number.isRequired,
  /*
   * PPU price unit
   */
  unit: _react2.default.PropTypes.string.isRequired,
  /*
   * Show out of stock message
   */
  outOfStock: _react2.default.PropTypes.bool
};

exports.default = PricePPU;