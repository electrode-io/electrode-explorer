"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Convencience component to apply an arrange-fit layout to all of the children.
@examples
```jsx
<Arrange.FitAll>
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Arrange.FitAll>
```
@component Arrange.FitAll
@import {Arrange}
@flags noVisibleRender
@playground
```
<Arrange.FitAll>
  <div style={{background: '#ccc', padding: '1rem'}}>A</div>
  <div style={{background: '#aaa', padding: '1rem'}}>B</div>
  <div style={{background: '#ccc', padding: '1rem'}}>C</div>
  <div style={{background: '#ccc', padding: '1rem'}}>D</div>
  <div style={{background: '#aaa', padding: '1rem'}}>E</div>
  <div style={{background: '#ccc', padding: '1rem'}}>F</div>
</Arrange.FitAll>
```
@param {object} props object with following properties children, spaced, middle,
bottom, equalSpacing, equal, hidden.
@returns {ReactElement} A React Element
*/
var ArrangeFitAll = function ArrangeFitAll(props) {
  var extras = {
    "arrange-spaced": props.spaced || true,
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
    _react2.default.Children.map(props.children, function (child, index) {
      return _react2.default.createElement(
        "div",
        { className: "arrange-fit", key: index },
        child
      );
    })
  );
};

ArrangeFitAll.propTypes = {
  /**
   * Children to render in the container
   */
  children: _react2.default.PropTypes.array,
  /**
   * Applies `arrange-spaced` to the container.
   */
  spaced: _react2.default.PropTypes.bool,
  /**
   * Applies `arrange-middle` to the container.
   */
  middle: _react2.default.PropTypes.bool,
  /**
   * Applies `arrange-bottom` to the container.
   */
  bottom: _react2.default.PropTypes.bool,
  /**
   * Applies `arrange-equal-spacing` to the container.
   */
  equalSpacing: _react2.default.PropTypes.bool,
  /**
   * Applies `arrange-equal` to the container.
   */
  equal: _react2.default.PropTypes.bool,
  hidden: _react2.default.PropTypes.bool
};

exports.default = ArrangeFitAll;