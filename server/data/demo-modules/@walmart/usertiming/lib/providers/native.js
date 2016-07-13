"use strict";

var NativePerformance = function NativePerformance(performance) {
  this.performance = performance;
};

var wrappedMethods = ["clearMarks", "clearMeasures", "getEntries", "getEntriesByName", "getEntriesByType", "mark", "measure", "now"];

wrappedMethods.forEach(function (method) {
  NativePerformance.prototype[method] = function () {
    var _performance;

    return (_performance = this.performance)[method].apply(_performance, arguments);
  };
});

NativePerformance.prototype.isImplemented = function () {
  return true;
};

module.exports = NativePerformance;