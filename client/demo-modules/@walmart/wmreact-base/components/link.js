"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _linkArrow = require("./link-arrow");

var _linkArrow2 = _interopRequireDefault(_linkArrow);

var _linkMore = require("./link-more");

var _linkMore2 = _interopRequireDefault(_linkMore);

var _linkDropdown = require("./link-dropdown");

var _linkDropdown2 = _interopRequireDefault(_linkDropdown);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint react/prop-types: 0 */


/**
The base link component.
@examples
```jsx
<div>
  <Link href="#">Base Link</Link><br/>
  <Link href="#" arrow={true}>Arrow Link</Link><br/>
  <Link href="#" active={true}>Active Link</Link><br/>
  <Link href="#" dropdown={true}>Dropdown Link</Link>
</div>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link
@import {Link}
@playground
Link
```
<div>
  <Link href="#">Base Link</Link><br/>
  <Link href="#" arrow={true}>Arrow Link</Link><br/>
  <Link href="#" active={true}>Active Link</Link><br/>
  <Link href="#" dropdown={true}>Dropdown Link</Link>
</div>
```
*/
var Link = function Link(props, context) {
  var extras = {
    "arrow-link": props.arrow,
    "active": props.active,
    "more-link": props.more,
    "dropdown-link": props.dropdown
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
    _extends({ className: (0, _classnames2.default)(extras, props.hidden ? "hide-content" : "", props.className),
      onClick: _onClick
    }, other),
    props.children
  );
};

Link.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

Link.propTypes = {
  /**
  True if you want to apply `arrow-link`
  */
  arrow: _react2.default.PropTypes.bool,
  /**
  True if you want to apply `more-link`
  */
  more: _react2.default.PropTypes.bool,
  /**
  True if you want to apply `dropdown-link`
  */
  dropdown: _react2.default.PropTypes.bool,
  /**
  Handles the onClick event.
  */
  onClick: _react2.default.PropTypes.func,
  /**
  True if you want to apply `active`
  */
  active: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

Link.defaultProps = {
  arrow: false,
  active: false,
  more: false,
  dropdown: false
};

Link.Arrow = _linkArrow2.default;
Link.More = _linkMore2.default;
Link.Dropdown = _linkDropdown2.default;

exports.default = Link;