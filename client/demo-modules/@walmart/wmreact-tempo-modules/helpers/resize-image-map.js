"use strict";

exports.__esModule = true;
/**
 * Resizes image maps proportionately to their corresponding image
 *
 * @param {Element} image DOM element of image to resize coordinates to
 * @param {String} originalCoords Original coordinates in comma separated string format
 * @param {object} naturalImageSize contains natural Image sizes.
 * @returns {String} adjusted coordinates
 */
var resizeImageMap = function resizeImageMap(image, originalCoords, naturalImageSize) {
  var complete = image.complete;
  var useMap = image.useMap;
  var actualWidth = image.width;
  var actualHeight = image.height;
  var naturalWidth = naturalImageSize.naturalWidth;
  var naturalHeight = naturalImageSize.naturalHeight;


  if (!complete || !useMap || actualWidth === naturalWidth && actualHeight === naturalHeight) {
    return originalCoords;
  }

  var resizeWidth = function resizeWidth(width) {
    return parseInt(width / naturalWidth * actualWidth);
  };
  var resizeHeight = function resizeHeight(height) {
    return parseInt(height / naturalHeight * actualHeight);
  };

  return originalCoords.map(function (coords) {
    return coords.split(",").map(function (coord, index) {
      return index % 2 === 0 ? resizeWidth(coord) : resizeHeight(coord);
    }).toString();
  });
};

exports.default = resizeImageMap;