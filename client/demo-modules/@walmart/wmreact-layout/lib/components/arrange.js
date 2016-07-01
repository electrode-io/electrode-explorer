"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _arrangeFit = require("./arrange-fit");

var _arrangeFit2 = _interopRequireDefault(_arrangeFit);

var _arrangeFill = require("./arrange-fill");

var _arrangeFill2 = _interopRequireDefault(_arrangeFill);

var _arrangeFitAll = require("./arrange-fit-all");

var _arrangeFitAll2 = _interopRequireDefault(_arrangeFitAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Container component for arrange layouts.
@examples
```jsx
<Arrange>
  <Arrange.Fill>Foo</Arrange.Fill>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
@component Arrange
@import {Arrange}
@playground
```
<Arrange>
  <Arrange.Fill>Foo</Arrange.Fill>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
@param {object} props object with following properties children, spaced,
middle, bottom, equalSpacing, equal and hidden.
@returns {ReactElement} A React Element
*/
var Arrange = function Arrange(props) {
  var extras = {
    "arrange-spaced": props.spaced,
    "arrange-middle": props.middle,
    "arrange-bottom": props.bottom,
    "arrange-equal-spacing": props.equalSpacing,
    "arrange-equal": props.equal
  };
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("arrange", extras, props.hidden ? "hide-content" : "")
    }, props),
    props.children
  );
};

Arrange.propTypes = {
  /**
   * Children to render in the container
   */
  children: _react2.default.PropTypes.node,
  /**
   Applies `arrange-spaced` class
   */
  spaced: _react2.default.PropTypes.bool,
  /**
   Applies `arrange-middle` class
   */
  middle: _react2.default.PropTypes.bool,
  /**
   Applies `arrange-bottom` class
   */
  bottom: _react2.default.PropTypes.bool,
  /**
   Applies `arrange-equal-spacing` class
   */
  equalSpacing: _react2.default.PropTypes.bool,
  /**
   Applies `arrange-equal` class
   */
  equal: _react2.default.PropTypes.bool,
  hidden: _react2.default.PropTypes.bool
};

Arrange.Fit = _arrangeFit2.default;
Arrange.Fill = _arrangeFill2.default;
Arrange.FitAll = _arrangeFitAll2.default;

exports.default = Arrange;