"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _eventTypes = require("@walmart/wmreact-analytics/lib/helpers/event-types");

var _moduleAnalyticsUtils = require("../utils/module-analytics-utils");

var _moduleAnalyticsUtils2 = _interopRequireDefault(_moduleAnalyticsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_DATA_COMMAND = "_addData";
var CAROUSEL_PREFIX = "Carousel_";

var addTempoData = function addTempoData(canary) {
  var tempoSequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("tempo").match({ _type: "tempo" })]);

  tempoSequence(function (occurrence) {
    // Send module data from Tempo response
    var tempo = occurrence.get("tempo");
    var pageContext = tempo.context.pageContext;

    var modules = tempo.extras;
    var analyticsData = _moduleAnalyticsUtils2.default.buildModuleAnalyticsData(modules);
    // dispatch for universal click
    canary.dispatch((0, _eventTypes.beaconMessage)([ADD_DATA_COMMAND, pageContext, analyticsData]));
    // dispatch for module view with carousel prefixed context
    if (pageContext !== "Header" && pageContext !== "Footer") {
      canary.dispatch((0, _eventTypes.beaconMessage)([ADD_DATA_COMMAND, "" + CAROUSEL_PREFIX + pageContext, analyticsData]));
    }
  });
};

addTempoData.identifier = "addTempoData";

exports.default = addTempoData;