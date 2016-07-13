"use strict";

var PerformanceEntry = function PerformanceEntry() {};
PerformanceEntry.prototype = {
  name: "",
  entryType: "",
  startTime: 0.0,
  duration: 0.0
};

module.exports = PerformanceEntry;