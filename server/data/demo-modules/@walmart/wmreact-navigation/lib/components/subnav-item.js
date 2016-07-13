"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/* eslint no-unused-vars: 0 */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Subnav child item.
@examples
```jsx
<Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
  Item 1
</Subnav.Item>
```
@component Subnav.Item
@import {Subnav}
@playground
Subnav Item
```
<Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
  Item 1
</Subnav.Item>
```
*/
module.exports = _react2.default.createClass({
  displayName: "Subnav.Item",

  propTypes: {
    /**
    Item title
    */
    title: _react2.default.PropTypes.node,
    /**
    The index
    */
    childCount: _react2.default.PropTypes.number.isRequired,
    /**
    True if this is the current item
    */
    current: _react2.default.PropTypes.bool,
    /**
    onClick callback
    */
    onClick: _react2.default.PropTypes.func,
    /**
    The href attribute for the link
    */
    href: _react2.default.PropTypes.string,
    /**
    An optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      href: "#",
      current: false,
      childCount: 1,
      onClick: function onClick(event) {}
    };
  },
  _onClick: function _onClick(event) {
    event.preventDefault();
    (0, _wmreactAnalytics.fireUIEvent)(this, event);
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  },
  render: function render() {
    var extras = {
      "current": this.props.current
    };
    var style = {
      width: 100 / this.props.childCount + "%"
    };
    return _react2.default.createElement(
      "li",
      _extends({
        style: style,
        "data-automation-id": this.props.automationId,
        className: (0, _classnames2.default)("persistent-subnav-item", extras, this.props.hidden ? "hide-content" : "", this.props.className)
      }, this.props),
      _react2.default.createElement(
        "a",
        {
          href: this.props.href,
          onClick: this._onClick
        },
        this.props.children || this.props.title
      )
    );
  }
});