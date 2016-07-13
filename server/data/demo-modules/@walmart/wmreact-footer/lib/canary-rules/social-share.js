"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TAG_ACTION_COMMAND = "_tagAction";
var SOCIAL_SHARE_ACTION = "ON_SOCIALSHARE";
var SOCIAL_SHARE_ID = "shr.soc.slc.clc";
var WALMART = "Walmart";

var socialShare = function socialShare(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("click").match({ _type: "click", "context.moduleType": "GlobalSocialIcons" })]);

  sequence(function (occurrence) {
    var click = occurrence.get("click");
    var pageContext = click.context.pageContext;
    var _click$props = click.props;
    var title = _click$props.title;
    var uid = _click$props["data-uid"];


    if (pageContext && title) {
      canary.dispatch((0, _wmreactAnalytics.beaconMessage)([TAG_ACTION_COMMAND, pageContext, SOCIAL_SHARE_ACTION, SOCIAL_SHARE_ID, [["so", title, {
        nm: title,
        id: uid,
        ty: WALMART
      }]]]));
    }
  });
};

socialShare.identifier = "socialShare";

exports.default = socialShare;