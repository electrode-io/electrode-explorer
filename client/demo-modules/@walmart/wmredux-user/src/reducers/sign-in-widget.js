import {handleActions} from "redux-actions";
import {
  REQUEST_PASSWORD_TOKEN, REQUEST_PASSWORD_TOKEN_COMPLETE,
  REQUEST_PASSWORD_TOKEN_SUCCESS, REQUEST_PASSWORD_TOKEN_ERROR,
  REQUEST_SIGN_IN_WIDGET_STATE, ACCOUNT_COMPROMISED,
  SUBMIT_SUCCESS
} from "../actions/action-types";
import {CAPTCHA_RESPONDED} from "../actions/captcha-action-types";
import {POSSIBLE_STATES} from "../actions/widget";
import {actionTypes} from "redux-form";

const updateState = (newState) =>
  (state) => ({...state, ...newState});

const actions = {
  [REQUEST_PASSWORD_TOKEN]: updateState({tokenRequested: true}),
  [REQUEST_PASSWORD_TOKEN_COMPLETE]: updateState({tokenRequested: false}),
  [REQUEST_PASSWORD_TOKEN_ERROR]: updateState({tokenRequested: false}),
  [REQUEST_PASSWORD_TOKEN_SUCCESS]: updateState({
    compromised: false,
    tokenRequested: false,
    currentState: POSSIBLE_STATES.RESET_PASSWORD
  }),
  [ACCOUNT_COMPROMISED]: updateState({
    compromised: true,
    currentState: POSSIBLE_STATES.FORGOT_PASSWORD
  }),
  [REQUEST_SIGN_IN_WIDGET_STATE]: (state, action) => {
    return {
      ...state,
      compromised: false,
      currentState: action.payload.state
    };
  },
  [actionTypes.CHANGE]: (state, action) => {
    const {tempForm} = state;
    const {field, value} = action;
    return {
      ...state,
      tempForm: {
        "email": (field === "email" && value) || tempForm.email,
        "firstName": (field === "firstName" && value) || tempForm.firstName,
        "lastName": (field === "lastName" && value) || tempForm.lastName
      }
    };
  },
  [CAPTCHA_RESPONDED]: updateState({captchaAvailable: true}),
  [actionTypes.STOP_SUBMIT]: (state, action) => {
    return action.errors
      ? {...state, captchaAvailable: undefined }
      : state;
  },
  [SUBMIT_SUCCESS]: (state, action) => {
    return updateState({submitSuccess: action.payload})(state);
  }
};

export default handleActions(actions, {tempForm: {}});
