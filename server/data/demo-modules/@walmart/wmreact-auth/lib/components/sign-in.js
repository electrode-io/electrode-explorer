"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _passwordExisting = require("@walmart/wmreact-forms/lib/components/password-existing");

var _passwordExisting2 = _interopRequireDefault(_passwordExisting);

var _lockEmail = require("./lock-email");

var _lockEmail2 = _interopRequireDefault(_lockEmail);

var _helpers = require("../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignIn = _react2.default.createClass({
  displayName: "Auth-SignIn",

  propTypes: {
    //State props
    alert: _react.PropTypes.shape({
      type: _react.PropTypes.oneOf(["warning", "error"]),
      text: _react.PropTypes.text
    }),
    titleText: _react.PropTypes.string,
    btnPrimary: _react.PropTypes.bool,
    btnText: _react.PropTypes.string,
    loading: _react.PropTypes.bool,
    //Passthrough props
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    //Actionable props
    onSubmit: _react.PropTypes.func,
    onError: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      titleText: "Sign in",
      btnPrimary: true,
      btnText: "Sign in"
    };
  },
  _handleSubmit: function _handleSubmit(ev) {
    ev.preventDefault();

    var _refs = this.refs;
    var email = _refs.email;
    var password = _refs.password;

    if ([email, password].every(function (ref) {
      return ref.validate(true);
    })) {
      return this.props.onSubmit({
        email: email.getValue(),
        password: password.getValue()
      });
    } else {
      this.props.onError({ code: "validation_fail" });
    }
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      "section",
      { className: "Auth-SignIn" },
      _react2.default.createElement(
        "h2",
        { className: "heading-d" },
        this.props.titleText
      ),
      this.props.alert && _react2.default.createElement(_alert2.default, (0, _extends3.default)({}, this.props.alert, { isBlock: true, isAboveForm: true })),
      _react2.default.createElement(
        "form",
        { onSubmit: function onSubmit(ev) {
            return _this._handleSubmit(ev);
          } },
        _react2.default.createElement(_lockEmail2.default, { ref: "email",
          defaultEmail: this.props.defaultEmail,
          lockEmail: this.props.lockEmail }),
        _react2.default.createElement(_passwordExisting2.default, { ref: "password", labelText: "Password" }),
        _react2.default.createElement(
          "a",
          { href: "/account/forgotpassword" },
          (0, _helpers.i18n)("Forgot password?")
        ),
        _react2.default.createElement(
          _button2.default,
          { type: "submit",
            primary: this.props.btnPrimary,
            spinner: this.props.loading,
            disabled: this.props.loading },
          (0, _helpers.i18n)(this.props.btnText)
        )
      )
    );
  }
});

exports.default = SignIn;