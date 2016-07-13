/* @flow */
import React from "react";
import classNames from "classnames";
import PriceSuperscript from "./price-superscript";
import PriceSubscript from "./price-subscript";

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

const PriceHero = (props) => {
  const {
    className = "",
    price = 0,
    currency = "$",
    seoPriceProp,
    ...otherProperties
  } = props;

  return (
    <div className={classNames(className)}>
      <span className="hide-content display-inline-block-m">
        <PriceSuperscript {...{price, currency}} {...otherProperties} />
      </span>
      <span className="hide-content-m" itemProp={seoPriceProp}>
        <PriceSubscript {...{price, currency}} {...otherProperties} />
      </span>
    </div>
  );
};

PriceHero.propTypes = {
  /**
   * Custom classes for customizing the Hero Price component
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
  The name of the SEO price prop
  */
  "seoPriceProp": React.PropTypes.string
};

export default PriceHero;
