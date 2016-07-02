"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _field = require("./field");

var _field2 = _interopRequireDefault(_field);

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var _walmartWmreactBase = require("@walmart/wmreact-base");

var _commonHelpers = require("../common/helpers");

var _walmartWmreactForms = require("@walmart/wmreact-forms");

var ForgotPassword = (function (_React$Component) {
  _inherits(ForgotPassword, _React$Component);

  function ForgotPassword() {
    _classCallCheck(this, ForgotPassword);

    _get(Object.getPrototypeOf(ForgotPassword.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ForgotPassword, [{
    key: "_renderSignInLink",
    value: function _renderSignInLink() {
      return _react2["default"].createElement(
        "p",
        null,
        (0, _commonHelpers.i18n)("Remember your old password?"),
        " ",
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { fakelink: true, onClick: this.props.onSignInRequested },
          (0, _commonHelpers.i18n)("Sign in with it.")
        )
      );
    }
  }, {
    key: "_renderVerificationLink",
    value: function _renderVerificationLink() {
      var _props = this.props;
      var onVerificationRequested = _props.onVerificationRequested;
      var email = _props.fields.email;

      return _react2["default"].createElement(
        "p",
        null,
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          {
            fakelink: true,
            onClick: function () {
              return onVerificationRequested(email.value);
            } },
          (0, _commonHelpers.i18n)("Already have a verification code?")
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props;
      var email = _props2.fields.email;
      var handleSubmit = _props2.handleSubmit;
      var error = _props2.error;

      return _react2["default"].createElement(
        "form",
        { onSubmit: handleSubmit },
        _react2["default"].createElement(
          _walmartWmreactBase.Heading.H3,
          null,
          (0, _commonHelpers.i18n)("Enter your email for this account")
        ),
        error && _react2["default"].createElement(_walmartWmreactForms.Alert, { message: error, isBlock: true }),
        _react2["default"].createElement(_field2["default"], { field: email,
          label: (0, _commonHelpers.i18n)("Email") }),
        this.props.onSignInRequested && this._renderSignInLink(),
        _react2["default"].createElement(
          "p",
          null,
          (0, _commonHelpers.i18n)("We'll email you a verification code you can enter here to create a new password.")
        ),
        this.props.onVerificationRequested && this._renderVerificationLink(),
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { type: "submit" },
          (0, _commonHelpers.i18n)("Submit")
        )
      );
    }
  }]);

  return ForgotPassword;
})(_react2["default"].Component);

ForgotPassword.propTypes = {
  defaultEmailValue: _react.PropTypes.string,
  onSubmit: _react.PropTypes.func.isRequired,
  onSignInRequested: _react.PropTypes.func,
  onVerificationRequested: _react.PropTypes.func,
  fields: _react.PropTypes.shape({
    email: _react.PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: _react.PropTypes.func.isRequired,
  error: _react.PropTypes.string
};

exports["default"] = ForgotPassword;
module.exports = exports["default"];