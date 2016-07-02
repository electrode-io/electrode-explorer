import {reduxForm} from "redux-form";
import noop from "lodash/noop";

import {forgotEmail} from "../../actions/auth";
import { CaptchaForgotEmail as ForgotEmailForm } from "./captcha-sign-in";

import validators from "../../common/validators";
import { validateForm, handleResponse} from "../../common/helpers";
import alertMessageMap from "../../common/alert-message-map";

const {required, membership, lastname} = validators;

const formName = "forgotEmail";
const formFieldValidators = {
  membershipNumber: [required, membership],
  lastName: [required, lastname]
};

export default reduxForm({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: validateForm(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
},
  (state) => ({
    defaultEmail: state.email,
    ...state.forgotEmail,
    compromisedErr: state.signInWidget && state.signInWidget.compromised
      ? alertMessageMap.getAlert("compromised_message_alert")
      : undefined
  }),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    //The stuff to do on handleSubmit
    onForgotEmail: (data) => {
      //Trigger the onSubmit callback
      onSubmit(data);
      return dispatch(forgotEmail(data));
    },
    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators)
  })
)(ForgotEmailForm);
