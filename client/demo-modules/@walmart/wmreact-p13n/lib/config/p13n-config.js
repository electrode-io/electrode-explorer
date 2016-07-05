"use strict";

exports.__esModule = true;
exports.getAddToCartEndpoint = exports.getAjaxModules = exports.getReactPages = exports.getIrsUrl = exports.getPageConfig = exports.getIrsCategoryConfig = exports.getIrsCollectionConfig = exports.getIrsHomepageConfig = exports.getIrsConfig = exports.getDeviceType = exports.getCCMConfig = undefined;

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _electrodeUiConfig2 = _interopRequireDefault(_electrodeUiConfig);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Psych = require("@walmart/psych");
var configNames = _config2.default.IrsConfigNames;
var irsConstants = _config2.default.IrsConstants;

var getCCMConfig = exports.getCCMConfig = function getCCMConfig() {
  return _electrodeUiConfig2.default.ccm;
};

var getDeviceType = exports.getDeviceType = function getDeviceType(options) {
  if (options.hasOwnProperty("isMobile")) {
    return options.isMobile ? "mobile" : "desktop";
  }
  return Psych.resolveDeviceType(options.headers);
};

var getIrsConfig = exports.getIrsConfig = function getIrsConfig(options) {
  var ccmConfig = getCCMConfig();
  var deviceType = getDeviceType(options);
  var p13nConfig = (0, _get2.default)(ccmConfig, "groupP13n." + deviceType + ".electrodeP13n", {});
  return {
    P13N_CONFIG: p13nConfig,
    IRS_URL: (0, _get2.default)(p13nConfig, configNames.IRS_URL_NAME, ""),
    IRS_METADATA_URL: (0, _get2.default)(p13nConfig, configNames.IRS_METADATA_URL_NAME),
    IRS_ACTION_BUTTON: Boolean((0, _get2.default)(p13nConfig, configNames.IRS_ACTION_BUTTON_NAME, false)),
    IRS_MAX_CONNECTION_PER_ROUTE: (0, _get2.default)(p13nConfig, configNames.IRS_MAX_CONNECTION_PER_ROUTE_NAME),
    IRS_MAX_CONNECTION_TOTAL: (0, _get2.default)(p13nConfig, configNames.IRS_MAX_CONNECTION_TOTAL_NAME),
    IRS_CLOSED_IDLE_CONNECTION_SECONDS: (0, _get2.default)(p13nConfig, configNames.IRS_CLOSED_IDLE_CONNECTION_SECONDS_NAME),
    IRS_KEEP_ALIVE_SECONDS: (0, _get2.default)(p13nConfig, configNames.IRS_KEEP_ALIVE_SECONDS_NAME),
    IRS_ENABLE_SERVER_SIDE_RENDERING: Boolean.valueOf((0, _get2.default)(p13nConfig, configNames.IRS_ENABLE_SERVER_SIDE_RENDERING_NAME)),
    IRS_ENABLE_ITEM_PAGE_VERY_TOP_MODULE: Boolean.valueOf((0, _get2.default)(p13nConfig, configNames.IRS_ENABLE_ITEM_PAGE_VERY_TOP_MODULE_NAME)),
    // pagetype 2 config mapping
    IRS_HOMEPAGE_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_HOMEPAGE_CONFIG_NAME),
    IRS_PRODUCT_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PRODUCT_CONFIG_NAME),
    IRS_PRODUCT_BTV_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PRODUCT_BTV_CONFIG_NAME),
    IRS_PRODUCT_CATEGORY_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PRODUCT_CATEGORY_CONFIG_NAME),
    IRS_BUNDLE_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_BUNDLE_CONFIG_NAME),
    IRS_PAC_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PAC_CONFIG_NAME),
    IRS_PAR_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PAR_CONFIG_NAME),
    IRS_CART_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_CART_CONFIG_NAME),
    IRS_CHECKOUT_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_CHECKOUT_CONFIG_NAME),
    IRS_SEARCH_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_SEARCH_CONFIG_NAME),
    IRS_BROWSE_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_BROWSE_CONFIG_NAME),
    IRS_CATEGORY_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_CATEGORY_CONFIG_NAME),
    IRS_ONEHG_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_ONEHG_CONFIG_NAME),
    IRS_VOD_MIDDLE_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_VOD_MIDDLE_CONFIG_NAME),
    IRS_VOD_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_VOD_CONFIG_NAME),
    IRS_HOLIDEAL_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_HOLIDEAL_CONFIG_NAME, "506"),
    IRS_HOLIDEAL_SIMILAR_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_HOLIDEAL_SIMILAR_CONFIG_NAME, "601"),
    IRS_BLACKFRIDAY_ALL_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_BLACKFRIDAY_ALL_CONFIG_NAME, "506"),
    IRS_BLACKFRIDAY_CATEGORY_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_BLACKFRIDAY_CATEGORY_CONFIG_NAME, "601"),
    IRS_BLACKFRIDAY_ALLDEPT: (0, _get2.default)(p13nConfig, configNames.IRS_BLACKFRIDAY_ALLDEPT_NAME, "8907726"),
    IRS_VOD_TEMPO_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_VOD_TEMPO_CONFIG_NAME),
    IRS_REVIEW_MIDDLE_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_REVIEW_MIDDLE_CONFIG_NAME),
    IRS_REVIEW_RVI_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_REVIEW_RVI_CONFIG_NAME),
    IRS_COLLECTION_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_COLLECTION_CONFIG_NAME, "401"),
    IRS_CONTINUE_SHOPPING_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_CONTINUE_SHOPPING_CONFIG_NAME, "112"),
    IRS_METADATA_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_METADATA_CONFIG_NAME),
    IRS_HP_METADATA_RVI_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_HP_METADATA_RVI_CONFIG_NAME, "6"),
    IRS_PRODUCT_METADATA_RVI_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PRODUCT_METADATA_RVI_CONFIG_NAME, "2"),
    IRS_STOREFINDER_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_STOREFINDER_CONFIG_NAME),
    IRS_PRODUCT_SEM_CONFIG: (0, _get2.default)(p13nConfig, configNames.IRS_PRODUCT_SEM_CONFIG_NAME), // 106
    IRS_DISABLE_MODULES_ON_PAGE: (0, _get2.default)(p13nConfig, configNames.IRS_DISABLE_MODULES_ON_PAGE_NAME),
    IRS_ALLOWED_CATEGORY: (0, _get2.default)(p13nConfig, configNames.IRS_ALLOWED_CATEGORY_NAME),
    IRS_AJAX_MODULES: (0, _get2.default)(p13nConfig, configNames.IRS_AJAX_MODULES_NAME),
    IRS_AJAX_FALLBACK: (0, _get2.default)(p13nConfig, configNames.IRS_AJAX_FALLBACK_NAME),
    IRS_ENABLE_AB_TEST: Boolean((0, _get2.default)(p13nConfig, configNames.IRS_ENABLE_AB_TEST_NAME)),
    IRS_SHOW_SHIPPING_PASS: Boolean((0, _get2.default)(p13nConfig, configNames.IRS_SHOW_SHIPPING_PASS_NAME)),
    IRS_VOD_ZONE_MAP: (0, _get2.default)(p13nConfig, configNames.IRS_VOD_ZONE_MAP_NAME),
    IRS_REACT_PAGES: (0, _get2.default)(p13nConfig, configNames.IRS_REACT_PAGES, "")
  };
};

