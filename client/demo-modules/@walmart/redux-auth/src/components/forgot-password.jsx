import React, {PropTypes} from "react";
import Field from "./field";
import {Button} from "@walmart/wmreact-interactive";
import {Heading} from "@walmart/wmreact-base";
import {i18n} from "../common/helpers";
import {Alert} from "@walmart/wmreact-forms";

class ForgotPassword extends React.Component {
  _renderSignInLink() {
    return (
      <p>
        {i18n("Remember your old password?")}&nbsp;
        <Button fakelink onClick={this.props.onSignInRequested}>{i18n("Sign in with it.")}</Button>
      </p>
    );
  }

  _renderVerificationLink() {
    const {onVerificationRequested, fields: {email}} = this.props;
    return (
      <p>
        <Button
          fakelink
          onClick={() => onVerificationRequested(email.value)}>
          {i18n("Already have a verification code?")}
        </Button>
      </p>
    );
  }

  render() {
    const {fields: {email}, handleSubmit, error} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Heading.H3>{i18n("Enter your email for this account")}</Heading.H3>
        {error && <Alert message={error} isBlock/>}
        <Field field={email}
               label={i18n("Email")}/>

        {this.props.onSignInRequested && this._renderSignInLink()}
        <p>
          {i18n("We'll email you a verification code you can enter here to create a new password.")}
        </p>
        {this.props.onVerificationRequested && this._renderVerificationLink()}
        <Button type="submit">{i18n("Submit")}</Button>
      </form>
    );
  }
}

ForgotPassword.propTypes = {
  defaultEmailValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onSignInRequested: PropTypes.func,
  onVerificationRequested: PropTypes.func,
  fields: PropTypes.shape({
    email: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default ForgotPassword;
