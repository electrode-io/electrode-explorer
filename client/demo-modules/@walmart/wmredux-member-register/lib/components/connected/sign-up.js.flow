import { reduxForm, change, untouch } from "redux-form";
import noop from "lodash/noop";

import { signUp } from "../../actions/auth";
import SignUpForm from "@walmart/wmreact-member-register/lib/components/sign-up";

import validators from "../../common/validators";
import { validateForm, handleResponse } from "../../common/helpers";

const { required, email } = validators;

const formName = "signUp";
const formFieldValidators = {
  email: [required, email],
  password: [required],
  membershipNum: [],
  lastName: [],
  newsletter: []
};

export default reduxForm({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: validateForm(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
},
  (state) => ({...state.signUp}),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    //The stuff to do on handleSubmit
    onSignUp: (data) => {
      onSubmit(data);

      return dispatch(signUp(data))
        .catch((error) => {
          dispatch(change(formName, "password", null));
          dispatch(untouch(formName, "password"));
          throw error;
        });
    },
    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators)
  })
)(SignUpForm);
