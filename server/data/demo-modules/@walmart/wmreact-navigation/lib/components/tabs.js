"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _subnav = require("./subnav");

var _subnav2 = _interopRequireDefault(_subnav);

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Tabs container.
@examples
```jsx
<Tabs style={{minWidth: '100%'}} automationId="demo-tabs">
  <Tabs.Item title="First">
    <p>First Tab!</p>
  </Tabs.Item>
  <Tabs.Item title="Second">
    <p>Second Tab!</p>
  </Tabs.Item>
</Tabs>
```
@component Tabs
@import {Tabs}
@playground
Tabs Container
```
<Tabs style={{minWidth: '100%'}} automationId="demo-tabs">
  <Tabs.Item title="First">
    <p>First Tab!</p>
  </Tabs.Item>
  <Tabs.Item title="Second">
    <p>Second Tab!</p>
  </Tabs.Item>
</Tabs>
```
*/
var baseClass = _react2.default.createClass({
  displayName: "Tabs",

  propTypes: {
    /**
    If a component user or author needs a tab control to
    differentiate itself for automation purposes, we
    accept an externally-supplied automationId.
    */
    automationId: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    className: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  contextTypes: {
    analytics: _react2.default.PropTypes.object
  },

  getInitialState: function getInitialState() {
    return {
      current: 0
    };
  },
  _onTitleClick: function _onTitleClick(index, extra, event) {
    (0, _wmreactAnalytics.fireUIEvent)(this, event, { extras: { index: index } });
    event.preventDefault();
    this.setState({ current: index });
  },
  _renderChild: function _renderChild(child, index) {
    return this.state.current === index ? child : null;
  },
  render: function render() {
    var self = this;
    var childCount = 0;
    _react2.default.Children.map(this.props.children, function () {
      childCount++;
    });
    var navItems = _react2.default.Children.map(this.props.children, function (child, index) {
      var automationId = self.props.automationId ? self.props.automationId : "tab";
      automationId += "-item-" + index;

      return _react2.default.createElement(_subnav2.default.Item, { automationId: automationId,
        key: index,
        childCount: childCount,
        title: child.props.title,
        current: index === self.state.current,
        onClick: function onClick(event) {
          return self._onTitleClick(index, {}, event);
        } });
    });
    return _react2.default.createElement(
      "div",
      _extends({}, this.props, {
        "data-automation-id": this.props.automationId,
        className: (0, _classnames2.default)(this.props.className, this.props.hidden ? "hide-content" : "") }),
      _react2.default.createElement(
        _subnav2.default,
        this.props,
        navItems
      ),
      _react2.default.Children.map(this.props.children, this._renderChild)
    );
  }
});

baseClass.Item = require("./tabs-item");

exports.default = baseClass;