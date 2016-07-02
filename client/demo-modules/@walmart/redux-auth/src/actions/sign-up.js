import { createAction } from "redux-actions";
import * as actionTypes from "./action-types";
import authApi from "../api/api";
import authUtils from "../common/auth-utils";
import alertMessageMap from "../common/alert-message-map";

const startSignUp = createAction(actionTypes.START_SIGN_UP);
const endSignUp = createAction(actionTypes.END_SIGN_UP);
export const setSignUpAlert = createAction(actionTypes.SET_SIGN_UP_ALERT);

export const handleSignUpError = (error, errorCallback) => {
  return (dispatch) => {
    const alert = alertMessageMap.getAlert(error.code);

    dispatch(setSignUpAlert(alert));

    errorCallback(error, alert);
  };
};

/*eslint-disable max-params */
export const signUp = (data, submitCallback, successCallback, errorCallback) => {
/*eslint-enable max-params */
  return (dispatch) => {
    authUtils.clearCache();
    dispatch(startSignUp());

    //Callback to trigger before sign up begins
    submitCallback(data);

    return authApi.signUp(data)
      .then((json) => {
        authUtils.setCache(json);
        dispatch(endSignUp());
        return json;
      })
      .then(successCallback)
      .catch((error) => {
        dispatch(handleSignUpError(error, errorCallback));
      });
  };
};
