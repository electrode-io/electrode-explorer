"use strict";

exports.__esModule = true;

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* globals navigator */

var defaults = {
  /**
   * Provides a hint that the application would like to receive the best possible results
   * @type {Boolean}
   */
  enableHighAccuracy: false,
  /**
   * Denotes the maximum length of time (in milliseconds)
   * @type {Number}
   */
  timeout: Infinity,
  /**
   * Indicates that the application is willing to accept a cached position whose age is no greater
   * than the specified time in milliseconds
   * @type {Number}
   */
  maximumAge: 0
};

/**
 * Errors
 * BROWSER_NOT_SUPPORTED: This error denotes that the current Browser does not support the
 *                        Geolocation API
 *
 * @type {Object}
 *
 */
var ERROR = {
  "BROWSER_NOT_SUPPORTED": "Browser does not support Geolocation API"
};

var Geolocate = function () {
  function Geolocate() {
    (0, _classCallCheck3.default)(this, Geolocate);
  }

  /**
   * Returns the getlocation data
   * @param {Object} options Optional options data
   *
   * @returns {Object} Position Returns a Position object with 'coords' and 'timestamp'
   */

  Geolocate.prototype.getCurrentLocation = function getCurrentLocation() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? (0, _extends3.default)({}, defaults, { options: options }) : arguments[0];

    var nav = this._getNavigator();

    return new _promise2.default(function (resolve, reject) {
      if (nav && nav.geolocation && typeof nav.geolocation.getCurrentPosition === "function") {
        nav.geolocation.getCurrentPosition(resolve, reject, options);
      } else {
        reject(ERROR.BROWSER_NOT_SUPPORTED);
      }
    });
  };

  /**
   * Returns the navigator object
   *
   * @returns {Object} navigator Returns browser's navigator object
   */


  Geolocate.prototype._getNavigator = function _getNavigator() {
    return navigator;
  };

  return Geolocate;
}();

exports.default = Geolocate;