"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _copyOpenleading = require("./copy-openleading");

var _copyOpenleading2 = _interopRequireDefault(_copyOpenleading);

var _copySmall = require("./copy-small");

var _copySmall2 = _interopRequireDefault(_copySmall);

var _copyMini = require("./copy-mini");

var _copyMini2 = _interopRequireDefault(_copyMini);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Makes copy
@examples
```jsx
<Copy>
  Foo
</Copy>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy
@import {Copy}
@playground
Copy
```
<Copy>Base Copy</Copy>
```
*/
var Copy = function Copy(props) {
  return _react2.default.createElement(
    "p",
    _extends({ className: props.hidden ? "hide-content" : "" }, props),
    props.children
  );
};

Copy.displayName = "Copy";

Copy.propTypes = {
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

Copy.OpenLeading = _copyOpenleading2.default;
Copy.Small = _copySmall2.default;
Copy.Mini = _copyMini2.default;

exports.default = Copy;