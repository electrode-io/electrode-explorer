const common = require("./common");

module.exports = {
  /**
   * formatDate(price)
   * @param {String} date: unicode string of date
   * @returns {String} mm/dd/yyyy formatted date
   */
  formatDate(date) {
    date = new Date(+date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const prettyDate = common.addPaddingZero(month) + "/" + common.addPaddingZero(day) + "/" + year;
    return prettyDate;
  }
};
