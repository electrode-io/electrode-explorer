"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Validation marker component
@examples
```jsx
<Icon.ValidationMarker />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {string} props.error Error
@component Icon.ValidationMarker
@import {Icon}
@playground
```
<Icon.ValidationMarker />
```
*/

/* eslint react/prop-types: 0 */
var IconValidationMarker = function IconValidationMarker(props) {
  var classes = (0, _classnames2.default)("validation-marker validation-marker-error", props.hidden ? "hide-content" : "", props.className);

  return _react2.default.createElement(
    "i",
    (0, _extends3.default)({ className: classes }, props),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      props.error
    )
  );
};

IconValidationMarker.propTypes = {
  /**
  The error string
  */
  error: _react2.default.PropTypes.string.isRequired,
  className: _react2.default.PropTypes.string,
  hidden: _react2.default.PropTypes.bool
};

exports.default = IconValidationMarker;