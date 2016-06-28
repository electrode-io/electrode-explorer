"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Makes mini copy.
@examples
```jsx
<Copy.Mini>
  Foo
</Copy.Mini>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.Mini
@import {Copy}
@references Copy
@playground
```
<Copy.Mini>
  Foo
</Copy.Mini>
```
*/
var CopyMini = function CopyMini(props) {
  return _react2.default.createElement(
    "p",
    { className: (0, _classnames2.default)("copy-mini", props.hidden ? "hide-content" : "") },
    props.children
  );
};

CopyMini.displayName = "Copy.Mini";

CopyMini.propTypes = {
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = CopyMini;