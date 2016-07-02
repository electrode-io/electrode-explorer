"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Warning message component
@examples
```jsx
<Message.Warning block={true}>
  Warning message
</Message.Warning>
```
@component Message.Warning
@import {Message}
@playground
Message.Warning
```
<Message.Warning block={true}>
  Warning message
</Message.Warning>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Warning",
  propTypes: {
    /**
    True if this should be presented in block
    */
    block: _react2.default.PropTypes.bool,
    /**
    True if it's located above a form
    */
    aboveForm: _react2.default.PropTypes.bool,
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    /**
    The optional automation ID
    */
    automationId: _react2.default.PropTypes.string,
    hidden: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      block: false,
      aboveForm: false,
      automationId: "warning-message"
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)("alert active alert-warning", this.props.hidden ? "hide-content" : "", this.props.className, {
      "alert-block": this.props.block,
      "alert-above-form": this.props.aboveForm
    });

    return _react2.default.createElement(
      "span",
      { className: classes, "data-automation-id": this.props.automationId },
      this.props.children
    );
  }
});