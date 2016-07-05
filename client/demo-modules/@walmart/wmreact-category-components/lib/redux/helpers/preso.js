"use strict";

exports.__esModule = true;
exports.isEmptyModules = exports.buildPresoUri = undefined;

var _pickBy2 = require("lodash/pickBy");

var _pickBy3 = _interopRequireDefault(_pickBy2);

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

  var filteredQueryParams = (0, _pickBy3.default)(queryParams, function (value) {
    return value !== undefined;
  });

  if (isMobile) {
    filteredQueryParams.prg = MOBILE_PRG;
  }

  var queryToSend = _querystring2.default.stringify(filteredQueryParams);
  var headers = req.headers || {};

  return "http://" + headers.host + "/category/api/modules?" + queryToSend;
};

var isEmptyModules = exports.isEmptyModules = function isEmptyModules(modules) {
  var _ref3 = modules || {};

  var _ref3$top = _ref3.top;
  var top = _ref3$top === undefined ? [] : _ref3$top;
  var _ref3$center = _ref3.center;
  var center = _ref3$center === undefined ? [] : _ref3$center;
  var _ref3$left = _ref3.left;
  var left = _ref3$left === undefined ? [] : _ref3$left;

  return !(top.length || center.length || left.length);
};