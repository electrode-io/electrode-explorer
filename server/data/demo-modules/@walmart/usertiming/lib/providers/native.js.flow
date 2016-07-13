const NativePerformance = function NativePerformance(performance) {
  this.performance = performance;
};

const wrappedMethods = [
  "clearMarks",
  "clearMeasures",
  "getEntries",
  "getEntriesByName",
  "getEntriesByType",
  "mark",
  "measure",
  "now"
];

wrappedMethods.forEach((method) => {
  NativePerformance.prototype[method] = function () {
    return this.performance[method](...arguments);
  };
});

NativePerformance.prototype.isImplemented = () => true;


module.exports = NativePerformance;
