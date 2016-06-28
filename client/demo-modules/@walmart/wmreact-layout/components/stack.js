"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _stackFit = require("./stack-fit");

var _stackFit2 = _interopRequireDefault(_stackFit);

var _stackFill = require("./stack-fill");

var _stackFill2 = _interopRequireDefault(_stackFill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Container component for stack layouts.
@examples
Here is a simple example of a stack layout where the first cell is fills and the
second cell fits.

```jsx
<Stack>
  <Stack.Fill>Foo</Stack.Fill>
  <Stack.Fit>Foo</Stack.Fit>
</Stack>
```
@import {Stack}
@component Stack
@playground
```
<Stack>
  <Stack.Fill>Foo</Stack.Fill>
  <Stack.Fit>Foo</Stack.Fit>
</Stack>
```
*/

var Stack = function (_Component) {
  (0, _inherits3.default)(Stack, _Component);

  function Stack() {
    (0, _classCallCheck3.default)(this, Stack);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Stack.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: (0, _classnames2.default)("stack", this.props.hidden ? "hide-content" : "", this.props.className)
      }, this.props),
      this.props.children
    );
  };

  return Stack;
}(_react.Component);

exports.default = Stack;


Stack.displayName = "Stack";

Stack.propTypes = {
  /**
   CSS class name to apply to the container
   */
  className: _react.PropTypes.string,
  /**
   * Children to render in the container
   */
  children: _react.PropTypes.array,
  hidden: _react.PropTypes.bool
};

Stack.Fit = _stackFit2.default;
Stack.Fill = _stackFill2.default;