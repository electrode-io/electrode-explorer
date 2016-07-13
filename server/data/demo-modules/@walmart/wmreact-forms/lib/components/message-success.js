"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Success message component
@examples
```jsx
<Message.Success block={true}>
  Success message
</Message.Success>
```
@component Message.Success
@import {Message}
@playground
Message.Success
```
<Message.Success block={true}>
  Success message
</Message.Success>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Success",
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
      automationId: "success-message"
    };
  },
  render: function render() {
    var classes = (0, _classnames2.default)("alert active alert-success", this.props.hidden ? "hide-content" : "", this.props.className, {
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