"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TAG_ACTION_COMMAND = "_tagAction";
var EMAIL_SUBSCRIBE_ACTION = "ON_EMAIL_SUBSCRIBE";
var EMAIL_SUBSCRIBE_ID = "com.eml.sbs.clc";

var emailSignupSubmit = function emailSignupSubmit(canary) {
  var sequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("submit").match({ _type: "emailSignupSubmit" })]);

  sequence(function (occurrence) {
    var submit = occurrence.get("submit");
    var _submit$props$moduleD = submit.props.moduleData.configs;
    var header = _submit$props$moduleD.header;
    var campaignId = _submit$props$moduleD.campaignId;

    canary.dispatch((0, _wmreactAnalytics.beaconMessage)([TAG_ACTION_COMMAND, submit.context.pageContext, EMAIL_SUBSCRIBE_ACTION, EMAIL_SUBSCRIBE_ID, [["em", 1, {
      id: campaignId,
      nm: header
    }]]]));
  });
};

emailSignupSubmit.identifier = "emailSignupSubmit";

exports.default = emailSignupSubmit;