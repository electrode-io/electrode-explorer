"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flagBase = require("./flag-base");

var _flagBase2 = _interopRequireDefault(_flagBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Rollback flag.
@examples
```jsx
<div style={{padding: 20}}>
  <Flag.Rollback/>
</div>
```
@component Flag.Rollback
@import {Flag}
@playground
Flag.Rollback
```
<div style={{padding: 20}}>
  <Flag.Rollback/>
</div>
```
*/

var Rollback = function Rollback(props) {
  return _react2.default.createElement(_flagBase2.default, (0, _extends3.default)({}, props, { outline: true, type: "rollback", text: "Rollback" }));
};

exports.default = Rollback;