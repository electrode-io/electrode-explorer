"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A responsive helper class that applies the `classes` prop to all of the children.

An example that applies 'foo bar' to the classNames of all of the children.
@examples
```jsx
<Grid.ApplyClasses classes="foo bar">
  <div>A</div><div>B</div><div>C</div>
</Grid.ApplyClasses>
```
@import {Grid}
@component Grid.ApplyClasses
@param {object} props object with following properties classes, children.
@returns {ReactElement} A React Element
*/

var ApplyClasses = function ApplyClasses(props) {
  return _react2.default.createElement(
    "div",
    props,
    _react2.default.Children.map(props.children, function (child) {
      return _react2.default.createElement(
        "div",
        { className: props.classes },
        child
      );
    })
  );
};

ApplyClasses.propTypes = {
  /**
   The classes to add to each of the children
   */
  classes: _react2.default.PropTypes.string.isRequired,
  /**
   * Children to render in the container
   */
  children: _react2.default.PropTypes.array
};

exports.default = ApplyClasses;