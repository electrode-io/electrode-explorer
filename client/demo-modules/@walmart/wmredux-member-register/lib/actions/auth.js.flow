import { createAction } from "redux-actions";
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from "./constants/signup";
import { REGISTER_MEMBERSHIP,
         REGISTER_MEMBERSHIP_SUCCESS,
         REGISTER_MEMBERSHIP_ERROR } from "./constants/register-membership";
import api from "../api/api";
import alertMessageMap from "../common/alert-message-map";
import { setCustomerInfo } from "./customer";
import { change, focus } from "redux-form";

// Complete sign up actions
const onSignUp = createAction(SIGN_UP);
const onSignUpSuccess = createAction(SIGN_UP_SUCCESS);
const onSignUpError = createAction(SIGN_UP_ERROR);

// Membership register actions
const onRegisterMembership = createAction(REGISTER_MEMBERSHIP);
const onRegisterMembershipSuccess = createAction(REGISTER_MEMBERSHIP_SUCCESS);
const onRegisterMembershipError = createAction(REGISTER_MEMBERSHIP_ERROR);

const buildErrorObj = (rawError = {}) => ({
  ...rawError,
  ...(alertMessageMap.getReduxFormError(rawError)),
  ...(alertMessageMap.getAlert(rawError.code))
});

//Sign up thunk
export const signUp = (data) => (dispatch) => {
  dispatch(onSignUp(data));

  return api.signUp(data)
    .then((json) => {
      const response = json;

      dispatch(setCustomerInfo(response));
      dispatch(onSignUpSuccess(response));

      return response;
    }).catch((rawError) => {
      const errorObj = buildErrorObj(rawError);

      dispatch(onSignUpError(errorObj));

      //Special case: Prepopulate sign in email on account_already_exist error code
      if (rawError.code === "account_already_exist") {
        dispatch(change("signUp", "email", data.email));
        dispatch(focus("signUp", "email"));
      }

      throw errorObj;
    });
};

//Register Membership thunk
export const registerMembership = (data) => (dispatch) => {
  dispatch(onRegisterMembership(data));

  return api.registerMembership(data)
    .then((json) => {
      const response = json;

      if (response.payload.payload.status === "account_already_exist") {
        dispatch(onRegisterMembershipError(response));
      }

      dispatch(onRegisterMembershipSuccess(response));

      return response;
    }).catch((rawError) => {

      const errorObj = buildErrorObj(rawError);
      dispatch(onRegisterMembershipError(errorObj));

      throw errorObj;
    });
};
