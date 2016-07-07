import {createAction} from "redux-actions";
import alertMessageMap from "@walmart/wmreact-user/lib/components/common/alert-message-map";

import * as actionTypes from "./action-types";
import api from "../api/api";
import {setCustomerInfo} from "./customer";
import {change, focus} from "redux-form";

// Define all the auth actions(sign in, sign up, forgot and reset password)
const onSignIn = createAction(actionTypes.SIGN_IN);
const onSignInSuccess = createAction(actionTypes.SIGN_IN_SUCCESS);
const onSignInError = createAction(actionTypes.SIGN_IN_ERROR);
const onAccountCompromised = createAction(actionTypes.ACCOUNT_COMPROMISED);


const onSignUp = createAction(actionTypes.SIGN_UP);
const onSignUpSuccess = createAction(actionTypes.SIGN_UP_SUCCESS);
const onSignUpError = createAction(actionTypes.SIGN_UP_ERROR);

const onRequestPasswordToken = createAction(actionTypes.REQUEST_PASSWORD_TOKEN);
const onRequestPasswordTokenSuccess = createAction(actionTypes.REQUEST_PASSWORD_TOKEN_SUCCESS);
const onRequestPasswordTokenError = createAction(actionTypes.REQUEST_PASSWORD_TOKEN_ERROR);

const onResetPassword = createAction(actionTypes.RESET_PASSWORD);
const onResetPasswordSuccess = createAction(actionTypes.RESET_PASSWORD_SUCCESS);
const onResetPasswordError = createAction(actionTypes.RESET_PASSWORD_ERROR);

export const onSubmitSuccess = createAction(actionTypes.SUBMIT_SUCCESS);

const postSignInErrorHandler = (errorObj) => (dispatch) => {
  if (errorObj.code === "user_compromised") {
    dispatch(onAccountCompromised());
  } else {
    dispatch(onSignInError(errorObj));
  }
};

const buildErrorObj = (rawError = {}) => ({
  ...rawError,
  _error: {
    ...rawError
  },
  ...alertMessageMap.getFieldAlerts(rawError.code)
});

//Sign in thunk
export const signIn = (data) => (dispatch) => {
  dispatch(onSignIn(data));

  return api.signIn(data)
    .then((json) => {
      const response = json.payload;

      dispatch(setCustomerInfo(response));
      dispatch(onSignInSuccess(response));

      return {...response, extras: {data}};
    })
    .catch((rawError) => {
      const errorObj = buildErrorObj(rawError);
      dispatch(postSignInErrorHandler(errorObj));

      throw errorObj;
    });
};

//Sign up thunk
export const signUp = (data) => (dispatch) => {
  dispatch(onSignUp(data));

  return api.signUp(data)
    .then((json) => {
      const response = json;

      dispatch(setCustomerInfo(response));
      dispatch(onSignUpSuccess(response));

      return {...response, extras: {data}};
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);

      dispatch(onSignUpError(errorObj));

      //Special case: Prepopulate sign in email on account_already_exist error code
      if (rawError.code === "account_already_exist") {
        dispatch(change("signIn", "email", data.email));
        dispatch(focus("signIn", "email"));
      }

      throw errorObj;
    });
};

//Forgot password thunk
export const requestPasswordToken = (data) => (dispatch) => {
  dispatch(onRequestPasswordToken(data));

  return api.requestPasswordToken(data)
    .then((json) => {
      const response = json;

      dispatch(onRequestPasswordTokenSuccess(response));

      return response;
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);

      dispatch(onRequestPasswordTokenError(errorObj));

      throw errorObj;
    });
};

//Reset password thunk
export const resetPassword = (data) => (dispatch) => {
  dispatch(onResetPassword(data));

  return api.resetPassword(data)
    .then((json) => {
      const response = json;

      dispatch(onResetPasswordSuccess(response));

      return {...response, extras: {data}};
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);

      dispatch(onResetPasswordError(errorObj));

      throw errorObj;
    });
};
