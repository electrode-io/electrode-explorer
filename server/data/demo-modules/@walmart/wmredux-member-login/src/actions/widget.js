import {createAction} from "redux-actions";
import {
  REQUEST_SIGN_IN_WIDGET_STATE
} from "./constants/signin";

export const requestSignInWidgetState = createAction(REQUEST_SIGN_IN_WIDGET_STATE);

export const POSSIBLE_STATES = {
  SIGN_IN: 0,
  FORGOT_PASSWORD: 1,
  RESET_PASSWORD: 2
};
