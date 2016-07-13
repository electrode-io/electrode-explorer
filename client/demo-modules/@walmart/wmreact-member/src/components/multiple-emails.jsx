import React, { PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import RadioGroup from "@walmart/wmreact-forms/lib/components/radio-group";
import RadioButton from "@walmart/wmreact-forms/lib/components/radio-button";
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
  render() {
    const { greeting,
        subject,
        emailAddress,
        buttonMessage,
        emailFooter,
        tealeaf,
        automation,
        submitting} = this.props;
    const renderEmails = emailAddress.map((email) => {
      return (
          <RadioButton group="email">{email}</RadioButton>
        );
    });

    return (
        <div className="multipleEmails">
            <label className="email-greeting">{greeting}</label>
            <label className="email-subject">{subject}</label>
            <div className="email-section">
              <label className="email-section-header">Select your current email address:</label>
              <RadioGroup name="emailId">
                {renderEmails}
              </RadioGroup>
            </div>
            <Button
              block
              type="submit"
              disabled={submitting}
              automationId={automation.submitBtn}
              tealeafId={tealeaf.submitBtn}
              >
              {buttonMessage}
            </Button>
            <span></span>
            <label className="email-footer">{emailFooter}</label>
        </div>
    );
  }

}
MultipleEmails.propTypes = {
  greeting: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  emailAddress: PropTypes.arrayOf(PropTypes.string),
  automation: PropTypes.object,
  submitting: PropTypes.bool,
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
