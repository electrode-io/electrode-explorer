import {validators} from "@walmart/wmreact-validation";
import createValidator from "../common/create-validator";
import ForgotPassword from "./forgot-password";
import {requestPasswordToken} from "../actions/password";
import {required} from "../common/validators";

import {reduxForm} from "redux-form";
export default reduxForm({
  form: "forgotPassword",
  fields: ["email"],
  validate: createValidator({
    email: [required, validators.email]
  }),
  onSubmit: (data, dispatch) => dispatch(requestPasswordToken(data))
})(ForgotPassword);
