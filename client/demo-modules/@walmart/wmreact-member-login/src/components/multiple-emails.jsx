import React, { PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { CAPTCHA_STATES } from "@walmart/wmreact-user/lib/components/captcha";
import authConfig from "../config";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import isEmpty from "lodash/isEmpty";
/**
  Usage:
  <MultipleEmails
    greeting="Hi Kelly,"
    subject="We show that there are multiple email addresses associated with your account.
    Unfortunately, we must ask you to use only one."
    emailAddress={["kelly.lastname@email.com","kelly_bry@email.com"]}
    buttonMessage="Continue"
    emailFooter="Questions? Call us at 1.888.746.7726"
  />
**/
class MultipleEmails extends React.Component {

  componentWillMount() {
    const {initializeForm} = this.props;
    initializeForm({
      email: this.props.emailAddress[0]
    });
  }

  componentDidUpdate(prevProps) {
    return this.props.captchaAvailable && prevProps.captchaAvailable === undefined
      && this._handleSubmit();
  }

  _renderAlertOrHeader() {
    const {
      error = {},
      compromisedErr = {},
      captcha = {},
      userFirstName,
      subject
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
        <label className="email-greeting">{`Hi ${userFirstName},`}</label>
        <label className="email-subject">{subject}</label>
      </div>
    );
  }

  _handleSubmit(evt) {
    authConfig.logger.log("On Submit", {event: "submit", form: "MultipleEmails"});
    const {
      handleSubmit,
      handleResponse,
      onMultipleEmail
    } = this.props;

    return handleResponse(handleSubmit(onMultipleEmail)(evt));
  }

  _renderForm() {
    const {
      buttonMessage,
      tealeaf,
      automation,
      fields: {email},
      emailAddress,
      submitting
    } = this.props;

    const renderEmails = emailAddress.map((choice) => {
      return (
        <label className="radio">
          <input
            {...email}
            type="radio"
            value={choice}
            checked={email.value === choice}
            onChange={email.onChange}/>
          <div className="radio-content">{choice}</div>
        </label>
      );
    });

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
        <div className="email-section">
          <label className="email-section-header">Select your current email address:</label>
          {renderEmails}
        </div>
        <Button
          block
          type="submit"
          disabled={submitting}
          spinner={submitting}
          automationId={automation.submitBtn}
          tealeafId={tealeaf.submitBtn}
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
        <div className="multipleEmails">
          {this._renderAlertOrHeader()}
          {showForm && this._renderForm()}
          <label className="email-footer">{emailFooter}</label>
        </div>
    );
  }

}
MultipleEmails.propTypes = {
  userFirstName: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  initializeForm: PropTypes.func.isRequired,
  error: PropTypes.object,
  compromisedErr: PropTypes.object,
  //Captcha
  captchaAvailable: PropTypes.bool,
  captcha: PropTypes.shape({
    isBot: PropTypes.number
  }),
  fields: PropTypes.shape({
    email: PropTypes.object.isRequired
  }).isRequired,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleResponse: PropTypes.func.isRequired,
  onMultipleEmail: PropTypes.func.isRequired,
  emailAddress: PropTypes.arrayOf(PropTypes.string),
  automation: PropTypes.object,
  tealeaf: PropTypes.object,
  emailFooter: PropTypes.string
};
MultipleEmails.defaultProps = {
  submitting: false,
  automation: {// for testing
    submitBtn: "multiple-email-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn: "multiple-email-submit-btn"
  }
};
export default MultipleEmails;
