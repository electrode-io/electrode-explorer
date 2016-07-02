import {createAction} from "redux-actions";
import {postJson} from "./helpers/fetch";
import {startSubmit, stopSubmit} from "redux-form";
import {bind} from "redux-effects";
import {
  REQUEST_PASSWORD_TOKEN, REQUEST_PASSWORD_TOKEN_ERROR, REQUEST_PASSWORD_TOKEN_SUCCESS,
  RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR
} from "./action-types";
import config from "../config";

const onRequestPasswordToken = createAction(REQUEST_PASSWORD_TOKEN);
const onRequestPasswordTokenSuccess = createAction(REQUEST_PASSWORD_TOKEN_SUCCESS);
const onRequestPasswordTokenError = createAction(REQUEST_PASSWORD_TOKEN_ERROR);
const onResetPassword = createAction(RESET_PASSWORD);
const onResetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS);
const onResetPasswordError = createAction(RESET_PASSWORD_ERROR);

const extractErrors = (res) => {
  const genericMessage = "Something went wrong, verify your values or try again later";
  return {
    _error: (res.value && res.value.message) || genericMessage
  };
};

export const requestPasswordToken = ({email}) => {
  return [startSubmit("forgotPassword"), onRequestPasswordToken({email}), bind(
    postJson(config.forgotPasswordUrl, {email}),
    (res) => [stopSubmit("forgotPassword"), onRequestPasswordTokenSuccess(res)],
    (res) => [stopSubmit("forgotPassword", extractErrors(res)), onRequestPasswordTokenError(res)])];
};

export const resetPassword = ({email, passCode, password}, onSuccess) => {
  return [startSubmit("resetPassword"), onResetPassword({email, passCode}), bind(
    postJson(config.resetPasswordUrl, {email, passCode, password}),
    (res) => {
      if (onSuccess) {
        onSuccess();
      }
      return [stopSubmit("resetPassword"), onResetPasswordSuccess(res)];
    },
    (res) => [stopSubmit("resetPassword", extractErrors(res)), onResetPasswordError(res)])];
};

