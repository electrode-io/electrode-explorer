"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _email = require("@walmart/wmreact-forms/lib/components/email");

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LockEmail = _react2.default.createClass({
  displayName: "Auth-LockEmail",

  propTypes: {
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool
  },

  defaultProps: {
    lockEmail: false
  },

  getValue: function getValue() {
    return this.refs.email.value || this.refs.email.getValue();
  },
  validate: function validate(args) {
    return this.props.lockEmail ? true : this.refs.email.validate(args);
  },
  render: function render() {
    var email = this.props.defaultEmail;

    return this.props.lockEmail ? _react2.default.createElement(
      "p",
      { className: "font-bold" },
      email,
      _react2.default.createElement("input", { ref: "email",
        type: "hidden",
        value: email })
    ) : _react2.default.createElement(_email2.default, { ref: "email",
      defaultValue: email });
  }
});

exports.default = LockEmail;