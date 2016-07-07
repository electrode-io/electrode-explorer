import {reduxForm} from "redux-form";
import noop from "lodash/noop";

import {requestPasswordToken, preResetPassword} from "../../actions/auth";
import { CaptchaForgotPassword as ForgotPasswordForm } from "./captcha-sign-in";

import validators from "../../common/validators";
import {getDefaultEmail, validateForm, handleResponse} from "../../common/helpers";
import alertMessageMap from "../../common/alert-message-map";

const {required, email} = validators;

const formName = "forgotPassword";
const formFieldValidators = {
  email: [required, email]
};

export default reduxForm({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: validateForm(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
},
  (state) => ({
    defaultEmail: getDefaultEmail(state),
    ...state.forgotPassword,
    compromisedErr: state.signInWidget && state.signInWidget.compromised
      ? alertMessageMap.getAlert("compromised_message_alert")
      : undefined
  }),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    //The stuff to do on handleSubmit
    onForgotPassword: (data) => {
      //Trigger the onSubmit callback
      onSubmit(data);

      return dispatch(requestPasswordToken(data));
    },
    onPreResetPassword: (data) => {
      return dispatch(preResetPassword(data));
    },
    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators)
  })
)(ForgotPasswordForm);
