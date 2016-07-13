import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";
import classnames from "classnames";

import Heading from "@walmart/wmreact-base/lib/components/heading";
import NortonLogo from "@walmart/wmreact-iconography/lib/components/norton-logo-grey";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Option from "@walmart/wmreact-forms/lib/components/option";
import Alert from "@walmart/wmreact-forms/lib/components/alert";

import Field from "./common/field";
import authConfig from "../config";
import alertMessageMap from "./common/alert-message-map";

import {CAPTCHA_STATES} from "./captcha";

const SignInForm = React.createClass({
  displayName: "SignIn",

  propTypes: {
    //Configurable props
    titleText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    btnText: PropTypes.string,
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    privacyPolicyUrl: PropTypes.string,
    //Action handlers
    onSignIn: PropTypes.func.isRequired,
    handleResponse: PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: PropTypes.func.isRequired,
    onForgotPasswordRequested: PropTypes.func.isRequired,
    onSignUpRequested: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      email: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired,
      rememberme: PropTypes.object.isRequired
    }).isRequired,
    error: PropTypes.object,
    submitting: PropTypes.bool,
    submitSuccess: PropTypes.bool,
    initializeForm: PropTypes.func.isRequired,
    //Toggles
    showSignUp: PropTypes.bool.isRequired,
    showNortonLogo: PropTypes.bool,
    showPrivacyPolicy: PropTypes.bool,
    showLabels: PropTypes.bool,
    showRememberme: PropTypes.bool,
    //Captcha
    captchaAvailable: PropTypes.bool,
    captcha: PropTypes.shape({
      isBot: PropTypes.number,
      inProgress: PropTypes.bool,
      _error: PropTypes.string
    }),
    children: PropTypes.shape(),
    //Automation id's
    automation: PropTypes.shape({
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      forgotPasswordLinkBtn: PropTypes.string,
      submitBtn: PropTypes.string,
      signUpBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string,
      rememberme: PropTypes.string
    }),
    //Tealeaf id's
    tealeaf: PropTypes.shape({
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      forgotPasswordLinkBtn: PropTypes.string,
      submitBtn: PropTypes.string,
      signUpBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string,
      remembermeCheckbox: PropTypes.string
    }),
    headingElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  },

  getDefaultProps() {
    return {
      titleText: "Sign In",
      btnText: "Sign In",
      privacyPolicyUrl: "http://corporate.walmart.com/privacy-security/walmart-privacy-policy",
      btnPrimary: true,
      showSignUp: true,
      showNortonLogo: true,
      showPrivacyPolicy: true,
      automation: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn",
        rememberme: "signin-rememberme-checkbox"
      },
      tealeaf: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn",
        remembermeCheckbox: "signin-rememberme-checkbox"
      },
      headingElement: Heading.H4
    };
  },

  componentWillMount() {
    const {initializeForm} = this.props;
    initializeForm({});
  },

  componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined
      && this.handleSubmit();
  },

  _navigateBasedOnTarget(ev) {
    if (ev.target.className.split(" ").indexOf("js-reset-password-link") !== -1) {
      ev.preventDefault();
      this.props.onForgotPasswordRequested();
    }
  },

  renderEmail() {
    const {lockEmail, fields: {email}, defaultEmail} = this.props;
    return (
      <div className="form-field-email">
        {lockEmail ? (
          <p className="font-bold">
            {email.value}
            <Field field={email}
              type="hidden"/>
          </p>
        ) : (
          <Field
            field={email}
            type="email"
            label={"Email address"}
            showLabel={this.props.showLabels}
            placeholder={"Email address"}
            automationId={this.props.automation.emailInput}
            tealeafId={this.props.tealeaf.emailInput}
            defaultValue={defaultEmail} />
        )}
      </div>
    );
  },

  renderPassword() {
    const {
      automation, tealeaf
    } = this.props;

    return (
      <div className="form-field-password">
        <Field
          type="password"
          field={this.props.fields.password}
          label={"Password"}
          showLabel={this.props.showLabels}
          placeholder={"Password"}
          automationId={automation.passwordInput}
          tealeafId={tealeaf.passwordInput}
        />
      </div>
    );
  },

  renderActions() {
    const {
      btnPrimary,
      btnText,
      submitting,
      submitSuccess} = this.props;
    const {
      onForgotPasswordRequested} = this.props;
    const {
      captcha: {
        inProgress: captchaInProgress
      }
    } = this.props;
    return [
      <div className="clearfix">
        <Button
          fakelink
          className="forgot-password-btn-link pull-right"
          onClick={onForgotPasswordRequested}
          automationId={this.props.automation.forgotPasswordLinkBtn}
          tealeafId={this.props.tealeaf.forgotPasswordLinkBtn}>
          {"Forgot password?"}
        </Button>
      </div>,
      <div className="form-actions">
        <Button type="submit"
          block
          primary={btnPrimary}
          spinner={submitting || submitSuccess || captchaInProgress}
          disabled={submitting || submitSuccess || captchaInProgress}
          automationId={this.props.automation.submitBtn}
          tealeafId={this.props.tealeaf.submitBtn}>
          {btnText}
        </Button>
      </div>
    ];
  },
  renderExtras() {
    const {
      onSignUpRequested,
      privacyPolicyUrl,
      showSignUp,
      showNortonLogo,
      showPrivacyPolicy
    } = this.props;
    return (
      <div className="bottom-info-wrap">
        {showSignUp &&
          <div className="text-center signup-btn">
            <Button
              className="action-btn"
              fakelink
              onClick={onSignUpRequested}
              automationId={this.props.automation.signUpBtn}
              tealeafId={this.props.tealeaf.signUpBtn}>
              {"Create a new account"}
            </Button>
          </div>}

          {showNortonLogo &&
            <div className="norton-wrapper">
              <NortonLogo grey={false}/>
            </div>}

        {showPrivacyPolicy &&
          <div className="privacy-policy-container">
            {"See our"} <a target="_blank"
              href={privacyPolicyUrl}>
              {"privacy policy"}
            </a>
          </div>}
      </div>
    );
  },
  renderRememberMe() {
    if (!this.props.showRememberme) {
      return null;
    }
    return (
      <Option
        className="remember-me"
        {...this.props.fields.rememberme}
        checkboxName="remember me"
        automationId={this.props.automation.rememberme}
        tealeafId={this.props.tealeaf.remembermeCheckbox}>
        Remember me on this device
      </Option>
    );
  },

  handleSubmit(evt) {
    const {
      handleSubmit,
      handleResponse,
      onSignIn,
      submitting,
      submitSuccess
    } = this.props;

    if (submitting || submitSuccess) {
      evt.preventDefault();
      return false;
    }
    authConfig.logger.log("On Submit", {event: "submit", form: "SignIn"});
    return handleResponse(handleSubmit(onSignIn)(evt).catch((error = {}) => {
      throw alertMessageMap.getAlert(error.code);
    }));
  },

  renderForm() {
    return [
      <form onSubmit={this.handleSubmit}
        method="post"
        className="form-box"
      >
        {this.renderEmail()}
        {this.renderPassword()}
        {this.renderRememberMe()}
        {this.renderActions()}
      </form>
    ];
  },

  renderBotEmail() {
    const {fields: {email}} = this.props;
    return (
      <p className="m-margin-top bot-email-message">
        You are signing in as: <br />
        <span className="font-bold">
          {email.value}
        </span>
      </p>
    );
  },

  render() {
    const {
      titleText,
      captcha = {},
      error = {},
      headingElement: HeadingElement
    } = this.props;

    const errorObj = !isEmpty(error) && alertMessageMap.getAlert(error.code);
    const {isBot} = captcha;
    const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
    const showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);
    return (
      <section className="SignIn clearfix">
        {showForm && errorObj &&
          <Alert
            message={errorObj.message}
            alertType={errorObj.alertType || "error"}
            isBlock
            onClick={(ev) => this._navigateBasedOnTarget(ev)}
          />}
        <HeadingElement className="heading">{titleText}</HeadingElement>
        {showForm && this.renderForm()}
        {showForm && this.renderExtras()}
        <div className={classnames("captcha", {"re-captcha": !showForm})}>
          {!showForm && this.renderBotEmail()}
          {this.props.children}
        </div>
      </section>
    );
  }
});

export default SignInForm;
