"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

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
var password = _validators2.default.password;


var formName = "resetPassword";
var formFieldValidators = {
  email: [required, email],
  password: [required, password],
  passcode: [required],
  passwordStrength: []
};

exports.default = (0, _reduxForm.reduxForm)({
  form: formName,
  touchOnBlur: false,
  fields: (0, _keys2.default)(formFieldValidators),
  validate: (0, _helpers.validateForm)(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
}, function (state) {
  return { defaultEmail: (0, _helpers.getResetPasswordEmail)(state) };
}, function (dispatch, _ref) {
  var _ref$onSubmit = _ref.onSubmit;
  var onSubmit = _ref$onSubmit === undefined ? _noop2.default : _ref$onSubmit;
  var _ref$onSuccess = _ref.onSuccess;
  var onSuccess = _ref$onSuccess === undefined ? _noop2.default : _ref$onSuccess;
  var _ref$onError = _ref.onError;
  var onError = _ref$onError === undefined ? _noop2.default : _ref$onError;
  return {
    onResetPasswordRequested: function onResetPasswordRequested(data) {
      //Trigger the onSubmit callback
      onSubmit(data);

      return dispatch((0, _auth.resetPassword)(data));
    },

    //The stuff to do after handleSubmit
    handleResponse: function handleResponse(promise) {
      return (0, _helpers.handleResponse)(promise, onSuccess, onError, formFieldValidators);
    },

    onNewCodeRequested: function onNewCodeRequested(data) {
      return dispatch((0, _auth.requestPasswordToken)(data)).then(function (json) {
        dispatch((0, _reduxForm.stopSubmit)(formName, _alertMessageMap2.default.getReduxFormError({ code: "request_new_code_success" })));

        dispatch((0, _reduxForm.change)(formName, "passcode", null));
        dispatch((0, _reduxForm.change)(formName, "password", null));

        dispatch((0, _reduxForm.untouch)(formName, "passcode", "password"));

        return json;
      }).catch(function (error) {
        dispatch((0, _reduxForm.stopSubmit)(formName, error));

        throw error;
      });
    }

  };
})(_captchaSignIn.CaptchaResetPassword);