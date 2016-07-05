"use strict";

var PerformanceEntry = require("./entry");

var PerformanceMark = function PerformanceMark(name, startTime) {
  this.name = "" + name;
  this.startTime = startTime;
};

PerformanceMark.prototype = new PerformanceEntry();
PerformanceMark.prototype.entryType = "mark";

module.exports = PerformanceMark;