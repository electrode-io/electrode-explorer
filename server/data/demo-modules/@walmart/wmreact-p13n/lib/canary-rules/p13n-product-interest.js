"use strict";

exports.__esModule = true;
exports.p13nProductInterestBeacon = exports.p13nProductInterestBeaconAnalytics = undefined;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _p13nBeacon = require("../beacon/p13n-beacon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p13nProductInterestBeaconAnalytics = exports.p13nProductInterestBeaconAnalytics = function p13nProductInterestBeaconAnalytics(occurrence, canary) {
  var action = (0, _p13nBeacon.beaconBuilder)("irs-401-b1", "PRODUCT_INTEREST", "tile", {}, {});
  canary.dispatch(action);
};

var p13nProductInterestBeacon = exports.p13nProductInterestBeacon = function p13nProductInterestBeacon(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("state").match({ _type: "redux-action", "action.type": "P13N_TILE_CLICKED" })]);

  sequence(function () {
    p13nProductInterestBeaconAnalytics(canary);
  });
};

p13nProductInterestBeacon.identifier = "p13nProductInterestBeacon";

exports.default = p13nProductInterestBeacon;