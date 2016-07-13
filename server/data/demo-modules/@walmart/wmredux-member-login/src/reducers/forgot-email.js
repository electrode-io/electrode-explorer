import {handleActions} from "redux-actions";
import {
  FORGOT_EMAIL_SUCCESS
} from "../actions/constants/forgot-email";

const actions = {
  [FORGOT_EMAIL_SUCCESS]: (state, action) => {
    return {
      ...state,
      compromised: false,
      email: action.payload.payload.email
    };
  }
};

export default handleActions(actions, {tempForm: {}});
