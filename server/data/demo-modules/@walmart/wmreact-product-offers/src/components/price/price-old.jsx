/* @flow */
import React from "react";
import classNames from "classnames";
import Price from "./price-base";

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

const PriceOld = (props) => {
  const {
    className = "",
    price = 0,
    currency = "$",
    type = "Was",
    outOfStock,
    ...otherProperties} = props;

  const classes = classNames(
    "Price-old",
    "display-inline-block",
    "arrange-fill",
    "font-semibold",
    outOfStock ? "u-textGray" : "u-textBlue",
    className
  );
  const priceOldTextClassName = props.type === "from"
    ? "Price-old-text sub"
    : "Price-old-text";
  return (
    <div className={classes}>
      <span className={priceOldTextClassName}>{type}</span>
      <Price {...{price, currency, type, outOfStock}} {...otherProperties}
        className="display-inline-block xxs-margin-left" />
    </div>
  );
};

PriceOld.propTypes = {
  /**
   * Custom classes for customizing the Old Price component
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
   * Any string to be prefixed to the price
   */
  "type": React.PropTypes.string.isRequired,
  /*
   * Show out of stock treatment?
   */
  "outOfStock": React.PropTypes.bool
};

export default PriceOld;
