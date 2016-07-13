"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _p13nBeacon = require("../beacon/p13n-beacon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findGoToSlideClicks = function findGoToSlideClicks(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("goToSlide").match({ _type: "goToSlide" })]);

  sequence(function () {
    var action = (0, _p13nBeacon.beaconBuilder)("irs-401-b1", "PAGINATION", "right", {}, {});
    canary.dispatch(action);
  });
};

findGoToSlideClicks.identifier = "findGoToSlideClicks";

exports.default = findGoToSlideClicks;