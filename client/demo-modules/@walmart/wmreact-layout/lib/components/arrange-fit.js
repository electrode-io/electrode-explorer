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
Wraps an arrange fit cell.
@import {Arrange}
@component Arrange.Fit
@references Arrange
@flags noVisibleRender
@playground
```
<Arrange>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
@param {object} props object with following properties mediaObject, noWrap, hidden.
@returns {ReactElement} A React Element
*/
var ArrangeFit = function ArrangeFit(props) {
  var extras = {
    "arrange-media-object": props.mediaObject,
    "no-wrap": props.noWrap
  };

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, props, {
      className: (0, _classnames2.default)("arrange-fit", extras, props.className, props.hidden ? "hide-content" : "") }),
    props.children
  );
};

ArrangeFit.propTypes = {
  mediaObject: _react2.default.PropTypes.bool,
  noWrap: _react2.default.PropTypes.bool,
  hidden: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.any
};

exports.default = ArrangeFit;