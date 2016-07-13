"use strict";

exports.__esModule = true;

var _canaryEventSequence = require("@walmart/canary-event-sequence");

var _canaryEventSequence2 = _interopRequireDefault(_canaryEventSequence);

var _canaryEventPattern = require("@walmart/canary-event-pattern");

var _canaryEventPattern2 = _interopRequireDefault(_canaryEventPattern);

var _eventTypes = require("@walmart/wmreact-analytics/lib/helpers/event-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_DATA_COMMAND = "_addData";
var TAG_OUTBOUND_ACTION_COMMAND = "_tagOutboundAction";
var UNIVERSAL_CLICK_ACTION = "ON_UNIV_LINK";
var UNIVERSAL_CLICK_ID = "nav.unv.slc.clc";
var DUMMY_LINK_KEY = "dummyLinkKey";

var universalClick = function universalClick(canary) {
  var clickSequence = (0, _canaryEventSequence2.default)(canary.event, [_canaryEventPattern2.default.label("click").match({ _type: "click" })]);

  clickSequence(function (occurrence) {
    var click = occurrence.get("click");
    var _click$context = click.context;
    var pageContext = _click$context.pageContext;
    var moduleId = _click$context.moduleId;
    var props = click.props;
    var extras = click.extras;


    if (pageContext) {
      var linkKey = props["data-uid"] || extras && extras.uid;
      var href = props.href || extras && extras.href;

      // If no UID, dispatch minimal data
      if (!linkKey) {
        canary.dispatch((0, _eventTypes.beaconMessage)([ADD_DATA_COMMAND, pageContext, [["li", DUMMY_LINK_KEY, {
          "lc": 0,
          "pi": 0
        }]]]));
        // Link from Tempo Module
      } else if (href && moduleId) {
          canary.dispatch((0, _eventTypes.beaconMessage)([TAG_OUTBOUND_ACTION_COMMAND, pageContext, UNIVERSAL_CLICK_ACTION, UNIVERSAL_CLICK_ID, [["co", moduleId], ["li", linkKey]], href]));
        }
    }
  });
};

universalClick.identifier = "universalClick";

exports.default = universalClick;