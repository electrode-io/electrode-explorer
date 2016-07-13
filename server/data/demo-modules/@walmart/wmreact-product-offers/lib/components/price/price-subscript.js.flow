/* @flow */
import React from "react";
import classNames from "classnames";
import Price from "./price-base";

/**
 * Subscript Price component
 * Component displays both currency and the mantissa part on the same level as the base
 * characteristic part of the Price
 *
 * @class PriceSubscript
 * @component PriceSubscript
 * @exports PriceSubscript
 * @import {PriceSubscript}
 *
 * @param {string} currency - Currency can be either symbol or ISO code
 * @param {number} price - Price should be a number but can have more than 2 decimal places
 *
 * @example
 * ```jsx
 * <Price.Sub currency="$" price={10.89} />
 * ```
 *
 * @playground
 * Subscript Price
 * ```
 * <Price.Sub currency="$" price={10.89} />
 * ```
 * @param {object} props object with following properties className, currency, price, outOfStock.
 * @returns {ReactElement} A React Element
 */

const PriceSubscript = (props) => {
  const {
    className = "",
    price = 0,
    currency = "$",
    outOfStock,
    ...otherProperties
  } = props;

  const classes = classNames(
    "display-inline-block",
    "arrange-fit",
    "Price",
    outOfStock ? "u-textGray" : "u-textBlue",
    className
  );

  return (
    <Price {...{price, currency, outOfStock}} {...otherProperties} className={classes} />
  );
};

PriceSubscript.propTypes = {
  /**
   * Custom classes for customizing the Subscript Price component
   */
  "className": React.PropTypes.string,
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  "currency": React.PropTypes.string.isRequired,
  /**
   * Price to display
   */
  "price": React.PropTypes.number.isRequired,
  /*
   * Show out of stock treatment?
   */
  "outOfStock": React.PropTypes.bool
};

export default PriceSubscript;
