"use strict";

exports.__esModule = true;
exports.buildPresoUri = undefined;

var _pick2 = require("lodash/object/pick");

var _pick3 = _interopRequireDefault(_pick2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MOBILE_PRG = "mWeb";

var buildPresoUri = exports.buildPresoUri = function buildPresoUri(_ref) {
  var categoryId = _ref.categoryId;
  var req = _ref.req;
  var isMobile = _ref.isMobile;

  /*eslint-disable camelcase */
  var url = req.url || {};

  var _ref2 = url.query || {};

  var search_redirect = _ref2.search_redirect;
  var redirect_query = _ref2.redirect_query;
  var _mock = _ref2._mock;
  var _empty = _ref2._empty;


  var queryParams = (0, _extends3.default)({ search_redirect: search_redirect, redirect_query: redirect_query, _mock: _mock, _empty: _empty }, { cat_id: categoryId });
  /*eslint-enable camelcase */

  var filteredQueryParams = (0, _pick3.default)(queryParams, function (value) {
    return value !== undefined;
  });

  if (isMobile) {
    filteredQueryParams.prg = MOBILE_PRG;
  }

  var queryToSend = _querystring2.default.stringify(filteredQueryParams);
  var headers = req.headers || {};

  return "http://" + headers.host + "/category/api/modules?" + queryToSend;
};