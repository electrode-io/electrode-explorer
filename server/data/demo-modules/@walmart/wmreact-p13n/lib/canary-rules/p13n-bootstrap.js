"use strict";

exports.__esModule = true;
exports.p13nBootstrapBeacon = exports.p13nBootstrapBeaconAnalytics = undefined;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _p13nBeacon = require("../beacon/p13n-beacon");

var _findLastKey = require("lodash/findLastKey");

var _findLastKey2 = _interopRequireDefault(_findLastKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p13nBootstrapBeaconAnalytics = exports.p13nBootstrapBeaconAnalytics = function p13nBootstrapBeaconAnalytics(occurrence, canary) {
  var stateObj = occurrence.get("state");
  var _stateObj$action = stateObj.action;
  var irsDataMap = _stateObj$action.irsDataMap;
  var opts = _stateObj$action.opts;

  if (irsDataMap) {
    var lastKey = (0, _findLastKey2.default)(irsDataMap);
    var action = (0, _p13nBeacon.beaconBuilder)(opts.page, "BOOTSTRAP", "success", {
      "module_id": irsDataMap[lastKey].placementId,
      "module": opts.page,
      "client_guid": opts.clientGuid
    }, {});
    canary.dispatch(action);
  }
};

var p13nBootstrapBeacon = exports.p13nBootstrapBeacon = function p13nBootstrapBeacon(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("state").match({
    _type: "redux-action",
    "action.type": "RECEIVE_IRSDATAMAP"
  })]);

  sequence(function (occurrence) {
    p13nBootstrapBeaconAnalytics(occurrence, canary);
  });
};

p13nBootstrapBeacon.identifier = "p13nBootstrapBeacon";

exports.default = p13nBootstrapBeacon;