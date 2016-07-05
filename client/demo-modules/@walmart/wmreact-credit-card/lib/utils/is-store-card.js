"use strict";

exports.__esModule = true;

exports.default = function (_ref) {
  var cardType = _ref.cardType;

  // Only WMUSGESTORECARD is a store card, the other WM* ones are NOT.
  return cardType === "WMUSGESTORECARD";
};