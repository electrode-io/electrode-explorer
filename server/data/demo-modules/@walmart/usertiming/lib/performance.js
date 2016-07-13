"use strict";

var NativePerformance = require("./providers/native");
var PerformancePolyfill = require("./providers/polyfill");
var NullPerformance = require("./providers/null");

var _instance = void 0;

var createInstance = function createInstance(performance) {
  if (performance && typeof performance.measure === "function" && typeof performance.mark === "function" && typeof performance.getEntries === "function") {
    return new NativePerformance(performance);
  } else if (performance && typeof performance.now === "function") {
    return new PerformancePolyfill(performance);
  } else {
    return new NullPerformance(performance);
  }
};

var performanceApiFactory = function performanceApiFactory(performance) {
  if (!_instance) {
    _instance = createInstance(performance);
  }
  return _instance;
};

module.exports = performanceApiFactory;