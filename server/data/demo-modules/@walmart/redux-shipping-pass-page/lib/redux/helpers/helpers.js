"use strict";

exports.__esModule = true;
var checkLifecycleStatus = function checkLifecycleStatus(status) {
  if (status === "TRIAL") {
    return true;
  }
  return false;
};

var checkCardValidity = function checkCardValidity(status) {
  if (status === "VALID") {
    return true;
  }
  return false;
};

var formatDate = function formatDate(dateString) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var date = new Date(dateString);
  var month = months[date.getMonth()];
  var day = date.getDate().toString();
  var year = date.getFullYear().toString();

  return month + " " + day + ", " + year;
};

exports.checkLifecycleStatus = checkLifecycleStatus;
exports.checkCardValidity = checkCardValidity;
exports.formatDate = formatDate;