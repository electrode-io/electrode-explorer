/**
 Implementation of the User Timing part of the performance object
 using performance.now()
*/
const PerformanceMark = require("../types/mark");
const PerformanceMeasure = require("../types/measure");

/**
 * Inserts an entry into the entries array, sorted according to `startTime`
 * @param {Array} entries - List of performanceentries to insert into
 * @param {PerformanceEntry} entry - entry to be inserted
 * @returns {void}
 */
const _insertEntry = function (entries, entry) {
  const time = entry.startTime;
  let index = 0;
  while (index < entries.length && entries[index].startTime < time) {
    ++index;
  }
  entries.splice(index, 0, entry);
};

const _expectArguments = function (methodName, args, expectedLength) {
  if (args.length < expectedLength) {
    throw new TypeError("Not enough arguments to Performance." + methodName);
  }
};

const PerformancePolyfill = function PerformancePolyfill(performance) {
  this.performance = performance;
  this.entries = [];
};

PerformancePolyfill.prototype.clearMarks = function (name) {
  this.entries = this.entries.filter((entry) =>
    (name && entry.name !== name) || entry.entryType !== "mark");
};

PerformancePolyfill.prototype.clearMeasures = function (name) {
  this.entries = this.entries.filter((entry) =>
  (name && entry.name !== name) || entry.entryType !== "measure");
};

PerformancePolyfill.prototype.getEntries = function (filterOptions) {
  if (!filterOptions) {
    return this.entries;
  }
  return this.entries.filter((entry) =>
    (!filterOptions.name || filterOptions.name === entry.name) &&
    (!filterOptions.type || filterOptions.type === entry.entryType));
};

PerformancePolyfill.prototype.getEntriesByName = function (name) {
  _expectArguments("getEntriesByName", arguments, 1);
  return this.getEntries({name});
};

PerformancePolyfill.prototype.getEntriesByType = function (type) {
  _expectArguments("getEntriesByType", arguments, 1);
  return this.getEntries({type});
};

PerformancePolyfill.prototype.mark = function (name) {
  _expectArguments("mark", arguments, 1);
  _insertEntry(this.entries, new PerformanceMark(name, this.performance.now()));
};

PerformancePolyfill.prototype.measure = function (name, mark1, mark2) {
  _expectArguments("measure", arguments, 1);
  let fromTime = 0;
  let toTime = this.performance.now();
  if (mark2) {
    fromTime = this._fetchLatestMark(mark1).startTime;
    toTime = this._fetchLatestMark(mark2).startTime;
  } else if (mark1) {
    toTime = this._fetchLatestMark(mark1).startTime;
  }
  _insertEntry(this.entries, new PerformanceMeasure(name, fromTime, toTime));
};

PerformancePolyfill.prototype.now = function () {
  return this.performance.now();
};

PerformancePolyfill.prototype.isImplemented = () => true;

/**
 * Fetches the latest mark by name, or throws an exception if it doesn't exist
 * which is consistent with the native behavior
 * @param {string} name - Name of the mark
 * @return {Array} - all of the marks with that name
 * @throws {Error} - if there is no mark with that name
 */
PerformancePolyfill.prototype._fetchLatestMark = function (name) {
  const entries = this.getEntries({name, type: "mark"});
  if (!entries || !entries.length) {
    throw new Error("The mark '" + name + "' does not exist");
  }
  return entries[entries.length - 1];
};

module.exports = PerformancePolyfill;
