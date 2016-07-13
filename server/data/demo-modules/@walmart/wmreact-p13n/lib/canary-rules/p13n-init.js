"use strict";

exports.__esModule = true;
exports.p13nInitBeacon = exports.p13nInitBeaconAnalytics = undefined;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _p13nBeacon = require("../beacon/p13n-beacon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p13nInitBeaconAnalytics = exports.p13nInitBeaconAnalytics = function p13nInitBeaconAnalytics(occurrence, canary) {
  var stateObj = occurrence.get("state");
  var _stateObj$action$opts = stateObj.action.opts;
  var page = _stateObj$action$opts.page;
  var clientGuid = _stateObj$action$opts.clientGuid;

  var action = (0, _p13nBeacon.beaconBuilder)(page, "INIT", "inited", {
    "client_guid": clientGuid
  }, {});
  canary.dispatch(action);
};

var p13nInitBeacon = exports.p13nInitBeacon = function p13nInitBeacon(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("state").match({
    _type: "redux-action",
    "action.type": "REQUEST_RECOMMENDATION"
  })]);

  sequence(function (occurrence) {
    p13nInitBeaconAnalytics(occurrence, canary);
  });
};

p13nInitBeacon.identifier = "p13nInitBeacon";

exports.default = p13nInitBeacon;