import {handleActions} from "redux-actions";
import {
  RESET_PASSWORD, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR,
  PRE_RESET_PASSWORD_SUCCESS
} from "../actions/constants/reset-password";

const updateState = (newState) => (state) => ({...state, ...newState});

const actions = {
  [PRE_RESET_PASSWORD_SUCCESS]: (state, newState) => {
    return {
      ...state,
      email: newState.payload
    };
  },
  [RESET_PASSWORD]: updateState({resetPasswordRequested: true}),
  [RESET_PASSWORD_SUCCESS]: updateState({
    resetPasswordRequested: false,
    resetPasswordSucceed: true
  }),
  [RESET_PASSWORD_ERROR]: updateState({resetPasswordRequested: false})
};

export default handleActions(actions, {tempForm: {}});
