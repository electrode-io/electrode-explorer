import { handleActions } from "redux-actions";
import { SIGN_UP_SUCCESS } from "../actions/constants/signup";

const actions = {
  [SIGN_UP_SUCCESS]: (state, action) => {
    return {
      ...state,
      firstName: action.payload.payload.firstName
    };
  }
};


export default handleActions(actions, {tempForm: {}});
