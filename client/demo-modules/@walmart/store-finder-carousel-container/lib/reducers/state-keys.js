"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultKeys = {
  CURRENT_STORE_KEY: "currentStore",
  IS_SEARCHING_FOR_ZIP_KEY: "isSearchingForZip",
  IS_VISIBLE_KEY: "isVisible",
  IS_LOADING_KEY: "isLoading",
  FETCH_ERR_KEY: "fetchErr",
  STORES_KEY: "stores",
  ZIP_KEY: "zip"
};

exports.default = function (keyOverrides) {
  keyOverrides = keyOverrides || {};
  return (0, _extends3.default)({}, defaultKeys, keyOverrides);
};