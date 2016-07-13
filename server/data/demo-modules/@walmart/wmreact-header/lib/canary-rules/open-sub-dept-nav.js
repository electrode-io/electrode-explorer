"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TAG_ACTION_COMMAND = "_tagAction";
var ON_SUB_DEPT_NAV_FLYOUT_ACTION = "ON_SUBDEPTNAV_FLYOUT";
var ON_SUB_DEPT_NAV_FLYOUT_ID = "nav.snv.fly.hvr";

var openSubDeptNav = function openSubDeptNav(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("open").match({ _type: "openSubDeptNav" })]);

  sequence(function (occurrence) {
    var open = occurrence.get("open");
    var pageContext = open.context.pageContext;
    var moduleId = open.props.moduleId;
    var _open$extras = open.extras;
    var uid = _open$extras.uid;
    var name = _open$extras.name;


    canary.dispatch((0, _wmreactAnalytics.beaconMessage)([TAG_ACTION_COMMAND, pageContext, ON_SUB_DEPT_NAV_FLYOUT_ACTION, ON_SUB_DEPT_NAV_FLYOUT_ID, [["co", moduleId], ["li", uid, { id: uid, nm: name }]]]));
  });
};

openSubDeptNav.identifier = "openSubDeptNav";

exports.default = openSubDeptNav;