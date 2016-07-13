"use strict";

exports.__esModule = true;
exports.fetchStoresRequest = undefined;

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

var _reduxActions = require("redux-actions");

var _actionTypes = require("../actions/action-types");

var _electrodeFetch = require("@walmart/electrode-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onHeaderFetchStoresRequest = (0, _reduxActions.createAction)(_actionTypes.HEADER_FETCH_STORES_REQUEST);
var onHeaderFetchStoresSuccess = (0, _reduxActions.createAction)(_actionTypes.HEADER_FETCH_STORES_SUCCESS);
var onHeaderFetchStoresError = (0, _reduxActions.createAction)(_actionTypes.HEADER_FETCH_STORES_ERROR);

var generateQueryParams = function generateQueryParams(_ref) {
  var _ref$singleLineAddr = _ref.singleLineAddr;
  var singleLineAddr = _ref$singleLineAddr === undefined ? null : _ref$singleLineAddr;
  var _ref$distance = _ref.distance;
  var distance = _ref$distance === undefined ? _config2.default.defaultDistance : _ref$distance;
  var _ref$nbrOfStores = _ref.nbrOfStores;
  var nbrOfStores = _ref$nbrOfStores === undefined ? _config2.default.defaultNbrOfStores : _ref$nbrOfStores;
  var _ref$storeTypes = _ref.storeTypes;
  var storeTypes = _ref$storeTypes === undefined ? _config2.default.defaultStoreTypes : _ref$storeTypes;

  var result = ["singleLineAddr=" + singleLineAddr, "distance=" + distance, "nbrOfStores=" + nbrOfStores, "storeTypes=" + storeTypes];

  return "?" + result.join("&");
};

var fetchStoresRequest = exports.fetchStoresRequest = function fetchStoresRequest(args) {
  var queryParams = generateQueryParams(args);
  return function (dispatch) {
    onHeaderFetchStoresRequest();
    return (0, _electrodeFetch.fetch)(_config2.default.apiFullPath + queryParams, {
      method: "GET",
      mode: "cors",
      headers: {
        "Accept": "application/json"
      }
    }).then(function (response) {
      dispatch(onHeaderFetchStoresSuccess(response));
    }).catch(function (err) {
      dispatch(onHeaderFetchStoresError(err));
    });
  };
};