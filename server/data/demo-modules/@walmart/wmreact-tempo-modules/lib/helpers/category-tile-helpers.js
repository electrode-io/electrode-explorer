"use strict";

exports.__esModule = true;
// condition to check if category tiles should be added. tile should have an image and link
var validCategoryTile = function validCategoryTile(category) {
  var image = category.image;
  var productImageSrc = category.productImageSrc;
  var link = category.link;

  return !!((image && image.src || productImageSrc) && link && link.clickThrough);
};

exports.default = validCategoryTile;