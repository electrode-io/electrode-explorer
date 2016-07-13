import React, { PropTypes} from "react";
import Field from "@walmart/wmreact-user/lib/components/common/field";
import InfoIcon from "@walmart/icons-set/icons/pngs/icon-tooltip-1x.png";
import CreditIcon from "@walmart/wmreact-member-common/src/images/card.png";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import {CAPTCHA_STATES} from "@walmart/wmreact-user/lib/components/captcha";
import authConfig from "../config";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import isEmpty from "lodash/isEmpty";

class LostStolen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: "show-hide-flyout"};
  }

  componentWillMount() {
    const {initializeForm} = this.props;
    initializeForm({});
  }

  componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined
      && this._handleSubmit();
  }

  _toggle(evt) {
    evt.preventDefault();
    this.setState({show: this.state.show === "show-hide-flyout" ?
      "account-info-flyout" : "show-hide-flyout" });
  }

  _renderAlertOrHeader() {
    const {
      error = {},
      compromisedErr = {},
      captcha = {},
      userFirstName,
      subject,
      membershipText
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
        <label className="lost-greeting"><b>{`Hi ${userFirstName},`}</b></label>
        <label className="lost-text">{subject}</label>
        <label className="lost-text">{membershipText}</label>
      </div>
    );
  }

  _handleSubmit(evt) {
    authConfig.logger.log("On Submit", {event: "submit", form: "LostStolen"});
    const {
      handleSubmit,
      handleResponse,
      onLostStolen
    } = this.props;
    return handleResponse(handleSubmit(onLostStolen)(evt));
  }

  _renderForm() {
    const {
        buttonMessage,
        btnPrimary,
        digitText,
        fields: {membershipNumber},
        tealeaf,
        submitting,
        automation } = this.props;
    return (
      <form
        onSubmit={(evt) => {
          if (this.props.submitting) {
            evt.preventDefault();
            return false;
          }
          return this._handleSubmit(evt);
        }}
        method="post"
      >
        <Field
          type="text"
          className="input-field"
          field={membershipNumber}
          label={"Membership number"}
          showErrorOnTop={true}
          placeholder={"Membership number"}
          autoComplete="off"
          automationId={automation.memberShipInput}
          tealeafId={tealeaf.memberShipInput}>
          {<a href="#" onClick={this._toggle.bind(this)} className="icon-tool-tip">
            <img src={InfoIcon} /></a>}
        </Field>
        <div className={this.state.show}>
          <img src={CreditIcon} />
        </div>
        <label className="online-account-digit-text">{digitText}</label>
        <Button
          block
          type="submit"
          primary={btnPrimary}
          spinner={submitting}
          disabled={submitting}
          automationId={automation.continueBtn}
          tealeafId={tealeaf.continueBtn}
          >
          {buttonMessage}
        </Button>
      </form>
    );
  }

  render() {
    const {captcha = {}, emailFooter} = this.props;
    const {isBot} = captcha;
    const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
    const showForm = !(isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);

    return (
        <section className="lostStolen">
            {this._renderAlertOrHeader()}
            {showForm && this._renderForm()}
            <label className="email-footer">{emailFooter}</label>
        </section>
    );
  }

}
LostStolen.propTypes = {
  userFirstName: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  membershipText: PropTypes.string.isRequired,
  digitText: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  initializeForm: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    membershipNumber: PropTypes.object.isRequired
  }).isRequired,
  error: PropTypes.object,
  compromisedErr: PropTypes.object,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleResponse: PropTypes.func.isRequired,
  onLostStolen: PropTypes.func.isRequired,
  btnPrimary: PropTypes.bool,
  emailFooter: PropTypes.string,
  automation: PropTypes.shape({
    memberShipInput: PropTypes.string,
    continueBtn: PropTypes.string
  }),
  tealeaf: PropTypes.shape({
    memberShipInput: PropTypes.string,
    continueBtn: PropTypes.string
  })

};
LostStolen.defaultProps = {
  btnPrimary: true,
  automation: {// for testing
    membershipInput: "lost-stolen-membership-input",
    continueBtn: "lost-stolen-continue-btn"
  },
  tealeaf: { //for analytics
    membershipInput: "lost-stolen-membership-input",
    continueBtn: "lost-stolen-continue-btn"
  }
};

export default LostStolen;
