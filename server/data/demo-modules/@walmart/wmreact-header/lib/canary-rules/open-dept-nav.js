"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TAG_ACTION_COMMAND = "_tagAction";
var ON_DEPTNAV_FLYOUT_ACTION = "ON_DEPTNAV_FLYOUT";
var ON_DEPTNAV_FLYOUT_ID = "nav.dnv.fly.hvr";

var openDeptNav = function openDeptNav(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("open").match({ _type: "openDeptNav" })]);

  sequence(function (occurrence) {
    var open = occurrence.get("open");
    var pageContext = open.context.pageContext;
    var moduleId = open.props.moduleData.moduleId;

    canary.dispatch((0, _wmreactAnalytics.beaconMessage)([TAG_ACTION_COMMAND, pageContext, ON_DEPTNAV_FLYOUT_ACTION, ON_DEPTNAV_FLYOUT_ID, [["co", moduleId]]]));
  });
};

openDeptNav.identifier = "openDeptNav";

exports.default = openDeptNav;