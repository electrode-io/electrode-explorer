"use strict";

exports.__esModule = true;
exports.takeUntil = undefined;

var _matches = require("lodash/matches");

var _matches2 = _interopRequireDefault(_matches);

var _takeWhile = require("lodash/takeWhile");

var _takeWhile2 = _interopRequireDefault(_takeWhile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var takeUntil = function takeUntil(arr, pred) {
  return (0, _takeWhile2.default)(arr, function (v) {
    return !(0, _matches2.default)(pred)(v);
  });
};
exports.takeUntil = takeUntil;