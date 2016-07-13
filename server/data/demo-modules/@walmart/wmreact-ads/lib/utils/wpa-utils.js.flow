import get from "lodash/get";
import isNaN from "lodash/isNaN";
import omit from "lodash/omit";
import queryString from "querystring";

const WpaConfig = require("../config/wpa-config");

const ZERO_PRICE = 0.00;
const ONE_HUNDRED = 100.00;
const COMPARISON_PRICE_THRESHOLD = 100.00;
const SAVINGS_THRESHOLD_AMOUNT = 5.00;
const SAVINGS_THRESHOLD_PERCENTAGE = 5.00;

/**
 * See http://stackoverflow.com/a/2117523
 * @return {String} an RFC 4122 compliant guid
 */
export const generateGuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (param) => {
    const random = Math.floor(Math.random() * 16 || 0);
    const result = param === "x" ? random : (result && 0x3 || 0x8);
    return result.toString(16);
  });
};

export const getDefaultResponsiveProperty = () => {
  return [
    {
      selectors: ["x-small"],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        cellSpacing: 8
      }
    },
    {
      selectors: ["small"],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        cellSpacing: 8
      }
    },
    {
      selectors: ["medium"],
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        cellSpacing: 8
      }
    },
    {
      selectors: ["large"],
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        cellSpacing: 8
      }
    },
    {
      selectors: ["x-large"],
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        cellSpacing: 12,
        initialSlideWidth: 280
      }
    },
    {
      selectors: ["xx-large"],
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        cellSpacing: 20
      }
    }
  ];
};

export const getPropertyBlacklist = () => {
  return [
    "serverSide",
    "products",
    "adaptedData",
    "onAjaxRender",
    "onRendered",
    "responsive",
    "store",
    "onRenderCallback"
  ];
};

export const buildWpaUri = (params) => {
  const propertyBlacklist = getPropertyBlacklist();
  const requestParams = omit(params, propertyBlacklist);
  const queryToSend = queryString.stringify(requestParams);
  const prefix = WpaConfig.getServerUrl();
  return `${prefix}/api/wpa?${queryToSend}`;
};

export const showWpaComponent = (props) => {
  return WpaConfig.isWpaEnabled(props);
};

export const ajaxRenderComponent = (props) => {
  return WpaConfig.isMspEnabled(props);
};

export const isValidPrice = (priceVal) => {
  return (!isNaN(priceVal) && priceVal !== ZERO_PRICE);
};

export const isBundle = (product) => {
  return (get(product, "productType", "") === "BUNDLE");
};

export const isVariant = (product) => {
  return (get(product, "productType", "") === "VARIANT");
};

export const getAvailablityStatus = (product) => {
  const onlineAvailability = Boolean(get(product, "onlineAvailability", true));
  let availabilityStatus = "OUT_OF_STOCK";
  if (isBundle(product) || onlineAvailability) {
    availabilityStatus = "IN_STOCK";
  }
  return availabilityStatus;
};

export const getSavingsValue = (baseSuggestedPrice, savingsCurrencyAmount, savingsPercent) => {
  let savingsValue = ZERO_PRICE;
  if (baseSuggestedPrice >= COMPARISON_PRICE_THRESHOLD) {
    if (savingsCurrencyAmount >= SAVINGS_THRESHOLD_AMOUNT) {
      savingsValue = savingsCurrencyAmount.toFixed(2);
    }
  } else if (savingsPercent >= SAVINGS_THRESHOLD_PERCENTAGE) {
    savingsValue = savingsCurrencyAmount.toFixed(2);
  }
  return savingsValue;
};

export const getSavings = (baseSuggestedPriceVal, currentPriceVal) => {
  const baseSuggestedPrice = parseFloat(baseSuggestedPriceVal);
  const currentPrice = parseFloat(currentPriceVal);
  let savingsCurrencyAmount = ZERO_PRICE;
  let savingsPercent = ZERO_PRICE;
  if (isValidPrice(baseSuggestedPrice) && isValidPrice(currentPrice)) {
    if (baseSuggestedPrice > currentPrice) {
      savingsCurrencyAmount = parseFloat(baseSuggestedPrice - currentPrice);
      savingsPercent = parseFloat(((baseSuggestedPrice - currentPrice) / baseSuggestedPrice) *
        ONE_HUNDRED);
    }
  }
  return parseFloat(getSavingsValue(
    baseSuggestedPrice, savingsCurrencyAmount, savingsPercent));
};

