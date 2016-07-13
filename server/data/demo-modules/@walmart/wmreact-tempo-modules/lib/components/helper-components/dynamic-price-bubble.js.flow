import React, { PropTypes } from "react";
import classnames from "classnames";

import PriceFormatter from "@walmart/wmreact-formatters/lib/components/price-formatter";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import find from "lodash/find";

/**
generates the list price
@param {object} products for different price of producs
@param {string} manualPrice default display price
@returns {object} comparison price, current price
*/

export const _populatePrice = (products, manualPrice) => {
  let price = manualPrice && parseFloat(manualPrice);
  let wasPrice = 0;
  const product = find(products, (productsItem) => { return productsItem.canAddToCart; });

  if (!product) { return {price, wasPrice}; }

  const {
    price: {
      fromPrice,
      minPrice,
      currentPrice,
      comparisonPrice
    }
  } = product;

  if (currentPrice) {
    price = currentPrice;
    wasPrice = comparisonPrice;
  } else if (fromPrice) {
    price = fromPrice;
  } else if (minPrice) {
    price = minPrice;
  }

  return { price, wasPrice };
};

export const _renderWasPrice = (comparisonPrice, priceDisplay, isRollback) => {
  if (isRollback && comparisonPrice && priceDisplay) {
    const classes = classnames(
      "DynamicPriceBubble-text",
      "DynamicPriceBubble-text--was",
      "DynamicPriceBubble-text--small",
      "hide-content-max-m"
    );
    return (<span className={classes}>{`was $${comparisonPrice}`}</span>);
  }
  return null;
};

/**
DynamicPrice Bubble overlay on POVs
@param {Object} props React props for the component
@returns {ReactElement} DynamicPrice component
@examples
Basic DynamicPrice Bubble
```jsx
<POVStory {...povStoryData}/>
```
*/
const DynamicPriceBubble = (props) => {

  /**
  Split out the location into x/y co-ordinate as per the specs.
  @param {string} location  location of overlay button like "A10"
  @returns {object} corresponding x and y co-ordinates.
  */
  const _splitLocation = (location) => {
    if (!location) { return {}; }

    const CHAR_CODE_A = "A".charCodeAt(0);
    const locationX = parseInt(location.substring(1), 10) - 1;
    const locationY = location[0].charCodeAt(0) - CHAR_CODE_A;

    return {locationX, locationY};
  };

  /**
  generates the jsx for desktop text
  @param {string} bubbleText messaging text for desktop.
  @returns {ReactElement} generated jsx
  */
  const _renderDesktopText = (bubbleText) => {
    if (bubbleText) {
      const classes = classnames(
        "DynamicPriceBubble-text",
        "DynamicPriceBubble-text--manual",
        "DynamicPriceBubble-text--small",
        "hide-content-max-m"
      );

      return <span className={classes}>{bubbleText}</span>;
    }
  };

  const {
    overlay: {
      location,
      manualPrice,
      defaultColor,
      hexCode,
      priceDisplay,
      bubbleText,
      products
    },
    isMobileImage,
    dataAutomationId
  } = props;

  const {locationX, locationY} = _splitLocation(location);
  const {price, wasPrice} = _populatePrice(products, manualPrice);

  const isRollback = priceDisplay === "Rollback";

  const bubbleClasses = classnames(
    "DynamicPriceBubble",
    "u-borderRadiusFull",
    `DynamicPriceBubble-x-${locationX}`,
    `DynamicPriceBubble-y-${locationY}`,
    {
      "DynamicPriceBubble--rollback": isRollback,
      "hide-content-max-m": isMobileImage,
      "DynamicPriceBubble--noBorder": !hexCode
    }
  );

  const bubbleTextClasses = classnames(
    "DynamicPriceBubble-text",
    {
      "font-semibold": isRollback,
      "hide-content-m": !!bubbleText
    }
  );

  const bubbleStyle = {
    backgroundColor: hexCode,
    color: defaultColor
  };

  if (!price) {
    return <span />;
  }

  return (
    <div
      className={bubbleClasses}
      style={bubbleStyle}
      {...getDataAutomationIdPair(`DynamicPrice`, dataAutomationId)}>
      <span className={bubbleTextClasses}>{priceDisplay}</span>
      {_renderDesktopText(bubbleText)}
      <span className="DynamicPriceBubble-price font-semibold">
        {PriceFormatter.displayPrice(price, {pov: true})}
      </span>
      {_renderWasPrice(wasPrice, priceDisplay, isRollback)}
    </div>
  );
};

DynamicPriceBubble.displayName = "DynamicPriceBubble";

DynamicPriceBubble.PropTypes = {
  /**
  Dynamic Price bubble overlay
  */
  overlay: PropTypes.shape({
    location: PropTypes.string,
    itemPrice: PropTypes.array,
    manualPrice: PropTypes.string,
    defaultColor: PropTypes.string,
    hexCode: PropTypes.string,
    priceDisplay: PropTypes.string,
    bubbleText: PropTypes.string,
    products: PropTypes.array
  }).isRequired,
  /**
  if it is mobile Image
  */
  isMobileImage: PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

DynamicPriceBubble.defaultProps = {
  isMobileImage: false,
  dataAutomationId: ""
};
export default DynamicPriceBubble;
