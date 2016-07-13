"use strict";

exports.__esModule = true;
exports.bootstrapP13N = exports.ajaxRequest = exports.p13nTileClicked = exports.receiveIrsDataMap = exports.requestRecommendation = exports.invalidateRecommendation = exports.selectRecommendation = exports.P13N_TILE_CLICKED = exports.P13N_RENDERED = exports.SELECT_RECOMMENDATION = exports.INVALIDATE_RECOMMENDATION = exports.RECEIVE_IRSDATAMAP = exports.REQUEST_RECOMMENDATION = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _spsCookieUtils = require("../utils/sps-cookie-utils");

var _p13nUtils = require("../utils/p13n-utils");

var _p13nFetcher = require("../service/p13n-fetcher");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REQUEST_RECOMMENDATION = exports.REQUEST_RECOMMENDATION = "REQUEST_RECOMMENDATION";
var RECEIVE_IRSDATAMAP = exports.RECEIVE_IRSDATAMAP = "RECEIVE_IRSDATAMAP";
var INVALIDATE_RECOMMENDATION = exports.INVALIDATE_RECOMMENDATION = "INVALIDATE_RECOMMENDATION";
var SELECT_RECOMMENDATION = exports.SELECT_RECOMMENDATION = "SELECT_RECOMMENDATION";
var P13N_RENDERED = exports.P13N_RENDERED = "P13N_RENDERED";
var P13N_TILE_CLICKED = exports.P13N_TILE_CLICKED = "P13N_TILE_CLICKED";

var selectRecommendation = exports.selectRecommendation = function selectRecommendation(productId) {
  return {
    type: SELECT_RECOMMENDATION,
    productId: productId
  };
};

var invalidateRecommendation = exports.invalidateRecommendation = function invalidateRecommendation(err) {
  return {
    type: INVALIDATE_RECOMMENDATION,
    err: err
  };
};

var requestRecommendation = exports.requestRecommendation = function requestRecommendation(opts) {
  return {
    type: REQUEST_RECOMMENDATION,
    opts: opts
  };
};

var receiveIrsDataMap = exports.receiveIrsDataMap = function receiveIrsDataMap(json, opts) {
  return {
    type: RECEIVE_IRSDATAMAP,
    irsDataMap: json.irsData,
    resultDetail: json.resultDetail,
    visitorId: json.visitorId,
    opts: opts
  };
};

var p13nTileClicked = exports.p13nTileClicked = function p13nTileClicked() {
  return {
    type: P13N_TILE_CLICKED
  };
};

var ajaxRequest = exports.ajaxRequest = function ajaxRequest(page, parentItemId) {
  var queryParams = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  return function (dispatch) {
    var spsCookie = decodeURIComponent((0, _p13nUtils.getCookie)("sps"));
    var visitorId = (0, _p13nUtils.getCookie)("vtc");
    parentItemId = parentItemId || (0, _spsCookieUtils.getRecentlyViewedItemIds)(spsCookie);
    var clientGuid = (0, _p13nUtils.generateGuid)();
    var opts = (0, _extends3.default)({}, queryParams, {
      page: page,
      visitorId: visitorId,
      parentItemId: parentItemId,
      clientGuid: clientGuid
    });
    dispatch(requestRecommendation(opts));
    return (0, _p13nFetcher.fetchIrsDataMap)(opts).then(function (responseJSON) {
      /* eslint-disable no-undef */
      var spinnerContainer = document.querySelector(".spinner-container");
      _reactDom2.default.unmountComponentAtNode(spinnerContainer);
      dispatch(receiveIrsDataMap(responseJSON, opts));
    }).catch(function (err) {
      throw err;
    });
  };
};

var bootstrapP13N = exports.bootstrapP13N = function bootstrapP13N(page, req) {
  var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  return function (dispatch) {
    var headers = req.headers;
    var spsCookie = decodeURIComponent(req.state.sps);
    var visitorId = req.state.vtc;
    var parentItemId = params.parent_item_id || (0, _spsCookieUtils.getRecentlyViewedItemIds)(spsCookie);
    var opts = (0, _extends3.default)({}, params, {
      page: page,
      visitorId: visitorId,
      parentItemId: parentItemId,
      headers: headers
    });
    if ((0, _p13nUtils.showP13NComponent)(opts) && !(0, _p13nUtils.ajaxRenderComponent)(opts)) {
      dispatch(requestRecommendation(opts));
      return (0, _p13nFetcher.fetchIrsDataMap)(opts).then(function (dataMap) {
        dispatch(receiveIrsDataMap(dataMap, opts));
      }).catch(function () {
        // If we have an error with the response don't render anything,
        // don't rethrow because that would cause the page request to return an error
        dispatch({});
      });
    }
  };
};