"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxForm = require("redux-form");

var _noop = require("lodash/noop");

var _noop2 = _interopRequireDefault(_noop);

var _auth = require("../../actions/auth");

var _captchaSignIn = require("./captcha-sign-in");

var _validators = require("../../common/validators");

var _validators2 = _interopRequireDefault(_validators);

var _helpers = require("../../common/helpers");

var _alertMessageMap = require("../../common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = _validators2.default.required;
var email = _validators2.default.email;


var formName = "forgotPassword";
var formFieldValidators = {
  email: [required, email]
};

exports.default = (0, _reduxForm.reduxForm)({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: (0, _helpers.validateForm)(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
}, function (state) {
  return _extends({
    defaultEmail: (0, _helpers.getDefaultEmail)(state)
  }, state.forgotPassword, {
    compromisedErr: state.signInWidget && state.signInWidget.compromised ? _alertMessageMap2.default.getAlert("compromised_message_alert") : undefined
  });
}, function (dispatch, _ref) {
  var _ref$onSubmit = _ref.onSubmit;
  var onSubmit = _ref$onSubmit === undefined ? _noop2.default : _ref$onSubmit;
  var _ref$onSuccess = _ref.onSuccess;
  var onSuccess = _ref$onSuccess === undefined ? _noop2.default : _ref$onSuccess;
  var _ref$onError = _ref.onError;
  var onError = _ref$onError === undefined ? _noop2.default : _ref$onError;
  return {
    //The stuff to do on handleSubmit
    onForgotPassword: function onForgotPassword(data) {
      //Trigger the onSubmit callback
      onSubmit(data);

      return dispatch((0, _auth.requestPasswordToken)(data));
    },
    //The stuff to do after handleSubmit
    handleResponse: function handleResponse(promise) {
      return (0, _helpers.handleResponse)(promise, onSuccess, onError, formFieldValidators);
    }
  };
})(_captchaSignIn.CaptchaForgotPassword);