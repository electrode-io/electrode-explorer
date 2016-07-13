import React, {PropTypes} from "react";

import Button from "@walmart/wmreact-interactive/lib/components/button";

import IconEmail from "../images/Icon_Email1x.png";

class ResendEmail extends React.Component {
  render() {
    const {
      titleText,
      bodyText,
      resendLinkText
    } = this.props;
    return (
      <section className="resend-email">
        <img src={IconEmail}/>
        <h2 className="main-msg">{titleText}</h2>
        <label className="detailed-msg">{bodyText}</label>
        <Button
          fakelink
          className="forgot-link resend-email-link"
          automationId={this.props.automation.resendEmailLinkBtn}
          tealeafId={this.props.tealeaf.resendEmailLinkBtn}>
          {resendLinkText}
        </Button>
      </section>
    );
  }
}

ResendEmail.propTypes = {
  // Configurable props
  onResendEmailRequested: PropTypes.func.isRequired,
  titleText: PropTypes.string.required,
  bodyText: PropTypes.string.required,
  resendLinkText: PropTypes.string.required,
  //Automation id defaults
  automation: PropTypes.shape({
    resendEmailLinkBtn: PropTypes.string
  }),
  //Tealeaf id's
  tealeaf: PropTypes.shape({
    resendEmailLinkBtn: PropTypes.string
  })
};

ResendEmail.defaultProps = {
  automation: {
    resendEmailLinkBtn: "resend-email-link"
  },
  tealeaf: {
    resendEmailLinkBtn: "resend-email-link"
  }
};

export default ResendEmail;