var getIrsHomepageConfig = exports.getIrsHomepageConfig = function getIrsHomepageConfig(config) {
  return config.IRS_HOMEPAGE_CONFIG;
};

var getIrsCollectionConfig = exports.getIrsCollectionConfig = function getIrsCollectionConfig(config) {
  return config.IRS_COLLECTION_CONFIG;
};

var getIrsCategoryConfig = exports.getIrsCategoryConfig = function getIrsCategoryConfig(config) {
  return config.IRS_CATEGORY_CONFIG;
};

var getPageConfig = exports.getPageConfig = function getPageConfig(page, config) {
  var result = void 0;
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
      result = (0, _get2.default)(config.P13N_CONFIG, configNames[page], "");
      break;
  }
  return result;
};

var getIrsUrl = exports.getIrsUrl = function getIrsUrl(config) {
  return config.IRS_URL;
};

var getReactPages = exports.getReactPages = function getReactPages(config) {
  return config.IRS_REACT_PAGES;
};

var getAjaxModules = exports.getAjaxModules = function getAjaxModules(config) {
  return config.IRS_AJAX_MODULES;
};

var getAddToCartEndpoint = exports.getAddToCartEndpoint = function getAddToCartEndpoint() {
  var config = (0, _get2.default)(_electrodeUiConfig2.default.ccm, "groupP13n.desktop.electrodeP13n", {});
  var hasCID = (0, _get2.default)(config, "atc.hasCID", "");
  var hName = (0, _get2.default)(config, "atc.hostName", "");
  var url = (0, _get2.default)(config, "atc.url", "");
  var hasCRT = (0, _get2.default)(config, "atc.hasCRT", "");

  if (_electrodeCookies2.default.get(hasCRT) === "1") {
    var urlUpdated = url.replace("$", ":CRT");

    return hName !== "" ? "" + hName + urlUpdated : "" + urlUpdated;
  }

  var customerStatus = _electrodeCookies2.default.get(hasCID) === "1" ? "customer" : "guest";
  var customerStatusString = customerStatus + "/:CID";
  var urlCustomerStatus = url.replace("$", customerStatusString);

  return hName !== "" ? "" + hName + urlCustomerStatus : "" + urlCustomerStatus;
};