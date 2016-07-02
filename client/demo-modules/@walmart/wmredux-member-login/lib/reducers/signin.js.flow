import {handleActions} from "redux-actions";
import {REQUEST_SIGN_IN_WIDGET_STATE} from "../actions/constants/signin";

const actions = {
  [REQUEST_SIGN_IN_WIDGET_STATE]: (state, action) => {
    return {
      ...state,
      compromised: false,
      currentState: action.payload.state
    };
  }
};

export default handleActions(actions, {tempForm: {}});
