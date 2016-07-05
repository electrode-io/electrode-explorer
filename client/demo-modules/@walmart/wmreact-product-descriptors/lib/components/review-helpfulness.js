"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _automationUtils = require("@walmart/automation-utils");

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTOMATION_CONTEXT = "ReviewHelpfulness";

var ReviewHelpfulness = function ReviewHelpfulness(props) {
  return _react2.default.createElement(
    "div",
    { className: "ReviewHelpfulness " + props.className },
    _react2.default.createElement(
      "div",
      { className: "font-semibold" },
      "Was this review helpful?"
    ),
    _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        onClick: props.onYesClick
      }, (0, _automationUtils.getDataAutomationIdPair)("YesCount", AUTOMATION_CONTEXT, process), {
        className: "ReviewHelpfulness-link wmicon wmicon-thumbs-alt-up m-margin-ends display-block"
      }),
      _react2.default.createElement(
        "span",
        { className: "padding-sides" },
        "Yes (" + props.yesCount + ")"
      )
    ),
    _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        onClick: props.onNoClick
      }, (0, _automationUtils.getDataAutomationIdPair)("NoCount", AUTOMATION_CONTEXT, process), {
        className: "ReviewHelpfulness-link wmicon wmicon-thumbs-alt-down m-margin-ends display-block"
      }),
      _react2.default.createElement(
        "span",
        { className: "padding-sides" },
        "No (" + props.noCount + ")"
      )
    ),
    _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        onClick: props.onReportClick
      }, (0, _automationUtils.getDataAutomationIdPair)("Report", AUTOMATION_CONTEXT, process), {
        className: "ReviewHelpfulness-link wmicon wmicon-flag m-margin-ends display-block"
      }),
      _react2.default.createElement(
        "span",
        { className: "padding-sides" },
        "Report"
      )
    )
  );
};

ReviewHelpfulness.propTypes = {
  yesCount: _react.PropTypes.number,
  noCount: _react.PropTypes.number,
  onYesClick: _react.PropTypes.func.isRequired,
  onNoClick: _react.PropTypes.func.isRequired,
  onReportClick: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string
};

ReviewHelpfulness.defaultProps = {
  yesCount: 0,
  noCount: 0,
  className: ""
};

exports.default = ReviewHelpfulness;