"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Hairline indicator for paginators
@examples
```jsx
<Paginator.Hairline direction="prev"/>
```
@return {ReactElement} Element tree
@param {object} props Props
@component Paginator.Hairline
@import {Paginator}
@references Paginator
@playground
```
<Paginator.Hairline direction="prev"/>
```
*/

exports.default = function (props) {
  var large = props.large;
  var light = props.light;
  var dark = props.dark;
  var noHover = props.noHover;
  var positioned = props.positioned;
  var disabled = props.disabled;
  var direction = props.direction;
  var hidden = props.hidden;
  var className = props.className;
  var dataAutomationId = props.dataAutomationId;


  var extras = {
    "paginator-hairline-btn-large": large,
    "paginator-hairline-btn-light-no-hover": light && noHover,
    "paginator-hairline-btn-dark-no-hover": dark && noHover,
    "paginator-hairline-btn-light": light && !noHover,
    "paginator-hairline-btn-dark": dark && !noHover,
    "paginator-hairline-btn-positioned": positioned,
    "hide-content": disabled
  };
  var text = {
    "prev": "Previous",
    "next": "Next",
    "up": "Previous",
    "down": "Next"
  }[direction];
  var classes = (0, _classnames2.default)("paginator-hairline-btn", extras, "paginator-hairline-btn-" + direction, hidden ? "hide-content" : "", className);
  return _react2.default.createElement(
    "button",
    (0, _extends3.default)({
      type: "button",
      className: classes
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, ""), props),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      text
    )
  );
};