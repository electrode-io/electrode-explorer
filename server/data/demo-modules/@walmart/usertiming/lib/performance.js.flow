const NativePerformance = require("./providers/native");
const PerformancePolyfill = require("./providers/polyfill");
const NullPerformance = require("./providers/null");

let _instance;

const createInstance = function (performance) {
  if (performance &&
      typeof performance.measure === "function" &&
      typeof performance.mark === "function" &&
      typeof performance.getEntries === "function") {
    return new NativePerformance(performance);
  } else if (performance && typeof performance.now === "function") {
    return new PerformancePolyfill(performance);
  } else {
    return new NullPerformance(performance);
  }
};

const performanceApiFactory = function (performance) {
  if (!_instance) {
    _instance = createInstance(performance);
  }
  return _instance;
};

module.exports = performanceApiFactory;
