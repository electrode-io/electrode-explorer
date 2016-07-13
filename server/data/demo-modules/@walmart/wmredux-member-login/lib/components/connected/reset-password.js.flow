import {reduxForm, change, stopSubmit, untouch} from "redux-form";
import noop from "lodash/noop";

import {resetPassword, requestPasswordToken} from "../../actions/auth";
import { CaptchaResetPassword as ResetPasswordForm } from "./captcha-sign-in";

import validators from "../../common/validators";
import {validateForm, handleResponse, getResetPasswordEmail} from "../../common/helpers";

import alertMessageMap from "../../common/alert-message-map";

const { required, email, password } = validators;

const formName = "resetPassword";
const formFieldValidators = {
  email: [required, email],
  password: [required, password],
  passcode: [required],
  passwordStrength: []
};

export default reduxForm({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: validateForm(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
},
  (state) => ({defaultEmail: getResetPasswordEmail(state)}),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    onResetPasswordRequested: (data) => {
      //Trigger the onSubmit callback
      onSubmit(data);

      return dispatch(resetPassword(data));
    },

    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators),

    onNewCodeRequested: (data) => dispatch(requestPasswordToken(data))
      .then((json) => {
        dispatch(stopSubmit(formName,
          alertMessageMap.getReduxFormError({code: "request_new_code_success"})));

        dispatch(change(formName, "passcode", null));
        dispatch(change(formName, "password", null));

        dispatch(untouch(formName, "passcode", "password"));

        return json;
      })
      .catch((error) => {
        dispatch(stopSubmit(formName, error));

        throw error;
      })

  })
)(ResetPasswordForm);
