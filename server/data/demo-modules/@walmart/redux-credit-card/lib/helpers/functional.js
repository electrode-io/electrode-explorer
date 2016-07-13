"use strict";

exports.__esModule = true;
exports.replaceWith = exports.takeUntil = undefined;

var _matches = require("lodash/matches");

var _matches2 = _interopRequireDefault(_matches);

var _takeWhile = require("lodash/takeWhile");

var _takeWhile2 = _interopRequireDefault(_takeWhile);

var _drop = require("lodash/drop");

var _drop2 = _interopRequireDefault(_drop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var takeUntil = function takeUntil(arr, pred) {
  return (0, _takeWhile2.default)(arr, function (v) {
    return !(0, _matches2.default)(pred)(v);
  });
};
/**
 * Similar to a non mutable splice, match an item and replace it with new ones
 * @param {[]} arr - your array
 * @param {object} pred - predicate for the item to be removed, lodash/matches styled
 * @param {...object} newParts - any new items you want to inject where the old item were
 * @returns {[]} the resulting array
 */
var replaceWith = function replaceWith(arr, pred) {
  var head = takeUntil(arr, pred);
  var tail = (0, _drop2.default)(arr, head.length + 1);

  for (var _len = arguments.length, newParts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    newParts[_key - 2] = arguments[_key];
  }

  return [].concat(head, newParts, tail);
};

exports.takeUntil = takeUntil;
exports.replaceWith = replaceWith;