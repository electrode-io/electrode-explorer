import React, {PropTypes} from "react";
import isEmpty from "lodash/isEmpty";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import { Message } from "@walmart/wmreact-forms";
import Field from "@walmart/wmreact-user/lib/components/common/field";
import AlertIcon from "@walmart/icons-set/icons/pngs/icon-alert-1x.png";
import InfoIcon from "@walmart/icons-set/icons/pngs/icon-tooltip-1x.png";
import CreditIcon from "@walmart/wmreact-member-common/src/images/card.png";
import { Link } from "react-router";
import authConfig from "../config";

class RegisterMembership extends React.Component {
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
    authConfig.logger.log("On Submit", {event: "submit", form: "MemberRegister"});

    const {
      handleSubmit,
      handleResponse,
      onMemberRegister } = this.props;

    return handleResponse(handleSubmit(onMemberRegister)(evt));
  }

  render() {
    const {
      headerTitle,
      btnPrimary,
      digitText,
      matchText,
      promoText,
      alreadyMemberText,
      submitting,
      signInRoute,
      error = {},
      fields: { membershipNum, lastName },
      headingElement: HeadingElement} = this.props;

    return (
      <section className="register-membership">
        {!isEmpty(error) && <Message.Error
          className="alert-warning-message"
          block={true}
          AboveForm={true}>
            <span className="error-message-icon"><img src={AlertIcon}/></span>
            <span className="error-message-body-text">{error.message}</span>
          </Message.Error>
        }

        {!isEmpty(promoText) && <Message.Success
          className="promo-slot-message"
          block={true}
          AboveForm={true}>
            <span className="register-promo-slot-text">{promoText}</span>
          </Message.Success>
        }

        <HeadingElement>{headerTitle}</HeadingElement>
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
            type="text"
            field={membershipNum}
            validationSuccessMark
            label={"Membership number"}
            placeholder={"Membership number"}
            showErrorOnTop={true}
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
          <Field
            type="text"
            field={lastName}
            validationSuccessMark
            label={"Last name"}
            placeholder={"Last name"}
            showErrorOnTop={true}
            autoComplete="off"/>
          <div className="online-account-match-text">{matchText}</div>
          <Button
            type="submit"
            block
            primary={btnPrimary}
            spinner={submitting}
            disabled={submitting}
            automationId={this.props.automation.continueBtn}
            tealeafId={this.props.tealeaf.continueBtn}>
            {"Continue"}
          </Button>
          <hr className="separate-line" />
        </form>
        <div className="online-account-member-text">{alreadyMemberText}</div>
        <Link
          to={signInRoute ? signInRoute : "#"}
          className="member-link">
          {"Sign in"}
        </Link>
      </section>
    );
  }
}

RegisterMembership.displayName = "RegisterMembership";
RegisterMembership.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  promoText: PropTypes.string,
  digitText: PropTypes.string,
  matchText: PropTypes.string,
  btnPrimary: PropTypes.bool,
  signInRoute: PropTypes.string.isRequired,
  alreadyMemberText: PropTypes.string,
  fields: PropTypes.shape({
    membershipNum: PropTypes.object.isRequired,
    lastName: PropTypes.object.isRequired
  }).isRequired,
  error: PropTypes.object,
  //Action handlers
  onMemberRegister: PropTypes.func.isRequired,
  //redux-form props
  handleResponse: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  children: PropTypes.shape(),
  initializeForm: PropTypes.func.isRequired,
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
