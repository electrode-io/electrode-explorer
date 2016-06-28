"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
    (0, _extends3.default)({ className: props.hidden ? "hide-content" : "" }, props),
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