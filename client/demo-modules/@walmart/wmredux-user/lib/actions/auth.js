"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetPassword = exports.requestPasswordToken = exports.signUp = exports.signIn = exports.onSubmitSuccess = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require("redux-actions");

var _alertMessageMap = require("@walmart/wmreact-user/lib/components/common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _actionTypes = require("./action-types");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _api = require("../api/api");

var _api2 = _interopRequireDefault(_api);

var _customer = require("./customer");

var _reduxForm = require("redux-form");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define all the auth actions(sign in, sign up, forgot and reset password)
var onSignIn = (0, _reduxActions.createAction)(actionTypes.SIGN_IN);
var onSignInSuccess = (0, _reduxActions.createAction)(actionTypes.SIGN_IN_SUCCESS);
var onSignInError = (0, _reduxActions.createAction)(actionTypes.SIGN_IN_ERROR);
var onAccountCompromised = (0, _reduxActions.createAction)(actionTypes.ACCOUNT_COMPROMISED);

var onSignUp = (0, _reduxActions.createAction)(actionTypes.SIGN_UP);
var onSignUpSuccess = (0, _reduxActions.createAction)(actionTypes.SIGN_UP_SUCCESS);
var onSignUpError = (0, _reduxActions.createAction)(actionTypes.SIGN_UP_ERROR);

var onRequestPasswordToken = (0, _reduxActions.createAction)(actionTypes.REQUEST_PASSWORD_TOKEN);
var onRequestPasswordTokenSuccess = (0, _reduxActions.createAction)(actionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS);
var onRequestPasswordTokenError = (0, _reduxActions.createAction)(actionTypes.REQUEST_PASSWORD_TOKEN_ERROR);

var onResetPassword = (0, _reduxActions.createAction)(actionTypes.RESET_PASSWORD);
var onResetPasswordSuccess = (0, _reduxActions.createAction)(actionTypes.RESET_PASSWORD_SUCCESS);
var onResetPasswordError = (0, _reduxActions.createAction)(actionTypes.RESET_PASSWORD_ERROR);

var onSubmitSuccess = exports.onSubmitSuccess = (0, _reduxActions.createAction)(actionTypes.SUBMIT_SUCCESS);

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
  return _extends({}, rawError, {
    _error: _extends({}, rawError)
  }, _alertMessageMap2.default.getFieldAlerts(rawError.code));
};

//Sign in thunk
var signIn = exports.signIn = function signIn(data) {
  return function (dispatch) {
    dispatch(onSignIn(data));

    return _api2.default.signIn(data).then(function (json) {
      var response = json.payload;

      dispatch((0, _customer.setCustomerInfo)(response));
      dispatch(onSignInSuccess(response));

      return _extends({}, response, { extras: { data: data } });
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);
      dispatch(postSignInErrorHandler(errorObj));

      throw errorObj;
    });
  };
};

//Sign up thunk
var signUp = exports.signUp = function signUp(data) {
  return function (dispatch) {
    dispatch(onSignUp(data));

    return _api2.default.signUp(data).then(function (json) {
      var response = json;

      dispatch((0, _customer.setCustomerInfo)(response));
      dispatch(onSignUpSuccess(response));

      return _extends({}, response, { extras: { data: data } });
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);

      dispatch(onSignUpError(errorObj));

      //Special case: Prepopulate sign in email on account_already_exist error code
      if (rawError.code === "account_already_exist") {
        dispatch((0, _reduxForm.change)("signIn", "email", data.email));
        dispatch((0, _reduxForm.focus)("signIn", "email"));
      }

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

//Reset password thunk
var resetPassword = exports.resetPassword = function resetPassword(data) {
  return function (dispatch) {
    dispatch(onResetPassword(data));

    return _api2.default.resetPassword(data).then(function (json) {
      var response = json;

      dispatch(onResetPasswordSuccess(response));

      return _extends({}, response, { extras: { data: data } });
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);

      dispatch(onResetPasswordError(errorObj));

      throw errorObj;
    });
  };
};