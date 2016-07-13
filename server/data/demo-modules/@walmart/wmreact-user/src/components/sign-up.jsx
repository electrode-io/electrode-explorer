import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";
import classNames from "classnames";

import Heading from "@walmart/wmreact-base/lib/components/heading";
import NortonLogo from "@walmart/wmreact-iconography/lib/components/norton-logo-grey";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Option from "@walmart/wmreact-forms/lib/components/option";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";

import Field from "./common/field";
import Password from "./common/password";
import authConfig from "../config";
import alertMessageMap from "./common/alert-message-map";
import PasswordStrength from "./common/password-strength";

const SignUpForm = React.createClass({
  displayName: "SignUp",

  propTypes: {
    //Configurable props
    titleText: PropTypes.string,
    btnText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    newsletter: PropTypes.bool,
    newsletterText: PropTypes.node,
    privacyPolicyText: PropTypes.node,
    newsletterDefaultChecked: PropTypes.bool,
    onSignInRequested: PropTypes.func.isRequired,
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    //Toggles
    showFirstName: PropTypes.bool,
    showLastName: PropTypes.bool,
    showSignIn: PropTypes.bool,
    showPasswordStrength: PropTypes.bool,
    showNortonLogo: PropTypes.bool,
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
      newsletter: PropTypes.object.isRequired,
      passwordStrength: PropTypes.object
    }).isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool,
    submitSuccess: PropTypes.bool,
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
      titleText: "Create Account",
      btnPrimary: true,
      showSubtitle: false,
      subtitleText: "Enjoy faster checkout with an account.",
      btnText: "Create Account",
      privacyPolicyText: (
        <span>
          By clicking Create Account, you acknowledge you have read and agreed to the
          <a href="http://corporate.walmart.com/terms-of-use"
            target="_blank"> Terms of Use </a> and
          <a href="http://corporate.walmart.com/privacy-security/walmart-privacy-policy"
            target="_blank"> Privacy Policy</a>.
          </span>
      ),
      newsletter: true,
      newsletterText: (
        <span>
          Email me about Rollbacks, special pricing, hot new items,
           gift ideas and more.
        </span>
      ),
      newsletterDefaultChecked: true,
      //Toggles
      showFirstName: true,
      showLastName: true,
      showSignIn: true,
      showNortonLogo: true,
      showPasswordStrength: false,
      //Automation id defaults
      automation: {
        firstNameInput: "signup-first-name-input",
        lastNameInput: "signup-last-name-input",
        emailInput: "signup-email-input",
        passwordInput: "signup-password-input",
        newsletterCheckbox: "signup-newsletter-checkbox",
        submitBtn: "signup-submit-btn",
        signInBtn: "signup-sign-in-btn"
      },
      tealeaf: {
        firstNameInput: "signup-first-name-input",
        lastNameInput: "signup-last-name-input",
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
    const classNms = ev.target.className.split(" ");
    if (classNms.indexOf("js-sign-in-link") !== -1) {
      ev.preventDefault();
      this.props.onSignInRequested();
    }
  },

  renderFirstName() {
    return (this.props.showFirstName &&
      <Field
        field={this.props.fields.firstName}
        label={"First name"}
        placeholder={"First name"}
        automationId={this.props.automation.firstNameInput}
        tealeafId={this.props.tealeaf.firstNameInput}/>
    );
  },

  renderLastName() {
    return (this.props.showLastName &&
      <Field field={this.props.fields.lastName}
        label={"Last name"}
        placeholder={"Last name"}
        automationId={this.props.automation.lastNameInput}
        tealeafId={this.props.tealeaf.lastNameInput}/>
    );
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
          type="email"
          autoComplete="off"
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
        {password.active && <Flyout
          block
          direction="top"
          active
          trigger={<span />}>
          {"Your password must be between 6 and 12 characters."}
        </Flyout>}
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

  renderBottomInfo() {
    const {
      showNortonLogo,
      showSignIn,
      onSignInRequested
    } = this.props;

    return (
      <div className="bottom-info-wrap">
        {showSignIn &&
          <div className="text-center signin-btn action-btn">
            {"Already have an account?"}&nbsp;
            <Button
              fakelink
              onClick={onSignInRequested}
              automationId={this.props.automation.signInBtn}>
              {"Sign In"}
            </Button>
          </div>}

          {showNortonLogo &&
          <div className="norton-wrapper">
            <NortonLogo grey={false}/>
          </div>}
      </div>
    );
  },
  handleSubmit(evt) {
    authConfig.logger.log("On Submit", {event: "submit", form: "SignUp"});

    const {
      handleSubmit,
      handleResponse,
      onSignUp
    } = this.props;

    return handleResponse(handleSubmit(onSignUp)(evt).catch((error = {}) => {
      throw alertMessageMap.getAlert(error.code);
    }));
  },

  render() {
    const {
      titleText,
      btnPrimary,
      btnText,
      privacyPolicyText,
      subtitleText,
      error = {},
      headingElement: HeadingElement,
      submitting,
      submitSuccess} = this.props;

    const {
      showSubtitle
    } = this.props;

    const errorObj = !isEmpty(error) && alertMessageMap.getAlert(error.code);

    return (
      <section className="SignUp clearfix">
        {errorObj &&
          <Alert
            message={errorObj.message}
            alertType={errorObj.alertType}
            isBlock
            onClick={(ev) => this._navigateBasedOnTarget(ev)}
          />}

        <HeadingElement className="heading">{titleText}</HeadingElement>
        {showSubtitle && <p className="signup-subtitle">{subtitleText}</p>}

        <form
          onSubmit={(evt) => {
            if (this.props.submitting || this.props.submitSuccess) {
              evt.preventDefault();
              return false;
            }
            return this.handleSubmit(evt);
          }}
          method="post"
          className={classNames("form-box", {
            "option-checkout": btnPrimary,
            "option-form-control": !btnPrimary
          })}>
          {this.renderFirstName()}

          {this.renderLastName()}

          {this.renderEmail()}

          {this.renderPassword()}

          {this.props.showPasswordStrength &&
          <PasswordStrength strength={this.props.fields.passwordStrength.value} />}

          <div className="privacy-policy-signup-text">{privacyPolicyText}</div>

          <Button
            type="submit"
            block
            className="l-margin-top"
            primary={btnPrimary}
            spinner={submitting || submitSuccess}
            disabled={submitting || submitSuccess}
            automationId={this.props.automation.submitBtn}
            tealeafId={this.props.tealeaf.submitBtn}>
            {btnText}
          </Button>

          {this.renderNewsletter()}
        </form>
        {this.renderBottomInfo()}
      </section>
    );
  }
});

export default SignUpForm;
