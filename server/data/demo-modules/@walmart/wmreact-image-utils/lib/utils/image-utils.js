"use strict";

exports.__esModule = true;
var EMPTY_IMAGE_SRC = exports.EMPTY_IMAGE_SRC = "//i5.walmartimages.com/dfw/63fd9f59-21dc/k2-_29be935d-2f27-4030-949a-59d29ead73e1.v1.jpg";

var TORBIT_REGEX = /\bodn(Height|Width)=\w+\b/i;

var removeProtocol = function removeProtocol(src) {
  return src.replace(/^(https?):/i, "");
};

var torbitParams = function torbitParams(height, width) {
  return "odnWidth=" + width + "&odnHeight=" + height;
};

var url = function url(src, height, width, queries) {
  // eslint-disable-line
  if (queries && queries.length) {
    return src + "?" + torbitParams(height, width) + "&" + queries.join("&");
  } else {
    return src + "?" + torbitParams(height, width);
  }
};

var checkImageSrc = exports.checkImageSrc = function checkImageSrc(src, height, width) {
  // if no src specified, then return empty image src default
  if (!(src && src.length)) {
    return url(EMPTY_IMAGE_SRC, height, width);
  }

  src = removeProtocol(src);
  // if there is no query params, then return src with torbit params
  if (src.indexOf("?") < 0) {
    return url(src, height, width);
  }

  // Handle pre-existing query parameters

  var _src$split = src.split("?");

  var path = _src$split[0];
  var q = _src$split[1];

  var args = q && q.length && q.indexOf("&") > -1 && q.split("&") || [];
  // only retain non-torbit image params
  var queries = args.filter(function (arg) {
    return arg && arg.length && arg.match(TORBIT_REGEX) ? null : arg;
  });

  // return url with torbit image query params and pre-existing params
  if (queries.length) {
    return url(path, height, width, queries);
  }

  return url(path, height, width);
};