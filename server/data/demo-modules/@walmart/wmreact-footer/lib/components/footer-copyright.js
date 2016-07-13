"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _feedbackLink = require("./feedback-link");

var _feedbackLink2 = _interopRequireDefault(_feedbackLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/prop-types: 0 */


var TEXT_SMALL = "Ref:";
var TEXT_LARGE = "To ensure we’re able to help you as best we can" + ", please include your reference number:";

/**
This component displays the FooterCopyright text

@import {FooterCopyright}
@flags noVisibleRender
@component FooterCopyright
@playground
Footer Copyright
```
<FooterCopyright text="© Walmart Stores, Inc." referenceId="ASWEDF123W" />
```
@return {ReactElement} Element tree
@param {object} props Props
*/

var FooterCopyright = function FooterCopyright(props) {
  var isMobile = props.isMobile;
  var referenceId = props.referenceId;
  var autoId = props.autoId;
  var feedbackText = props.feedbackText;
  var text = props.text;


  var _renderReferenceInfo = function _renderReferenceInfo() {
    var suffix = "referenceInfo";
    if (!(0, _isEmpty2.default)(referenceId)) {
      return _react2.default.createElement(
        "div",
        (0, _extends3.default)({ className: "footer-FooterCopyright-referenceInfo"
        }, (0, _automationIdUtils.getDataAutomationIdPair)(suffix, autoId)),
        _react2.default.createElement(
          "span",
          { className: "hide-content-m" },
          TEXT_SMALL
        ),
        !isMobile && _react2.default.createElement(
          "span",
          { className: "hide-content-max-m" },
          TEXT_LARGE
        ),
        " " + referenceId
      );
    }
  };

  var _renderFeedbackLink = function _renderFeedbackLink() {
    if (!(0, _isEmpty2.default)(feedbackText)) {
      return _react2.default.createElement(_feedbackLink2.default, {
        linkText: feedbackText,
        className: "footer-FooterCopyright-feedbackLink pull-right" });
    }
  };

  return _react2.default.createElement(
    "div",
    { className: "footer-FooterCopyright" },
    _react2.default.createElement(
      "div",
      { className: "ResponsiveContainer" },
      _react2.default.createElement(
        "span",
        { className: "footer-FooterCopyright-text",
          "data-automation-id": "footer-FooterCopyright-text" },
        text
      ),
      _renderFeedbackLink(),
      _renderReferenceInfo()
    )
  );
};

FooterCopyright.displayName = "FooterCopyright";

FooterCopyright.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /**
   Footer copyright text
   */
  text: _react.PropTypes.string.isRequired,
  /**
   Customer reference Id
   */
  referenceId: _react.PropTypes.string,
  /**
   Used for generating unique automation id's
   */
  autoId: _react.PropTypes.string,
  /**
   Feedback link text
   */
  feedbackText: _react.PropTypes.string
};

FooterCopyright.defaultProps = {
  isMobile: false,
  text: "",
  referenceId: "",
  autoId: "",
  feedbackText: ""
};

exports.default = FooterCopyright;