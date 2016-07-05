"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flagDirection = require("./flag-direction");

var _flagDirection2 = _interopRequireDefault(_flagDirection);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Product flag.
@examples
```jsx
<div style={{padding: 20}}>
  <Flag>Product Flag</Flag>
</div>
```
@component Flag`
@import {Flag}
@playground
Flag
```
<div style={{padding: 20}}>
  <Flag>Product Flag</Flag>
</div>
```
*/

var Flag = function Flag(props) {
  var _props$type = props.type;
  var type = _props$type === undefined ? "" : _props$type;
  var _props$align = props.align;
  var align = _props$align === undefined ? "left" : _props$align;
  var _props$text = props.text;
  var text = _props$text === undefined ? "" : _props$text;
  var _props$children = props.children;
  var children = _props$children === undefined ? [] : _props$children;
  var _props$outline = props.outline;
  var outline = _props$outline === undefined ? false : _props$outline;
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;


  var componentClass = (0, _classnames2.default)("flag", type ? "flag-" + type : "", { "flag-outline": outline }, { "flag-alt": align === "right" }, { "hidden": props.hidden }, className);
  // if user provides text through props, honor it.
  var displayText = text || children;

  return _react2.default.createElement(
    "span",
    { className: componentClass },
    displayText
  );
};

Flag.propTypes = {
  /**
  True if this is a certain type
  */
  type: _react2.default.PropTypes.string,
  /**
  True if we should render in an outline mode
  */
  outline: _react2.default.PropTypes.bool,
  /**
  An additional classes passed in
  */
  className: _react2.default.PropTypes.string,
  /**
  All the children
  */
  children: _react2.default.PropTypes.array,
  /**
  Specify alignment of left or right if required.
  The default is no alignment.
  */
  align: _flagDirection2.default,
  /**
  text is the display content in the flag
  */
  text: _react2.default.PropTypes.string,
  hidden: _react2.default.PropTypes.bool
};

exports.default = Flag;