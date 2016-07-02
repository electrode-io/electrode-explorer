import {validators} from "@walmart/wmreact-validation";
import createValidator from "../common/create-validator";
import ResetPassword from "./reset-password";
import {resetPassword} from "../actions/password";
import {required, equalToField} from "../common/validators";
import {reduxForm} from "redux-form";

export default reduxForm({
  form: "resetPassword",
  fields: ["passCode", "password", "passwordConfirmation"],
  validate: createValidator({
    passCode: [required],
    password: [required, validators.password],
    passwordConfirmation: [equalToField("password")]
  }),
  onSubmit: (data, dispatch) => dispatch(resetPassword(data))
})(ResetPassword);
