"use strict";

exports.__esModule = true;
exports.fetchIrsDataMap = exports.p13nFetch = exports.queryParams = undefined;

require("babel-polyfill");

var _extend = require("lodash/extend");

var _extend2 = _interopRequireDefault(_extend);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _electrodeUiConfig2 = _interopRequireDefault(_electrodeUiConfig);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _pick = require("lodash/pick");

var _pick2 = _interopRequireDefault(_pick);

var _p13nUtils = require("../utils/p13n-utils");

var _p13nRoutes = require("../routes/p13n-routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* jshint camelcase: false */
var queryParams = exports.queryParams = ["parent_item_id", "placement", "category", "strategy", "visitor_id", "to_shipping_threshold", "template", "filtered_items", "cache_pipeline"];
/* jshint camelcase: true */

var p13nFetch = exports.p13nFetch = function p13nFetch(opts) {
  if ((0, _isEmpty2.default)(opts)) {
    return null;
  }
  /* jshint camelcase: false */
  var parameters = (0, _extend2.default)((0, _pick2.default)(opts, queryParams), {
    "visitor_id": opts.visitorId,
    "parent_item_id": opts.parentItemId,
    "page": opts.page,
    "client_guid": opts.clientGuid
  });
  /* jshint camelcase: true */
  var url = typeof _electrodeUiConfig2.default.ui.p13nAPI === "undefined" || typeof _electrodeUiConfig2.default.ui.p13nAPI.p13nUrl === "undefined" ? _electrodeUiConfig2.default.ui.basePath : _electrodeUiConfig2.default.ui.p13nAPI.p13nUrl;
  var fetchUrl = "" + url + _p13nRoutes.irsPath + "?" + _queryString2.default.stringify(parameters);
  var fetchOpt = (0, _extend2.default)(opts, { method: "GET", credentials: "same-origin" });
  return (0, _electrodeFetch.fetchJSON)(fetchUrl, fetchOpt).then(function (res) {
    if (res.status >= 400) {
      return {
        err: "service response " + res.status
      };
    }
    return res;
  }).catch(function (err) {
    return { err: err };
  });
};

var fetchIrsDataMap = exports.fetchIrsDataMap = function fetchIrsDataMap(opts) {
  return p13nFetch(opts).then(function (responseJSON) {
    if (!responseJSON || !responseJSON.result.moduleList || !Array.isArray(responseJSON.result.moduleList)) {
      throw new Error("responseJSON did not contain valid result moduleList");
    }

    if (responseJSON.result.moduleList.length === 0) {
      throw new Error("responseJSON contained empty moduleList array");
    }
    var resultDetail = responseJSON.result.resultDetail;
    var irsData = responseJSON.result.moduleList.reduce(function (dataMap, module) {
      var placementId = (0, _p13nUtils.getPlacementSuffix)(module.placementId);
      dataMap[placementId] = module;
      return dataMap;
    }, {});
    return {
      irsData: irsData,
      resultDetail: resultDetail,
      visitorId: opts.visitorId
    };
  }).catch(function () {
    // If we have an error with the response don't render anything,
    // don't rethrow because that would cause the page request to return an error
    return {};
  });
};