"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _revealer = require("@walmart/wmreact-interactive/lib/components/revealer");

var _revealer2 = _interopRequireDefault(_revealer);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Expandable HTML and text
@examples
```jsx
<ExpandableHtmlText
  markup="<b>Pioneer Woman Cookware</b><p>Walmart.com is proud to offer cooking products." />
```
@component ExpandableHtmlText
@import {ExpandableHtmlText}
@playground
```
<ExpandableHtmlText
  markup="<b>Pioneer Woman Cookware</b><p>Walmart.com is proud to offer cooking products." />
```
*/

var ExpandableHtmlText = function ExpandableHtmlText(props) {
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "ExpandableHtmlText"
    }, (0, _categoryUtils.getTempoModuleAutomationId)(props.moduleType, process), {
      __self: undefined
    }),
    _react2.default.createElement(
      _revealer2.default,
      (0, _extends3.default)({}, props, {
        __self: undefined
      }),
      _react2.default.createElement("div", { className: "ExpandableHtmlText-markup",
        dangerouslySetInnerHTML: { __html: props.markup }, __self: undefined
      })
    )
  );
};

ExpandableHtmlText.displayName = "ExpandableHtmlText";

ExpandableHtmlText.propTypes = {
  baseHeight: _react.PropTypes.number,
  defaultOpen: _react.PropTypes.bool,
  disableClose: _react.PropTypes.bool,
  markup: _react.PropTypes.string,
  moduleType: _react.PropTypes.string,
  readMore: _react.PropTypes.bool
};

ExpandableHtmlText.defaultProps = {
  baseHeight: 187,
  defaultOpen: false,
  disableClose: false,
  moduleType: _categoryUtils.moduleTypes.SEO_CUSTOM_HTML,
  readMore: true
};

exports.default = ExpandableHtmlText;