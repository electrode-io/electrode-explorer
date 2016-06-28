"use strict";

exports.__esModule = true;
exports.recommendationMap = exports.visitorId = exports.resultDetail = exports.irsDataMap = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _index = require("../actions/index");

var _redux = require("redux");

var _p13nUtils = require("../utils/p13n-utils");

var _addToCart = require("./add-to-cart");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var irsDataMap = exports.irsDataMap = function irsDataMap() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _index.RECEIVE_IRSDATAMAP:
      if (action.irsDataMap) {
        var irsDataObj = (0, _get2.default)(action, "irsDataMap", {});
        var _resultDetail = (0, _get2.default)(action, "resultDetail", {});
        var _visitorId = (0, _get2.default)(action, "visitorId", "");

        var _transformModules = (0, _p13nUtils.transformModules)({
          irsDataObj: irsDataObj,
          resultDetail: _resultDetail,
          visitorId: _visitorId
        });

        var adaptedData = _transformModules.adaptedData;

        return (0, _objectAssign2.default)({}, state, (0, _extends3.default)({}, adaptedData));
      }
      return state;
    case _index.invalidateRecommendation:
      if (action.err) {
        return (0, _objectAssign2.default)({}, state, {
          err: (0, _get2.default)(action, "err", {})
        });
      }
      return state;
    default:
      return state;
  }
};

var resultDetail = exports.resultDetail = function resultDetail() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _index.RECEIVE_IRSDATAMAP:
      if (action.resultDetail) {
        var resultDetailObj = (0, _get2.default)(action, "resultDetail", {});
        return (0, _objectAssign2.default)({}, state, resultDetailObj);
      }
      return state;
    default:
      return state;
  }
};

var visitorId = exports.visitorId = function visitorId() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _index.RECEIVE_IRSDATAMAP:
      if (action.visitorId) {
        var visitorIdx = (0, _get2.default)(action, "visitorId", "");
        return (0, _objectAssign2.default)({}, state, visitorIdx);
      }
      return state;
    default:
      return state;
  }
};

var recommendationMap = exports.recommendationMap = (0, _redux.combineReducers)({
  irsDataMap: irsDataMap,
  resultDetail: resultDetail,
  visitorId: visitorId,
  addToCartStatus: _addToCart.addToCartStatus
});

exports.default = recommendationMap;