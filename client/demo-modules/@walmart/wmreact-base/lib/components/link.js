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

var _linkArrow = require("./link-arrow");

var _linkArrow2 = _interopRequireDefault(_linkArrow);

var _linkMore = require("./link-more");

var _linkMore2 = _interopRequireDefault(_linkMore);

var _linkDropdown = require("./link-dropdown");

var _linkDropdown2 = _interopRequireDefault(_linkDropdown);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* eslint react/prop-types: 0 */
var Link = function Link(props, context) {
  var extras = {
    "arrow-link": props.arrow,
    "active": props.active,
    "more-link": props.more,
    "dropdown-link": props.dropdown
  };
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
    (0, _extends3.default)({ className: (0, _classnames2.default)(extras, props.hidden ? "hide-content" : "", props.className),
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