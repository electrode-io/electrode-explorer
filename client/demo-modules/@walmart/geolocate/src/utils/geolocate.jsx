/* @flow */
/* globals navigator */

const defaults = {
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
const ERROR = {
  "BROWSER_NOT_SUPPORTED": "Browser does not support Geolocation API"
};

export default class Geolocate {
  /**
   * Returns the getlocation data
   * @param {Object} options Optional options data
   *
   * @returns {Object} Position Returns a Position object with 'coords' and 'timestamp'
   */
  getCurrentLocation(options: Object = { ...defaults, options}): Promise {
    const nav = this._getNavigator();

    return new Promise((resolve, reject) => {
      if (nav && nav.geolocation && typeof nav.geolocation.getCurrentPosition === "function") {
        nav.geolocation.getCurrentPosition(resolve, reject, options);
      } else {
        reject(ERROR.BROWSER_NOT_SUPPORTED);
      }
    });
  }

  /**
   * Returns the navigator object
   *
   * @returns {Object} navigator Returns browser's navigator object
   */
  _getNavigator(): Object {
    return navigator;
  }
}
