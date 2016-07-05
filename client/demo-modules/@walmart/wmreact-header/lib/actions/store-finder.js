"use strict";

exports.__esModule = true;
exports.fetchStores = exports.storesServiceRequest = exports.onServiceResponse = exports.getStoresServiceUrl = exports.fetchStoresError = exports.fetchStoresSuccess = exports.fetchStoresRequest = undefined;

var _jsonp2 = require("jsonp");

var _jsonp3 = _interopRequireDefault(_jsonp2);

var _types = require("../types");

var _storeFinderUtils = require("../utils/store-finder-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORE_URL = "/store/ajax/preferred-flyout";

// Sync actions
var fetchStoresRequest = exports.fetchStoresRequest = function fetchStoresRequest() {
  return {
    type: _types.HEADER_FETCH_STORES_REQUEST
  };
};

var fetchStoresSuccess = exports.fetchStoresSuccess = function fetchStoresSuccess(response) {
  return {
    type: _types.HEADER_FETCH_STORES_SUCCESS,
    response: response
  };
};

var fetchStoresError = exports.fetchStoresError = function fetchStoresError() {
  return {
    type: _types.HEADER_FETCH_STORES_ERROR
  };
};

var getStoresServiceUrl = exports.getStoresServiceUrl = function getStoresServiceUrl(storeFinderUrl, location) {
  var url = storeFinderUrl || STORE_URL;
  if (location) {
    var latitude = location.latitude;
    var longitude = location.longitude;

    url = url + "?latitude=" + latitude + "&longitude=" + longitude;
  }
  return url;
};

var onServiceResponse = exports.onServiceResponse = function onServiceResponse(err, data, dispatch) {
  if (err) {
    dispatch(fetchStoresError());
    return;
  }
  dispatch(fetchStoresSuccess({ stores: data, status: 200 }));
};

var storesServiceRequest = exports.storesServiceRequest = function storesServiceRequest(_ref) {
  var storeFinderUrl = _ref.storeFinderUrl;
  var location = _ref.location;
  var _jsonp = _ref._jsonp;
  var dispatch = _ref.dispatch;

  var url = getStoresServiceUrl(storeFinderUrl, location);
  var options = { timeout: 500 };
  _jsonp(url, options, function (err, data) {
    onServiceResponse(err, data, dispatch);
  });
};

// async actions
var fetchStores = exports.fetchStores = function fetchStores(storeFinderUrl) {
  var _getLocation = arguments.length <= 1 || arguments[1] === undefined ? _storeFinderUtils.getLocation : arguments[1];

  var _jsonp = arguments.length <= 2 || arguments[2] === undefined ? _jsonp3.default : arguments[2];

  return function (dispatch) {
    dispatch(fetchStoresRequest());
    _getLocation().then(function (location) {
      storesServiceRequest({ storeFinderUrl: storeFinderUrl, location: location, _jsonp: _jsonp, dispatch: dispatch });
    }).catch(function () {
      dispatch(fetchStoresError());
    });
  };
};