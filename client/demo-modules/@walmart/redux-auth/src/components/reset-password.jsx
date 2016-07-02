import React, {PropTypes} from "react";
import Field from "./field";
import Password from "./password";
import {Heading} from "@walmart/wmreact-base";
import {i18n} from "../common/helpers";
import {Button} from "@walmart/wmreact-interactive";
import {Alert} from "@walmart/wmreact-forms";

const ResetPassword = (props) => {
  const {
    fields: {passCode, password, passwordConfirmation},
    handleSubmit, error, email,
    onNewCodeRequested, onSignInRequested} = props;

  return (
    <form onSubmit={handleSubmit}>
      <Heading.H3>{i18n("We sent a verification code to:")}</Heading.H3>
      {error && <Alert message={error} isBlock/>}

      <p className="font-semibold">{email}</p>
      <p>
        {i18n("Enter it here and create a new password.")}
        <br />
        {i18n("Didn't receive your code?")}&nbsp;
        <Button fakelink onClick={onNewCodeRequested}>
          {i18n("Request a new one")}
        </Button>
      </p>
      <Field
        label={i18n("Passcode")}
        field={passCode}/>
      <Password
        label={i18n("Password")}
        field={password}/>
      <Password
        label={i18n("Confirm password")}
        field={passwordConfirmation}/>

      <p>
        {i18n("Remember your old password?")}&nbsp;
        <Button fakelink onClick={onSignInRequested}>
          {i18n("Sign in with it.")}
        </Button>
      </p>

      <Button type="submit">{i18n("Submit")}</Button>
    </form>
  );
};


ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onNewCodeRequested: PropTypes.func.isRequired,
  onSignInRequested: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    passCode: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired,
    passwordConfirmation: PropTypes.object.isRequired
  }).isRequired,
  error: PropTypes.string
};

export default ResetPassword;
