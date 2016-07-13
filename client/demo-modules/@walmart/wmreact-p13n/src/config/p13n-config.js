import get from "lodash/get";
import irsConfigJson from "./config";
import Config from "@walmart/electrode-ui-config";
import Cookies from "@walmart/electrode-cookies";
const Psych = require("@walmart/psych");
const configNames = irsConfigJson.IrsConfigNames;
const irsConstants = irsConfigJson.IrsConstants;

export const getCCMConfig = () => {
  return Config.ccm;
};

export const getDeviceType = (options) => {
  if (options.hasOwnProperty("isMobile")) {
    return options.isMobile ? "mobile" : "desktop";
  }
  return Psych.resolveDeviceType(options.headers);
};

export const getIrsConfig = (options) => {
  const ccmConfig = getCCMConfig();
  const deviceType = getDeviceType(options);
  const p13nConfig = get(ccmConfig, `groupP13n.${deviceType}.electrodeP13n`, {});
  return {
    P13N_CONFIG: p13nConfig,
    IRS_URL: get(p13nConfig, configNames.IRS_URL_NAME, ""),
    IRS_METADATA_URL: get(p13nConfig, configNames.IRS_METADATA_URL_NAME),
    IRS_ACTION_BUTTON: Boolean(get(p13nConfig, configNames.IRS_ACTION_BUTTON_NAME, false)),
    IRS_MAX_CONNECTION_PER_ROUTE: get(p13nConfig, configNames.IRS_MAX_CONNECTION_PER_ROUTE_NAME),
    IRS_MAX_CONNECTION_TOTAL: get(p13nConfig, configNames.IRS_MAX_CONNECTION_TOTAL_NAME),
    IRS_CLOSED_IDLE_CONNECTION_SECONDS:
      get(p13nConfig, configNames.IRS_CLOSED_IDLE_CONNECTION_SECONDS_NAME),
    IRS_KEEP_ALIVE_SECONDS: get(p13nConfig, configNames.IRS_KEEP_ALIVE_SECONDS_NAME),
    IRS_ENABLE_SERVER_SIDE_RENDERING:
      Boolean.valueOf(get(p13nConfig, configNames.IRS_ENABLE_SERVER_SIDE_RENDERING_NAME)),
    IRS_ENABLE_ITEM_PAGE_VERY_TOP_MODULE:
      Boolean.valueOf(get(p13nConfig, configNames.IRS_ENABLE_ITEM_PAGE_VERY_TOP_MODULE_NAME)),
    // pagetype 2 config mapping
    IRS_HOMEPAGE_CONFIG: get(p13nConfig, configNames.IRS_HOMEPAGE_CONFIG_NAME),
    IRS_PRODUCT_CONFIG: get(p13nConfig, configNames.IRS_PRODUCT_CONFIG_NAME),
    IRS_PRODUCT_BTV_CONFIG: get(p13nConfig, configNames.IRS_PRODUCT_BTV_CONFIG_NAME),
    IRS_PRODUCT_CATEGORY_CONFIG: get(p13nConfig, configNames.IRS_PRODUCT_CATEGORY_CONFIG_NAME),
    IRS_BUNDLE_CONFIG: get(p13nConfig, configNames.IRS_BUNDLE_CONFIG_NAME),
    IRS_PAC_CONFIG: get(p13nConfig, configNames.IRS_PAC_CONFIG_NAME),
    IRS_PAR_CONFIG: get(p13nConfig, configNames.IRS_PAR_CONFIG_NAME),
    IRS_CART_CONFIG: get(p13nConfig, configNames.IRS_CART_CONFIG_NAME),
    IRS_CHECKOUT_CONFIG: get(p13nConfig, configNames.IRS_CHECKOUT_CONFIG_NAME),
    IRS_SEARCH_CONFIG: get(p13nConfig, configNames.IRS_SEARCH_CONFIG_NAME),
    IRS_BROWSE_CONFIG: get(p13nConfig, configNames.IRS_BROWSE_CONFIG_NAME),
    IRS_CATEGORY_CONFIG: get(p13nConfig, configNames.IRS_CATEGORY_CONFIG_NAME),
    IRS_ONEHG_CONFIG: get(p13nConfig, configNames.IRS_ONEHG_CONFIG_NAME),
    IRS_VOD_MIDDLE_CONFIG: get(p13nConfig, configNames.IRS_VOD_MIDDLE_CONFIG_NAME),
    IRS_VOD_CONFIG: get(p13nConfig, configNames.IRS_VOD_CONFIG_NAME),
    IRS_HOLIDEAL_CONFIG: get(p13nConfig, configNames.IRS_HOLIDEAL_CONFIG_NAME, "506"),
    IRS_HOLIDEAL_SIMILAR_CONFIG:
      get(p13nConfig, configNames.IRS_HOLIDEAL_SIMILAR_CONFIG_NAME, "601"),
    IRS_BLACKFRIDAY_ALL_CONFIG:
      get(p13nConfig, configNames.IRS_BLACKFRIDAY_ALL_CONFIG_NAME, "506"),
    IRS_BLACKFRIDAY_CATEGORY_CONFIG:
      get(p13nConfig, configNames.IRS_BLACKFRIDAY_CATEGORY_CONFIG_NAME, "601"),
    IRS_BLACKFRIDAY_ALLDEPT: get(p13nConfig, configNames.IRS_BLACKFRIDAY_ALLDEPT_NAME, "8907726"),
    IRS_VOD_TEMPO_CONFIG: get(p13nConfig, configNames.IRS_VOD_TEMPO_CONFIG_NAME),
    IRS_REVIEW_MIDDLE_CONFIG: get(p13nConfig, configNames.IRS_REVIEW_MIDDLE_CONFIG_NAME),
    IRS_REVIEW_RVI_CONFIG: get(p13nConfig, configNames.IRS_REVIEW_RVI_CONFIG_NAME),
    IRS_COLLECTION_CONFIG: get(p13nConfig, configNames.IRS_COLLECTION_CONFIG_NAME, "401"),
    IRS_CONTINUE_SHOPPING_CONFIG:
      get(p13nConfig, configNames.IRS_CONTINUE_SHOPPING_CONFIG_NAME, "112"),
    IRS_METADATA_CONFIG: get(p13nConfig, configNames.IRS_METADATA_CONFIG_NAME),
    IRS_HP_METADATA_RVI_CONFIG: get(p13nConfig, configNames.IRS_HP_METADATA_RVI_CONFIG_NAME, "6"),
    IRS_PRODUCT_METADATA_RVI_CONFIG:
      get(p13nConfig, configNames.IRS_PRODUCT_METADATA_RVI_CONFIG_NAME, "2"),
    IRS_STOREFINDER_CONFIG: get(p13nConfig, configNames.IRS_STOREFINDER_CONFIG_NAME),
    IRS_PRODUCT_SEM_CONFIG: get(p13nConfig, configNames.IRS_PRODUCT_SEM_CONFIG_NAME), // 106
    IRS_DISABLE_MODULES_ON_PAGE: get(p13nConfig, configNames.IRS_DISABLE_MODULES_ON_PAGE_NAME),
    IRS_ALLOWED_CATEGORY: get(p13nConfig, configNames.IRS_ALLOWED_CATEGORY_NAME),
    IRS_AJAX_MODULES: get(p13nConfig, configNames.IRS_AJAX_MODULES_NAME),
    IRS_AJAX_FALLBACK: get(p13nConfig, configNames.IRS_AJAX_FALLBACK_NAME),
    IRS_ENABLE_AB_TEST: Boolean(get(p13nConfig, configNames.IRS_ENABLE_AB_TEST_NAME)),
    IRS_SHOW_SHIPPING_PASS: Boolean(get(p13nConfig, configNames.IRS_SHOW_SHIPPING_PASS_NAME)),
    IRS_VOD_ZONE_MAP: get(p13nConfig, configNames.IRS_VOD_ZONE_MAP_NAME),
    IRS_REACT_PAGES: get(p13nConfig, configNames.IRS_REACT_PAGES, ""),
    IRS_HTTP_SOCKETTIMEOUT_NAME: get(p13nConfig, configNames.IRS_HTTP_SOCKETTIMEOUT_NAME, "")
  };
};

