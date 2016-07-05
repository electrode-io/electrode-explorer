import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";

import Heading from "@walmart/wmreact-base/lib/components/heading";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Option from "@walmart/wmreact-forms/lib/components/option";
import { Message } from "@walmart/wmreact-forms";

import Field from "@walmart/wmreact-user/lib/components/common/field";
import Password from "@walmart/wmreact-user/lib/components/common/password";
import authConfig from "../config";
import AlertIcon from "@walmart/icons-set/icons/pngs/icon-alert-1x.png";

const SignUpForm = React.createClass({
  displayName: "SignUp",

  propTypes: {
    //Configurable props
    defaultEmail: PropTypes.string,
    btnText: PropTypes.string,
    setUpAccountText: PropTypes.string,
    passwordText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    newsletter: PropTypes.bool,
    newsletterText: PropTypes.node,
    userFirstName: PropTypes.string,
    userLastName: PropTypes.string,
    membershipId: PropTypes.string,
    lockEmail: PropTypes.bool,
    subtitleText: PropTypes.string,
    //Toggles
    showSignIn: PropTypes.bool,
    showSubtitle: PropTypes.bool,
    //Action handlers
    onSignUp: PropTypes.func.isRequired,
    handleResponse: PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      email: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired,
      membershipNum: PropTypes.object.isRequired,
      lastName: PropTypes.object.isRequired,
      newsletter: PropTypes.object.isRequired
    }).isRequired,
    error: PropTypes.string,
    submitting: PropTypes.bool,
    showLabels: PropTypes.bool,
    initializeForm: PropTypes.func.isRequired,
    //Automation id's
    automation: PropTypes.shape({
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
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      newsletterCheckbox: PropTypes.string,
      submitBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string
    }),
    headingElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  },

  getInitialState() {
    return {
      value: this.props.defaultEmail || ""
    };
  },

  getDefaultProps() {
    return {
      titleText: "",
      membershipId: "",
      userLastName: "",
      btnPrimary: true,
      showSubtitle: false,
      subtitleText: "Membership # ",
      setUpAccountText: "Let's set up your online account",
      btnText: "Create your account",
      passwordText: "Your password must be between 6 and 12 characters.",
      newsletter: true,
      newsletterText: (
        <span className="email-letter-text">
          Email me about savings and updates.
        </span>
      ),
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
    const {initializeForm} = this.props;
    initializeForm({});
  },

  handleOnFieldValueChange(event) {
    this.setState({value: event.target.value});
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
          className="input-field"
          field={email}
          label={"Email address"}
          showLabel={this.props.showLabels}
          placeholder={"Email address"}
          automationId={automation.emailInput}
          tealeafId={tealeaf.emailInput}
          value={this.state.value}
          onChange={this.handleOnFieldValueChange} />
    );
  },

  renderPassword() {
    const {automation, tealeaf, fields: {password}} = this.props;

    const passwordField = (
      <Password
        field={password}
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
      btnPrimary,
      btnText,
      setUpAccountText,
      passwordText,
      error = {},
      headingElement: HeadingElement,
      subtitleText,
      userFirstName,
      userLastName,
      membershipId,
      fields: {membershipNum, lastName},
      submitting} = this.props;

    return (
      <section className="sign-up clearfix">
        {!isEmpty(error) && <Message.Error
          className="alert-warning-message"
          block={true}
          AboveForm={true}>
          <img className="error-message-icon" src={AlertIcon}/>
            <span className="error-message-body-text">{error.message}</span>
          </Message.Error>
        }

        <HeadingElement>
          {`Welcome ${userFirstName} ${userLastName}`}
        </HeadingElement>
        <p className="signup-subtitle">{`${subtitleText} ${membershipId}`} </p>
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

          <Field field={membershipNum} value={membershipId} type="hidden"/>

          <Field field={lastName} value={userLastName} type="hidden"/>

          <Button
            type="submit"
            block
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
