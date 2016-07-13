import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";
import classnames from "classnames";

import Heading from "@walmart/wmreact-base/lib/components/heading";
import NortonLogo from "@walmart/wmreact-iconography/lib/components/norton-logo";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import Field from "./common/field";
import Password from "./common/password";
import authConfig from "../config";
import {CAPTCHA_STATES} from "./captcha";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";

const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
const MODE = {
  RESET_PASSWORD: "ResetPassword",
  NEW_RESET_CODE: "NewCode"
};

const defaultMessage = {
  alertType: "success",
  message: "We sent a verification code to:",
  altMessageText: (<span>{`Enter it here and create a new password. Didn't receive your code? `}
        <button className="js-request-code-link btn-fake-link font-semibold"
          data-tl-id="COResetPWNoCodeReqNewLnk"
          data-automation-id="resetpwd-new-code-btn-link">
          {` Request a new one`}
        </button>
      </span>)
};
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode: "ResetPassword", formDisplay: true};
  }

  componentWillMount() {
    const {initializeForm, defaultEmail} = this.props;
    initializeForm({email: defaultEmail});
  }

  componentWillReceiveProps(newProps) {
    const {NEW_RESET_CODE} = MODE;
    const {captcha = {}} = newProps;
    let formDisplay = !(captcha.isBot === CF_IS_BOT || captcha.isBot === IS_BOT_RESOLVED);
    if (this.state.mode === NEW_RESET_CODE && captcha.isBot === IS_BOT_RESOLVED) {
      formDisplay = true;
    }
    this.setState({formDisplay});
  }

  componentDidUpdate(prevProps) {
    const {RESET_PASSWORD, NEW_RESET_CODE} = MODE;
    if (this.props.captchaAvailable && prevProps.captchaAvailable === undefined) {
      switch (this.state.mode) {
      case RESET_PASSWORD:
        return this.handleSubmit();
      case NEW_RESET_CODE:
        const {fields: {email}} = this.props;
        return this.props.onNewCodeRequested({email: email.value});
      }
    }
    return false;
  }

  _navigateBasedOnTarget(ev) {
    const {NEW_RESET_CODE} = MODE;
    const {fields: {email}} = this.props;
    const classNames = ev.target.className.split(" ");
    if (classNames.indexOf("js-reset-password-link") !== -1) {
      ev.preventDefault();
      this.props.onForgotPasswordRequested();
    } else if (classNames.indexOf("js-request-code-link") !== -1) {
      ev.preventDefault();
      this.setState({mode: NEW_RESET_CODE});
      this.props.onNewCodeRequested({email: email.value});
    }
  }
  _renderEmail() {
    const {
      fields: {email}
    } = this.props;

    return (
      <Field
        field={email}
        type="hidden"/>
    );

  }

  _renderAlertOrHeader() {
    const {
      fields: {email},
      error = {}
    } = this.props;
    const defaultAlert = defaultMessage;
    const {
      alertType,
      message,
      altMessageText = ""
      } = !isEmpty(error) ? error : defaultAlert;
    const {formDisplay} = this.state;
    if (!formDisplay) {
      return (
        <div>
          <Heading.H4>{alertType === "success" ? message : defaultAlert.message}</Heading.H4>
          <p className={classnames("font-semibold", "email-label")}>{email.value}</p>
        </div>
      );
    }
    return (
      <div>
        {!isEmpty(error) && alertType !== "success"
        && <Alert
          message={message}
          alertType={alertType}
          isBlock
          onClick={(ev) => this._navigateBasedOnTarget(ev)}
        />}
        <Heading.H4>{alertType === "success" ? message : defaultAlert.message}</Heading.H4>

        <p className={classnames("font-semibold", "email-label")}>{email.value}</p>
        <span
          onClick={(ev) => this._navigateBasedOnTarget(ev)}>
          {altMessageText || defaultAlert.altMessageText}
        </span>
      </div>
    );
  }

  _renderPassword() {
    const {
      fields: {password},
      //qa
      automation,
      tealeaf} = this.props;
    const passwordField = (
      <Password
        label={"Create password"}
        placeholder={"Create password"}
        field={password}
        autoComplete="new-password"
        automationId={automation.passwordInput}
        showAutomationId={automation.passwordShowBtn}
        hideAutomationId={automation.passwordHideBtn}
        tealeafId={tealeaf.passwordInput}
        showTealeafId={tealeaf.passwordShowBtn}
        hideTealeafId={tealeaf.passwordHideBtn}
      />
    );
    return (
      <div>
        {password.active && <Flyout
          block
          direction="top"
          active
          trigger={<span/>}>
          {"Your password must be between 6 and 12 characters."}
        </Flyout>}
        {passwordField}
      </div>

    );
  }
  handleSubmit(evt) {
    const {RESET_PASSWORD} = MODE;
    authConfig.logger.log("On Submit", {event: "submit", form: "ResetPassword"});
    this.setState({mode: RESET_PASSWORD});
    const {
      handleSubmit,
      handleResponse,
      onResetPassword
    } = this.props;

    return handleResponse(handleSubmit(onResetPassword)(evt));
  }
  _renderForm() {
    const {
      //Config
      onSignInRequested,
      showNortonLogo,
      //Redux form
      fields: {passcode},
      submitting,
      //qa
      automation,
      tealeaf} = this.props;

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
        <Field
          label={"Verification code"}
          placeholder={"Verification code"}
          field={passcode}
          autoComplete="off"
          automationId={automation.passcodeInput}
          tealeafId={tealeaf.passcodeInput}/>
        {this._renderPassword()}

        {showNortonLogo &&
        <div className="pull-right norton-wrapper">
          <NortonLogo/>
        </div>}
        <p className="remember-password">
          {"Remember your old password?"}<br/>
          <Button
            fakelink
            className="font-semibold"
            onClick={onSignInRequested}
            automationId={automation.signInBtn}
            tealeafId={tealeaf.signInBtn}>
            {"Sign in"}
          </Button>
          <span> {"with it."}</span>
        </p>

        <Button
          block
          type="submit"
          spinner={submitting}
          disabled={submitting}
          automationId={automation.submitBtn}
          tealeafId={tealeaf.submitBtn}>
          {"Submit"}
        </Button>
      </form>
    );
  }
  render() {
    const {tokenRequested} = this.props;
    const {formDisplay} = this.state;
    return (
      <section className="ResetPassword">
        <Spinner loading={tokenRequested}/>
        {this._renderAlertOrHeader()}
        {this._renderEmail()}
        {formDisplay && this._renderForm()}
        <div className={classnames({"hide-content": formDisplay})}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

ResetPassword.propTypes = {
  //config
  onNewCodeRequested: PropTypes.func.isRequired,
  onSignInRequested: PropTypes.func.isRequired,
  onForgotPasswordRequested: PropTypes.func.isRequired,
  showNortonLogo: PropTypes.bool,
  defaultEmail: PropTypes.string,
  //Actions
  onResetPassword: PropTypes.func.isRequired,
  handleResponse: PropTypes.func.isRequired,
  //Feedback
  tokenRequested: PropTypes.bool,
  //Redux form errors
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  initializeForm: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    email: PropTypes.object.isRequired,
    passcode: PropTypes.object.isRequired,
    password: PropTypes.object.isRequired
  }).isRequired,
  error: PropTypes.object,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  children: PropTypes.shape(),
  //Automation
  automation: PropTypes.shape({
    newCodeBtnLink: PropTypes.string,
    passcodeInput: PropTypes.string,
    passwordInput: PropTypes.string,
    signInBtn: PropTypes.string,
    submitBtn: PropTypes.string,
    passwordShowBtn: PropTypes.string,
    passwordHideBtn: PropTypes.string
  }),
  //Releaf
  tealeaf: PropTypes.shape({
    newCodeBtnLink: PropTypes.string,
    passcodeInput: PropTypes.string,
    passwordInput: PropTypes.string,
    signInBtn: PropTypes.string,
    submitBtn: PropTypes.string,
    passwordShowBtn: PropTypes.string,
    passwordHideBtn: PropTypes.string
  })
};

ResetPassword.defaultProps = {
  showNortonLogo: true,
  automation: {
    newCodeBtnLink: "resetpwd-new-code-btn-link",
    passcodeInput: "resetpwd-passcode-input",
    passwordInput: "resetpwd-password-input",
    signInBtn: "resetpwd-sign-in-btn",
    submitBtn: "resetpwd-submit-btn"
  },
  tealeaf: {
    newCodeBtnLink: "resetpwd-new-code-btn-link",
    passcodeInput: "resetpwd-passcode-input",
    passwordInput: "resetpwd-password-input",
    signInBtn: "resetpwd-sign-in-btn",
    submitBtn: "resetpwd-submit-btn"
  },
  alertStyle: "traditional"
};

export default ResetPassword;
