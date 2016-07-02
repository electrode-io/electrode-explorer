/* @flow */
import React from "react";
import isNumber from "lodash/isNumber";
import classNames from "classnames";

import { getFormattedPrice, formatPPU } from "../../utils/price-formatter";

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

const Price = (props) => {
  const {
    className = "",
    currency = "$",
    price = 0,
    showMantissa = true,
    useComma,
    ppu = false,
    ...rest
  } = props;

  let mainPriceComponent;
  const {characteristic, mantissa} = getFormattedPrice(price, {useComma});
  if (isNumber(price)) {
    if (ppu && characteristic === "0") { // if PPU and ppu price less than a dollar
      const formattedPPUPrice = formatPPU(price);
      mainPriceComponent = (
        <span>
          <span className="Price-characteristic">{formattedPPUPrice.characteristic}</span>
          <span className={classNames("Price-mark", {"hide-content": !showMantissa})}>.</span>
          <span className={classNames("Price-mantissa", {"hide-content": !showMantissa})}>
            {formattedPPUPrice.mantissa}
          </span>
          <span className="Price-currency">¢</span>
        </span>
      );
    } else {
      mainPriceComponent = (
        <span>
          <span className="Price-currency">{currency}</span>
          <span className="Price-characteristic">{characteristic}</span>
          <span className={classNames("Price-mark", {"hide-content": !showMantissa})}>.</span>
          <span className={classNames("Price-mantissa", {"hide-content": !showMantissa})}>
            {mantissa}
          </span>
        </span>
      );
    }
  }

  return (
    <span className={className} {...rest}>
      {mainPriceComponent}
    </span>
  );
};

Price.propTypes = {
  /**
   * Custom classes for customizing the Base Price component
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
  /**
   * Should the Mantissa part be displayed?
   */
  "showMantissa": React.PropTypes.bool,
  /**
   * Should the price be formatted with commas?
   */
  "useComma": React.PropTypes.bool,
  /**
   * A flag to enable ppu price
   */
  "ppu": React.PropTypes.bool
};

export default Price;
