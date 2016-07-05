"use strict";

module.exports = {
  // @usage: when month and day values are single digit, most often we prefix with 0
  //         along with the original digit
  // @param {Number} n
  // @returns {Number}

  addPaddingZero: function addPaddingZero(n) {
    return n < 10 ? "0" + n : "" + n;
  }
};