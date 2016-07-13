"use strict";

exports.__esModule = true;
exports.p13nPlacementBeacon = exports.csrBeaconAnalytics = exports.ssrBeaconAnalytics = undefined;

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _p13nBeacon = require("../beacon/p13n-beacon");

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var type = require("@walmart/canary-event-pattern/type");

var ssrBeaconAnalytics = exports.ssrBeaconAnalytics = function ssrBeaconAnalytics(occurrence, canary) {
  var action = void 0;
  var beaconData = void 0;
  var stateObj = occurrence.get("state");
  var _stateObj$state$recom = stateObj.state.recommendationMap;
  var irsDataMap = _stateObj$state$recom.irsDataMap;
  var resultDetail = _stateObj$state$recom.resultDetail;
  var visitorId = _stateObj$state$recom.visitorId;

  if (!(0, _isEmpty2.default)(irsDataMap)) {
    (0, _map2.default)(irsDataMap, function (irsData) {
      beaconData = (0, _p13nBeacon.generateBeacon)(irsData, resultDetail, visitorId);
      delete beaconData.action;
      delete beaconData.action_type;
      action = (0, _p13nBeacon.beaconBuilder)(irsData.placementId, "PLACEMENT", "placed", beaconData, {});
      canary.dispatch(action);
    });
  }
};

var csrBeaconAnalytics = exports.csrBeaconAnalytics = function csrBeaconAnalytics(occurrence, canary) {
  var action = void 0;
  var beaconData = void 0;
  var stateObj = occurrence.get("state");
  var _stateObj$state = stateObj.state;
  var irsDataMap = _stateObj$state.irsDataMap;
  var resultDetail = _stateObj$state.resultDetail;
  var visitorId = _stateObj$state.visitorId;

  if (!(0, _isEmpty2.default)(irsDataMap)) {
    (0, _map2.default)(irsDataMap, function (irsData) {
      beaconData = (0, _p13nBeacon.generateBeacon)(irsData, resultDetail, visitorId);
      delete beaconData.action;
      delete beaconData.action_type;
      action = (0, _p13nBeacon.beaconBuilder)(irsData.placementId, "PLACEMENT", "placed", beaconData, {});
      canary.dispatch(action);
    });
  }
};

var p13nPlacementBeacon = exports.p13nPlacementBeacon = function p13nPlacementBeacon(canary) {
  var ssrSequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("state").match({
    _type: "redux-initial-state",
    "state.recommendationMap": type.defined
  })]);

  var csrSequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("state").match({
    _type: "redux-new-state",
    "state.irsDataMap": type.defined
  })]);

  ssrSequence(function (occurrence) {
    ssrBeaconAnalytics(occurrence, canary);
  });

  csrSequence(function (occurrence) {
    csrBeaconAnalytics(occurrence, canary);
  });
};

p13nPlacementBeacon.identifier = "p13nPlacementBeacon";

exports.default = p13nPlacementBeacon;