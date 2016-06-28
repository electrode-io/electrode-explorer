"use strict";

exports.__esModule = true;
exports.checkTrending = exports.iniRecentlyViewedItem = exports.addRecentlyViewedItem = exports.getRecentlyViewedItems = exports.getCurrentList = exports.clearCurrentList = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _isArray = require("lodash/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _without = require("lodash/without");

var _without2 = _interopRequireDefault(_without);

var _dropRight = require("lodash/dropRight");

var _dropRight2 = _interopRequireDefault(_dropRight);

var _uniq = require("lodash/uniq");

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localStorageName = "rvis";
var totalCount = 9;
var isCompatible = typeof window !== "undefined";

var clearCurrentList = exports.clearCurrentList = function clearCurrentList() {
  /* eslint-disable no-undef */
  localStorage.removeItem(localStorageName);
};

var getCurrentList = exports.getCurrentList = function getCurrentList() {
  /* eslint-disable no-undef */
  var currentValue = localStorage.getItem(localStorageName);
  var current = void 0;
  if (currentValue) {
    try {
      current = JSON.parse(currentValue);
    } catch (exception) {
      clearCurrentList();
    }
    if (!(0, _isArray2.default)(current)) {
      current = [];
    }
  } else {
    current = [];
  }
  return current;
};

var getRecentlyViewedItems = exports.getRecentlyViewedItems = function getRecentlyViewedItems(excludeItemId) {
  if (!isCompatible) {
    return [];
  }
  var recentlyViewedItems = getCurrentList();
  return excludeItemId ? (0, _without2.default)(recentlyViewedItems, excludeItemId) : recentlyViewedItems;
};

var addRecentlyViewedItem = exports.addRecentlyViewedItem = function addRecentlyViewedItem(itemId) {
  /* eslint-disable no-undef */
  var currentList = getCurrentList();
  // Add itemId to beginning of the array. Most recently viewed item first.
  currentList.unshift(itemId);
  var updatedList = (0, _dropRight2.default)((0, _uniq2.default)(currentList), currentList.length - totalCount);
  localStorage.setItem(localStorageName, (0, _stringify2.default)(updatedList));
};

var iniRecentlyViewedItem = exports.iniRecentlyViewedItem = function iniRecentlyViewedItem() {
  /* eslint-disable no-undef */
  var currentList = ["46519410", "49072427", "46429973", "48174532", "40572267"];
  if (isCompatible) {
    localStorage.setItem(localStorageName, (0, _stringify2.default)(currentList));
  }
};

var checkTrending = exports.checkTrending = function checkTrending(parentEntities, products, selectedIndex) {
  var parentItemId = parentEntities[selectedIndex].usItemId;
  var itemId = products[0].usItemId;
  return parentItemId !== itemId;
};