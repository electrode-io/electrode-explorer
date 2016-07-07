"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _values = require("lodash/values");

var _values2 = _interopRequireDefault(_values);

var _reactRedux = require("react-redux");

var _reduxForm = require("redux-form");

var _forgotPassword = require("../connected/forgot-password");

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

var _resetPassword = require("../connected/reset-password");

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _signIn = require("../connected/sign-in");

var _signIn2 = _interopRequireDefault(_signIn);

var _signUp = require("../connected/sign-up");

var _signUp2 = _interopRequireDefault(_signUp);

var _widget = require("../../actions/widget");

var _validators = require("../../common/validators");

var _validators2 = _interopRequireDefault(_validators);

var _alertMessageMap = require("../../common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = _validators2.default.required;
var email = _validators2.default.email;


var SignInWidget = function SignInWidget(props) {
  var currentState = props.currentState;
  var onSignInRequested = props.onSignInRequested;
  var onForgotPasswordRequested = props.onForgotPasswordRequested;
  var onResetPasswordRequested = props.onResetPasswordRequested;
  var onSignUpRequested = props.onSignUpRequested;
  var options = props.options;


  switch (currentState) {
    case 1:
      return _react2.default.createElement(_forgotPassword2.default, _extends({
        onResetPasswordRequested: onResetPasswordRequested,
        onForgotPasswordRequested: onForgotPasswordRequested,
        onSignInRequested: onSignInRequested
      }, options.forgotPassword, props));
    case 2:
      return _react2.default.createElement(_resetPassword2.default, _extends({
        onSignInRequested: onSignInRequested,
        onForgotPasswordRequested: onForgotPasswordRequested
      }, options.resetPassword, props));
    case 3:
      return _react2.default.createElement(_signUp2.default, _extends({
        onSignInRequested: onSignInRequested
      }, options.signUp, props));
    default:
      return _react2.default.createElement(_signIn2.default, _extends({
        onForgotPasswordRequested: onForgotPasswordRequested,
        onSignUpRequested: onSignUpRequested
      }, options.signIn, props));
  }
};

SignInWidget.propTypes = {
  currentState: _react.PropTypes.oneOf((0, _values2.default)(_widget.POSSIBLE_STATES)),
  options: _react.PropTypes.shape({
    signIn: _react.PropTypes.object,
    signUp: _react.PropTypes.object,
    forgotPassword: _react.PropTypes.object,
    resetPassword: _react.PropTypes.object
  })
};

SignInWidget.defaultProps = {
  currentState: _widget.POSSIBLE_STATES.SIGN_IN,
  options: {}
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var _ref$signInWidget = _ref.signInWidget;
  var signInWidget = _ref$signInWidget === undefined ? {} : _ref$signInWidget;
  return signInWidget;
}, function (dispatch) {
  return {
    onSignInRequested: function onSignInRequested() {
      return dispatch((0, _widget.requestSignInWidgetState)({
        state: _widget.POSSIBLE_STATES.SIGN_IN
      }));
    },

    onForgotPasswordRequested: function onForgotPasswordRequested() {
      return dispatch((0, _widget.requestSignInWidgetState)({
        state: _widget.POSSIBLE_STATES.FORGOT_PASSWORD
      }));
    },

    onSignUpRequested: function onSignUpRequested() {
      return dispatch((0, _widget.requestSignInWidgetState)({
        state: _widget.POSSIBLE_STATES.SIGN_UP
      }));
    },

    onResetPasswordRequested: function onResetPasswordRequested() {
      var emailAddress = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];

      if (!(required.validate(emailAddress) && email.validate(emailAddress))) {
        return dispatch((0, _reduxForm.stopSubmit)("forgotPassword", _alertMessageMap2.default.getReduxFormError({ code: "invalid_email" })));
      } else {
        return dispatch((0, _widget.requestSignInWidgetState)({
          state: _widget.POSSIBLE_STATES.RESET_PASSWORD }));
      }
    }
  };
})(SignInWidget);