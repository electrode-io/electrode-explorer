"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A progress spinner
@examples
```jsx
<Button.ProgressSpinner />
```
@return {ReactElement} Element tree
@component Button.ProgressSpinner
@import {Button}
*/

exports.default = function () {
  return _react2.default.createElement(
    "b",
    { className: "btn-progress-spinner" },
    _react2.default.createElement("b", { className: "btn-progress-spinner-icon" })
  );
};