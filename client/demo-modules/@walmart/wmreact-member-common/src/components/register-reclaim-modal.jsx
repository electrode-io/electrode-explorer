import React, { PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
/**
Usage:
<RegisterReclaimModal
  userMessage="Looks like you're already signed in."
  btnMessage="Continue shopping"
/>
**/
class RegisterReclaimModal extends React.Component {
  render() {
    const { userMessage, btnMessage, submitting, automation, tealeaf} = this.props;
    return (
      <div className="register-reclaim-modal">
        <label className="user-message">{userMessage}</label>
        <Button
          block
          type="submit"
          disabled={submitting}
          automationId={automation.submitBtn}
          tealeafId={tealeaf.submitBtn}
          >
          {btnMessage}
        </Button>
      </div>
    );
  }
}
RegisterReclaimModal.propTypes = {
  userMessage: PropTypes.string.isRequired,
  btnMessage: PropTypes.string.isRequired,
  submitting: PropTypes.bool,
  automation: PropTypes.object,
  tealeaf: PropTypes.object
};
RegisterReclaimModal.defaultProps = {
  submitting: false,
  automation: {// for testing
    submitBtn: "register-reclaim-modal-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn: "register-reclaim-modal-submit-btn"
  }
};
export default RegisterReclaimModal;
