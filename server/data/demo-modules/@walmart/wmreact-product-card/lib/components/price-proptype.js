"use strict";

exports.__esModule = true;

var _react = require("react");

exports.default = _react.PropTypes.shape({
  /**
  The primary price of the product.
  */
  price: _react.PropTypes.number.isRequired,
  /**
  The primary currency unit of the product price.
  */
  currency: _react.PropTypes.string.isRequired,
  /**
  The savings price of product.
  */
  savingsPrice: _react.PropTypes.number,
  /**
  The list price of product.
  */
  listPrice: _react.PropTypes.number,
  /**
  The was price of product.
  */
  wasPrice: _react.PropTypes.number,
  /**
  The price per unit of product.
  */
  unitPrice: _react.PropTypes.string
});