"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Error message component
@examples
```jsx
<Message.Error block={true}>
  Error message
</Message.Error>
```
@component Message.Error
@import {Message}
@playground
Message.Error
```
<Message.Error block={true}>
  Error message
</Message.Error>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Error",

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
      automationId: "error-message"
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)("alert active alert-error", this.props.hidden ? "hide-content" : "", this.props.className, {
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