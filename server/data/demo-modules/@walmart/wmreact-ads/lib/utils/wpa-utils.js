"use strict";

exports.__esModule = true;
exports.adaptAdUnits = exports.wordTrim = exports.getCookie = exports.getFromPriceObject = exports.getRatings = exports.getFlags = exports.getPriceObject = exports.getSavings = exports.getSavingsValue = exports.getAvailablityStatus = exports.isVariant = exports.isBundle = exports.isValidPrice = exports.ajaxRenderComponent = exports.showWpaComponent = exports.buildWpaUri = exports.getPropertyBlacklist = exports.getDefaultResponsiveProperty = exports.generateGuid = undefined;

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _isNaN = require("lodash/isNaN");

var _isNaN2 = _interopRequireDefault(_isNaN);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WpaConfig = require("../config/wpa-config");

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

var getDefaultResponsiveProperty = exports.getDefaultResponsiveProperty = function getDefaultResponsiveProperty() {
  return [{
    selectors: ["x-small"],
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      cellSpacing: 8
    }
  }, {
    selectors: ["small"],
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      cellSpacing: 8
    }
  }, {
    selectors: ["medium"],
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      cellSpacing: 8
    }
  }, {
    selectors: ["large"],
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
      cellSpacing: 8
    }
  }, {
    selectors: ["x-large"],
    settings: {
      slidesToShow: 7,
      slidesToScroll: 7,
      cellSpacing: 12,
      initialSlideWidth: 280
    }
  }, {
    selectors: ["xx-large"],
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6,
      cellSpacing: 20
    }
  }];
};

var getPropertyBlacklist = exports.getPropertyBlacklist = function getPropertyBlacklist() {
  return ["serverSide", "products", "adaptedData", "onAjaxRender", "onRendered", "responsive", "store", "onRenderCallback"];
};

var buildWpaUri = exports.buildWpaUri = function buildWpaUri(params) {
  var propertyBlacklist = getPropertyBlacklist();
  var requestParams = (0, _omit2.default)(params, propertyBlacklist);
  var queryToSend = _querystring2.default.stringify(requestParams);
  var prefix = WpaConfig.getServerUrl();
  return prefix + "/api/wpa?" + queryToSend;
};

var showWpaComponent = exports.showWpaComponent = function showWpaComponent(props) {
  return WpaConfig.isWpaEnabled(props);
};

var ajaxRenderComponent = exports.ajaxRenderComponent = function ajaxRenderComponent(props) {
  return WpaConfig.isMspEnabled(props);
};

var isValidPrice = exports.isValidPrice = function isValidPrice(priceVal) {
  return !(0, _isNaN2.default)(priceVal) && priceVal !== ZERO_PRICE;
};

var isBundle = exports.isBundle = function isBundle(product) {
  return (0, _get2.default)(product, "productType", "") === "BUNDLE";
};

var isVariant = exports.isVariant = function isVariant(product) {
  return (0, _get2.default)(product, "productType", "") === "VARIANT";
};

var getAvailablityStatus = exports.getAvailablityStatus = function getAvailablityStatus(product) {
  var onlineAvailability = Boolean((0, _get2.default)(product, "onlineAvailability", true));
  var availabilityStatus = "OUT_OF_STOCK";
  if (isBundle(product) || onlineAvailability) {
    availabilityStatus = "IN_STOCK";
  }
  return availabilityStatus;
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
  var price = {
    price: (0, _get2.default)(product, "currentPrice", 0),
    currency: "$",
    useComma: true,
    savingsPrice: getSavings((0, _get2.default)(product, "listPrice", ""), (0, _get2.default)(product, "currentPrice", ""))
  };
  if (price.savingsPrice > ZERO_PRICE) {
    if (Boolean((0, _get2.default)(product, "isStrikeThrough", false))) {
      price.listPrice = (0, _get2.default)(product, "listPrice", 0);
    } else {
      price.wasPrice = (0, _get2.default)(product, "listPrice", 0);
    }
  }
  if (!price.price && !price.listPrice && !price.wasPrice) {
    var minPrice = (0, _get2.default)(product, "minPrice", 0);
    if (isVariant(product) && minPrice && minPrice === (0, _get2.default)(product, "maxPrice", 0)) {
      price.price = minPrice;
    }
  }
  price.availabilityStatus = getAvailablityStatus(product);
  return price;
};

var getFlags = exports.getFlags = function getFlags(product) {
  var flags = [];
  if (Boolean((0, _get2.default)(product, "isRollback", false))) {
    flags.push({ text: "Rollback", type: "rollback" });
  } else if (Boolean((0, _get2.default)(product, "isClearance", false))) {
    flags.push({ text: "Clearance", type: "clearance" });
  } else if (Boolean((0, _get2.default)(product, "isReducedPrice", false))) {
    flags.push({ text: "Reduced Price", type: "reduced" });
  }
  return flags;
};

var getRatings = exports.getRatings = function getRatings(product) {
  var avgRating = Number((0, _get2.default)(product, "numRating", 0));
  if (!(0, _isNaN2.default)(avgRating) && avgRating !== 0) {
    return {
      average: avgRating,
      countNode: Number((0, _get2.default)(product, "totalReviewCount", 0)),
      total: 5
    };
  }
  return null;
};

var getFromPriceObject = exports.getFromPriceObject = function getFromPriceObject(product, priceType) {
  return {
    price: (0, _get2.default)(product, priceType, 0),
    currency: "$",
    useComma: true,
    type: "from"
  };
};

var getCookie = exports.getCookie = function getCookie(cname, cookie) {
  var name = cname + "=";
  /* eslint-disable no-undef */
  var ca = cookie.split(";");
  var i = void 0;
  for (i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
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

var adaptAdUnits = exports.adaptAdUnits = function adaptAdUnits(adUnit) {
  var product = {
    productSKU: (0, _get2.default)(adUnit, "productSKU", ""),
    productId: (0, _get2.default)(adUnit, "productId", ""),
    adGroupId: (0, _get2.default)(adUnit, "adGroupId", -1),
    campaignId: (0, _get2.default)(adUnit, "campaignId", -1),
    relRank: (0, _get2.default)(adUnit, "relRank", null),
    details: (0, _get2.default)(adUnit, "details", null),
    adType: (0, _get2.default)(adUnit, "adType", "hl"),
    impBeacon: (0, _get2.default)(adUnit, "impBeacon", ""),
    uuid: (0, _get2.default)(adUnit, "uuid", null),
    brand: (0, _get2.default)(adUnit, "brand", ""),
    title: wordTrim((0, _get2.default)(adUnit, "productName", ""), 28, "..."),
    url: (0, _get2.default)(adUnit, "productUrl", ""),
    imageUrl: (0, _get2.default)(adUnit, "imageUrl", ""),
    price: getPriceObject(adUnit),
    flags: getFlags(adUnit),
    preorder: Boolean((0, _get2.default)(adUnit, "isPreorder", false)),
    inStoreOnly: Boolean((0, _get2.default)(adUnit, "isInStoreOnly", false))
  };

  var ratings = getRatings(adUnit);
  if (ratings) {
    product.stars = ratings;
  }

  if ((0, _get2.default)(adUnit, "fromPrice", 0) !== 0) {
    product.fromPrice = getFromPriceObject(adUnit, "fromPrice");
  }
  if (isVariant(adUnit)) {
    product.fromPrice = getFromPriceObject(adUnit, "minPrice");
  }
  return product;
};