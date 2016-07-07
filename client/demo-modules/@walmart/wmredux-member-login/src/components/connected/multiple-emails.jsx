import {reduxForm} from "redux-form";
import noop from "lodash/noop";

import { multipleEmails } from "../../actions/auth";
import { CaptchaMultipleEmails as MultipleEmailsForm } from "./captcha-sign-in";

import validators from "../../common/validators";
import { validateForm, handleResponse } from "../../common/helpers";
import alertMessageMap from "../../common/alert-message-map";

const {required} = validators;

const formName = "multipleEmails";
const formFieldValidators = {
  email: [required]
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
    ...state.multipleEmails,
    compromisedErr: state.signInWidget && state.signInWidget.compromised
      ? alertMessageMap.getAlert("compromised_message_alert")
      : undefined
  }),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    //The stuff to do on handleSubmit
    onMultipleEmail: (data) => {
      //Trigger the onSubmit callback
      onSubmit(data);

      return dispatch(multipleEmails(data));
    },
    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators)
  })
)(MultipleEmailsForm);
