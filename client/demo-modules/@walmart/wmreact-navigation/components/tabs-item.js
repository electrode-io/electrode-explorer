"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Tabs child item.
@examples
```jsx
<Tabs.Item title="First">
  <p>First Tab!</p>
</Tabs.Item>
```
@component Tabs.Item
@import {Tabs}
@playground
Tabs Item
```
<Tabs.Item title="First">
  <p>First Tab!</p>
</Tabs.Item>
```
*/
module.exports = _react2.default.createClass({
  displayName: "Tab.Item",

  propTypes: {
    /**
    The title
    */
    title: _react2.default.PropTypes.node.isRequired,
    children: _react2.default.PropTypes.node,
    hidden: _react2.default.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return {
      current: false
    };
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.hidden ? "hide-content" : "" },
      this.props.children
    );
  }
});