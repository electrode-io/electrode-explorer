import React, {PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import CreditIcon from "@walmart/wmreact-member-common/src/images/card.png";
import InfoIcon from "@walmart/icons-set/icons/pngs/icon-tooltip-1x.png";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import isEmpty from "lodash/isEmpty";
import {CAPTCHA_STATES} from "@walmart/wmreact-user/lib/components/captcha";
import authConfig from "../config";
import Field from "@walmart/wmreact-user/lib/components/common/field";

class ForgotEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: "show-hide-flyout"};
  }

  _toggle(evt) {
    evt.preventDefault();
    this.setState({show: this.state.show === "show-hide-flyout" ?
      "account-info-flyout" : "show-hide-flyout" });
  }

  _renderAlertOrHeader() { // to display error message
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
    authConfig.logger.log("On Submit", {event: "submit", form: "ForgotEmail"});
    const {
      handleSubmit,
      handleResponse,
      onForgotEmail
    } = this.props;
    return handleResponse(handleSubmit(onForgotEmail)(evt));
  }

  _renderForm() {
    const {
      fields: {membershipNumber, lastName},
      userInfo,
      memberShipHintText,
      lastNameHintText,
      submitting,
      BtnText,
      tealeaf,
      automation
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
        <label className="user-info">
          {userInfo}
        </label>
        <Field
          className="input-field"
          field={membershipNumber}
          label={"membership number"}
          placeholder={"Membership number"}
          showErrorOnTop={true}
          automationId={automation.membershipNumberInput}
          tealeafId={tealeaf.membershipNumberInput}>
          <a href="#" onClick={this._toggle.bind(this)} className="icon-tool-tip">
            <img src={InfoIcon} /></a>
        </Field>
        <div className={this.state.show}>
          <img src={CreditIcon} />
        </div>
        <label className="hint-text">{memberShipHintText} </label>
        <Field
          className="input-field"
          field={lastName}
          label={"Last Name"}
          placeholder={"Last name"}
          showErrorOnTop={true}
          automationId={automation.lastNameInput}
          tealeafId={tealeaf.lastNameInput}
        />
        <label className="hint-text">{lastNameHintText}</label>
        <Button
          block
          type="submit"
          spinner={submitting}
          disabled={submitting}
          automationId={automation.submitBtn}
          tealeafId={tealeaf.submitBtn}>
          {BtnText}
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
      <section className="forgot-email">
        {this._renderAlertOrHeader()}
        {showForm && this._renderForm()}
        {!showForm && this._renderBotEmail()}
        {this.props.children}
      </section>
    );
  }
}

ForgotEmail.propTypes = {
  //initializeForm: PropTypes.func.isRequired,
  titleText: PropTypes.string,
  membershipNumber: PropTypes.string,
  lastName: PropTypes.string,
  userInfo: PropTypes.string,
  memberShipHintText: PropTypes.string,
  lastNameHintText: PropTypes.string,
  BtnText: PropTypes.string,
  fields: PropTypes.shape({
    membershipNumber: PropTypes.object.isRequired,
    lastName: PropTypes.object.isRequired
  }).isRequired,
  promo: PropTypes.object,
  error: PropTypes.object,
  compromisedErr: PropTypes.object,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  //Action handlers
  handleResponse: PropTypes.func.isRequired,
  onForgotEmail: PropTypes.func.isRequired,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  children: PropTypes.shape(),
  //Automation id defaults
  automation: PropTypes.shape({
    membershipNumberInput: PropTypes.string,
    lastNameInput: PropTypes.string,
    submitBtn: PropTypes.string
  }),
  //Tealeaf id defaults
  tealeaf: PropTypes.shape({
    membershipNumberInput: PropTypes.string,
    lastNameInput: PropTypes.string,
    submitBtn: PropTypes.string
  })
};

ForgotEmail.defaultProps = {
  //showNortonLogo: true,
  titleText: "Forgot email",
  BtnText: "Continue",
  memberShipHintText: "13 or 17 digit number on the back of your membership card.",
  lastNameHintText: "Must match information we have on file.",
  membershipNumber: "membershipNumber",
  lastName: "lastName",
  userInfo: "Enter your membership number and last name and we'll look it up.",
  alertStyle: "traditional",
  automation: {
    membershipNumberInput: "forgot-email-membership-input",
    lastNameInput: "forgot-email-lastname-input",
    submitBtn: "forgot-email-submit-btn"
  },
  tealeaf: {
    membershipNumberInput: "forgot-email-membership-number-input",
    lastNameInput: "forgot-email-lastname-input",
    submitBtn: "forgot-email-submit-btn"
  }
};

export default ForgotEmail;
