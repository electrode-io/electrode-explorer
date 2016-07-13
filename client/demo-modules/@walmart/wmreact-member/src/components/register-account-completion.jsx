import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import {Message} from "@walmart/wmreact-forms";
import Password from "./common/password";
import Field from "./common/field";
import AlertIcon from "../images/Icon_Alert_1x.png";
import InfoIcon from "../images/Icon_Tooltip_1x.png";
import CreditIcon from "../images/card.png";


class CompleteAccountRegistered extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: "account-info-flyout"};
  }

  _toggle(evt) {
    evt.preventDefault();
    this.setState({show: this.state.show === "account-info-flyout" ?
        "show-hide-flyout" : "account-info-flyout" });
  }

  render() {
    const {
      headerTitle,
      btnPrimary,
      digitText,
      matchText,
      emailText: {email, text},
      fields: {membershipNum, password},
      error = {},
      headingElement: HeadingElement} = this.props;
    return (
      <section className="registerMembership">
        {!isEmpty(error) && <Message.Error
          className="alert-warning-message"
          block={true}
          AboveForm={true}>
          <img className="error-message-icon" src={AlertIcon}/>
           <span className="error-message-body-text">{error.message}</span>
          </Message.Error>
        }

        <HeadingElement>{headerTitle}</HeadingElement>

        <div className="register-email-info">
          <span className="register-email-text">{text}</span>
          <span className="register-email-text"><b>{email}</b></span>
        </div>
        <form>
          <Field
            field={membershipNum}
            type="text"
            label={"Membership number"}
            placeholder={"Membership number"}
            autoComplete="off"
            automationId={this.props.automation.memberShipInput}
            tealeafId={this.props.tealeaf.memberShipInput}>
            {<a href="#" onClick={this._toggle.bind(this)} className="icon-tool-tip">
              <img src={InfoIcon} /></a>}
          </Field>
          <div className={this.state.show}>
            <img src={CreditIcon} />
          </div>
          <div className="online-account-digit-text">{digitText}</div>
          <Password
            field={password}
            label={"Password"}
            placeholder={"Password"}
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
            block={true}
            primary={btnPrimary}
            automationId={this.props.automation.continueBtn}
            tealeafId={this.props.tealeaf.continueBtn}>
            {"Continue"}
          </Button>
        </form>
      </section>
    );
  }
}

CompleteAccountRegistered.propTypes = {
  headerTitle: PropTypes.string.required,
  emailText: PropTypes.shape({
    email: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  digitText: PropTypes.string,
  matchText: PropTypes.string,
  btnPrimary: PropTypes.bool,
  fields: PropTypes.shape({
    membershipNum: PropTypes.object.isRequired,
    password: PropTypes.string.isRequired
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
