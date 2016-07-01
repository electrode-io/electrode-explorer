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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Wraps an stack fill cell.
@import {Stack}
@component Stack.Fit
@references Stack
@playground
```
<Stack>
  <Stack.Fit>Foo</Stack.Fit>
</Stack>
```
*/

var StackFit = function (_Component) {
  (0, _inherits3.default)(StackFit, _Component);

  function StackFit() {
    (0, _classCallCheck3.default)(this, StackFit);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  StackFit.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: (0, _classnames2.default)("stack-fit", this.props.hidden ? "hide-content" : "")
      }, this.props),
      _react2.default.createElement(
        "div",
        { className: "stack-cell" },
        this.props.children
      )
    );
  };

  return StackFit;
}(_react.Component);

exports.default = StackFit;


StackFit.displayName = "Stack.Fit";

StackFit.propTypes = {
  /**
   * Children to render in the container
   */
  children: _react.PropTypes.any,
  hidden: _react.PropTypes.bool
};