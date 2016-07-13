/* eslint-disable func-style, valid-jsdoc */
// note: this code is more or less @walmart/wmreact-credit-card-info
// should be merged in some way in the future
import map from "lodash/map";
import range from "lodash/range";

/**
 * Get a number range representing all twelve months.
 *
 * Returns an array of numbers representing the months in a "MM" number format.
 * e.g. January, February, ... December => "01", "02", ... "12"
 */
export function getMonthsRange() {
  const months = range(1, 13);

  return map(months, (month) => {
    if (month < 10) { // 1...9 => "01" ... "09"
      return `0${month.toString()}`;
    } else { // 10 => "10"
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
export function getNextTenYears() {
  const today = new Date();
  const future = new Date();
  // range is non inclusive, so we'll need to add one.
  future.setFullYear(today.getFullYear() + 11);

  const years = range(today.getFullYear(), future.getFullYear());
  return map(years, (year) => {
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
export function isCardExpired(month, year, validDate) {
  const expirationDate = new Date(year, month);
  const today = validDate || new Date();

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
export function parseDateParts(dateString = "") {
  const [year = "", month = "", day = ""] = dateString.split("-");
  return {year, month, day};
}
/* eslint-enable func-style, valid-jsdoc */
