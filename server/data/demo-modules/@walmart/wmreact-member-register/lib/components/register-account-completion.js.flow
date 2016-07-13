import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import {Message} from "@walmart/wmreact-forms";
import Password from "@walmart/wmreact-user/lib/components/common/password";
import Field from "@walmart/wmreact-user/lib/components/common/field";
import AlertIcon from "@walmart/icons-set/icons/pngs/icon-alert-1x.png";
import InfoIcon from "@walmart/icons-set/icons/pngs/icon-tooltip-1x.png";
import CreditIcon from "@walmart/wmreact-member-common/src/images/card.png";
import authConfig from "../config";

class CompleteAccountRegistered extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: "show-hide-flyout"};
  }

  _toggle(evt) {
    evt.preventDefault();
    this.setState({show: this.state.show === "show-hide-flyout" ?
        "account-info-flyout" : "show-hide-flyout" });
  }

  componentWillMount() {
    const { initializeForm } = this.props;
    initializeForm({});
  }

  _handleSubmit(evt) {
    authConfig.logger.log("On Submit", {event: "submit", form: "CompleteAccountRegister"});

    const {
      handleSubmit,
      handleResponse,
      onCompleteMemberRegister } = this.props;

    return handleResponse(handleSubmit(onCompleteMemberRegister)(evt));
  }

  render() {
    const {
      headerTitle,
      btnPrimary,
      digitText,
      matchText,
      btnText,
      submitting,
      emailText: {email, text},
      fields: {membershipNum, password},
      error = {},
      headingElement: HeadingElement} = this.props;
    return (
      <section className="complete-account-registered">
        {!isEmpty(error) && <Message.Error
          className="alert-warning-message"
          block={true}
          AboveForm={true}>
          <span className="error-message-icon"><img src={AlertIcon}/></span>
           <span className="error-message-body-text">{error.message}</span>
          </Message.Error>
        }

        <HeadingElement>{headerTitle}</HeadingElement>

        <div className="register-email-info">
          <span className="register-email-text">{text}</span>
          <span className="register-email-text"><b>{email}</b></span>
        </div>
        <form
          onSubmit={(evt) => {
            if (this.props.submitting) {
              evt.preventDefault();
              return false;
            }
            return this._handleSubmit(evt);
          }}
          method="post"
          className={btnPrimary ? "option-checkout" : "option-form-control"}>
          <Field
            field={membershipNum}
            type="text"
            validationSuccessMark
            label={"Membership number"}
            placeholder={"Membership number"}
            autoComplete="off"
            automationId={this.props.automation.memberShipInput}
            tealeafId={this.props.tealeaf.memberShipInput}>
            <a href="#" onClick={this._toggle.bind(this)} className="icon-tool-tip">
              <img src={InfoIcon} /></a>
          </Field>
          <div className={this.state.show}>
            <img src={CreditIcon} />
          </div>
          <div className="online-account-digit-text">{digitText}</div>
          <Password
            field={password}
            label={"Password"}
            placeholder={"Password"}
            validationSuccessMark
            autoComplete="new-password"
            automationId={this.props.automation.passwordInput}
            showAutomationId={this.props.automation.passwordShowBtn}
            hideAutomationId={this.props.automation.passwordHideBtn}
            tealeafId={this.props.tealeaf.passwordInput}
            showTealeafId={this.props.tealeaf.passwordShowBtn}
            hideTealeafId={this.props.tealeaf.passwordHideBtn}
          />
          <div className="online-account-match-text">{matchText}</div>
          <Button
            type="submit"
            block
            className="l-margin-top"
            primary={btnPrimary}
            spinner={submitting}
            disabled={submitting}
            automationId={this.props.automation.continueBtn}
            tealeafId={this.props.tealeaf.continueBtn}>
            {btnText}
          </Button>
        </form>
      </section>
    );
  }
}

CompleteAccountRegistered.displayName = "CompleteAccountRegistered";
CompleteAccountRegistered.propTypes = {
  headerTitle: PropTypes.string.required,
  btnText: PropTypes.string,
  emailText: PropTypes.shape({
    email: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  digitText: PropTypes.string,
  matchText: PropTypes.string,
  defaultEmail: PropTypes.string,
  btnPrimary: PropTypes.bool,
  //Action handlers
  onCompleteMemberRegister: PropTypes.func.isRequired,
  //redux-form props
  initializeForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleResponse: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  fields: PropTypes.shape({
    membershipNum: PropTypes.object.isRequired,
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
    memberShipInput: PropTypes.string,
    continueBtn: PropTypes.string,
    passwordInput: PropTypes.string,
    passwordShowBtn: PropTypes.string,
    passwordHideBtn: PropTypes.string
  }),
  //Releaf
  tealeaf: PropTypes.shape({
    memberShipInput: PropTypes.string,
    continueBtn: PropTypes.string,
    passwordInput: PropTypes.string,
    passwordShowBtn: PropTypes.string,
    passwordHideBtn: PropTypes.string
  }),
  headingElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CompleteAccountRegistered.defaultProps = {
  btnPrimary: true,
  btnText: "Continue",
  automation: {
    memberShipInput: "complete-membership-input",
    passwordInput: "complete-account-password-input",
    continueBtn: "complete-continue-membership-btn",
    passwordShowBtn: "complete-password-show",
    passwordHideBtn: "complete-password-hide"
  },
  tealeaf: {
    memberShipInput: "membership-number-input",
    signInBtn: "membership-sign-in-btn",
    continueBtn: "continue-membership-btn",
    passwordShowBtn: "complete-password-show",
    passwordHideBtn: "complete-password-hide"
  },
  headingElement: Heading.H4
};

export default CompleteAccountRegistered;
