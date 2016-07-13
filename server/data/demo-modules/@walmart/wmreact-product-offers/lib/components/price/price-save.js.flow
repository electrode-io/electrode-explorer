/* @flow */
import React from "react";
import classNames from "classnames";
import Price from "./price-base";

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

const PriceSave = (props) => {
  const {className = "",
    price = 0,
    type = "Save",
    currency = "$",
    outOfStock = false,
    ...otherProperties} = props;

  const classes = classNames(
    "Savings-price",
    "arrange-fill",
    "font-semibold",
    "copy-small",
    outOfStock ? "u-textGray" : "u-textRed",
    className
  );

  return (
    <div className={classes}>
      <span className="Price-save-text">{type}</span>
      <Price {...{price, currency, outOfStock}} {...otherProperties}
        className="display-inline-block xxs-margin-left" />
    </div>
  );
};

PriceSave.propTypes = {
  /**
   * Custom classes for customizing the Save Price component
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
  "outOfStock": React.PropTypes.bool,
  /*
   * Any string to be prefixed to the price
   */
  "type": React.PropTypes.string
};

export default PriceSave;
