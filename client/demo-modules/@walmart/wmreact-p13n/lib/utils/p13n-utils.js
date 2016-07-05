"use strict";

exports.__esModule = true;
exports.getTempoZones = exports.transformPlacementProducts = exports.transformModules = exports.transformProducts = exports.transformProduct = exports.getFlags = exports.getFromPriceObject = exports.getPriceObject = exports.getSavings = exports.getSavingsValue = exports.isValidPrice = exports.getCookie = exports.getPlacementSuffix = exports.wordTrim = exports.ajaxRenderComponent = exports.showP13NComponent = exports.generateGuid = undefined;

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _isNaN = require("lodash/isNaN");

var _isNaN2 = _interopRequireDefault(_isNaN);

var _partial = require("lodash/partial");

var _partial2 = _interopRequireDefault(_partial);

var _lastIndexOf = require("lodash/lastIndexOf");

var _lastIndexOf2 = _interopRequireDefault(_lastIndexOf);

var _reduce = require("lodash/reduce");

var _reduce2 = _interopRequireDefault(_reduce);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _p13nBeacon = require("../beacon/p13n-beacon");

var _wmreactShippingPass = require("@walmart/wmreact-shipping-pass");

var _p13nConfig = require("../config/p13n-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZERO_PRICE = 0.00;
var ONE_HUNDRED = 100.00;
var COMPARISON_PRICE_THRESHOLD = 100.00;
var SAVINGS_THRESHOLD_AMOUNT = 5.00;
var SAVINGS_THRESHOLD_PERCENTAGE = 5.00;

/**
 * See http://stackoverflow.com/a/2117523
 * @return {String} an RFC 4122 compliant guid
 */
var generateGuid = exports.generateGuid = function generateGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (param) {
    var random = Math.floor(Math.random() * 16 || 0);
    var result = param === "x" ? random : result && 0x3 || 0x8;
    return result.toString(16);
  });
};

var showP13NComponent = exports.showP13NComponent = function showP13NComponent(options) {
  var irsConfig = (0, _p13nConfig.getIrsConfig)(options);
  var currentPageConfigId = (0, _p13nConfig.getPageConfig)(options.page, irsConfig);
  var reactPageConfigIds = (0, _p13nConfig.getReactPages)(irsConfig);
  return reactPageConfigIds.indexOf(currentPageConfigId) > -1;
};

var ajaxRenderComponent = exports.ajaxRenderComponent = function ajaxRenderComponent(options) {
  var irsConfig = (0, _p13nConfig.getIrsConfig)(options);
  var ajaxModules = (0, _p13nConfig.getAjaxModules)(irsConfig);
  var currentPageConfigId = (0, _p13nConfig.getPageConfig)(options.page, irsConfig);
  return ajaxModules && ajaxModules.indexOf(currentPageConfigId) > -1;
};

var wordTrim = exports.wordTrim = function wordTrim(value, length, overflowSuffix) {
  if (value.length <= length) {
    return value;
  }
  var strAry = value.split(" ");
  var retLen = strAry[0].length;
  var i = void 0;
  for (i = 1; i < strAry.length; i++) {
    if (retLen === length || retLen + strAry[i].length + 1 > length) {
      break;
    }
    retLen += strAry[i].length + 1;
  }
  return strAry.slice(0, i).join(" ") + (overflowSuffix || "");
};

/**
 * passing irs placement, and get the last two char of placement.
 * return b2 for irs-6-b2.
 * @param {String} placementId, irs-6-b2
 * @returns {String} b2 for irs-6-b2
 */
var getPlacementSuffix = exports.getPlacementSuffix = function getPlacementSuffix(placementId) {
  if (placementId) {
    return placementId.substring((0, _lastIndexOf2.default)(placementId, "-") + 1);
  }
  return "";
};

var getCookie = exports.getCookie = function getCookie(cname) {
  return _electrodeCookies2.default.get(cname);
};

var isValidPrice = exports.isValidPrice = function isValidPrice(priceVal) {
  return !(0, _isNaN2.default)(priceVal) && priceVal !== ZERO_PRICE;
};

