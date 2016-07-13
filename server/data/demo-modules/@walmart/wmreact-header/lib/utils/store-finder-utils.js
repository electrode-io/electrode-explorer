"use strict";

exports.__esModule = true;
exports.getLocation = exports.formatPosition = exports.getStoreFinderUrl = undefined;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

var _geolocate = require("@walmart/geolocate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* flow */


var geolocate = new _geolocate.Geolocate();

var STORE_FINDER_PAGE_URL = "/store/finder";
var LOCATION_COOKIE_NAME = "DL";

var getStoreFinderUrl = exports.getStoreFinderUrl = function getStoreFinderUrl(location) {
  return location ? STORE_FINDER_PAGE_URL + "?location=" + location : STORE_FINDER_PAGE_URL;
};

var formatPosition = exports.formatPosition = function formatPosition(_ref) {
  var coords = _ref.coords;

  if (coords) {
    var latitude = coords.latitude;
    var longitude = coords.longitude;

    if (latitude && longitude) {
      return { latitude: latitude, longitude: longitude };
    }
  }
};

var getLocation = exports.getLocation = function getLocation() {
  var locationFromCookie = _electrodeCookies2.default.get(LOCATION_COOKIE_NAME);
  return new _promise2.default(function (resolve, reject) {
    if (locationFromCookie) {
      resolve(null);
    } else {
      geolocate.getCurrentLocation().then(function (position) {
        resolve(formatPosition(position));
      }).catch(function (err) {
        reject(err);
      });
    }
  });
};