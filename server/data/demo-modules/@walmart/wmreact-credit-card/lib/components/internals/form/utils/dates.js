"use strict";

exports.__esModule = true;
exports.getMonthsRange = getMonthsRange;
exports.getNextTenYears = getNextTenYears;
exports.isCardExpired = isCardExpired;
exports.parseDateParts = parseDateParts;

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _range = require("lodash/range");

var _range2 = _interopRequireDefault(_range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a number range representing all twelve months.
 *
 * Returns an array of numbers representing the months in a "MM" number format.
 * e.g. January, February, ... December => "01", "02", ... "12"
 */
/* eslint-disable func-style, valid-jsdoc */
// note: this code is more or less @walmart/wmreact-credit-card-info
// should be merged in some way in the future
function getMonthsRange() {
  var months = (0, _range2.default)(1, 13);

  return (0, _map2.default)(months, function (month) {
    if (month < 10) {
      // 1...9 => "01" ... "09"
      return "0" + month.toString();
    } else {
      // 10 => "10"
      return month.toString();
    }
  });
}

/**
 * Fetch the next ten years.
 *
 * Returns an array of ten, two digit numbers representing the next ten years.
 *
 * Take today's date and get the year, then increment by 10.
 * For each year in this range, (e.g. 2015 to 2025) convert the year to a string,
 *
 */
function getNextTenYears() {
  var today = new Date();
  var future = new Date();
  // range is non inclusive, so we'll need to add one.
  future.setFullYear(today.getFullYear() + 11);

  var years = (0, _range2.default)(today.getFullYear(), future.getFullYear());
  return (0, _map2.default)(years, function (year) {
    return year.toString();
  });
}

/**
 * Evaluates if the provided month and year is in the past.
 *
 * Takes in the month and year in "MM" and "YY" format, respetively.
 * Then converts these values into a Date object and returns a boolean
 * indicating whether this converted Date is before today's date.
 *
 * Note: I'm assuming it's safe to think this code won't be used 80+ years
 * from now. Which is to say, it's likely okay to assume all years passed in
 * will be within the 21st century.
 */
function isCardExpired(month, year, validDate) {
  var expirationDate = new Date(year, month);
  var today = validDate || new Date();

  // if the date is in the future, it will have more milliseconds than
  // today's date
  return expirationDate < today;
}

/**
 * Parses a string with the format YYYY-MM-DD
 * Needed as Date.parse(YYYY-MM-DD) parses date as local/UTC depending on browser
 * @param dateString string with the format YYYY-MM-DD
 * @returns {{year, month, day}}
 */
function parseDateParts() {
  var dateString = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

  var _dateString$split = dateString.split("-");

  var _dateString$split$ = _dateString$split[0];
  var year = _dateString$split$ === undefined ? "" : _dateString$split$;
  var _dateString$split$2 = _dateString$split[1];
  var month = _dateString$split$2 === undefined ? "" : _dateString$split$2;
  var _dateString$split$3 = _dateString$split[2];
  var day = _dateString$split$3 === undefined ? "" : _dateString$split$3;

  return { year: year, month: month, day: day };
}
/* eslint-enable func-style, valid-jsdoc */