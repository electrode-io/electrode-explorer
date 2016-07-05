import { AllHtmlEntities } from "html-entities";

import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";

const PLACEHOLDER_IMAGE =
  "//i5.walmartimages.com/dfw/63fd9f59-ebd7/k2-_c26840ed-0ac3-478d-9173-398eaa1faef2.v1.png";

const SUBMAP_MESSAGE = "See details in cart";
const SUBMAP_TYPE_CART = "CART";
const SUBMAP_TYPE_CHECKOUT = "CHECKOUT";

export const _setUidProp = (id, moduleId) => {
  if (id) {
    const { usItemId } = id;
    if (moduleId) {
      return `${moduleId}-${usItemId}`;
    }
    return usItemId;
  }
};

export const _setFlagProp = ({ isRollback, isClearance, isReducedPrice, isSpecialBuy }, quantity,
  lowQuantityThreshold) => {
  const tileFlags = [];
  if (quantity <= lowQuantityThreshold) {
    tileFlags.push({ type: "lowstock", text: "Low in Stock" });
  }
  if (isRollback) {
    tileFlags.push({ type: "rollback", text: "Rollback" });
  }
  if (isClearance) {
    tileFlags.push({ type: "clearance", text: "Clearance" });
  }
  if (isReducedPrice) {
    tileFlags.push({type: "reduced", text: "Reduced Price" });
  }
  if (isSpecialBuy && isSpecialBuy !== "N") {
    tileFlags.push({ type: "specialbuy", text: "Special Buy" });
  }
  return tileFlags;
};

export const _setImageProp = (imageSrc, {isMobile, vertical}, lazyLoadImage) => {
  const imageSize = isMobile || vertical ? 120 : 144;
  return lazyLoadImage ? PLACEHOLDER_IMAGE : checkImageSrc(imageSrc, imageSize, imageSize);
};

export const _setTitleProps = (title, maxTitleLines) => {
  // Don't display if lines option set to 0
  if (title && maxTitleLines > 0) {
    // decode entities so they render correctly after being escaped by React
    return { title: AllHtmlEntities.decode(title), maxTitleLines };
  }
  return { title: null };
};

export const _setSubmapProps = (submapType, submapFlyoutPosition, isMobile) => {
  return {
    isSubmap: true,
    submapMessage: SUBMAP_MESSAGE,
    showSubmapFlyout: !isMobile,
    submapFlyoutCheckout: submapType === SUBMAP_TYPE_CHECKOUT,
    submapFlyoutPosition
  };
};

export const _buildPriceProp = (price, isFromPrice) => {
  const newPriceProp = { price, currency: "$" };
  if (isFromPrice) {
    newPriceProp.type = "from";
    return { fromPrice: newPriceProp };
  }
  return { price: newPriceProp };
};

export const _setPriceProps = ({ currentPrice, fromPrice, comparisonPrice, minPrice, maxPrice,
  isStrikeThrough }) => {
  if (currentPrice) {
    const newPriceProp = _buildPriceProp(currentPrice, false);

    if (comparisonPrice) {
      const savings = comparisonPrice - currentPrice;
      // comparison price > $100 and savings > $5 or savings at least 5%
      if (comparisonPrice >= 100 && savings >= 5 || savings / comparisonPrice >= 0.05) {
        newPriceProp.price.savingsPrice = savings;
        newPriceProp.price[isStrikeThrough ? "listPrice" : "wasPrice"] = comparisonPrice;
      }
    }
    return newPriceProp;
  } else if (fromPrice) {
    return _buildPriceProp(fromPrice, true);
  } else if (minPrice && maxPrice) {
    if (minPrice < maxPrice) {
      return _buildPriceProp(minPrice, true);
    } else if (minPrice === maxPrice) {
      return _buildPriceProp(minPrice, false);
    }
  }
};

export const _setSubmapOrPriceProps = (price, submapFlyoutPosition, userLoggedIn, isMobile) => { // eslint-disable-line max-params, max-len
  const { submapType } = price;
  // submap type changes when user is logged in
  let newSubmapType = submapType;
  if (userLoggedIn) {
    const newSubmapTypes = {
      [SUBMAP_TYPE_CART]: null,
      [SUBMAP_TYPE_CHECKOUT]: SUBMAP_TYPE_CART
    };
    newSubmapType = newSubmapTypes[submapType];
  }

  // Show submap message and flyout instead of price
  if (newSubmapType) {
    return _setSubmapProps(newSubmapType, submapFlyoutPosition, isMobile);
  }
  return _setPriceProps(price);
};

export const _setStarsProp = ({ rating, totalRatings }) => {
  // ratings are passed from IRO as strings so need to convert them to numbers
  const ratingValue = parseFloat(rating);
  const totalRatingsValue = parseInt(totalRatings, 10);
  if (ratingValue > 0 && totalRatingsValue > 0) {
    return {
      total: 5,
      average: ratingValue,
      countNode: totalRatingsValue
    };
  }
};

const generateTileProps = ({ productData, productNameLines, showPrice, showFlags,
  showShippingPass, showRatings, showQuantityLeft, vertical, isMobile, userLoggedIn, lazyLoadImage,
  submapFlyoutPosition, lowQuantityThreshold, dataAutomationId, moduleId }) => {
  // Data from IRO via Quimby
  const {
    id,
    price,
    ratings,
    flags,
    imageSrc,
    isShippingPassEligible,
    productName,
    productUrl,
    quantity
  } = productData;

  const newProps = {
    overlay: true,
    url: productUrl,
    lowercasePriceText: true,
    dataAutomationId
  };

  newProps.uid = _setUidProp(id, moduleId);

  // Flags
  if (showFlags) {
    newProps.flags = _setFlagProp(flags || {}, quantity, lowQuantityThreshold);
  }

  // Image
  newProps.imageSrc = _setImageProp(imageSrc, {isMobile, vertical}, lazyLoadImage);

  Object.assign(newProps, _setTitleProps(productName, productNameLines));

  // Shipping Pass
  newProps.offerShippingPassEligible = showShippingPass && isShippingPassEligible;

  // Price
  if (price && showPrice) {
    Object.assign(newProps, _setSubmapOrPriceProps(price, submapFlyoutPosition, userLoggedIn,
      isMobile));
  } else {
    newProps.price = null;
  }

  // Ratings
  if (ratings && showRatings) {
    newProps.stars = _setStarsProp(ratings);
  }

  // Quantity
  newProps.quantityLeft = showQuantityLeft ? quantity : null;

  return newProps;
};

export default generateTileProps;
