import {
  REQUEST_PASSWORD_TOKEN_SUCCESS, REQUEST_SIGN_IN_WIDGET_STATE
} from "../actions/action-types";
import {actionTypes} from "redux-form";
import {POSSIBLE_STATES} from "../actions/widget";

export default (state = {currentState: POSSIBLE_STATES.SIGN_IN}, action) => {
  if (action.type === actionTypes.CHANGE && action.field === "email") {
    return Object.assign({}, state, {email: action.value});
  }

  switch (action.type) {
  case REQUEST_PASSWORD_TOKEN_SUCCESS:
    return Object.assign({}, state, {currentState: POSSIBLE_STATES.RESET_PASSWORD});
  case REQUEST_SIGN_IN_WIDGET_STATE:
    return Object.assign({}, state, {currentState: action.payload.state});
  default:
    return state;
  }
};
