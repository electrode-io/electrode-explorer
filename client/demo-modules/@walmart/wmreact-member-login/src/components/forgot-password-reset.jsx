import React, { PropTypes } from "react";
import isEmpty from "lodash/isEmpty";
import classNames from "classnames";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import Password from "@walmart/wmreact-user/lib/components/common/password";
import {CAPTCHA_STATES} from "@walmart/wmreact-user/lib/components/captcha";
import authConfig from "../config";
import alertMessageMap from "@walmart/wmreact-user/lib/components/common/alert-message-map";
import Field from "@walmart/wmreact-user/lib/components/common/field";
import PasswordStrength from "@walmart/wmreact-user/lib/components/common/password-strength";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import { Link } from "react-router";

const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
const MODE = {
  RESET_PASSWORD: "ResetPassword",
  NEW_RESET_CODE: "NewCode"
};

const defaultMessage = {
  alertType: "success",
  message: "We sent a verification code to:",
  altMessageText: (
    <span>
      {`Enter it here and create a new password. Didn't receive your code? `}
      <button className="js-request-code-link btn-fake-link font-semibold"
        data-tl-id="COResetPWNoCodeReqNewLnk"
        data-automation-id="resetpwd-new-code-btn-link">
        {` Request a new one`}
      </button>
    </span>)
};

