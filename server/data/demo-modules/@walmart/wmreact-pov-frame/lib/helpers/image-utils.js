"use strict";

exports.__esModule = true;
exports.getTorbitImage = undefined;

var _imageUtils = require("@walmart/wmreact-image-utils/lib/utils/image-utils");

var POV_IMAGE = {
  mobile: {
    height: 178,
    width: 809
  },
  desktop: {
    height: 300,
    width: 1364
  }
};

var getTorbitImage = exports.getTorbitImage = function getTorbitImage(imageUrl, isMobile) {
  var _POV_IMAGE = POV_IMAGE[isMobile ? "mobile" : "desktop"];
  var height = _POV_IMAGE.height;
  var width = _POV_IMAGE.width;

  return (0, _imageUtils.checkImageSrc)(imageUrl, height, width);
};