var getSavingsValue = exports.getSavingsValue = function getSavingsValue(baseSuggestedPrice, savingsCurrencyAmount, savingsPercent) {
  var savingsValue = ZERO_PRICE;
  if (baseSuggestedPrice >= COMPARISON_PRICE_THRESHOLD) {
    if (savingsCurrencyAmount >= SAVINGS_THRESHOLD_AMOUNT) {
      savingsValue = savingsCurrencyAmount.toFixed(2);
    }
  } else if (savingsPercent >= SAVINGS_THRESHOLD_PERCENTAGE) {
    savingsValue = savingsCurrencyAmount.toFixed(2);
  }
  return savingsValue;
};

var getSavings = exports.getSavings = function getSavings(baseSuggestedPriceVal, currentPriceVal) {
  var baseSuggestedPrice = parseFloat(baseSuggestedPriceVal);
  var currentPrice = parseFloat(currentPriceVal);
  var savingsCurrencyAmount = ZERO_PRICE;
  var savingsPercent = ZERO_PRICE;
  if (isValidPrice(baseSuggestedPrice) && isValidPrice(currentPrice)) {
    if (baseSuggestedPrice > currentPrice) {
      savingsCurrencyAmount = parseFloat(baseSuggestedPrice - currentPrice);
      savingsPercent = parseFloat((baseSuggestedPrice - currentPrice) / baseSuggestedPrice * ONE_HUNDRED);
    }
  }
  return parseFloat(getSavingsValue(baseSuggestedPrice, savingsCurrencyAmount, savingsPercent));
};

var getPriceObject = exports.getPriceObject = function getPriceObject(product) {
  var price = {};
  price.price = (0, _get2.default)(product, "currentPrice", 0);
  price.currency = "$";
  price.useComma = true;
  price.savingsPrice = getSavings((0, _get2.default)(product, "baseSuggestedPrice", ""), (0, _get2.default)(product, "currentPrice", ""));
  if (price.savingsPrice > ZERO_PRICE) {
    if ((0, _get2.default)(product, "isStrikethrough", false)) {
      price.listPrice = (0, _get2.default)(product, "baseSuggestedPrice", 0);
    } else {
      price.wasPrice = (0, _get2.default)(product, "baseSuggestedPrice", 0);
    }
  }
  price.availabilityStatus = !product.isBundle && !product.canAddToCart ? "OUT_OF_STOCK" : "IN_STOCK";
  return price;
};

var getFromPriceObject = exports.getFromPriceObject = function getFromPriceObject(product, priceType) {
  return {
    price: (0, _get2.default)(product, priceType, 0),
    currency: "$",
    useComma: true,
    type: "from"
  };
};

var getFlags = exports.getFlags = function getFlags(product) {
  var flags = [];
  if ((0, _get2.default)(product, "isRollback", false)) {
    flags = [{ text: "Rollback", type: "rollback" }];
  } else if ((0, _get2.default)(product, "isClearance", false)) {
    flags = [{ text: "Clearance", type: "clearance" }];
  } else if ((0, _get2.default)(product, "isReducedPrice", false)) {
    flags = [{ text: "Reduced Price", type: "reduced" }];
  }
  return flags;
};

