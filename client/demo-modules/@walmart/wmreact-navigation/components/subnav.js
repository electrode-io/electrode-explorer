"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Subnav control.
@examples
```jsx
<Subnav automationId="demo-subnav">
  <Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
    Item 1
  </Subnav.Item>

  <Subnav.Item href="#bar" current={false} childCount={3} automationId="subnav-1">
    Item 2
  </Subnav.Item>

  <Subnav.Item href="#baz" current={false} childCount={3} automationId="subnav-2">
    Item 3
  </Subnav.Item>
</Subnav>
```
@component Subnav
@import {Subnav}
@playground
Subnav
```
<Subnav automationId="demo-subnav">
  <Subnav.Item href="#foo" current={true}
    childCount={3} automationId="subnav-0">
    Item 1
  </Subnav.Item>

  <Subnav.Item href="#bar" current={false}
    childCount={3} automationId="subnav-1">
    Item 2
  </Subnav.Item>

  <Subnav.Item href="#baz" current={false}
    childCount={3} automationId="subnav-2">
    Item 3
  </Subnav.Item>
</Subnav>
```
*/
var baseClass = _react2.default.createClass({
  displayName: "Subnav",

  propTypes: {
    /**
    If a page is static, add `staticPage` to set a fixed
    width of 1024px to the subnav. This maintains correct
    styling if a browser is more narrow than 1024px and the
    user scrolls to the right.
    */
    staticPage: _react2.default.PropTypes.bool,
    /**
    Adds a container element inside the subnav for proper
    display when the element should span the entire width
    of the page.
    */
    withContainer: _react2.default.PropTypes.bool,
    /**
    If a component user or author needs a subnav to differentiate
    itself for automation purposes, we accept an
    externally-supplied automationId.
    */
    automationId: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      staticPage: false,
      withContainer: false
    };
  },
  _renderInterior: function _renderInterior() {
    // Set an automation-id on <ul> if containerless, on the container otherwise.
    var automationId = this.props.withContainer ? undefined : this.props.automationId;
    var interiorContent = _react2.default.createElement(
      "ul",
      { className: "persistent-subnav-list",
        "data-automation-id": automationId },
      this.props.children
    );

    if (this.props.withContainer) {
      return _react2.default.createElement(
        "div",
        { className: "ResponsiveContainer", "data-automation-id": this.props.automationId },
        interiorContent
      );
    }

    return interiorContent;
  },
  render: function render() {
    var componentClasses = (0, _classnames2.default)("persistent-subnav", { fullwidth: this.props.staticPage }, this.props.hidden ? "hide-content" : "", this.props.className);

    return _react2.default.createElement(
      "nav",
      _extends({ className: componentClasses }, this.props),
      this._renderInterior()
    );
  }
});

baseClass.Item = require("./subnav-item");

exports.default = baseClass;