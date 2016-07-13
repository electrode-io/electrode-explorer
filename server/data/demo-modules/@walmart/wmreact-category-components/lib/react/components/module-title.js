"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderLink = function _renderLink(linkText, linkUrl) {
  return !linkUrl ? null : _react2.default.createElement(
    _arrange2.default.Fit,
    { noWrap: true },
    _react2.default.createElement(
      _link2.default,
      { className: "ModuleTitle-link", href: linkUrl },
      linkText,
      _react2.default.createElement(_icon2.default, { name: "angle-right", className: "ModuleTitle-icon" })
    )
  );
};

/**
A component for responsively inline displaying a heading and link
@examples
```jsx
<ModuleTitle title="Sample Title"
  linkText="See more"
  linkUrl="http://sampleLink" />
```
@component ModuleTitle
@import {ModuleTitle}
@playground
```
<ModuleTitle title="Sample Title"
  linkText="See more"
  linkUrl="http://sampleLink" />
```
*/

var ModuleTitle = function ModuleTitle(_ref) {
  var moduleType = _ref.moduleType;
  var linkText = _ref.linkText;
  var linkUrl = _ref.linkUrl;
  var title = _ref.title;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "ModuleTitle"
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process)),
    _react2.default.createElement(
      _arrange2.default,
      { middle: true },
      _react2.default.createElement(
        _arrange2.default.Fill,
        null,
        _react2.default.createElement(
          "h5",
          { className: "ModuleTitle-heading" },
          title
        )
      ),
      _renderLink(linkText, linkUrl)
    )
  );
};

ModuleTitle.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  Module title link text
  */
  linkText: _react.PropTypes.string,
  /**
  Module title link URL
  */
  linkUrl: _react.PropTypes.string,
  /**
  Module title heading text
  */
  title: _react.PropTypes.string.isRequired
};

ModuleTitle.defaultProps = {
  moduleType: "ModuleTitle",
  linkText: "See all",
  linkUrl: ""
};

exports.default = ModuleTitle;