var transformProduct = exports.transformProduct = function transformProduct(placementId, product) {
  var title = (0, _get2.default)(product, "productName", "");
  var recommendationData = {
    title: wordTrim(title, 45, "..."),
    usItemId: (0, _get2.default)(product, "usItemId", ""),
    placementId: placementId,
    url: (0, _get2.default)(product, "itemPageUrl", ""),
    imageSrc: (0, _wmreactImageUtils.checkImageSrc)((0, _get2.default)(product, "httpImageLink", ""), 144, 144),
    price: getPriceObject(product),
    flags: getFlags(product),
    canAddToCart: (0, _get2.default)(product, "canAddToCart", true),
    inStoreOnly: (0, _get2.default)(product, "isInStoreOnly", false),
    productClassType: (0, _get2.default)(product, "productClassType", ""),
    offerId: (0, _get2.default)(product, "offerId", ""),
    atcEnabled: (0, _get2.default)(product, "atcEnabled", false),
    atcButtonType: (0, _get2.default)(product, "atcButtonType", ""),
    offerShippingPassEligible: (0, _wmreactShippingPass.isSubscribed)() && (0, _get2.default)(product, "isShippingPassEligibleForSubscribed", false) || (0, _wmreactShippingPass.isTargeted)() && (0, _get2.default)(product, "isShippingPassEligibleForTargeted", false)
  };
  if (product.hasOwnProperty("submapType")) {
    recommendationData.isSubmap = true;
  }
  if ((0, _get2.default)(product, "fromPrice", 0) !== 0) {
    recommendationData.fromPrice = getFromPriceObject(product, "fromPrice");
  }
  if ((0, _get2.default)(product, "productClassType", "") === "VARIANT") {
    recommendationData.fromPrice = getFromPriceObject(product, "minPrice");
  }
  if (Number((0, _get2.default)(product, "rating", 0)) !== 0) {
    recommendationData.stars = {
      average: Number((0, _get2.default)(product, "rating", 0)),
      count: (0, _get2.default)(product, "reviewCount", 0),
      total: 5
    };
  }
  return recommendationData;
};

var transformProducts = exports.transformProducts = function transformProducts(_ref) {
  var irsData = _ref.irsData;
  var transformPlacementProduct = _ref.transformPlacementProduct;
  var resultDetail = _ref.resultDetail;
  var visitorId = _ref.visitorId;

  irsData.parentProducts = (0, _map2.default)(irsData.parentEntities, transformPlacementProduct);
  var items = irsData.recommendedItems || irsData.recommendedEntities;
  if (irsData.htmlTemplateId === "P13NRecommendationRviNoRec") {
    items = irsData.parentEntities;
  }
  var recommendedProducts = (0, _map2.default)(items, transformPlacementProduct);
  recommendedProducts.map(function (product) {
    var beaconParameters = (0, _p13nBeacon.generateBeacon)(irsData, resultDetail, visitorId, product);
    product.url += "?" + _queryString2.default.stringify(beaconParameters);
  });
  irsData.recommendedProducts = recommendedProducts;
  return irsData;
};

var transformModules = exports.transformModules = function transformModules(_ref2) {
  var irsDataObj = _ref2.irsDataObj;
  var resultDetail = _ref2.resultDetail;
  var visitorId = _ref2.visitorId;

  var adaptedData = {};
  (0, _map2.default)(irsDataObj, function (irsData, placementId) {
    var transformPlacementProduct = (0, _partial2.default)(transformProduct, placementId);
    adaptedData[placementId] = transformProducts({
      irsData: irsData, transformPlacementProduct: transformPlacementProduct, resultDetail: resultDetail, visitorId: visitorId
    });
  });
  return {
    adaptedData: adaptedData
  };
};

var transformPlacementProducts = exports.transformPlacementProducts = function transformPlacementProducts(_ref3) {
  var irsDataObj = _ref3.irsDataObj;
  var resultDetail = _ref3.resultDetail;
  var visitorId = _ref3.visitorId;
  var placementId = _ref3.placementId;

  var adaptedData = {};
  (0, _map2.default)(irsDataObj, function (irsData, currentPlacementId) {
    var transformPlacementProduct = (0, _partial2.default)(transformProduct, placementId);
    if (placementId === currentPlacementId) {
      adaptedData[placementId] = transformProducts({
        irsData: irsData, transformPlacementProduct: transformPlacementProduct, resultDetail: resultDetail, visitorId: visitorId
      });
      return;
    }
  });
  return {
    adaptedData: adaptedData
  };
};

var getTempoZones = exports.getTempoZones = function getTempoZones(tempoModules) {
  return (0, _reduce2.default)(tempoModules, function (result, value, key) {
    if (key && value.type === "P13NRecommendation") {
      result.push(value.configs.placement + value.configs.placementOrder);
    }
    return result;
  }, []);
};