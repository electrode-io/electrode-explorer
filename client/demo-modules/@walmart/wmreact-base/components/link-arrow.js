"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint react/prop-types: 0 */


/**
Link with arrow.
@examples
```jsx
<Link.Arrow>
  Foo
</Link.Arrow>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.Arrow
@import {Link}
@playground
```
<Link.Arrow>
  Foo
</Link.Arrow>
```
*/
var LinkArrow = function LinkArrow(props, context) {
  var extras = {
    "active": props.active
  };
  var onClick = props.onClick;
  var className = props.className;

  var other = _objectWithoutProperties(props, ["onClick", "className"]);

  var _onClick = function _onClick(event) {
    (0, _wmreactAnalytics.fireStatelessUIEvent)(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return _react2.default.createElement(
    "a",
    _extends({ className: (0, _classnames2.default)("arrow-link", extras, props.hidden ? "hide-content" : "", props.className),
      onClick: _onClick
    }, other),
    props.children
  );
};

LinkArrow.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

LinkArrow.propTypes = {
  /**
  True if it should apply `active`
  */
  active: _react2.default.PropTypes.bool,
  /**
  Handles the onClick event.
  */
  onClick: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = LinkArrow;