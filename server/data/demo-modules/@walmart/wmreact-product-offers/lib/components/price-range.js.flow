import React, { PropTypes } from "react";
import Price from "./price";
import classNames from "classnames";
import { HERO, OLD, SAVE, SUB, SUP, PPU } from "../enums/price-types";

export const SEPARATOR_CLASSES = ["PriceRange--separator", "PriceRange--section", "font-semibold",
  "prod-PaddingRight--xs", "prod-PaddingLeft--xs"];

const PriceRange = (props) => {
  const {type = HERO, currency = "$", outOfStock = false,
    typeLabel, minPrice, maxPrice, seoPriceProp, className, unit, ...rest} = props;
  const hasPriceType = Price.hasOwnProperty(type);
  const extras = {
    "u-textBlue": hasPriceType && type !== SAVE && !outOfStock,
    "u-textRed": hasPriceType && type === SAVE && !outOfStock,
    "u-textGrey": outOfStock
  };

  const PriceComp = Price[type] || Price;

  return (
    <span className={classNames("PriceRange", className)} {...rest}>
      <PriceComp
        className="display-inline PriceRange--section"
        price={minPrice}
        type={typeLabel}
        seoPriceProp={seoPriceProp}
        {...{ currency, unit, outOfStock }}/>
      <span className={classNames(SEPARATOR_CLASSES, extras)}>{"-"}</span>
      <PriceComp
        className="display-inline PriceRange--section"
        price={maxPrice}
        seoPriceProp={seoPriceProp}
        type=""
        {...{ currency, unit, outOfStock }}/>
    </span>
  );
};

PriceRange.propTypes = {
  /**
   * Custom classes for customizing the Hero Price component
   */
  className: PropTypes.string,
  /**
   * Currency to fed in as currency symbols
   * Can also use the ISO code for currency, but will not be translated to currency symbol
   */
  currency: PropTypes.string.isRequired,
  /**
   * Min price to display
   */
  minPrice: PropTypes.number.isRequired,
  /**
   * Max price to display
   */
  maxPrice: PropTypes.number.isRequired,
  /**
   * Determines what type of price range to render
   */
  type: PropTypes.oneOf([HERO, OLD, SAVE, SUB, SUP, PPU]),

  /**
   * Label if the price range is Old
   */
  typeLabel: PropTypes.string,
  /**
  The name of the SEO price prop
  */
  seoPriceProp: PropTypes.string,
  /*
   * Show out of stock treatment?
   */
  outOfStock: PropTypes.bool,
  /*
   * PPU price unit
   */
  unit: PropTypes.string
};

export default PriceRange;
