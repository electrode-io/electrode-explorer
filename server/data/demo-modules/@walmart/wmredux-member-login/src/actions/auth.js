import { createAction } from "redux-actions";
import { stopSubmit } from "redux-form";
import { browserHistory } from "react-router";

import {
  REQUEST_PASSWORD_TOKEN,
  REQUEST_PASSWORD_TOKEN_SUCCESS,
  REQUEST_PASSWORD_TOKEN_ERROR
} from "./constants/request-password";
import {
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  PRE_RESET_PASSWORD_SUCCESS
} from "./constants/reset-password";
import {
  FORGOT_EMAIL,
  FORGOT_EMAIL_SUCCESS,
  FORGOT_EMAIL_ERROR
} from "./constants/forgot-email";
import {
  LOST_STOLEN_MEMBERSHIP,
  LOST_STOLEN_MEMBERSHIP_SUCCESS,
  LOST_STOLEN_MEMBERSHIP_ERROR
} from "./constants/lost-stolen-membership";

import {
  MULTIPLE_EMAILS,
  MULTIPLE_EMAILS_SUCCESS,
  MULTIPLE_EMAILS_ERROR
} from "./constants/multiple-emails";

import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR} from "./constants/signin";
import {ACCOUNT_COMPROMISED} from "./constants/account";
import api from "../api/api";
import alertMessageMap from "../common/alert-message-map";
import {setCustomerInfo} from "./customer";

// Define all the auth actions(sign in, forgot password, reset password and forgot email )
const onSignIn = createAction(SIGN_IN);
const onSignInSuccess = createAction(SIGN_IN_SUCCESS);
const onSignInError = createAction(SIGN_IN_ERROR);
const onAccountCompromised = createAction(ACCOUNT_COMPROMISED);

const onRequestPasswordToken = createAction(REQUEST_PASSWORD_TOKEN);
const onRequestPasswordTokenSuccess = createAction(REQUEST_PASSWORD_TOKEN_SUCCESS);
const onRequestPasswordTokenError = createAction(REQUEST_PASSWORD_TOKEN_ERROR);

const onResetPassword = createAction(RESET_PASSWORD);
const onResetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);
const onResetPasswordError = createAction(RESET_PASSWORD_ERROR);

const onForgotEmail = createAction(FORGOT_EMAIL);
const onForgotEmailSuccess = createAction(FORGOT_EMAIL_SUCCESS);
const onForgotEmailError = createAction(FORGOT_EMAIL_ERROR);

const onPreResetPasswordSuccess = createAction(PRE_RESET_PASSWORD_SUCCESS);

const onLostStolenMembership = createAction(LOST_STOLEN_MEMBERSHIP);
const onLostStolenMembershipSuccess = createAction(LOST_STOLEN_MEMBERSHIP_SUCCESS);
const onLostStolenMembershipError = createAction(LOST_STOLEN_MEMBERSHIP_ERROR);

const onMultipleEmail = createAction(MULTIPLE_EMAILS);
const onMultipleEmailSuccess = createAction(MULTIPLE_EMAILS_SUCCESS);
const onMultipleEmailError = createAction(MULTIPLE_EMAILS_ERROR);

const postSignInErrorHandler = (errorObj) => (dispatch) => {
  if (errorObj.code === "user_compromised") {
    dispatch(onAccountCompromised());
  } else {
    dispatch(onSignInError(errorObj));
  }
};

const buildErrorObj = (rawError = {}) => ({
  ...rawError,
  ...(alertMessageMap.getReduxFormError(rawError)),
  ...(alertMessageMap.getAlert(rawError.code))
});

//Sign in thunk
export const signIn = (data) => (dispatch) => {
  dispatch(onSignIn(data));

  return api.signIn(data)
    .then((json) => {
      const response = json.payload;

      dispatch(setCustomerInfo(response));
      dispatch(onSignInSuccess(response));

      return response;
    })
    .catch((rawError) => {
      const errorObj = buildErrorObj(rawError);
      dispatch(postSignInErrorHandler(errorObj));

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

// Reset password thunk
export const resetPassword = (data) => (dispatch) => {
  dispatch(onResetPassword(data));
  return api.resetPassword(data)
    .then((json) => {
      const response = json;

      dispatch(onResetPasswordSuccess(response));

      return response;
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);

      dispatch(onResetPasswordError(errorObj));

      throw errorObj;
    });
};

//Forgot email thunk
export const forgotEmail = (data) => (dispatch) => {
  dispatch(onForgotEmail(data));

  return api.forgotEmail(data)
    .then((json) => {
      const response = json;
      dispatch(onForgotEmailSuccess(response));
      return response;
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);
      dispatch(onForgotEmailError(errorObj));
      throw errorObj;
    });
};

//Pre Reset Password thunk
export const preResetPassword = (data) => (dispatch) => {
  try {
    if (data.length) {
      dispatch(onPreResetPasswordSuccess(data));
      browserHistory.push("/account/resetpassword");
    }
  } catch (e) {
    dispatch(stopSubmit("forgotPassword",
          alertMessageMap.getReduxFormError({code: "invalid_email"})));
  }
};

//Lost Stolen Membership thunk
export const lostStolenMembership = (data) => (dispatch) => {
  dispatch(onLostStolenMembership(data));

  return api.lostStolenMembership(data)
    .then((json) => {
      const response = json;
      dispatch(onLostStolenMembershipSuccess(response));
      return response;
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);
      dispatch(onLostStolenMembershipError(errorObj));
      throw errorObj;
    });
};

//Multiple Emails thunk
export const multipleEmails = (data) => (dispatch) => {
  dispatch(onMultipleEmail(data));

  return api.onMultipleEmail(data)
    .then((json) => {
      const response = json;
      dispatch(onMultipleEmailSuccess(response));
      return response;
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);
      dispatch(onMultipleEmailError(errorObj));
      throw errorObj;
    });
};
