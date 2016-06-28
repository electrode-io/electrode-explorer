"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Makes samll copy
@examples
```jsx
<Copy.Small>
  Foo
</Copy.Small>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.Small
@import {Copy}
@references Copy
@playground
```
<Copy.Small>
  Foo
</Copy.Small>
```
*/
var CopySmall = function CopySmall(props) {
  return _react2.default.createElement(
    "p",
    { className: (0, _classnames2.default)("copy-small", props.hidden ? "hide-content" : "") },
    props.children
  );
};

CopySmall.displayName = "Copy.Small";

CopySmall.propTypes = {
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = CopySmall;