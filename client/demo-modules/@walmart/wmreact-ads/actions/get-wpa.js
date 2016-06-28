"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrapWpa = exports.ajaxRender = exports.fetchWpa = exports.wpaRendered = exports.receiveWpa = exports.requestWpa = exports.invalidateWpa = exports.WPA_RENDERED = exports.INVALIDATE_WPA = exports.RECEIVE_WPA = exports.REQUEST_WPA = undefined;

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _wpaUtils = require("../utils/wpa-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_WPA = exports.REQUEST_WPA = "REQUEST_WPA";
var RECEIVE_WPA = exports.RECEIVE_WPA = "RECEIVE_WPA";
var INVALIDATE_WPA = exports.INVALIDATE_WPA = "INVALIDATE_WPA";
var WPA_RENDERED = exports.WPA_RENDERED = "WPA_RENDERED";
var invalidateWpa = exports.invalidateWpa = function invalidateWpa(err) {
  return {
    type: INVALIDATE_WPA,
    err: err
  };
};

var requestWpa = exports.requestWpa = function requestWpa(pageType, pageId) {
  return {
    type: REQUEST_WPA,
    pageType: pageType,
    pageId: pageId
  };
};

var receiveWpa = exports.receiveWpa = function receiveWpa(json) {
  return {
    type: RECEIVE_WPA,
    result: json
  };
};

var wpaRendered = exports.wpaRendered = function wpaRendered(onRenderParams) {
  return {
    type: WPA_RENDERED,
    parameters: _queryString2.default.parse(onRenderParams.parameters),
    adaptedData: onRenderParams.adaptedData
  };
};

var fetchWpa = exports.fetchWpa = function fetchWpa(props) {
  return (0, _electrodeFetch.fetchJSON)((0, _wpaUtils.buildWpaUri)(props));
};

var ajaxRender = exports.ajaxRender = function ajaxRender(props) {
  return function (dispatch) {
    return fetchWpa(props).then(function (responseJSON) {
      if (responseJSON.hasOwnProperty("result") && responseJSON.status === "SUCCESS") {
        dispatch(receiveWpa(responseJSON.result));
      }
    }).catch(function (err) {
      throw err;
    });
  };
};

var bootstrapWpa = exports.bootstrapWpa = function bootstrapWpa(pageType, pageId, headers) {
  return function (dispatch) {
    var props = {
      pageId: pageId,
      pageType: pageType,
      headers: headers
    };
    if ((0, _wpaUtils.showWpaComponent)(props) && !(0, _wpaUtils.ajaxRenderComponent)(props)) {
      return fetchWpa(props).then(function (responseJSON) {
        if (responseJSON.hasOwnProperty("result") && responseJSON.status === "SUCCESS") {
          dispatch(receiveWpa(responseJSON.result));
        }
      }).catch(function (err) {
        throw err;
      });
    }
  };
};