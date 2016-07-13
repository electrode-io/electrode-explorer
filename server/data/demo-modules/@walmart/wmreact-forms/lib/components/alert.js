"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Alert component.
@examples
```jsx
<Alert message="Error" type="error" isBlock={true}/>
```
@component Alert
@import {Alert}
@playground
Alert
```
<Alert message="Error" type="error" isBlock={true}/>
```
*/
exports.default = _react2.default.createClass({
  displayName: "Alert",

  propTypes: {
    children: _react2.default.PropTypes.array,
    /**
    The message
    */
    message: _react2.default.PropTypes.string,
    /**
    The type of alert. Either error, warning or success.
    */
    alertType: _react2.default.PropTypes.oneOf(["error", "warning", "success"]),
    /**
    True if it lays out block style.
    */
    isBlock: _react2.default.PropTypes.bool,
    /**
    True if it it's located above a form.
    */
    isAboveForm: _react2.default.PropTypes.bool,

    className: _react2.default.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      message: "",
      alertType: "error",
      isBlock: false,
      isAboveForm: false
    };
  },
  _getClasses: function _getClasses() {
    var classes = ["alert", "active"];

    if (this.props.alertType) {
      classes.push("alert-" + this.props.alertType);
    }

    if (this.props.isBlock) {
      classes.push("alert-block");
    }

    if (this.props.isAboveForm) {
      classes.push("alert-above-form");
    }

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return classes.join(" ");
  },
  render: function render() {
    return _react2.default.createElement(
      "span",
      (0, _extends3.default)({}, this.props, { className: this._getClasses() }),
      this.props.message || this.props.children
    );
  }
});