"use strict";

exports.__esModule = true;

var _availabilityStatus = require("../enums/availability-status");

var _isInStock = function _isInStock(availabilityStatus) {
  return availabilityStatus === _availabilityStatus.IN_STOCK;
};

var OfferUtils = {
  isInStock: _isInStock
};

exports.default = OfferUtils;