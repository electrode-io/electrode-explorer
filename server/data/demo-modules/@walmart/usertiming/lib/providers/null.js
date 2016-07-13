"use strict";

/**
  Empty implementation of User Timing API
  @return {Performance} performance - A no-op implementation of usertiming api
*/
var NullPerformance = function NullPerformance() {};

NullPerformance.prototype.clearMarks = function () {};
NullPerformance.prototype.clearMeasures = function () {};
NullPerformance.prototype.getEntries = function () {
  return [];
};
NullPerformance.prototype.getEntriesByName = function () {
  return [];
};
NullPerformance.prototype.getEntriesByType = function () {
  return [];
};
NullPerformance.prototype.mark = function () {};
NullPerformance.prototype.measure = function () {};
NullPerformance.prototype.now = function () {
  return 0;
};
NullPerformance.prototype.isImplemented = function () {
  return false;
};

module.exports = NullPerformance;