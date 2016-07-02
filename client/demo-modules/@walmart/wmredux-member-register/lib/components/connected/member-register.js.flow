import { reduxForm } from "redux-form";
import noop from "lodash/noop";

import { registerMembership } from "../../actions/auth";
import MemberRegister from "@walmart/wmreact-member-register/lib/components/register-membership";

import validators from "../../common/validators";
import { validateForm, handleResponse } from "../../common/helpers";

const { required, samsmembership, lastname } = validators;

const formName = "memberRegister";
const formFieldValidators = {
  membershipNum: [required, samsmembership],
  lastName: [required, lastname]
};

export default reduxForm({
  form: formName,
  touchOnBlur: false,
  fields: Object.keys(formFieldValidators),
  validate: validateForm(formFieldValidators, formName),
  returnRejectedSubmitPromise: true
},
  (state) => ({...state.memberRegister}),
  (dispatch, {onSubmit = noop, onSuccess = noop, onError = noop}) => ({
    //The stuff to do on handleSubmit
    onMemberRegister: (data) => {
      onSubmit(data);

      return dispatch(registerMembership(data));
    },
    //The stuff to do after handleSubmit
    handleResponse: (promise) =>
      handleResponse(promise, onSuccess, onError, formFieldValidators)
  })
)(MemberRegister);
