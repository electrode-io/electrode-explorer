import React, { PropTypes } from "react";
import isEmpty from "lodash/isEmpty";

import Heading from "@walmart/wmreact-base/lib/components/heading";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { Message } from "@walmart/wmreact-forms";

import Field from "@walmart/wmreact-user/lib/components/common/field";
import Password from "@walmart/wmreact-user/lib/components/common/password";
import authConfig from "../config";
import IconAlert from "@walmart/icons-set/icons/pngs/icon-alert-1x.png";
import { Link } from "react-router";

import {CAPTCHA_STATES} from "@walmart/wmreact-user/lib/components/captcha";

const SignInForm = React.createClass({
  displayName: "SignIn",
  propTypes: {
    //Configurable props
    titleText: PropTypes.string,
    btnPrimary: PropTypes.bool,
    btnText: PropTypes.string,
    defaultEmail: PropTypes.string,
    lockEmail: PropTypes.bool,
    forgotEmailRoute: PropTypes.string,
    forgotPwdRoute: PropTypes.string,
    createAcctRoute: PropTypes.string,
    accountExistBodyText: PropTypes.string,
    accountExistMembershipId: PropTypes.string,
    joinNowRoute: PropTypes.string,
    //privacyPolicyUrl: PropTypes.string,
    //Action handlers
    onSignIn: PropTypes.func.isRequired,
    handleResponse: PropTypes.func.isRequired,
    //redux-form props
    handleSubmit: PropTypes.func.isRequired,
    fields: PropTypes.shape({
      email: PropTypes.object.isRequired,
      password: PropTypes.object.isRequired
    }).isRequired,
    error: PropTypes.object,
    promo: PropTypes.object,
    info: PropTypes.object,
    submitting: PropTypes.bool,
    initializeForm: PropTypes.func.isRequired,
    //Toggles
    showSignUp: PropTypes.bool.isRequired,
    //showNortonLogo: PropTypes.bool,
    //showPrivacyPolicy: PropTypes.bool,
    showLabels: PropTypes.bool,
    //Captcha
    captchaAvailable: PropTypes.bool,
    captcha: PropTypes.shape({
      isBot: PropTypes.number,
      inProgress: PropTypes.bool,
      _error: PropTypes.string
    }),
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
    //Automation id's
    automation: PropTypes.shape({
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      forgotPasswordLinkBtn: PropTypes.string,
      submitBtn: PropTypes.string,
      signUpBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string
    }),
    //Tealeaf id's
    tealeaf: PropTypes.shape({
      emailInput: PropTypes.string,
      passwordInput: PropTypes.string,
      forgotPasswordLinkBtn: PropTypes.string,
      submitBtn: PropTypes.string,
      signUpBtn: PropTypes.string,
      passwordShowBtn: PropTypes.string,
      passwordHideBtn: PropTypes.string
    }),
    headingElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  },

  getDefaultProps() {
    return {
      titleText: "Sign in to your account",
      btnText: "Sign In",
      privacyPolicyUrl: "http://corporate.walmart.com/privacy-security/walmart-privacy-policy",
      btnPrimary: true,
      showSignUp: true,
      //showNortonLogo: true,
      //showPrivacyPolicy: true,
      automation: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn"
      },
      tealeaf: {
        emailInput: "signin-email-input",
        passwordInput: "signin-password-input",
        forgotPasswordLinkBtn: "signin-forgot-password-link-btn",
        submitBtn: "signin-submit-btn",
        signUpBtn: "signin-sign-up-btn"
      },
      headingElement: Heading.H4
    };
  },
  getInitialState: () => {
    return {
      info: "",
      value: ""
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultEmail) {
      this.setState({
        info: "We found your email address. Not your email? Call us at 1.888.746.7726"});
    }
  },

  handleOnChangeField(event) {
    this.setState({value: event.target.value});
  },

  renderEmail() {
    const {lockEmail, fields: {email}, defaultEmail} = this.props;
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
            showErrorOnTop={true}
            placeholder={"Email"}
            automationId={this.props.automation.emailInput}
            tealeafId={this.props.tealeaf.emailInput}
            value={defaultEmail || this.state.value}
            onChange={this.handleOnChangeField}
            />
      );
  },

  renderPassword() {
    const {automation, tealeaf} = this.props;
    return (
      <Password
        field={this.props.fields.password}
        label={"Password"}
        showLabel={this.props.showLabels}
        showErrorOnTop={true}
        placeholder={"Password"}
        automationId={automation.passwordInput}
        showAutomationId={automation.passwordShowBtn}
        hideAutomationId={automation.passwordHideBtn}
        tealeafId={tealeaf.passwordInput}
        showTealeafId={tealeaf.passwordShowBtn}
        hideTealeafId={tealeaf.passwordHideBtn}
      />
    );
  },
  renderActions() {
    const {
      btnPrimary,
      btnText,
      submitting,
      forgotEmailRoute,
      forgotPwdRoute,
      joinNowRoute,
      createAcctRoute } = this.props;
    const {
      showSignUp
    } = this.props;
    const {
      captcha: {
        inProgress: captchaInProgress
      }
    } = this.props;

    return [

      <Button type="submit"
        block
        primary={btnPrimary}
        spinner={submitting || captchaInProgress}
        disabled={submitting || captchaInProgress}
        automationId={this.props.automation.submitBtn}
        tealeafId={this.props.tealeaf.submitBtn}>
        {btnText}
      </Button>,
      <div>
        <Link
          to={forgotEmailRoute}
          className="forgot-link forgot-email">
          {"Forgot email"}
        </Link> &nbsp;
        <Link
          to={forgotPwdRoute}
          className="forgot-link forgot-password"
          automationId={this.props.automation.forgotPasswordLinkBtn}
          tealeafId={this.props.tealeaf.forgotPasswordLinkBtn}>
          {"Forgot password"}
        </Link>
      </div>,
      <hr className="line-separater"/>,
      <div>
        {showSignUp &&
          <div>
            <p>
              <span
                className="already-member-title-bu">Already a member, but new to Sam's Club online?
              </span>&nbsp;
            </p>
            <Link
              className="member-link"
              to={createAcctRoute}
              automationId={this.props.automation.signUpBtn}
              tealeafId={this.props.tealeaf.signUpBtn}>
              {"Create your online account"}
            </Link>
          </div>
        }
      </div>,
      <hr className="line-separater"/>,
      <div>
          <p>
            <span className="not-a-sams-club-memb">Not a Sam's Club member?</span>
          </p>
          <Link
            to={joinNowRoute}
            className="member-link">
            {"Join now"}
          </Link>
      </div>
    ];
  },

  handleSubmit(evt) {
    const {
      handleSubmit,
      handleResponse,
      onSignIn,
      submitting
    } = this.props;

    if (submitting) {
      evt.preventDefault();
      return false;
    }
    authConfig.logger.log("On Submit", {event: "submit", form: "SignIn"});
    return handleResponse(handleSubmit(onSignIn)(evt));
  },

  renderForm() {
    return [
      <form onSubmit={this.handleSubmit}
        method="post"
      >
        {this.renderEmail()}
        {this.renderPassword()}
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
      promo = {},
      accountExistBodyText,
      accountExistMembershipId,
      headingElement: HeadingElement
    } = this.props;

    const {isBot} = captcha;
    const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
    const showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return (
      <section className="SignIn">
        {accountExistBodyText && accountExistMembershipId &&
          <Message.Error
            className="alert-warning-message"
            block={true}
            AboveForm={true}>
              <span className="error-message-body-text">
                {`${accountExistBodyText} ${accountExistMembershipId}`}
              </span>
          </Message.Error>
        }
        {showForm && !isEmpty(error) &&
          <Message.Error
            className="alert-warning-message"
            block={true}
            AboveForm={true}>
              <span className="error-message-icon"><img src={IconAlert}/></span>
              <span className="error-message-body-text">{error.message}</span>
          </Message.Error>
        }

        {showForm && !isEmpty(promo) &&
        <Message.Success
          className="promo-slot-message"
          block={true}
          AboveForm={true}>
          <span className="promo-body-text first-line-promo-offer">{promo.firstline}</span>
          <span className="promo-body-text second-line-promo-offer">{promo.secondline}</span>
          <span className="promo-body-text third-line-promo-offer">{promo.thirdline}</span>
        </Message.Success>
        }
        {showForm && this.state.info !== "" &&
        <Message.Success
          className="info-slot-message"
          block={true}
          AboveForm={true}>
          <span className="info-body-text">{this.state.info}</span>
        </Message.Success>
        }
        <HeadingElement>{titleText}</HeadingElement>
        {showForm && this.renderForm()}
        {!showForm && this.renderBotEmail()}
        {this.props.children}
      </section>
    );
  }
});

export default SignInForm;
