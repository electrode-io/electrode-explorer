"use strict";

exports.__esModule = true;
var LEVEL = {
  1: "very weak",
  2: "weak",
  3: "medium",
  4: "good",
  5: "strong"
};

exports.default = function (strength) {
  if (!strength) {
    return {};
  }

  var percentage = strength / 5 * 100;

  return {
    strength: strength,
    percentage: percentage,
    level: LEVEL[strength]
  };
};