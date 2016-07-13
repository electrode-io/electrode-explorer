"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A badge button group
@examples
```jsx
<BadgeButtonGroup>
  <Button>Button 1</Button>
</BadgeButtonGroup>
```
@return {ReactElement} Element tree
@param {object} props Props
@component BadgeButtonGroup
@import {BadgeButtonGroup}
@playground
Badge Button Group
```
<BadgeButtonGroup>
  <Button>Button 1</Button>
</BadgeButtonGroup>
```
*/

exports.default = function (props) {
  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)(props.hidden ? "hide-content" : "", "btn-badge-group") },
    props.children
  );
};