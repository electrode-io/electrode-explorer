"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _automationUtils = require("@walmart/automation-utils");

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AUTOMATION_CONTEXT = "BackLink";

var BackLink = function BackLink(props) {
  var url = props.url;
  var name = props.name;

  return _react2.default.createElement(
    "div",
    { className: "back-link" },
    _react2.default.createElement(
      _link2.default,
      _extends({
        href: url
      }, (0, _automationUtils.getDataAutomationIdPair)("Link", AUTOMATION_CONTEXT, process), {
        className: "arrow-link-before wmicon wmicon-angle-left"
      }),
      _react2.default.createElement("span", null)
    ),
    _react2.default.createElement(
      _link2.default,
      _extends({
        href: url
      }, (0, _automationUtils.getDataAutomationIdPair)("LinkName", AUTOMATION_CONTEXT, process), {
        className: "back-link-name"
      }),
      name
    )
  );
};

BackLink.propTypes = {
  url: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string.isRequired
};

BackLink.defaultProps = {};

exports.default = BackLink;