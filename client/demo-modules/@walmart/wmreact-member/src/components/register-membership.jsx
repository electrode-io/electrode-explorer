import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import {Message} from "@walmart/wmreact-forms";
import Field from "./common/field";
import AlertIcon from "../images/Icon_Alert_1x.png";
import InfoIcon from "../images/Icon_Tooltip_1x.png";
import CreditIcon from "../images/card.png";


class RegisterMembership extends React.Component {
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
      promoText,
      alreadyMemberText,
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

        <Message.Success
          className="promo-slot-message"
          block={true}
          AboveForm={true}>
          <span className="register-promo-slot-text">{promoText}</span>
          </Message.Success>

        <HeadingElement>{headerTitle}</HeadingElement>
        <form>
          <Field
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
          <Field
            label={"Last name"}
            placeholder={"Last name"}
            autoComplete="off"/>
          <div className="online-account-match-text">{matchText}</div>
          <Button
            type="submit"
            block={true}
            primary={btnPrimary}
            automationId={this.props.automation.continueBtn}
            tealeafId={this.props.tealeaf.continueBtn}>
            {"Continue"}
          </Button>
          <hr className="separate-line" />
        </form>
        <div className="online-account-member-text">{alreadyMemberText}</div>
        <Button
          fakelink
          className="member-link">
          {"Sign in"}
        </Button>
      </section>
    );
  }
}

RegisterMembership.propTypes = {
  headerTitle: PropTypes.string.required,
  promoText: PropTypes.string,
  digitText: PropTypes.string,
  matchText: PropTypes.string,
  btnPrimary: PropTypes.bool,
  alreadyMemberText: PropTypes.string,
  fields: PropTypes.shape({
    membershipNum: PropTypes.object.isRequired,
    lastName: PropTypes.string.isRequired
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
    signInBtn: PropTypes.string
  }),
  //Releaf
  tealeaf: PropTypes.shape({
    memberShipInput: PropTypes.string,
    signInBtn: PropTypes.string,
    continueBtn: PropTypes.string
  }),
  headingElement: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

RegisterMembership.defaultProps = {
  btnPrimary: true,
  automation: {
    memberShipInput: "membership-number-input",
    signInBtn: "membership-sign-in-btn",
    continueBtn: "continue-membership-btn"
  },
  tealeaf: {
    memberShipInput: "membership-number-input",
    signInBtn: "membership-sign-in-btn",
    continueBtn: "continue-membership-btn"
  },
  headingElement: Heading.H4
};

export default RegisterMembership;
