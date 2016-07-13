"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Link for more.
@examples
```jsx
<Link.More>
  Foo
</Link.More>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.More
@import {Link}
@playground
```
<Link.More>
  Foo
</Link.More>
```
*/
var LinkMore = function LinkMore(props, context) {
  var onClick = props.onClick;
  var className = props.className;
  var other = (0, _objectWithoutProperties3.default)(props, ["onClick", "className"]);

  var _onClick = function _onClick(event) {
    (0, _wmreactAnalytics.fireStatelessUIEvent)(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return _react2.default.createElement(
    "a",
    (0, _extends3.default)({ className: (0, _classnames2.default)("more-link", props.hidden ? "hide-content" : "", props.className),
      onClick: _onClick
    }, other),
    props.children
  );
};
/* eslint react/prop-types: 0 */


LinkMore.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

LinkMore.propTypes = {
  /**
  Handles the onClick event.
  */
  onClick: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = LinkMore;