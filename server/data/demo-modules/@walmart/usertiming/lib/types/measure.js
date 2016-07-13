"use strict";

var PerformanceEntry = require("./entry");

var PerformanceMeasure = function PerformanceMeasure(name, startTime, endTime) {
  this.name = "" + name;
  this.startTime = startTime;
  this.duration = endTime - startTime;
};

PerformanceMeasure.prototype = new PerformanceEntry();
PerformanceMeasure.prototype.entryType = "measure";

module.exports = PerformanceMeasure;