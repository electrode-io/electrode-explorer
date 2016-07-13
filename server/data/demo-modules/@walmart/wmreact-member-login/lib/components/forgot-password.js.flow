import React, {PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import isEmpty from "lodash/isEmpty";
import {CAPTCHA_STATES} from "@walmart/wmreact-user/lib/components/captcha";
import authConfig from "../config";
import classNames from "classnames";

import Field from "@walmart/wmreact-user/lib/components/common/field";

class ForgotPassword extends React.Component {
  componentWillMount() {
    const {initializeForm} = this.props;
    initializeForm({});
  }

  componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined
      && this.handleSubmit();
  }

  _renderBotEmail() {
    const {fields: {email}} = this.props;
    return (
      <p className="m-margin-top bot-email-message">
        You are changing your password for <br />
        <span className="font-bold">
          {email.value}
        </span>
      </p>
    );
  }

  _renderVerificationLink() {
    const {
      onPreResetPassword,
      fields: {email},
      automation: {alreadyHaveBtn},
      tealeaf: {alreadyHaveCode}
    } = this.props;

    return (
      <p
        className={classNames("verification-code-wrapper")}>
        <Button
          fakelink
          onClick={() => onPreResetPassword(email.value)}
          automationId={alreadyHaveBtn}
          tealeafId={alreadyHaveCode}
          className="verification-code">
          Already have a verification&nbsp;code?
        </Button>
      </p>
    );
  }

  _renderAlertOrHeader() {
    const {
      error = {},
      compromisedErr = {},
      captcha = {},
      titleText
    } = this.props;
    const {
      alertType,
      message
    } = !isEmpty(error) ? error : {};
    const {
      alertType: compromisedAlertType,
      message: compromisedMessage
    } = !isEmpty(compromisedErr) ? compromisedErr : {};

    const {isBot} = captcha;
    const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
    const showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return (
      <div>
        {showForm && (!isEmpty(error) || !isEmpty(compromisedErr)) &&
          <Alert
            message={message || compromisedMessage}
            alertType={alertType || compromisedAlertType}
            isBlock/>
        }
        <Heading.H4>{titleText}</Heading.H4>
      </div>
    );
  }

  handleSubmit(evt) {
    authConfig.logger.log("On Submit", {event: "submit", form: "ForgotPassword"});
    const {
      handleSubmit,
      handleResponse,
      onForgotPassword
    } = this.props;
    return handleResponse(handleSubmit(onForgotPassword)(evt));
  }

  _renderForm() {
    const {
      //Config
      //showNortonLogo,
      //Redux form
      fields: {email},
      defaultEmail,
      submitting} = this.props;

    const {
      tealeaf = {},
      automation = {}
    } = this.props;

    return (
      <form
        onSubmit={(evt) => {
          if (this.props.submitting) {
            evt.preventDefault();
            return false;
          }
          return this.handleSubmit(evt);
        }}
        method="post"
      >
        <p className="email-code-text">
          {`Enter the email associated with your account`}
        </p>
        <Field
          className="input-field"
          field={email}
          label={"Email address"}
          placeholder={"Email"}
          automationId={automation.emailInput}
          tealeafId={tealeaf.emailInput}
          defaultValue={defaultEmail} />

        {this._renderVerificationLink()}

        <Button
          block
          type="submit"
          spinner={submitting}
          disabled={submitting}
          automationId={automation.submitBtn}
          tealeafId={tealeaf.submitBtn}>
          {"Continue"}
        </Button>
      </form>
    );
  }
  render() {
    const {captcha = {}} = this.props;
    const {isBot} = captcha;
    const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
    const showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return (
      <section className="ForgotPassword">
        {this._renderAlertOrHeader()}
        {showForm && this._renderForm()}
        {!showForm && this._renderBotEmail()}
        {this.props.children}
      </section>
    );
  }
}

ForgotPassword.propTypes = {
  //Configurable props
  onSignInRequested: PropTypes.func,
  onResetPasswordRequested: PropTypes.func,
  //showNortonLogo: PropTypes.bool,
  defaultEmail: PropTypes.string,
  //Redux form props
  fields: PropTypes.shape({
    email: PropTypes.object.isRequired
  }).isRequired,
  initializeForm: PropTypes.func.isRequired,
  error: PropTypes.object,
  compromisedErr: PropTypes.object,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  //Action handlers
  onForgotPassword: PropTypes.func.isRequired,
  handleResponse: PropTypes.func.isRequired,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  children: PropTypes.shape(),
  //Automation id defaults
  automation: PropTypes.shape({
    emailInput: PropTypes.string,
    signInBtn: PropTypes.string,
    submitBtn: PropTypes.string,
    alreadyHaveBtn: PropTypes.string
  }),
  //Tealeaf id defaults
  tealeaf: PropTypes.shape({
    emailInput: PropTypes.string,
    signInBtn: PropTypes.string,
    submitBtn: PropTypes.string,
    alreadyHaveCode: PropTypes.string
  }),
  titleText: PropTypes.string,
  onPreResetPassword: PropTypes.func.isRequired
};

ForgotPassword.defaultProps = {
  //showNortonLogo: true,
  titleText: "Forgot password",
  alertStyle: "traditional",
  automation: {
    emailInput: "forgotpwd-email-input",
    signInBtn: "forgotpwd-sign-in-btn",
    submitBtn: "forgotpwd-submit-btn",
    alreadyHaveBtn: "forgotpwd-already-have-btn"
  },
  tealeaf: {
    emailInput: "forgotpwd-email-input",
    signInBtn: "forgotpwd-sign-in-btn",
    submitBtn: "forgotpwd-submit-btn",
    alreadyHaveCode: "forgotpwd-already-have-btn"
  }
};

export default ForgotPassword;
