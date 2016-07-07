import {handleActions} from "redux-actions";
import {
  MULTIPLE_EMAILS_SUCCESS
} from "../actions/constants/multiple-emails";

const actions = {
  [MULTIPLE_EMAILS_SUCCESS]: (state, action) => {
    return {
      ...state,
      compromised: false,
      firstName: action.payload.payload.firstName
    };
  }
};

export default handleActions(actions, {tempForm: {}});