export const getIrsHomepageConfig = (config) => {
  return config.IRS_HOMEPAGE_CONFIG;
};

export const getIrsSocketTimeOut = (config) => {
  return config.IRS_HTTP_SOCKETTIMEOUT_NAME;
};

export const getIrsCollectionConfig = (config) => {
  return config.IRS_COLLECTION_CONFIG;
};

export const getIrsCategoryConfig = (config) => {
  return config.IRS_CATEGORY_CONFIG;
};

export const getPageConfig = (page, config) => {
  let result;
  switch (page) {
  case irsConstants.HOMEPAGE:
    result = getIrsHomepageConfig(config);
    break;
  case irsConstants.COLLECTION:
    result = getIrsCollectionConfig(config);
    break;
  case irsConstants.CATEGORY:
    result = getIrsCategoryConfig(config);
    break;
  default:
    result = get(config.P13N_CONFIG, configNames[page], "");
    break;
  }
  return result;
};

export const getIrsUrl = (config) => {
  return config.IRS_URL;
};

export const getReactPages = (config) => {
  return config.IRS_REACT_PAGES;
};

export const getAjaxModules = (config) => {
  return config.IRS_AJAX_MODULES;
};

export const getAddToCartEndpoint = () => {
  const config = get(Config.ccm, `groupP13n.desktop.electrodeP13n`, {});
  const hasCID = get(config, "atc.hasCID", "");
  const hName = get(config, "atc.hostName", "");
  const url = get(config, "atc.url", "");
  const hasCRT = get(config, "atc.hasCRT", "");

  if (Cookies.get(hasCRT) === "1") {
    const urlUpdated = url.replace("$", ":CRT");

    return hName !== "" ? `${hName}${urlUpdated}` : `${urlUpdated}`;
  }

  const customerStatus = Cookies.get(hasCID) === "1" ? "customer" : "guest";
  const customerStatusString = `${customerStatus}/:CID`;
  const urlCustomerStatus = url.replace("$", customerStatusString);

  return hName !== "" ? `${hName}${urlCustomerStatus}` : `${urlCustomerStatus}`;
};
