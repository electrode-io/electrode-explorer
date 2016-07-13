import {reduxForm} from "redux-form";
import noop from "lodash/noop";

import { lostStolenMembership } from "../../actions/auth";
import { CaptchaLostStolen as LostStolenForm } from "./captcha-sign-in";

import validators from "../../common/validators";
import { validateForm, handleResponse } from "../../common/helpers";
import alertMessageMap from "../../common/alert-message-map";

const {required, membership} = validators;

const formName = "lostStolen";
const formFieldValidators = {
  membershipNumber: [required, membership]
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
    ...state.lostStolen,
    compromisedErr: state.signInWidget && state.signInWidget.compromised
      ? alertMessageMap.getAlert("compromised_message_alert")
      : undefined
  }),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    //The stuff to do on handleSubmit
    onLostStolen: (data) => {
      //Trigger the onSubmit callback
      onSubmit(data);

      return dispatch(lostStolenMembership(data));
    },
    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators)
  })
)(LostStolenForm);
