"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/* eslint react/prop-types: 0 */


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
var IconValidationMarker = function IconValidationMarker(props) {
  var classes = (0, _classnames2.default)("validation-marker validation-marker-error", props.hidden ? "hide-content" : "", props.className);

  return _react2.default.createElement(
    "i",
    _extends({ className: classes }, props),
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