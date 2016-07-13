/*jshint bitwise: false*/
const currencyCode = "$";
/**
 * _format(price, n, x)
 *
 * @private
 * @param {Number} price: required. Price to be formatted
 * @param {integer} n: length of decimal. Default: 2 decimal
 * @param {integer} x: length of sections. Default: 3 sections
 * @returns {Number} formatted price
 */
const _format = function (price, n, x) {
  if (n === undefined) {
    n = 2;
  }
  const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return price.toFixed(Math.max(0, n)).replace(new RegExp(re, "g"), "$&,");
};

module.exports = {
  /**
   * Get the currency sign. used in multi-region support
   * @param {string} currencyCode: Default: "$". used to override with other country currency
   * @returns {*|string} currency sign
   */
  getCurrencyCode() {
    return "$";
  },

  /**
   * Format plain number into an currency or money
   * @param {string} price: required. Price to be formatted
   * @param {Number} n: length of decimal. Default: 2 decimal
   * @param {Number} x: length of sections. Default: 3 sections
   * @returns {string} formatted price
   */
  format(price, n, x) {
    if (!price) {
      return null;
    }
    return _format(price, n, x);
  },

  /**
   * formatUSD(price, currencyCode, n, x)
   *
   * @public
   * @param {Number} price: required. Price to be formatted
   * @param {Number} n: length of decimal. Default: 2 decimal,
   * @param {Number} x: length of sections. Default: 3 sections
   * @returns {string} formatted USD price
   */
  formatUSD(price, n, x) {
    if (!price) {
      return null;
    }
    return currencyCode + _format(price, n, x);
  },

  /**
   * formatPPU(price, currencyCode, format)
   *
   * @public
   * @param {Number} price: required. Price to be formatted
   * @param {Number} n: length of decimal. Default: 2 decimal,
   * @param {Number} x: length of sections. Default: 3 sections
   * @returns {string} formatted ppu price
   */
  formatPPU(price, n, x) {
    if (!price) {
      return null;
    }
    let ret;
    const p = parseFloat(_format(price, n, x));
    if (p >= 1) {
      ret = currencyCode + p.toFixed(2);
    } else {
      const _price = (price * 100).toFixed(1);
      ret = _price + "¢";
    }
    return ret;
  }
};
