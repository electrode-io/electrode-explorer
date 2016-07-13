"use strict";

exports.__esModule = true;
exports.getRecentlyViewedItemIds = exports.clearCookie = exports._parseCookie = exports._toString = exports._setCookie = exports._getCookie = exports.exist = exports.getDomainName = undefined;

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _filter = require("lodash/filter");

var _filter2 = _interopRequireDefault(_filter);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _each = require("lodash/each");

var _each2 = _interopRequireDefault(_each);

var _zipObject = require("lodash/zipObject");

var _zipObject2 = _interopRequireDefault(_zipObject);

var _isUndefined = require("lodash/isUndefined");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _compact = require("lodash/compact");

var _compact2 = _interopRequireDefault(_compact);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPS_COOKIE = "sps";
var DOMAIN_NAME = ".walmart.com";
var ENTRY_DEL = "|";
var KEY_DEL = "$";
var ITEM_DEL = ";";
var COMMA = ";";
var ITEM_ATTR = ["itemid", "catid"]; // each item attr
var ITEM_KEY = "i";

var getDomainName = exports.getDomainName = function getDomainName() {
  var hostName = window.location.hostname;
  var returnValue = void 0;
  if ((0, _isUndefined2.default)(hostName)) {
    return DOMAIN_NAME;
  }
  returnValue = hostName.split(".");
  returnValue = "." + returnValue.slice(returnValue.length - 2, returnValue.length).join(".");
  return returnValue;
};

var exist = exports.exist = function exist() {
  return !(0, _isUndefined2.default)(_electrodeCookies2.default.get(SPS_COOKIE));
};

var _getCookie = exports._getCookie = function _getCookie() {
  return _electrodeCookies2.default.get(SPS_COOKIE);
};

var _setCookie = exports._setCookie = function _setCookie(cookieString) {
  var domainName = getDomainName();
  _electrodeCookies2.default.set(SPS_COOKIE, cookieString, { path: "/", domain: domainName });
};

var _toString = exports._toString = function _toString(cookieObject) {
  return (0, _map2.default)(cookieObject, function (actAry, actKey) {
    var itemStr = (0, _compact2.default)((0, _map2.default)(actAry, function (itemObj) {
      var entryStr = (0, _compact2.default)((0, _map2.default)(ITEM_ATTR, function (attr) {
        return itemObj[attr];
      })).join(COMMA);
      if (entryStr.length > 0) {
        return entryStr + ITEM_DEL;
      }
    })).join("");
    if (itemStr.length > 0) {
      return actKey + KEY_DEL + itemStr;
    }
  }).join(ENTRY_DEL);
};

/**
 * Give an curie string, parses the string to create a curie object
 * cookieStr = c$1,2,3;|d$4,5,6;7,8,9;
 * cookie[c] = "1,2,3;4,5,6"
 * cookie[c][itemid] = "1,2,3;"
 * @param {String} cookieString string of cookie
 * @returns {Object} cookie object
 * @private
 */
var _parseCookie = exports._parseCookie = function _parseCookie(cookieString) {
  var cookie = {};
  if (!cookieString) {
    return cookie;
  }
  var keyEntries = (0, _filter2.default)(cookieString.split(ENTRY_DEL), function (e) {
    return !(0, _isEmpty2.default)(e);
  });

  if ((0, _isEmpty2.default)(keyEntries)) {
    return cookie;
  }

  (0, _each2.default)(keyEntries, function (keyEntry) {
    var keyItems = keyEntry.split(KEY_DEL);
    var key = keyItems[0];
    var items = keyItems[1];

    if ((0, _isEmpty2.default)(key) || (0, _isEmpty2.default)(items)) {
      return;
    }

    var itemList = (0, _filter2.default)(items.split(ITEM_DEL), function (e) {
      return !(0, _isEmpty2.default)(e);
    });

    cookie[key] = [];
    (0, _each2.default)(itemList, function (itemData) {
      var item = itemData.split(COMMA);
      var itemObj = (0, _zipObject2.default)(ITEM_ATTR, item);
      cookie[key].push(itemObj);
    });
  });

  return cookie;
};

var clearCookie = exports.clearCookie = function clearCookie() {
  if (!exist()) {
    return;
  }
  var cookieVal = _getCookie();
  var cookie = _parseCookie(cookieVal);
  cookie[ITEM_KEY] = [];
  _setCookie(_toString(cookie));
};

var getRecentlyViewedItemIds = exports.getRecentlyViewedItemIds = function getRecentlyViewedItemIds(cookieString) {
  var cookieObj = _parseCookie(cookieString);
  var itemsAry = cookieObj[ITEM_KEY];
  var rvis = [];
  (0, _map2.default)(itemsAry, function (itemObj) {
    var itemId = itemObj.itemid.substring(0, 8);
    rvis.push(itemId);
  });
  return rvis.toString();
};