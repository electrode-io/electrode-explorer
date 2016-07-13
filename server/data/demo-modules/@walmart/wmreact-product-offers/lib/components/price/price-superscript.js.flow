/* @flow */
import React from "react";
import classNames from "classnames";
import Price from "./price-base";

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

const PriceSup = (props) => {
  const {
    price = 0,
    currency = "$",
    outOfStock,
    className = "",
    ...otherProperties
  } = props;

  const classes = classNames(
    "display-inline-block",
    "arrange-fit",
    "Price",
    "Price--stylized",
    outOfStock ? "u-textGray" : "u-textBlue",
    className
  );

  return (
    <Price {...{price, currency, outOfStock}} {...otherProperties} className={classes} />
  );
};

PriceSup.propTypes = {
  /**
   * Custom classes for customizing the Superscript Price component
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

export default PriceSup;
