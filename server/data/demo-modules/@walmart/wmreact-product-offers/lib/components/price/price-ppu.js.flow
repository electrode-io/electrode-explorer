/* @flow */
import React from "react";
import classNames from "classnames";
import Price from "./price-base";

/**
 * PPU price component
 * Component will display ppu price.
 */

const PricePPU = ({ className = "", currency = "$", price = 0,
  unit = "", outOfStock = false }) => {
  const classes = classNames(
    "display-inline-block",
    outOfStock ? "u-textGray" : "u-textBlue",
    className
  );

  return (
    <div className={classes}>
      <span className="ppu-price">
        <Price currency={currency} price={price} ppu={true} className="product-ppu-price" />
        <span className="xxs-margin-left">/</span>
        <span className="xxs-margin-left">{unit}</span>
      </span>
    </div>
  );
};

PricePPU.propTypes = {
  /**
   * Custom classes for customizing the ppu price component
   */
  className: React.PropTypes.string,
  /*
   * Currency code
   */
  currency: React.PropTypes.string.isRequired,
  /*
   * PPU price amount
   */
  price: React.PropTypes.number.isRequired,
  /*
   * PPU price unit
   */
  unit: React.PropTypes.string.isRequired,
  /*
   * Show out of stock message
   */
  outOfStock: React.PropTypes.bool
};

export default PricePPU;