export const getPriceObject = (product) => {
  const price = {
    price: get(product, "currentPrice", 0),
    currency: "$",
    useComma: true,
    savingsPrice: getSavings(get(product, "listPrice", ""),
      get(product, "currentPrice", ""))
  };
  if (price.savingsPrice > ZERO_PRICE) {
    if (Boolean(get(product, "isStrikeThrough", false))) {
      price.listPrice = get(product, "listPrice", 0);
    } else {
      price.wasPrice = get(product, "listPrice", 0);
    }
  }
  if (!price.price && !price.listPrice && !price.wasPrice) {
    const minPrice = get(product, "minPrice", 0);
    if (isVariant(product) && minPrice &&
      minPrice === get(product, "maxPrice", 0)) {
      price.price = minPrice;
    }
  }
  price.availabilityStatus = getAvailablityStatus(product);
  return price;
};

export const getFlags = (product) => {
  const flags = [];
  if (Boolean(get(product, "isRollback", false))) {
    flags.push({text: "Rollback", type: "rollback"});
  } else if (Boolean(get(product, "isClearance", false))) {
    flags.push({text: "Clearance", type: "clearance"});
  } else if (Boolean(get(product, "isReducedPrice", false))) {
    flags.push({text: "Reduced Price", type: "reduced"});
  }
  return flags;
};


export const getRatings = (product) => {
  const avgRating = Number(get(product, "numRating", 0));
  if (!isNaN(avgRating) && avgRating !== 0) {
    return {
      average: avgRating,
      countNode: Number(get(product, "totalReviewCount", 0)),
      total: 5
    };
  }
  return null;
};

export const getFromPriceObject = (product, priceType) => {
  return {
    price: get(product, priceType, 0),
    currency: "$",
    useComma: true,
    type: "from"
  };
};

export const getCookie = (cname, cookie) => {
  const name = `${cname}=`;
  /* eslint-disable no-undef */
  const ca = cookie.split(";");
  let i;
  for (i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const wordTrim = (value, length, overflowSuffix) => {
  if (value.length <= length) {
    return value;
  }
  const strAry = value.split(" ");
  let retLen = strAry[0].length;
  let i;
  for (i = 1; i < strAry.length; i++) {
    if (retLen === length || retLen + strAry[i].length + 1 > length) {
      break;
    }
    retLen += strAry[i].length + 1;
  }
  return strAry.slice(0, i).join(" ") + (overflowSuffix || "");
};

export const adaptAdUnits = (adUnit) => {
  const product = {
    productSKU: get(adUnit, "productSKU", ""),
    productId: get(adUnit, "productId", ""),
    adGroupId: get(adUnit, "adGroupId", -1),
    campaignId: get(adUnit, "campaignId", -1),
    relRank: get(adUnit, "relRank", null),
    details: get(adUnit, "details", null),
    adType: get(adUnit, "adType", "hl"),
    impBeacon: get(adUnit, "impBeacon", ""),
    uuid: get(adUnit, "uuid", null),
    brand: get(adUnit, "brand", ""),
    title: wordTrim(get(adUnit, "productName", ""), 28, "..."),
    url: get(adUnit, "productUrl", ""),
    imageUrl: get(adUnit, "imageUrl", ""),
    price: getPriceObject(adUnit),
    flags: getFlags(adUnit),
    preorder: Boolean(get(adUnit, "isPreorder", false)),
    inStoreOnly: Boolean(get(adUnit, "isInStoreOnly", false))
  };

  const ratings = getRatings(adUnit);
  if (ratings) {
    product.stars = ratings;
  }

  if (get(adUnit, "fromPrice", 0) !== 0) {
    product.fromPrice = getFromPriceObject(adUnit, "fromPrice");
  }
  if (isVariant(adUnit)) {
    product.fromPrice = getFromPriceObject(adUnit, "minPrice");
  }
  return product;
};

