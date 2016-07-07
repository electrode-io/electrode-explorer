import {handleActions} from "redux-actions";
import {
  LOST_STOLEN_MEMBERSHIP_SUCCESS
} from "../actions/constants/lost-stolen-membership";

const actions = {
  [LOST_STOLEN_MEMBERSHIP_SUCCESS]: (state, action) => {
    return {
      ...state,
      compromised: false,
      firstName: action.payload.payload.firstName
    };
  }
};

export default handleActions(actions, {tempForm: {}});
