import { handleActions } from "redux-actions";
import { actionTypes } from "redux-form";
import {
  REGISTER_MEMBERSHIP_SUCCESS,
  REGISTER_MEMBERSHIP_ERROR } from "../actions/constants/register-membership";

const actions = {
  [actionTypes.CHANGE]: (state, action) => {
    const {tempForm} = state;
    const { field, value } = action;

    return {
      ...state,
      tempForm: {
        "membershipNum": (field === "membershipNum" && value) || tempForm.membershipNum,
        "lastName": (field === "lastName" && value) || tempForm.lastName
      }
    };
  },
  [REGISTER_MEMBERSHIP_SUCCESS]: (state, action) => {
    return {
      ...state,
      firstName: action.payload.payload.firstName,
      email: action.payload.payload.email
    };
  },
  [REGISTER_MEMBERSHIP_ERROR]: (state, action) => {
    return {
      ...state,
      message: action.payload.message,
      email: action.payload.membership.email
    };
  }
};

export default handleActions(actions, {tempForm: {}});
