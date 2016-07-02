"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = require("redux-form");

var _noop = require("lodash/noop");

var _noop2 = _interopRequireDefault(_noop);

var _auth = require("../../actions/auth");

var _signUp = require("@walmart/wmreact-user/lib/components/sign-up");

var _signUp2 = _interopRequireDefault(_signUp);

var _validators = require("../../common/validators");

var _validators2 = _interopRequireDefault(_validators);

var _helpers = require("../../common/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var required = _validators2.default.required;
var email = _validators2.default.email;
var password = _validators2.default.password;
var firstname = _validators2.default.firstname;
var lastname = _validators2.default.lastname;


var formName = "signUp";
var formFieldValidators = {
  firstName: [required, firstname],
  lastName: [required, lastname],
  email: [required, email],
  password: [required, password],
  newsletter: [],
  passwordStrength: []
};

exports.default = (0, _reduxForm.reduxForm)({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: (0, _helpers.validateForm)(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
}, function (state) {
  return { defaultEmail: (0, _helpers.getDefaultEmail)(state) };
}, function (dispatch, _ref) {
  var _ref$onSubmit = _ref.onSubmit;
  var onSubmit = _ref$onSubmit === undefined ? _noop2.default : _ref$onSubmit;
  var _ref$onSuccess = _ref.onSuccess;
  var onSuccess = _ref$onSuccess === undefined ? _noop2.default : _ref$onSuccess;
  var _ref$onError = _ref.onError;
  var onError = _ref$onError === undefined ? _noop2.default : _ref$onError;
  return {
    //The stuff to do on handleSubmit
    onSignUp: function onSignUp(data) {
      onSubmit(data);

      return dispatch((0, _auth.signUp)(data)).catch(function (error) {
        dispatch((0, _reduxForm.change)(formName, "password", null));
        dispatch((0, _reduxForm.untouch)(formName, "password"));
        throw error;
      });
    },
    //The stuff to do after handleSubmit
    handleResponse: function handleResponse(promise) {
      return (0, _helpers.handleResponse)(promise, onSuccess, onError, formFieldValidators);
    }
  };
})(_signUp2.default);