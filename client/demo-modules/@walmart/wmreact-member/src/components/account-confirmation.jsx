import React, {PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import greenCheckImage from "../images/Icon_Success_1x.png";

/**
  Usage:
  <AccountConfirmation
    mainMessage="You're all set!"
    detailedMessage='Your account has been updated'
    buttonMessage="Let's go shopping"
  />
**/
class AccountConfirmation extends React.Component {
    render() {
      const { mainMessage,
              detailedMessage,
              buttonMessage,
              tealeaf,
              automation,
              submitting} = this.props;
      return (<section className="accountConfirmation">
            <img src={greenCheckImage} />
            <label className="main-msg">{mainMessage}</label>
            <label className="detailed-msg">{detailedMessage}</label>
            <Button
              block
              type="submit"
              disabled={submitting}
              automationId={automation.submitBtn}
              tealeafId={tealeaf.submitBtn}
              >
              {buttonMessage}
            </Button>

          </section>

      );
    }
  }
AccountConfirmation.propTypes = {
  mainMessage: PropTypes.string.isRequired,
  detailedMessage: PropTypes.string.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  tealeaf: PropTypes.object,
  automation: PropTypes.object,
  submitting: PropTypes.bool
};
AccountConfirmation.defaultProps = {
  submitting: false,
  automation: {// for testing
    submitBtn: "acct-confrm-submit-btn"
  },
  tealeaf: { //for analytics
    submitBtn: "acct-confrm-submit-btn"
  }
};
export default AccountConfirmation;
