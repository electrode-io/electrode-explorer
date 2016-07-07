import {handleActions} from "redux-actions";
import {
  REQUEST_SIGN_IN_WIDGET_STATE,
  SIGN_IN_ERROR
} from "../actions/constants/signin";

const actions = {
  [REQUEST_SIGN_IN_WIDGET_STATE]: (state, action) => {
    return {
      ...state,
      compromised: false,
      currentState: action.payload.state
    };
  },
  [SIGN_IN_ERROR]: (state, action) => {
    const { firstName, emails, code } = action.payload;
    return {
      ...state,
      firstName,
      emails,
      code
    };
  }
};

export default handleActions(actions, {tempForm: {}});
