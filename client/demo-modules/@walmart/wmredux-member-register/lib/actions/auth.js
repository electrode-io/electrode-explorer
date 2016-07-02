"use strict";

exports.__esModule = true;
exports.registerMembership = exports.signUp = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _reduxActions = require("redux-actions");

var _signup = require("./constants/signup");

var _registerMembership = require("./constants/register-membership");

var _api = require("../api/api");

var _api2 = _interopRequireDefault(_api);

var _alertMessageMap = require("../common/alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

var _customer = require("./customer");

var _reduxForm = require("redux-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Complete sign up actions
var onSignUp = (0, _reduxActions.createAction)(_signup.SIGN_UP);
var onSignUpSuccess = (0, _reduxActions.createAction)(_signup.SIGN_UP_SUCCESS);
var onSignUpError = (0, _reduxActions.createAction)(_signup.SIGN_UP_ERROR);

// Membership register actions
var onRegisterMembership = (0, _reduxActions.createAction)(_registerMembership.REGISTER_MEMBERSHIP);
var onRegisterMembershipSuccess = (0, _reduxActions.createAction)(_registerMembership.REGISTER_MEMBERSHIP_SUCCESS);
var onRegisterMembershipError = (0, _reduxActions.createAction)(_registerMembership.REGISTER_MEMBERSHIP_ERROR);

var buildErrorObj = function buildErrorObj() {
  var rawError = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return (0, _extends3.default)({}, rawError, _alertMessageMap2.default.getReduxFormError(rawError), _alertMessageMap2.default.getAlert(rawError.code));
};

//Sign up thunk
var signUp = exports.signUp = function signUp(data) {
  return function (dispatch) {
    dispatch(onSignUp(data));

    return _api2.default.signUp(data).then(function (json) {
      var response = json;

      dispatch((0, _customer.setCustomerInfo)(response));
      dispatch(onSignUpSuccess(response));

      return response;
    }).catch(function (rawError) {
      var errorObj = buildErrorObj(rawError);

      dispatch(onSignUpError(errorObj));

      //Special case: Prepopulate sign in email on account_already_exist error code
      if (rawError.code === "account_already_exist") {
        dispatch((0, _reduxForm.change)("signUp", "email", data.email));
        dispatch((0, _reduxForm.focus)("signUp", "email"));
      }

      throw errorObj;
    });
  };
};

//Register Membership thunk
var registerMembership = exports.registerMembership = function registerMembership(data) {
  return function (dispatch) {
    dispatch(onRegisterMembership(data));

    return _api2.default.registerMembership(data).then(function (json) {
      var response = json;

      if (response.payload.payload.status === "account_already_exist") {
        dispatch(onRegisterMembershipError(response));
      }

      dispatch(onRegisterMembershipSuccess(response));

      return response;
    }).catch(function (rawError) {

      var errorObj = buildErrorObj(rawError);
      dispatch(onRegisterMembershipError(errorObj));

      throw errorObj;
    });
  };
};