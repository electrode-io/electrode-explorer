import React, { PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
/**
Usage:
<Playground
    codeText={`<IntlProvider><ReclaimEmail
    userQuestion="Use this email?"
    userMainMessage= "samantha.smith@email.com"
    userDetailedMessage="If you continue, this will be your new membershipnumber"
    btnMessage1="Yes, continue"
    btnMessage2="No, use a different email"
/>
**/
class ReclaimEmail extends React.Component {
  render() {
    const { userQuestion,
      userMainMessage,
      userDetailedMessage,
      btnMessage1,
      btnMessage2,
      submitting,
      automation,
      tealeaf
      } = this.props;
    return (
      <div className="reclaim-email">
        <label className="user-question">{userQuestion}</label>
        <label className="user-main-message">{userMainMessage}</label>
        <label className="user-detailed-message">{userDetailedMessage}</label>
        <Button
          block
          type="submit"
          className="reclaim-primary"
          disabled={submitting}
          automationId={automation.submitBtnYes}
          tealeafId={tealeaf.submitBtnYes}
          >
          {btnMessage2}
        </Button>
        <Button
          block
          className="reclaim-secondary"
          type="submit"
          disabled={submitting}
          automationId={automation.submitBtnNo}
          tealeafId={tealeaf.submitBtnNo}
          style={{
            backgroundColor: "#fff",
            color: "#4ca90c ",
            border: "1px solid #4ca90c "
          }}
          >
          {btnMessage1}
        </Button>
      </div>
    );
  }
}
ReclaimEmail.propTypes = {
  userQuestion: PropTypes.string.isRequired,
  userMainMessage: PropTypes.string.isRequired,
  userDetailedMessage: PropTypes.string.isRequired,
  btnMessage1: PropTypes.string.isRequired,
  btnMessage2: PropTypes.string.isRequired,
  tealeaf: PropTypes.object,
  automation: PropTypes.object,
  submitting: PropTypes.bool
};
ReclaimEmail.defaultProps = {
  submitting: false,
  automation: {// for testing
    submitBtnNo: "reclaim-Email-No-submit-btn",
    submitBtnYes: "reclaim-Email-Yes-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtnNo: "reclaim-Email-No-submit-btn",
    submitBtnYes: "reclaim-Email-Yes-submit-btn"
  }
};
export default ReclaimEmail;
