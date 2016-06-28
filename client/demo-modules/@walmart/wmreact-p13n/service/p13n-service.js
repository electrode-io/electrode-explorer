"use strict";

exports.__esModule = true;
exports.irsServiceFetch = exports.buildURLString = undefined;

var _queryString = require("query-string");

var _queryString2 = _interopRequireDefault(_queryString);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _p13nConfig = require("../config/p13n-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULES_BIT_FIELD_VALUE = "0";
var API_KEY_VALUE = "01";

var buildURLString = exports.buildURLString = function buildURLString(request) {
  var query = request.query;

  var irsConfig = (0, _p13nConfig.getIrsConfig)(request);
  var configId = (0, _p13nConfig.getPageConfig)(query.page, irsConfig);
  /* jshint camelcase: false */
  var parameters = {
    "modules_bit_field": MODULES_BIT_FIELD_VALUE,
    "api_key": API_KEY_VALUE,
    "config_id": configId,
    "module": query.page
  };
  /* jshint camelcase: true */
  var optionString = _queryString2.default.stringify(parameters) + "&" + _queryString2.default.stringify(query);
  return (0, _p13nConfig.getIrsUrl)(irsConfig) + "?" + optionString;
};

var irsServiceFetch = exports.irsServiceFetch = function irsServiceFetch(request, reply) {
  var query = request.query;

  if (!query) {
    return reply().code(500);
  } else {
    var irsUrl = buildURLString(request);
    return (0, _electrodeFetch.fetchJSON)(irsUrl, {
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
};