"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _buildRedirectUrl = function _buildRedirectUrl(searchQuery) {
  var encodedQuery = encodeURIComponent(searchQuery);
  return "/search/?query=" + encodedQuery + "&redirect=false";
};

/**
A component that displays a message based on a query string.
@examples
```jsx
<RedirectMessage query="Sample Query" />
```
@component RedirectMessage
@import {RedirectMessage}
@playground
```
<RedirectMessage searchQuery="Sample Query" />
```
*/

var RedirectMessage = function RedirectMessage(_ref) {
  var linkText = _ref.linkText;
  var message = _ref.message;
  var moduleType = _ref.moduleType;
  var searchQuery = _ref.searchQuery;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "RedirectMessage"
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process)),
    _react2.default.createElement(
      "span",
      { className: "RedirectMessage-message" },
      message
    ),
    " ",
    _react2.default.createElement(
      "a",
      { className: "RedirectMessage-link", href: _buildRedirectUrl(searchQuery) },
      linkText,
      " ",
      searchQuery
    )
  );
};

RedirectMessage.propTypes = {
  /**
  Text appearing in link before search query
  */
  linkText: _react.PropTypes.string,
  /**
  Module title link text
  */
  message: _react.PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  Search query
  */
  searchQuery: _react.PropTypes.string.isRequired
};

RedirectMessage.defaultProps = {
  linkText: "See all",
  message: "Here are some items based on your search.",
  moduleType: "RedirectMessage"
};

exports.default = RedirectMessage;