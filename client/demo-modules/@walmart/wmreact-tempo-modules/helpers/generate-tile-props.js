"use strict";

exports.__esModule = true;
exports._setStarsProp = exports._setSubmapOrPriceProps = exports._setPriceProps = exports._buildPriceProp = exports._setSubmapProps = exports._setTitleProps = exports._setImageProp = exports._setFlagProp = exports._setUidProp = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _htmlEntities = require("html-entities");

var _imageUtils = require("@walmart/wmreact-image-utils/lib/utils/image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLACEHOLDER_IMAGE = "//i5.walmartimages.com/dfw/63fd9f59-ebd7/k2-_c26840ed-0ac3-478d-9173-398eaa1faef2.v1.png";

var SUBMAP_MESSAGE = "See details in cart";
var SUBMAP_TYPE_CART = "CART";
var SUBMAP_TYPE_CHECKOUT = "CHECKOUT";

var _setUidProp = exports._setUidProp = function _setUidProp(id, moduleId) {
  if (id) {
    var usItemId = id.usItemId;

    if (moduleId) {
      return moduleId + "-" + usItemId;
    }
    return usItemId;
  }
};

var _setFlagProp = exports._setFlagProp = function _setFlagProp(_ref, quantity, lowQuantityThreshold) {
  var isRollback = _ref.isRollback;
  var isClearance = _ref.isClearance;
  var isReducedPrice = _ref.isReducedPrice;
  var isSpecialBuy = _ref.isSpecialBuy;

  var tileFlags = [];
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
    tileFlags.push({ type: "reduced", text: "Reduced Price" });
  }
  if (isSpecialBuy && isSpecialBuy !== "N") {
    tileFlags.push({ type: "specialbuy", text: "Special Buy" });
  }
  return tileFlags;
};

var _setImageProp = exports._setImageProp = function _setImageProp(imageSrc, isMobile, lazyLoadImage) {
  var imageSize = isMobile ? 120 : 144;
  return lazyLoadImage ? PLACEHOLDER_IMAGE : (0, _imageUtils.checkImageSrc)(imageSrc, imageSize, imageSize);
};

var _setTitleProps = exports._setTitleProps = function _setTitleProps(title, maxTitleLines) {
  // Don't display if lines option set to 0
  if (title && maxTitleLines > 0) {
    // decode entities so they render correctly after being escaped by React
    return { title: _htmlEntities.AllHtmlEntities.decode(title), maxTitleLines: maxTitleLines };
  }
  return { title: null };
};

var _setSubmapProps = exports._setSubmapProps = function _setSubmapProps(submapType, submapFlyoutPosition, isMobile) {
  return {
    isSubmap: true,
    submapMessage: SUBMAP_MESSAGE,
    showSubmapFlyout: !isMobile,
    submapFlyoutCheckout: submapType === SUBMAP_TYPE_CHECKOUT,
    submapFlyoutPosition: submapFlyoutPosition
  };
};

var _buildPriceProp = exports._buildPriceProp = function _buildPriceProp(price, isFromPrice) {
  var newPriceProp = { price: price, currency: "$" };
  if (isFromPrice) {
    newPriceProp.type = "from";
    return { fromPrice: newPriceProp };
  }
  return { price: newPriceProp };
};

var _setPriceProps = exports._setPriceProps = function _setPriceProps(_ref2) {
  var currentPrice = _ref2.currentPrice;
  var fromPrice = _ref2.fromPrice;
  var comparisonPrice = _ref2.comparisonPrice;
  var minPrice = _ref2.minPrice;
  var maxPrice = _ref2.maxPrice;
  var isStrikeThrough = _ref2.isStrikeThrough;

  if (currentPrice) {
    var newPriceProp = _buildPriceProp(currentPrice, false);

    if (comparisonPrice) {
      var savings = comparisonPrice - currentPrice;
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

var _setSubmapOrPriceProps = exports._setSubmapOrPriceProps = function _setSubmapOrPriceProps(price, submapFlyoutPosition, userLoggedIn, isMobile) {
  // eslint-disable-line max-params, max-len
  var submapType = price.submapType;
  // submap type changes when user is logged in

  var newSubmapType = submapType;
  if (userLoggedIn) {
    var _newSubmapTypes;

    var newSubmapTypes = (_newSubmapTypes = {}, _newSubmapTypes[SUBMAP_TYPE_CART] = null, _newSubmapTypes[SUBMAP_TYPE_CHECKOUT] = SUBMAP_TYPE_CART, _newSubmapTypes);
    newSubmapType = newSubmapTypes[submapType];
  }

  // Show submap message and flyout instead of price
  if (newSubmapType) {
    return _setSubmapProps(newSubmapType, submapFlyoutPosition, isMobile);
  }
  return _setPriceProps(price);
};

var _setStarsProp = exports._setStarsProp = function _setStarsProp(_ref3) {
  var rating = _ref3.rating;
  var totalRatings = _ref3.totalRatings;

  // ratings are passed from IRO as strings so need to convert them to numbers
  var ratingValue = parseFloat(rating);
  var totalRatingsValue = parseInt(totalRatings, 10);
  if (ratingValue > 0 && totalRatingsValue > 0) {
    return {
      total: 5,
      average: ratingValue,
      countNode: totalRatingsValue
    };
  }
};

var generateTileProps = function generateTileProps(_ref4) {
  var productData = _ref4.productData;
  var productNameLines = _ref4.productNameLines;
  var showPrice = _ref4.showPrice;
  var showFlags = _ref4.showFlags;
  var showShippingPass = _ref4.showShippingPass;
  var showRatings = _ref4.showRatings;
  var showQuantityLeft = _ref4.showQuantityLeft;
  var isMobile = _ref4.isMobile;
  var userLoggedIn = _ref4.userLoggedIn;
  var lazyLoadImage = _ref4.lazyLoadImage;
  var submapFlyoutPosition = _ref4.submapFlyoutPosition;
  var lowQuantityThreshold = _ref4.lowQuantityThreshold;
  var dataAutomationId = _ref4.dataAutomationId;
  var moduleId = _ref4.moduleId;

  // Data from IRO via Quimby
  var id = productData.id;
  var price = productData.price;
  var ratings = productData.ratings;
  var flags = productData.flags;
  var imageSrc = productData.imageSrc;
  var isShippingPassEligible = productData.isShippingPassEligible;
  var productName = productData.productName;
  var productUrl = productData.productUrl;
  var quantity = productData.quantity;


  var newProps = {
    overlay: true,
    url: productUrl,
    lowercasePriceText: true,
    dataAutomationId: dataAutomationId
  };

  newProps.uid = _setUidProp(id, moduleId);

  // Flags
  if (showFlags) {
    newProps.flags = _setFlagProp(flags || {}, quantity, lowQuantityThreshold);
  }

  // Image
  newProps.imageSrc = _setImageProp(imageSrc, isMobile, lazyLoadImage);

  (0, _assign2.default)(newProps, _setTitleProps(productName, productNameLines));

  // Shipping Pass
  newProps.offerShippingPassEligible = showShippingPass && isShippingPassEligible;

  // Price
  if (price && showPrice) {
    (0, _assign2.default)(newProps, _setSubmapOrPriceProps(price, submapFlyoutPosition, userLoggedIn, isMobile));
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

exports.default = generateTileProps;