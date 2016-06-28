"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RELATIVE_URL_REGEX = /^[\/#]/;
var DEFAULT_HOST = "www.walmart.com";

/**
  Utility function for converting relative URLs to absolute ones
  @param {string} url - The URL to be converted
  @param {string} fullURL - Whether or not to convert URL (to avoid logic duplication)
  @param {string} host - Optional host to use when converting
  @returns {string} converted URL if applicable
*/
var completeURL = exports.completeURL = function completeURL(url, fullURL) {
  var host = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_HOST : arguments[2];

  if (fullURL && url && url.match(RELATIVE_URL_REGEX)) {
    return "//" + (host ? host : DEFAULT_HOST) + url;
  }
  return url;
};