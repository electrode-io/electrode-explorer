"use strict";

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _wpaUtils = require("../utils/wpa-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WpaConfig = require("../config/wpa-config");


var wpaService = {
  buildURLString: function buildURLString(request) {
    var query = request.query;

    var wpaConfig = WpaConfig.getWpaConfig(request);

    var pageType = query.pageType;
    var pageId = query.pageId || "na";
    var parameters = query;

    if (!query.uid) {
      parameters.uid = (0, _wpaUtils.generateGuid)();
    }
    if (!query.type) {
      parameters.type = "product";
    }
    if (!query.module) {
      parameters.module = "wpa";
    }
    if (!query.platform) {
      parameters.platform = WpaConfig.getDeviceType(request);
    }

    var optionString = pageType + "/" + pageId + "?" + _queryString2.default.stringify(parameters);
    return wpaConfig.MIDAS_SERVICE_URL + "/v2/hl/" + optionString;
  },
  wpaServiceFetch: function wpaServiceFetch(request, reply) {
    var query = request.query;

    var propertyBlacklist = ["adaptedData", "onAjaxRender", "onRendered"];

    var opts = (0, _omit2.default)(query, propertyBlacklist);

    if ((0, _isEmpty2.default)(opts)) {
      return reply().code(500);
    } else {
      var wpaUrl = this.buildURLString(request);
      return (0, _electrodeFetch.fetchJSON)(wpaUrl, {
        method: "GET",
        headers: request.headers
      }).then(function (res) {
        if (res.status >= 400) {
          reply(res).code(res.status);
        }
        return res;
      }).then(function (data) {
        reply(data).code(200);
      }).catch(function (err) {
        reply(err).code(500);
      });
    }
  }
};

module.exports = wpaService;