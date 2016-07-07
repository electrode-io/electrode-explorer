import authUtils from "../common/auth-utils";
import {SET_CUSTOMER_INFO} from "../actions/action-types";

export default (state = {}, action) => {
  switch (action.type) {
  case SET_CUSTOMER_INFO:
    return {
      ...state,
      email: action.payload.emailAddress,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName
    };
  default:
    return {
      ...state,
      email: authUtils.getCustomerEmail() || state.email,
      firstName: authUtils.getCustomerFirstName(),
      lastName: authUtils.getCustomerLastName()
    };
  }
};