class ForgotPasswordReset extends React.Component {
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
    const classNamesArr = ev.target.className.split(" ");
    ev.preventDefault();
    if (classNamesArr.indexOf("js-request-code-link") !== -1) {
      this.setState({mode: NEW_RESET_CODE});
      this.props.onNewCodeRequested({email: email.value});
    }
  }
  _renderHeading(output) {
    return (
      <Heading.H4 className="heading">
        {output}
      </Heading.H4>
    );
  }
  _renderAlertOrHeader() {
    const {
      error = {}
    } = this.props;
    const defaultAlert = defaultMessage;
    const errorObj = !isEmpty(error) && alertMessageMap.getAlert(error.code) || {};
    const {
      alertType,
      message
    } = !isEmpty(errorObj) ? errorObj : defaultAlert;
    const {formDisplay} = this.state;
    if (!formDisplay) {
      return (
        <div>
        {this._renderHeading(alertType === "success" ? message : defaultAlert.message)}
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
        {this._renderHeading(alertType === "success" ? message : defaultAlert.message)}
      </div>
    );
  }

  _renderEmail() {
    const {
      fields: {email},
      error = {}
    } = this.props;
    const defaultAlert = defaultMessage;
    const errorObj = !isEmpty(error) && alertMessageMap.getAlert(error.code) || {};
    const {
      altMessageText = ""
    } = !isEmpty(errorObj) ? errorObj : defaultAlert;
    const {formDisplay} = this.state;

    const ret = [
      <Field
        field={email}
        type="hidden"/>
    ];

    if (!formDisplay) {
      ret.push(
        <p className={classNames("font-semibold", "email-label")}>{email.value}</p>
      );
      return ret;
    }
    ret.push(
      <p className={classNames("font-semibold", "email-label")}>{email.value}</p>,
      <span
        onClick={(ev) => this._navigateBasedOnTarget(ev)}>
        {altMessageText || defaultAlert.altMessageText}
      </span>
    );
    return ret;
  }

  _renderPassword() {
    const {
      fields: {password},
      automation,
      tealeaf} = this.props;
    const passwordField = (
      <Password
        label={"Create password"}
        placeholder={"Create password"}
        field={password}
        showErrorOnTop={true}
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
    authConfig.logger.log("On Submit", {event: "submit", form: "ForgotResetPassword"});
    this.setState({mode: RESET_PASSWORD});
    const {
      handleSubmit,
      handleResponse,
      onResetPasswordRequested
    } = this.props;

    return handleResponse(handleSubmit(onResetPasswordRequested)(evt).catch((error = {}) => {
      throw alertMessageMap.getAlert(error.code);
    }));
  }

  _renderForm() {
    const {
      fields: {passcode},
      automation,
      btnText,
      submitting,
      submitSuccess,
      tealeaf,
      signInRoute
    } = this.props;

    return (<form
      onSubmit={(evt) => {
        if (this.props.submitting || this.props.submitSuccess) {
          evt.preventDefault();
          return false;
        }
        return this.handleSubmit(evt);
      }}
      method="post"
    >
      {this._renderEmail()}
      <Field
        className="input-field"
        label={"Verification code"}
        placeholder={"Verification code"}
        showErrorOnTop={true}
        field={passcode}
        autoComplete="off"
        automationId={automation.passcodeInput}
        tealeafId={tealeaf.passcodeInput}
      />
      {this._renderPassword()}

      {this.props.showPasswordStrength &&
          <PasswordStrength strength={this.props.fields.passwordStrength.value} />}

      <p className="remember-password">
        {"Remember your old password? "}
        <Link
          className="member-link"
          to={signInRoute}
          automationId={automation.signInBtn}
          tealeafId={tealeaf.signInBtn}>
          {"Sign in"}
        </Link>
        <span> {"with it."}</span>
      </p>

      <Button
        block
        type="submit"
        primary={true}
        disabled={submitting || submitSuccess}
        spinner={submitting || submitSuccess}
        automationId={automation.forgotPasswordResetBtn}
        tealeafId={tealeaf.forgotPasswordResetBtn}>
        {btnText}
      </Button>
    </form>
    );
  }

  render() {
    const {tokenRequested} = this.props;
    const {formDisplay} = this.state;
    return (
      <section className="forgot-password-reset">
        <Spinner loading={tokenRequested}/>
        {this._renderAlertOrHeader()}
        {formDisplay && this._renderForm()}
        <div className={classNames({"hide-content": formDisplay})}>
          {this.props.children}
        </div>
      </section>
    );
  }
}

ForgotPasswordReset.propTypes = {
  onNewCodeRequested: PropTypes.func.isRequired,
  showPasswordStrength: PropTypes.bool,
  titleText: PropTypes.string,
  fields: PropTypes.shape({
    email: PropTypes.object,
    passcode: PropTypes.object,
    password: PropTypes.object,
    passwordStrength: PropTypes.object
  }).isRequired,
  onResetPasswordRequested: PropTypes.func.isRequired,
  btnText: PropTypes.string,
  defaultEmail: PropTypes.string,
  passwordText: PropTypes.string,
  error: PropTypes.object,
  submitting: PropTypes.bool,
  submitSuccess: PropTypes.bool,
  compromisedErr: PropTypes.object,
  children: PropTypes.shape(),
  initializeForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleResponse: PropTypes.func.isRequired,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  //Automation
  automation: PropTypes.shape({
    passwordInput: PropTypes.string,
    passwordShowBtn: PropTypes.string,
    passwordHideBtn: PropTypes.string,
    forgotPasswordResetBtn: PropTypes.string
  }),
  //Tealeaf
  tealeaf: PropTypes.shape({
    passwordInput: PropTypes.string,
    passwordShowBtn: PropTypes.string,
    passwordHideBtn: PropTypes.string,
    forgotPasswordResetBtn: PropTypes.string
  }),
  //Feedback
  tokenRequested: PropTypes.bool,
  signInRoute: PropTypes.string
};

ForgotPasswordReset.defaultProps = {
  automation: {
    passwordInput: "forgot-password-reset-input",
    passwordShowBtn: "forgot-password-reset-show-btn",
    passwordHideBtn: "forgot-password-reset-hide-btn",
    forgotPasswordResetBtn: "forgot-password-reset-btn"
  },
  tealeaf: {
    passwordInput: "forgot-password-reset-input",
    passwordShowBtn: "forgot-password-reset-show-btn",
    passwordHideBtn: "forgot-password-reset-hide-btn",
    forgotPasswordResetBtn: "forgot-password-reset-btn"
  }
};

export default ForgotPasswordReset;
