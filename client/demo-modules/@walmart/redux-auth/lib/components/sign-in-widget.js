"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _connectedForgotPassword = require("./connected-forgot-password");

var _connectedForgotPassword2 = _interopRequireDefault(_connectedForgotPassword);

var _connectedResetPassword = require("./connected-reset-password");

var _connectedResetPassword2 = _interopRequireDefault(_connectedResetPassword);

var _connectedSignIn = require("./connected-sign-in");

var _connectedSignIn2 = _interopRequireDefault(_connectedSignIn);

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _actionsWidget = require("../actions/widget");

var SignInWidget = function SignInWidget(props) {
  var currentState = props.currentState;
  var email = props.email;
  var onSignInRequested = props.onSignInRequested;
  var onForgotPasswordRequested = props.onForgotPasswordRequested;
  var onVerificationRequested = props.onVerificationRequested;
  var onSuccess = props.onSuccess;

  switch (currentState) {
    case 0:
      return _react2["default"].createElement(_connectedSignIn2["default"], {
        onSuccess: onSuccess,
        onForgotPassword: onForgotPasswordRequested });
    case 1:
      return _react2["default"].createElement(_connectedForgotPassword2["default"], {
        onVerificationRequested: onVerificationRequested,
        onSignInRequested: onSignInRequested
      });
    case 2:
      return _react2["default"].createElement(_connectedResetPassword2["default"], {
        email: email,
        onSuccess: onSuccess,
        onSignInRequested: onSignInRequested
      });
  }
};

SignInWidget.propTypes = {
  currentState: _react.PropTypes.oneOf(_actionsWidget.POSSIBLE_STATES),
  email: _react.PropTypes.string,
  onSignInRequested: _react.PropTypes.func.isRequired,
  onForgotPasswordRequested: _react.PropTypes.func.isRequired,
  onVerificationRequested: _react.PropTypes.func,
  onSuccess: _react.PropTypes.func.isRequired
};

SignInWidget.defaultValues = {
  currentState: _actionsWidget.POSSIBLE_STATES.SIGN_IN
};

exports["default"] = (0, _reactRedux.connect)(function (_ref) {
  var signInWidget = _ref.signInWidget;
  return signInWidget;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({
    onSignInRequested: function onSignInRequested() {
      return (0, _actionsWidget.requestSignInWidgetState)({ state: _actionsWidget.POSSIBLE_STATES.SIGN_IN });
    },
    onForgotPasswordRequested: function onForgotPasswordRequested() {
      return (0, _actionsWidget.requestSignInWidgetState)({ state: _actionsWidget.POSSIBLE_STATES.FORGOT_PASSWORD });
    },
    onVerificationRequested: function onVerificationRequested() {
      return (0, _actionsWidget.requestSignInWidgetState)({ state: _actionsWidget.POSSIBLE_STATES.RESET_PASSWORD });
    }
  }, dispatch);
})(SignInWidget);
module.exports = exports["default"];