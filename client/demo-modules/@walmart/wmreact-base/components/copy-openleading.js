"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Makes open-leading copy
@examples
```jsx
<Copy.OpenLeading>
  Foo
</Copy.OpenLeading>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.OpenLeading
@import {Copy}
@references Copy
@playground
```
<Copy.OpenLeading>
  Foo
</Copy.OpenLeading>
```
*/
var CopyOpenLeading = function CopyOpenLeading(props) {
  return _react2.default.createElement(
    "p",
    { className: (0, _classnames2.default)("copy-open-leading", props.hidden ? "hide-content" : "") },
    props.children
  );
};

CopyOpenLeading.displayName = "Copy.OpenLeading";

CopyOpenLeading.propTypes = {
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = CopyOpenLeading;