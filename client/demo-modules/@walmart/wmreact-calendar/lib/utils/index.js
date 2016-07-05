"use strict";

exports.__esModule = true;
/**
 * Used to prevent passing an invalid date to <DatePicker/>, especially for use in custom triggers.
 * @param {string} date Date prop provided to <Calendar/>.
 * @returns {string|object|null} If prop is valid date, returns prop. Else returns null.
 */
var nullSafeDate = exports.nullSafeDate = function nullSafeDate(date) {
  var parsedDateProp = new Date(date);
  var isValidDate = !isNaN(parsedDateProp);

  if (isValidDate) {
    return date;
  }

  return null;
};