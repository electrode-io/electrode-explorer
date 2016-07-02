"use strict";

exports.__esModule = true;
exports.preResetPassword = exports.forgotEmail = exports.resetPassword = exports.requestPasswordToken = exports.signIn = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require("redux-actions");

var _reduxForm = require("redux-form");

var _reactRouter = require("react-router");

var _requestPassword = require("./constants/request-password");

var _resetPassword = require("./constants/reset-password");

var _forgotEmail = require("./constants/forgot-email");

var _signin = require("./constants/signin");

var _account = require("./constants/account");

var _api = require("../api/api");

var _api2 = _interopRequireDefault(_api);

var _alertMessageMap = require("../common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _customer = require("./customer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define all the auth actions(sign in, forgot password, reset password and forgot email )
var onSignIn = (0, _reduxActions.createAction)(_signin.SIGN_IN);
var onSignInSuccess = (0, _reduxActions.createAction)(_signin.SIGN_IN_SUCCESS);
var onSignInError = (0, _reduxActions.createAction)(_signin.SIGN_IN_ERROR);
var onAccountCompromised = (0, _reduxActions.createAction)(_account.ACCOUNT_COMPROMISED);

var onRequestPasswordToken = (0, _reduxActions.createAction)(_requestPassword.REQUEST_PASSWORD_TOKEN);
var onRequestPasswordTokenSuccess = (0, _reduxActions.createAction)(_requestPassword.REQUEST_PASSWORD_TOKEN_SUCCESS);
var onRequestPasswordTokenError = (0, _reduxActions.createAction)(_requestPassword.REQUEST_PASSWORD_TOKEN_ERROR);

var onResetPassword = (0, _reduxActions.createAction)(_resetPassword.RESET_PASSWORD);
var onResetPasswordSuccess = (0, _reduxActions.createAction)(_resetPassword.RESET_PASSWORD_SUCCESS);
var onResetPasswordError = (0, _reduxActions.createAction)(_resetPassword.RESET_PASSWORD_ERROR);

var onForgotEmail = (0, _reduxActions.createAction)(_forgotEmail.FORGOT_EMAIL);
var onForgotEmailSuccess = (0, _reduxActions.createAction)(_forgotEmail.FORGOT_EMAIL_SUCCESS);
var onForgotEmailError = (0, _reduxActions.createAction)(_forgotEmail.FORGOT_EMAIL_ERROR);

var onPreResetPasswordSuccess = (0, _reduxActions.createAction)(_resetPassword.PRE_RESET_PASSWORD_SUCCESS);

var postSignInErrorHandler = function postSignInErrorHandler(errorObj) {
  return function (dispatch) {
    if (errorObj.code === "user_compromised") {
      dispatch(onAccountCompromised());
    } else {
      dispatch(onSignInError(errorObj));
    }
  };
};

var buildErrorObj = function buildErrorObj() {
  var rawError = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return (0, _extends3.default)({}, rawError, _alertMessageMap2.default.getReduxFormError(rawError), _alertMessageMap2.default.getAlert(rawError.code));
};

//Sign in thunk
var signIn = exports.signIn = function signIn(data) {
  return function (dispatch) {
    dispatch(onSignIn(data));

    return _api2.default.signIn(data).then(function (json) {
      var response = json.payload;

      dispatch((0, _customer.setCustomerInfo)(response));
      dispatch(onSignInSuccess(response));

      return response;
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);
      dispatch(postSignInErrorHandler(errorObj));

      throw errorObj;
    });
  };
};

//Forgot password thunk
var requestPasswordToken = exports.requestPasswordToken = function requestPasswordToken(data) {
  return function (dispatch) {
    dispatch(onRequestPasswordToken(data));

    return _api2.default.requestPasswordToken(data).then(function (json) {
      var response = json;

      dispatch(onRequestPasswordTokenSuccess(response));

      return response;
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);

      dispatch(onRequestPasswordTokenError(errorObj));

      throw errorObj;
    });
  };
};

// Reset password thunk
var resetPassword = exports.resetPassword = function resetPassword(data) {
  return function (dispatch) {
    dispatch(onResetPassword(data));
    return _api2.default.resetPassword(data).then(function (json) {
      var response = json;

      dispatch(onResetPasswordSuccess(response));

      return response;
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);

      dispatch(onResetPasswordError(errorObj));

      throw errorObj;
    });
  };
};

//Forgot email thunk
var forgotEmail = exports.forgotEmail = function forgotEmail(data) {
  return function (dispatch) {
    dispatch(onForgotEmail(data));

    return _api2.default.forgotEmail(data).then(function (json) {
      var response = json;
      dispatch(onForgotEmailSuccess(response));
      return response;
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);
      dispatch(onForgotEmailError(errorObj));
      throw errorObj;
    });
  };
};

var preResetPassword = exports.preResetPassword = function preResetPassword(data) {
  return function (dispatch) {
    try {
      if (data.length) {
        dispatch(onPreResetPasswordSuccess(data));
        _reactRouter.browserHistory.push("/account/resetpassword");
      }
    } catch (e) {
      dispatch((0, _reduxForm.stopSubmit)("forgotPassword", _alertMessageMap2.default.getReduxFormError({ code: "invalid_email" })));
    }
  };
};