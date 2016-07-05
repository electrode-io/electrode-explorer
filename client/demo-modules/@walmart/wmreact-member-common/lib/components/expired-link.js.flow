import React, { PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
/**
Usage:
<ExpiredLink
  notification="Your request has expired."
  userMessage="Still need to change your password?"
  btnMessage1="Change password"
  btnMessage2="Continue shopping"
  />
**/
class ExpiredLink extends React.Component {
  render() {
    const { notification,
      userMessage,
      btnMessage1,
      btnMessage2,
      submitting,
      automation,
      tealeaf} = this.props;
    return (
      <div className="expired-link">
        <div className="remove-icon" >X</div>
        <label className="notification">{notification}</label>
        <label className="user-message">{userMessage}</label>
        <Button
          block
          type="submit"
          disabled={submitting}
          automationId={automation.submitBtn1}
          tealeafId={tealeaf.submitBtn1}
          >
          {btnMessage1}
        </Button>
        <Button
          block
          style={{
            backgroundColor: "#fff",
            color: "#4ca90c",
            border: "1px solid #4ca90c"
          }}
          type="submit"
          disabled={submitting}
          automationId={automation.submitBtn2}
          tealeafId={tealeaf.submitBtn2}
          >
          {btnMessage2}
        </Button>
      </div>
    );
  }
}
ExpiredLink.propTypes = {
  notification: PropTypes.string.isRequired,
  userMessage: PropTypes.string.isRequired,
  btnMessage1: PropTypes.string.isRequired,
  btnMessage2: PropTypes.string.isRequired,
  submitting: PropTypes.bool,
  tealeaf: PropTypes.object,
  automation: PropTypes.object
};
ExpiredLink.defaultProps = {
  submitting: false,
  automation: {// for testing
    submitBtn1: "expired-link-pwd-submit-btn",
    submitBtn2: "expired-link-shopping-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn1: "expired-link-pwd-submit-btn",
    submitBtn2: "expired-link-shopping-submit-btn"
  }
};
export default ExpiredLink;
