"use strict";

exports.__esModule = true;
exports.p13nAtcBeacon = exports.p13nAtcBeaconAnalytics = undefined;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _p13nBeacon = require("../beacon/p13n-beacon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p13nAtcBeaconAnalytics = exports.p13nAtcBeaconAnalytics = function p13nAtcBeaconAnalytics(occurrence, canary) {
  var stateObj = occurrence.get("state");
  var _stateObj$action$item = stateObj.action.item;
  var configId = _stateObj$action$item.configId;
  var placementId = _stateObj$action$item.placementId;
  var productId = _stateObj$action$item.productId;

  var action = (0, _p13nBeacon.beaconBuilder)("irs-" + configId + "-" + placementId, "ADD_TO_CART_ON_PAC", "init", { "item_id": productId });
  canary.dispatch(action);
};

var p13nAtcBeacon = exports.p13nAtcBeacon = function p13nAtcBeacon(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("state").match({ _type: "redux-action", "action.type": "P13N_ADD_TO_CART_REQUEST" })]);

  sequence(function (occurrence) {
    p13nAtcBeaconAnalytics(occurrence, canary);
  });
};

p13nAtcBeacon.identifier = "p13nAtcBeacon";

exports.default = p13nAtcBeacon;