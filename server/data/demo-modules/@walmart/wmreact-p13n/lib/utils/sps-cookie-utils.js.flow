import map from "lodash/map";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";
import each from "lodash/each";
import zipObject from "lodash/zipObject";
import isUndefined from "lodash/isUndefined";
import compact from "lodash/compact";
import Cookies from "@walmart/electrode-cookies";

const SPS_COOKIE = "sps";
const DOMAIN_NAME = ".walmart.com";
const ENTRY_DEL = "|";
const KEY_DEL = "$";
const ITEM_DEL = ";";
const COMMA = ";";
const ITEM_ATTR = ["itemid", "catid"];  // each item attr
const ITEM_KEY = "i";

export const getDomainName = () => {
  const hostName = window.location.hostname;
  let returnValue;
  if (isUndefined(hostName)) {
    return DOMAIN_NAME;
  }
  returnValue = hostName.split(".");
  returnValue = "." + returnValue.slice(returnValue.length - 2, returnValue.length).join(".");
  return returnValue;
};

export const exist = () => {
  return !isUndefined(Cookies.get(SPS_COOKIE));
};

export const _getCookie = () => {
  return Cookies.get(SPS_COOKIE);
};

export const _setCookie = (cookieString) => {
  const domainName = getDomainName();
  Cookies.set(SPS_COOKIE, cookieString, { path: "/", domain: domainName });
};

export const _toString = (cookieObject) => {
  return map(cookieObject, (actAry, actKey) => {
    const itemStr = compact(map(actAry, (itemObj) => {
      const entryStr = compact(map(ITEM_ATTR, (attr) => itemObj[attr])).join(COMMA);
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
export const _parseCookie = (cookieString) => {
  const cookie = {};
  if (!cookieString) {
    return cookie;
  }
  const keyEntries = filter(cookieString.split(ENTRY_DEL), (e) => {
    return !isEmpty(e);
  });

  if (isEmpty(keyEntries)) {
    return cookie;
  }

  each(keyEntries, (keyEntry) => {
    const keyItems = keyEntry.split(KEY_DEL);
    const key = keyItems[0];
    const items = keyItems[1];

    if (isEmpty(key) || isEmpty(items)) {
      return;
    }

    const itemList = filter(items.split(ITEM_DEL), (e) => {
      return !isEmpty(e);
    });

    cookie[key] = [];
    each(itemList, (itemData) => {
      const item = itemData.split(COMMA);
      const itemObj = zipObject(ITEM_ATTR, item);
      cookie[key].push(itemObj);
    });
  });

  return cookie;
};

export const clearCookie = () => {
  if (!exist()) {
    return;
  }
  const cookieVal = _getCookie();
  const cookie = _parseCookie(cookieVal);
  cookie[ITEM_KEY] = [];
  _setCookie(_toString(cookie));
};

export const getRecentlyViewedItemIds = (cookieString) => {
  const cookieObj = _parseCookie(cookieString);
  const itemsAry = cookieObj[ITEM_KEY];
  const rvis = [];
  map(itemsAry, (itemObj) => {
    const itemId = itemObj.itemid.substring(0, 8);
    rvis.push(itemId);
  });
  return rvis.toString();
};
