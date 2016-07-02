"use strict";

exports.__esModule = true;
exports.isCollapsable = exports.isUnavailable = exports.isDisabled = undefined;

var _availabilityStatus = require("../enums/availability-status");

var isDisabled = exports.isDisabled = function isDisabled(_ref) {
  var status = _ref.status;

  return status === _availabilityStatus.OUT_OF_STOCK;
};

var isUnavailable = exports.isUnavailable = function isUnavailable(_ref2) {
  var status = _ref2.status;

  return status === _availabilityStatus.NOT_AVAILABLE;
};

var isCollapsable = exports.isCollapsable = function isCollapsable(_ref3) {
  var swatchToggleCount = _ref3.swatchToggleCount;
  var variants = _ref3.variants;

  return variants.length > swatchToggleCount;
};