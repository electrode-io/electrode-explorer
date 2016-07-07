import authUtils from "../common/auth-utils";
import {SET_CUSTOMER_INFO} from "../actions/constants/customer";

export default (state = {}, action) => {
  switch (action.type) {
  case SET_CUSTOMER_INFO:
    return {
      ...state,
      email: action.payload.emailAddress,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      customerData: action.payload
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
