"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _eventTypes = require("@walmart/wmreact-analytics/lib/helpers/event-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CAROUSEL_PREFIX = "Carousel_";
var TAG_ACTION_COMMAND = "_tagAction";
var MODULE_VIEW_ACTION = "MODULE_VIEW";
var MODULE_VIEW_ID = "mob.gbl.www.mod";

var moduleView = function moduleView(canary) {
  var moduleViewSequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("moduleView").match({ _type: "module_view" })]);

  var _populateData = function _populateData(beaconData, extras) {
    var uids = extras.uids;
    var plData = extras.plData;

    if (uids) {
      uids.forEach(function (uid) {
        beaconData.push(["li", uid]);
      });
    }
    if (plData) {
      beaconData.push(["pl", plData]);
    }
  };

  moduleViewSequence(function (occurrence) {
    var moduleViewOccurrence = occurrence.get("moduleView");
    var _moduleViewOccurrence = moduleViewOccurrence.context;
    var pageContext = _moduleViewOccurrence.pageContext;
    var moduleId = _moduleViewOccurrence.moduleId;
    var extras = moduleViewOccurrence.extras;

    if (extras || moduleId) {
      var beaconData = [["co", moduleId || extras.moduleId]];
      if (extras) {
        _populateData(beaconData, extras);
      }

      canary.dispatch((0, _eventTypes.beaconMessage)([TAG_ACTION_COMMAND, "" + CAROUSEL_PREFIX + pageContext, MODULE_VIEW_ACTION, MODULE_VIEW_ID, beaconData]));
    }
  });
};

moduleView.identifier = "moduleView";

exports.default = moduleView;