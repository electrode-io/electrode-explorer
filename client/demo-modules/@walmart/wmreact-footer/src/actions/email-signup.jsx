// TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193

import {
  FOOTER_EMAIL_SIGNUP_REQUEST,
  FOOTER_EMAIL_SIGNUP_SUCCESS,
  FOOTER_EMAIL_SIGNUP_ERROR,
  FOOTER_EMAIL_SIGNUP_MODAL_CLOSE
} from "../types";
import fetch from "isomorphic-fetch";

const EMAIL_SIGNUP_URL = "/ajax/footer-email";
// Sync actions
export const emailSignupRequest = () => {
  return {
    type: FOOTER_EMAIL_SIGNUP_REQUEST
  };
};

export const emailSignupSuccess = (emailId) => {
  return {
    type: FOOTER_EMAIL_SIGNUP_SUCCESS,
    emailId
  };
};

export const emailSignupError = () => {
  return {
    type: FOOTER_EMAIL_SIGNUP_ERROR
  };
};

export const emailSignupModalClose = () => {
  return {
    type: FOOTER_EMAIL_SIGNUP_MODAL_CLOSE
  };
};

export const getEmailSignupServiceUrl = (emailId, emailSignupUrl) => {
  const url = emailSignupUrl || EMAIL_SIGNUP_URL;
  return emailId ? `${url}?email=${emailId}` : url;
};

export const onServiceResponse = (status, emailId, dispatch) => {
  if (status >= 400) {
    dispatch(emailSignupError());
    return;
  }
  dispatch(emailSignupSuccess(emailId));
};

export const sendSignupRequest = (emailId, emailSignupUrl) => {
  return (dispatch) => {
    dispatch(emailSignupRequest());
    const url = getEmailSignupServiceUrl(emailId, emailSignupUrl);
    return fetch(url, {method: "POST"}).then((res) => {
      onServiceResponse(res.status, emailId, dispatch);
    }).catch(() => {
      dispatch(emailSignupError());
    });
  };
};
