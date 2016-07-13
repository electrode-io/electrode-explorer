"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _automationUtils = require("@walmart/automation-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
About this Collection component
@examples
```
<AboutItem title="collection" description="Lorem <b>ipsum</b>" disclaimer="made in USA" />
```
@return {ReactElement} Element tree
@param {object} props Props
@component AboutItem
@import {AboutItem}
@playground
AboutItem
```
<AboutItem title="collection" description="<div><ul> <li> Visio TV </li> </ul></div>" />
```
*/

exports.default = function (props) {
  var description = props.description;
  var disclaimer = props.disclaimer;

  var title = props.title || "collection";
  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("product-about") },
    _react2.default.createElement(
      _heading2.default.H1,
      (0, _automationUtils.getDataAutomationIdPair)("Title", "AboutThis", process),
      "About this ",
      title
    ),
    _react2.default.createElement("div", (0, _extends3.default)({
      className: "product-description-disclaimer",
      dangerouslySetInnerHTML: { __html: disclaimer }
    }, (0, _automationUtils.getDataAutomationIdPair)("Disclaimer", "AboutThis", process))),
    _react2.default.createElement("div", (0, _extends3.default)({
      className: (0, _classnames2.default)("about-desc"),
      dangerouslySetInnerHTML: { __html: description }
    }, (0, _automationUtils.getDataAutomationIdPair)("ShortDescription", "AboutThis", process)))
  );
};