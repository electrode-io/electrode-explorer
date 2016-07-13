// TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193
import {
  FOOTER_EMAIL_SIGNUP_REQUEST,
  FOOTER_EMAIL_SIGNUP_SUCCESS,
  FOOTER_EMAIL_SIGNUP_ERROR,
  FOOTER_EMAIL_SIGNUP_MODAL_CLOSE
} from "../types";

export const defaultState = {
  showModal: false,
  loading: false,
  didInvalidate: false,
  emailId: ""
};

export const emailSignup = (state = defaultState, action) => {
  switch (action.type) {
  case FOOTER_EMAIL_SIGNUP_REQUEST:
    return Object.assign({}, state, {
      showModal: false,
      loading: true,
      didInvalidate: false,
      emailId: ""
    });
  case FOOTER_EMAIL_SIGNUP_SUCCESS:
    return Object.assign({}, state, {
      showModal: true,
      loading: false,
      didInvalidate: false,
      emailId: action.emailId
    });
  case FOOTER_EMAIL_SIGNUP_ERROR:
    return Object.assign({}, state, {
      showModal: false,
      loading: false,
      didInvalidate: true,
      emailId: ""
    });
  case FOOTER_EMAIL_SIGNUP_MODAL_CLOSE:
    return Object.assign({}, state, defaultState);
  default:
    return state;
  }
};
