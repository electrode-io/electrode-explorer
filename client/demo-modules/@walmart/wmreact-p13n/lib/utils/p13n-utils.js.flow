import map from "lodash/map";
import get from "lodash/get";
import isNaN from "lodash/isNaN";
import partial from "lodash/partial";
import lastIndexOf from "lodash/lastIndexOf";
import reduce from "lodash/reduce";
import Cookies from "@walmart/electrode-cookies";
import { checkImageSrc } from "@walmart/wmreact-image-utils";
import queryString from "query-string";
import { generateBeacon } from "../beacon/p13n-beacon";
import { isSubscribed, isTargeted } from "@walmart/wmreact-shipping-pass";
import {
  getIrsConfig,
  getPageConfig,
  getReactPages,
  getAjaxModules
} from "../config/p13n-config";


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

export const showP13NComponent = (options) => {
  const irsConfig = getIrsConfig(options);
  const currentPageConfigId = getPageConfig(options.page, irsConfig);
  const reactPageConfigIds = getReactPages(irsConfig);
  return reactPageConfigIds.indexOf(currentPageConfigId) > -1;
};

export const ajaxRenderComponent = (options) => {
  const irsConfig = getIrsConfig(options);
  const ajaxModules = getAjaxModules(irsConfig);
  const currentPageConfigId = getPageConfig(options.page, irsConfig);
  return ajaxModules && ajaxModules.indexOf(currentPageConfigId) > -1;
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

/**
 * passing irs placement, and get the last two char of placement.
 * return b2 for irs-6-b2.
 * @param {String} placementId, irs-6-b2
 * @returns {String} b2 for irs-6-b2
 */
export const getPlacementSuffix = (placementId) => {
  if (placementId) {
    return placementId.substring(lastIndexOf(placementId, "-") + 1);
  }
  return "";
};

export const getCookie = (cname) => {
  return Cookies.get(cname);
};

export const isValidPrice = (priceVal) => {
  return (!isNaN(priceVal) && priceVal !== ZERO_PRICE);
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
  const price = {};
  price.price = get(product, "currentPrice", 0);
  price.currency = "$";
  price.useComma = true;
  price.savingsPrice = getSavings(get(product, "baseSuggestedPrice",
    ""), get(product, "currentPrice", ""));
  if (price.savingsPrice > ZERO_PRICE) {
    if (get(product, "isStrikethrough", false)) {
      price.listPrice = get(product, "baseSuggestedPrice", 0);
    } else {
      price.wasPrice = get(product, "baseSuggestedPrice", 0);
    }
  }
  price.availabilityStatus = (!product.isBundle && !product.canAddToCart)
    ? "OUT_OF_STOCK" : "IN_STOCK";
  return price;
};

export const getFromPriceObject = (product, priceType) => {
  return {
    price: get(product, priceType, 0),
    currency: "$",
    useComma: true,
    type: "from"
  };
};

export const getFlags = (product) => {
  let flags = [];
  if (get(product, "isRollback", false)) {
    flags = [{text: "Rollback", type: "rollback"}];
  } else if (get(product, "isClearance", false)) {
    flags = [{text: "Clearance", type: "clearance"}];
  } else if (get(product, "isReducedPrice", false)) {
    flags = [{text: "Reduced Price", type: "reduced"}];
  }
  return flags;
};

export const transformProduct = (placementId, product) => {
  const title = get(product, "productName", "");
  const recommendationData = {
    title: wordTrim(title, 45, "..."),
    usItemId: get(product, "usItemId", ""),
    placementId,
    url: get(product, "itemPageUrl", ""),
    imageSrc: checkImageSrc(get(product, "httpImageLink", ""), 144, 144),
    price: getPriceObject(product),
    flags: getFlags(product),
    canAddToCart: get(product, "canAddToCart", true),
    inStoreOnly: get(product, "isInStoreOnly", false),
    productClassType: get(product, "productClassType", ""),
    offerId: get(product, "offerId", ""),
    atcEnabled: get(product, "atcEnabled", false),
    atcButtonType: get(product, "atcButtonType", ""),
    offerShippingPassEligible: (isSubscribed()
    && get(product, "isShippingPassEligibleForSubscribed", false))
    || (isTargeted() && get(product, "isShippingPassEligibleForTargeted", false))
  };
  if (product.hasOwnProperty("submapType")) {
    recommendationData.isSubmap = true;
  }
  if (get(product, "fromPrice", 0) !== 0) {
    recommendationData.fromPrice = getFromPriceObject(product, "fromPrice");
  }
  if (get(product, "productClassType", "") === "VARIANT") {
    recommendationData.fromPrice = getFromPriceObject(product, "minPrice");
  }
  if (Number(get(product, "rating", 0)) !== 0) {
    recommendationData.stars = {
      average: Number(get(product, "rating", 0)),
      count: get(product, "reviewCount", 0),
      total: 5
    };
  }
  return recommendationData;
};

export const transformProducts = ({
  irsData,
  transformPlacementProduct,
  resultDetail,
  visitorId
}) => {
  irsData.parentProducts = map(irsData.parentEntities, transformPlacementProduct);
  let items = irsData.recommendedItems || irsData.recommendedEntities;
  if (irsData.htmlTemplateId === "P13NRecommendationRviNoRec") {
    items = irsData.parentEntities;
  }
  const recommendedProducts = map(items, transformPlacementProduct);
  recommendedProducts.map((product) => {
    const beaconParameters = generateBeacon(
      irsData, resultDetail, visitorId, product);
    product.url += `?${queryString.stringify(beaconParameters)}`;
  });
  irsData.recommendedProducts = recommendedProducts;
  return irsData;
};

export const transformModules = ({
  irsDataObj,
  resultDetail,
  visitorId
}) => {
  const adaptedData = {};
  map(irsDataObj, (irsData, placementId) => {
    const transformPlacementProduct = partial(transformProduct, placementId);
    adaptedData[placementId] = transformProducts({
      irsData, transformPlacementProduct, resultDetail, visitorId
    });
  });
  return {
    adaptedData
  };
};

export const transformPlacementProducts = ({
  irsDataObj,
  resultDetail,
  visitorId,
  placementId
}) => {
  const adaptedData = {};
  map(irsDataObj, (irsData, currentPlacementId) => {
    const transformPlacementProduct = partial(transformProduct, placementId);
    if (placementId === currentPlacementId) {
      adaptedData[placementId] = transformProducts({
        irsData, transformPlacementProduct, resultDetail, visitorId
      });
      return;
    }
  });
  return {
    adaptedData
  };
};

export const getTempoZones = (tempoModules) => {
  return reduce(tempoModules, (result, value, key) => {
    if (key && value.type === "P13NRecommendation") {
      result.push(value.configs.placement + value.configs.placementOrder);
    }
    return result;
  }, []);
};
