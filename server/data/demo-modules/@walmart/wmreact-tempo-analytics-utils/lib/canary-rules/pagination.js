"use strict";

exports.__esModule = true;
exports.pagination = undefined;

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _moduleAnalyticsUtils = require("../utils/module-analytics-utils");

var _moduleAnalyticsUtils2 = _interopRequireDefault(_moduleAnalyticsUtils);

var _eventTypes = require("@walmart/wmreact-analytics/lib/helpers/event-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PAGINATION_TYPES = ["nextSlide", "previousSlide", "goToSlide"];

var paginationPattern = _canaryEventPattern2.default.match(function (event) {
  return PAGINATION_TYPES.indexOf(event.payload._type) !== -1;
});

var createPaginationMessage = function createPaginationMessage(payload) {
  return _moduleAnalyticsUtils2.default.buildPaginationAnalytics(payload._type, payload.context.zoneId, payload.event.target);
};

var pagination = exports.pagination = function pagination(canary) {
  canary.event(function (event) {
    if (paginationPattern.matches(event)) {
      canary.dispatch((0, _eventTypes.beaconMessage)(createPaginationMessage(event.payload)));
    }
  });
};

pagination.identifier = "pagination";