/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

import SubmapFlyout from "./submap-flyout";

/**
 * Submap Price component
 * Component will display the submap message.
 *
 * @class PriceSubmap
 * @component PriceSubmap
 * @exports PriceSubmap
 * @import {PriceSubmap}
 *
 * @param {string} message submap message to be shown instead of Price.
 * @param {boolean} outOfStock for toggling display classes.
 *
 * @example
 * ```jsx
 * <Price.Submap  message="See details in cart" outOfStock />
 * ```
 *
 * @playground
 * Submap
 * ```
 * <Price.Submap message="See details in cart" />
 *
 * @param {object} props object with following properties className, message,
 *  outOfStock.
 * @returns {ReactElement} A React Element
 */

const PriceSubmap = (props) => {
  const {
    className, message, outOfStock, showFlyout,
    checkoutFlyout, flyoutPosition, buttonTrigger, flyoutOnly } = props;
  const classes = classNames(
    "Price-submap",
    "display-inline-block",
    "arrange-fill",
    "font-semibold",
    outOfStock ? "u-textGray" : "u-textBlue",
    className
  );

  return (
    <div className={classes}>
      <span className="Price-old-text">{message}</span>
      {showFlyout &&
        <SubmapFlyout
          checkoutContent={checkoutFlyout}
          position={flyoutPosition}
          buttonTrigger={buttonTrigger}
          message={message}
          flyoutOnly={flyoutOnly}
        />
      }
    </div>
  );
};

PriceSubmap.propTypes = {
  /**
   * Custom classes for customizing the Old Price component
   */
  className: PropTypes.string,
  /*
   * Submap string
   */
  message: PropTypes.string.isRequired,
  /*
   * Show out of stock treatment?
   */
  outOfStock: PropTypes.bool,
  /**
   * Show submap flyout?
   */
  showFlyout: PropTypes.bool,
  /**
   * only show flyout, no slide panel
   */
  flyoutOnly: PropTypes.bool,
  /**
   * button that triggers the flyout
   */
  buttonTrigger: PropTypes.element,
   /**
   * True to use checkout submap flyout content. Otherwise will use cart version.
   */
  checkoutFlyout: PropTypes.bool,
   /**
   * Position of the submap flyout.
   */
  flyoutPosition: PropTypes.oneOf(["left", "right", "top", "bottom"])
};

PriceSubmap.defaultProps = {
  className: "",
  outOfStock: false,
  showFlyout: false,
  checkoutFlyout: false,
  flyoutPosition: "right"
};

export default PriceSubmap;
