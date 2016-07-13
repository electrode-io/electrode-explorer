/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

import Tile from "@walmart/wmreact-product-card/lib/components/tile";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

import generateTileProps from "../../helpers/generate-tile-props";
import { generateMidasTileProps, renderMidasTileBeacon } from
  "../../helpers/midas-item-carousel-helpers";

/**
Wrapper component for Tile which maps IRO and Tempo response to the correct props on Tile. Will be
used extensively in Tempo based carousels.

```jsx
<TempoItemTile
  productData={{
    price: { currentPrice: 12.34, listPrice: 15.64 },
    ratings: { rating: "3.5", totalRatings: "20" },
    flags: { isRollback: true },
    productName: "Demo product",
    productUrl: "#",
    quantity: 1000
  }}
/>
```
@import {TempoItemTile}
@component TempoItemTile
@playground
TempoItemTile
*/

const TempoItemTile = (props) => {
  const { className, dataAutomationId, productData: { id, midasData } } = props;
  const tileProps = generateTileProps(props);
  const midasProps = midasData ? generateMidasTileProps(midasData, id) : {};

  return (
    <div
      className={classNames("TempoItemTile", className, { "wpa-product": midasData })}
      {...midasProps}
      {...getDataAutomationIdPair(dataAutomationId, "")}>
      <Tile {...tileProps} />
      {midasData && renderMidasTileBeacon(midasData)}
    </div>
  );
};

TempoItemTile.displayName = "TempoItemTile";

TempoItemTile.propTypes = {
  /**
  * Data from IRO via Quimby
  */
  productData: PropTypes.shape({
    price: PropTypes.shape({
      fromPrice: PropTypes.number,
      minPrice: PropTypes.number,
      maxPrice: PropTypes.number,
      currentPrice: PropTypes.number,
      comparisonPrice: PropTypes.number,
      isStrikeThrough: PropTypes.bool,
      submapType: PropTypes.oneOf(["CHECKOUT", "CART"])
    }),
    ratings: PropTypes.shape({
      rating: PropTypes.string,
      totalRatings: PropTypes.string
    }),
    flags: PropTypes.shape({
      isClearance: PropTypes.bool,
      isRollback: PropTypes.bool,
      isSpecialBuy: PropTypes.bool,
      isReducedPrice: PropTypes.bool
    }),
    imageSrc: PropTypes.string.isRequired,
    isShipppingPassEligible: PropTypes.bool,
    productName: PropTypes.string.isRequired,
    productUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    midasData: PropTypes.object
  }).isRequired,
  /**
  * Number of lines to truncate the product name to. 0 will not display the name.
  */
  productNameLines: PropTypes.number,
  /**
  * Show price in tile?
  */
  showPrice: PropTypes.bool,
  /**
  * Show flags in tile?
  */
  showFlags: PropTypes.bool,
  /**
  * Show shipping pass in tile?
  */
  showShippingPass: PropTypes.bool,
  /**
  * Show ratings in tile?
  */
  showRatings: PropTypes.bool,
  /**
  * Show quantity left in tile?
  */
  showQuantityLeft: PropTypes.bool,
  /**
  * Inventory threshold at which to show "Low in Stock" flag
  */
  lowQuantityThreshold: PropTypes.number,
  /**
  * if the carousel is vertical
  */
  vertical: PropTypes.bool,
  /**
  * Mobile device type?
  */
  isMobile: PropTypes.bool,
  /**
  * Is user logged in?
  */
  userLoggedIn: PropTypes.bool,
  /**
  * Don't load image initially?
  */
  lazyLoadImage: PropTypes.bool,
  /**
  * Direction the flyout should open.
  */
  submapFlyoutPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
  * Automation ID
  */
  dataAutomationId: PropTypes.string,
  /**
  * Addtional classes for styling
  */
  className: PropTypes.string
};

TempoItemTile.defaultProps = {
  productNameLines: 2,
  showPrice: true,
  showFlags: true,
  showShippingPass: true,
  showRatings: true,
  showQuantityLeft: false,
  lowQuantityThreshold: 7,
  vertical: false,
  isMobile: false,
  userLoggedIn: false,
  lazyLoadImage: false,
  submapFlyoutPosition: "right",
  dataAutomationId: "TempoItemTile",
  className: ""
};

export default TempoItemTile;
