"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _waypointEngine = require("../vendor/opinion-lab/waypoint-engine");

var _waypointEngine2 = _interopRequireDefault(_waypointEngine);

var _waypointConfig = require("../vendor/opinion-lab/waypoint-config");

var _waypointConfig2 = _interopRequireDefault(_waypointConfig);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedbackLink = function FeedbackLink(props) {
  var uid = props.uid;
  var title = props.title;
  var pathToAssets = props.pathToAssets;
  var linkText = props.linkText;
  var className = props.className;


  var _onFeedbackLinkClick = function _onFeedbackLinkClick() {
    _waypointConfig2.default.waypointInit(pathToAssets);
    _waypointEngine2.default.Waypoint.getWaypoint();
  };

  return _react2.default.createElement(
    _button2.default,
    (0, _extends3.default)({
      fakelink: true,
      "data-uid": uid,
      alt: title,
      onClick: _onFeedbackLinkClick,
      className: className
    }, (0, _automationIdUtils.getDataAutomationIdPair)("footer", "feedback-link")),
    linkText
  );
};

FeedbackLink.displayName = "FeedbackLink";

FeedbackLink.propTypes = {
  /**
  Link data from tempo
  */
  uid: _react.PropTypes.string,
  /**
  Link data from tempo
  */
  title: _react.PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: _react.PropTypes.string,
  /**
  Link Text
  */
  linkText: _react.PropTypes.string,
  /**
  Additional classes
  */
  className: _react.PropTypes.string
};

FeedbackLink.defaultProps = {
  uid: "",
  title: "",
  pathToAssets: "",
  linkText: "",
  className: ""
};

exports.default = FeedbackLink;