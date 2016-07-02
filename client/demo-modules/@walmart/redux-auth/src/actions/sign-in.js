import { createAction } from "redux-actions";
import * as actionTypes from "./action-types";
import authApi from "../api/api";
import authUtils from "../common/auth-utils";
import alertMessageMap from "../common/alert-message-map";

const startSignIn = createAction(actionTypes.START_SIGN_IN);
const endSignIn = createAction(actionTypes.END_SIGN_IN);
export const setSignInAlert = createAction(actionTypes.SET_SIGN_IN_ALERT);

export const handleSignInError = (error, errorCallback) => {
  return (dispatch) => {
    const alert = alertMessageMap.getAlert(error.code);

    dispatch(setSignInAlert(alert));

    errorCallback(error, alert);
  };
};

/*eslint-disable max-params */
export const signIn = (data, submitCallback, successCallback, errorCallback) => {
/*eslint-enable max-params */
  return (dispatch) => {
    authUtils.clearCache();
    dispatch(startSignIn());

    //Callback to trigger before sign in begins
    submitCallback(data);

    return authApi.signIn(data)
      .then((json) => {
        authUtils.setCache(json.payload);
        dispatch(endSignIn());
        return json;
      })
      .then(successCallback)
      .catch((error) => {
        dispatch(handleSignInError(error, errorCallback));
      });
  };
};
