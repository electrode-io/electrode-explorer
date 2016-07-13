import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";

import Heading from "@walmart/wmreact-base/lib/components/heading";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Option from "@walmart/wmreact-forms/lib/components/option";

import Field from "./common/field";
import Password from "./common/password";
import authConfig from "../config";

const SignUpForm = React.createClass({
  displayName: "SignUp",

  propTypes: {
    //Configurable props
    titleText: PropTypes.string,
    btnText: PropTypes.string,
    setUpAccountText: PropTypes.string,
    passwordText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    newsletter: PropTypes.bool,
    newsletterText: PropTypes.node,
    newsletterDefaultChecked: PropTypes.bool,
    onSignInRequested: PropTypes.func.isRequired,
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    //Toggles
    showSignIn: PropTypes.bool,
    showSubtitle: PropTypes.bool,
    subtitleText: PropTypes.string,
    //Action handlers
    onSignUp: PropTypes.func.isRequired,
    handleResponse: PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      firstName: PropTypes.object.isRequired,
      lastName: PropTypes.object.isRequired,
      email: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired,
      newsletter: PropTypes.object.isRequired
    }).isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool,
    initializeForm: PropTypes.func.isRequired,
    //Automation id's
    automation: PropTypes.shape({
      firstNameInput: PropTypes.string,
      lastNameInput: PropTypes.string,
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      newsletterCheckbox: PropTypes.string,
      submitBtn: PropTypes.string,
      signInBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string
    }),
    //Teleaf
    tealeaf: PropTypes.shape({
      firstNameInput: PropTypes.string,
      lastNameInput: PropTypes.string,
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      newsletterCheckbox: PropTypes.string,
      submitBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string
    }),
    headingElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  },

  getDefaultProps() {
    return {
      titleText: "",
      btnPrimary: true,
      showSubtitle: false,
      setUpAccountText: "Let's set up your online account",
      btnText: "Create your account",
      passwordText: "Your password must be between 6 and 12 characters.",
      newsletter: true,
      newsletterText: (
        <span className="email-letter-text">
          Email me about savings and updates.
        </span>
      ),
      newsletterDefaultChecked: true,
      //Toggles
      showSignIn: true,
      //Automation id defaults
      automation: {
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn",
        signInBtn: "signup-sign-in-btn"
      },
      tealeaf: {
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn"
      },
      headingElement: Heading.H4
    };
  },

  componentWillMount() {
    const {initializeForm, newsletterDefaultChecked} = this.props;
    initializeForm({newsletter: newsletterDefaultChecked});
  },

  _navigateBasedOnTarget(ev) {
    const classNames = ev.target.className.split(" ");
    if (classNames.indexOf("js-sign-in-link") !== -1) {
      ev.preventDefault();
      this.props.onSignInRequested();
    }
  },

  renderEmail() {
    const {lockEmail, fields: {email}, automation, tealeaf} = this.props;
    return (
      lockEmail ?
        <p className="font-bold">
          {email.value}
          <Field field={email}
            type="hidden"/>
        </p> :
        <Field
          field={email}
          validationSuccessMark
          label={"Email"}
          placeholder={"Email address"}
          automationId={automation.emailInput}
          tealeafId={tealeaf.emailInput}/>
    );
  },

  renderPassword() {
    const {automation, tealeaf, fields: {password}} = this.props;

    const passwordField = (
      <Password
        field={password}
        validationSuccessMark
        autoComplete="new-password"
        label={"Password"}
        placeholder={"Password"}
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
        {passwordField}
      </div>
    );
  },

  renderNewsletter() {
    return (
      <Option
        {...this.props.fields.newsletter}
        checkboxName="newsletter"
        automationId={this.props.automation.newsletterCheckbox}
        tealeafId={this.props.tealeaf.newsletterCheckbox}>
        {this.props.newsletterText}
      </Option>
    );
  },

  handleSubmit(evt) {
    authConfig.logger.log("On Submit", {event: "submit", form: "SignUp"});

    const {
      handleSubmit,
      handleResponse,
      onSignUp
    } = this.props;

    return handleResponse(handleSubmit(onSignUp)(evt));
  },

  render() {
    const {
      titleText,
      btnPrimary,
      btnText,
      subtitleText,
      setUpAccountText,
      passwordText,
      error = {},
      headingElement: HeadingElement,
      submitting} = this.props;

    return (
      <section className="SignUp clearfix">
        {!isEmpty(error) &&
          <Alert
            message={error.message}
            alertType={error.alertType}
            isBlock
            onClick={(ev) => this._navigateBasedOnTarget(ev)}
          />}

        <HeadingElement>{titleText}</HeadingElement>
        <p className="signup-subtitle">{subtitleText}</p>
        <div className="set-up-account-text">{setUpAccountText}</div>
        <form
          onSubmit={(evt) => {
            if (this.props.submitting) {
              evt.preventDefault();
              return false;
            }
            return this.handleSubmit(evt);
          }}
          method="post"
          className={btnPrimary ? "option-checkout" : "option-form-control"}>

          {this.renderEmail()}

          {this.renderPassword()}

          <div className="password-reminder-text">{passwordText}</div>

          {this.renderNewsletter()}

          <Button
            type="submit"
            block
            className="l-margin-top"
            primary={btnPrimary}
            spinner={submitting}
            disabled={submitting}
            automationId={this.props.automation.submitBtn}
            tealeafId={this.props.tealeaf.submitBtn}>
            {btnText}
          </Button>

        </form>
      </section>
    );
  }
});

export default SignUpForm;
