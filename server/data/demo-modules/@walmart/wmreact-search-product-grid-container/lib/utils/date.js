"use strict";

var common = require("./common");

module.exports = {
  /**
   * formatDate(price)
   * @param {String} date: unicode string of date
   * @returns {String} mm/dd/yyyy formatted date
   */

  formatDate: function formatDate(date) {
    date = new Date(+date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var prettyDate = common.addPaddingZero(month) + "/" + common.addPaddingZero(day) + "/" + year;
    return prettyDate;
  }
};