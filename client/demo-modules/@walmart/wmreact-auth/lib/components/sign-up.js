"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactInteractive = require("@walmart/wmreact-interactive");

var _wmreactForms = require("@walmart/wmreact-forms");

var _lockEmail = require("./lock-email");

var _lockEmail2 = _interopRequireDefault(_lockEmail);

var _helpers = require("../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignUp = _react2.default.createClass({
  displayName: "Auth-SignUp",

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
    firstName: _react.PropTypes.bool,
    lastName: _react.PropTypes.bool,
    newsLetter: _react.PropTypes.bool,
    newsletterText: _react.PropTypes.node,
    //Passthrough props
    defaultEmail: _react.PropTypes.string,
    lockEmail: _react.PropTypes.bool,
    //Actionable props
    onSubmit: _react.PropTypes.func,
    onError: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    var defaultPrivacyPolicyLink = "http://corporate.walmart.com/privacy-security/" + "walmart-privacy-policy";

    return {
      titleText: "Sign up",
      btnPrimary: true,
      btnText: "Sign up",
      firstName: true,
      lastName: true,
      newsLetter: true,
      newsletterText: _react2.default.createElement(
        "span",
        null,
        "Email me about Rollbacks, special pricing, hot new items, gift ideas and more. My email address will only be used as described in the ",
        _react2.default.createElement(
          "a",
          {
            href: defaultPrivacyPolicyLink,
            target: "_blank" },
          "privacy policy"
        ),
        "."
      )
    };
  },
  _handleSubmit: function _handleSubmit(ev) {
    ev.preventDefault();

    var _refs = this.refs;
    var firstName = _refs.firstName;
    var lastName = _refs.lastName;
    var email = _refs.email;
    var password = _refs.password;
    var newsletter = _refs.newsletter;

    if ([firstName, lastName, email, password].filter(function (elem) {
      return elem;
    }).every(function (elem) {
      return elem.validate(true);
    })) {

      return this.props.onSubmit({
        firstName: firstName.getValue(),
        lastName: lastName.getValue(),
        email: email.getValue(),
        password: password.getValue(),
        newsletter: newsletter.getValue()
      });
    } else {
      this.props.onError({ code: "validation_fail" });
    }
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement(
      "section",
      { className: "Auth-SignUp" },
      _react2.default.createElement(
        "h2",
        { className: "heading-d" },
        this.props.titleText
      ),
      this.props.alert && _react2.default.createElement(_wmreactForms.Alert, (0, _extends3.default)({}, this.props.alert, { isBlock: true, isAboveForm: true })),
      _react2.default.createElement(
        "form",
        { onSubmit: function onSubmit(ev) {
            return _this._handleSubmit(ev);
          } },
        this.props.firstName && _react2.default.createElement(_wmreactForms.FirstName, { ref: "firstName" }),
        this.props.lastName && _react2.default.createElement(_wmreactForms.LastName, { ref: "lastName" }),
        _react2.default.createElement(_lockEmail2.default, { defaultEmail: this.props.defaultEmail,
          lockEmail: this.props.lockEmail,
          ref: "email" }),
        _react2.default.createElement(_wmreactForms.PasswordWithConfirmation, { cols: 1, ref: "password" }),
        _react2.default.createElement(
          _wmreactInteractive.Button,
          { type: "submit",
            primary: this.props.btnPrimary,
            spinner: this.props.loading,
            disabled: this.props.loading },
          (0, _helpers.i18n)(this.props.btnText)
        ),
        this.props.newsLetter && _react2.default.createElement(
          "span",
          { className: "newsletter" },
          _react2.default.createElement(
            _wmreactForms.Option,
            { checkboxName: "newsletter", ref: "newsletter" },
            (0, _helpers.i18n)(this.props.newsletterText)
          )
        ),
        _react2.default.createElement(
          "a",
          { href: "/account/sign-in" },
          (0, _helpers.i18n)("Returning customer? Sign in")
        )
      )
    );
  }
});

exports.default = SignUp;