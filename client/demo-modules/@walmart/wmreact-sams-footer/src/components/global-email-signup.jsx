/* @flow */
import React, { PropTypes, Component } from "react";
import Email from "@walmart/wmreact-forms/lib/components/email";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import GlobalFooterItem from "@walmart/wmreact-footer/lib/components/global-footer-item";
import GlobalEmailSignupModal
from "@walmart/wmreact-footer/lib/components/global-email-signup-modal";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
This component displays the form to user
to signup for marketing emails at walmart.com
*/

class GlobalEmailSignup extends Component {
  constructor(props: Object): void {
    super(props);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  componentDidUpdate(prevProps): void {
    if (!prevProps.showModal && this.props.showModal) {
      // Fire email signup analytics if service returns success
      fireUIEvent(this, {}, { eventType: "emailSignupSubmit" });
    }
  }

  _handleFormSubmit(ev: Object): void {
    ev.preventDefault();
    const emailInput = this.refs.emailInput;
    const emailId = emailInput.getValue();
    const {
      onEmailSubmitted
    } = this.props;

    if (emailId && emailInput.validate()) {
      emailInput.clearValue();
      onEmailSubmitted(emailId);
    }
  }

  _renderHeader({ campaignId, headerColor, header, emailInfoText, link, autoId }): ReactElement {
    const headerStyle = { color: headerColor };
    const linkSuffix = "link";
    return (
      <div className="footer-GlobalEmailSignup-heading" data-id={campaignId}>
        <p className="font-semibold" style={headerStyle}>{header}</p>
        <div>
          {`${emailInfoText} `}
          <GlobalFooterItem
            className="footer-GlobalEmailSignup-link display-inline-block-m"
            link={link}
            autoId={`${autoId}-${linkSuffix}`}/>
        </div>
      </div>
    );
  }

  _renderSignupModal({
    showModal, emailId, emailInfoText, emailExclusions, autoId, moduleData, onModalClose, isMobile
  }): ? ReactElement {
    const { configs: { link } } = moduleData;
    return (
      <GlobalEmailSignupModal
        isMobile={isMobile}
        onModalClose={onModalClose}
        showModal={showModal}
        emailId={emailId}
        link={link}
        emailInfoText={emailInfoText}
        emailExclusions={emailExclusions}
        autoId={`${autoId}-modal`} />
    );
  }

  _renderEmailForm({ autoId, loading }): ReactElement {
    const {
      moduleData: {
        configs
      }
    } = this.props;
    const formSuffix = "form";
    const formInputSuffix = "formInput";
    const formButtonSuffix = "formButton";
    return (
      <div className="footer-GlobalEmailSignup-form display-inline-block valign-top">
        <form onSubmit={this._handleFormSubmit}
          {...getDataAutomationIdPair(formSuffix, autoId)}>
          <Email
            isRequiredField={false}
            ref="emailInput"
            showLabel={false}
            labelText="Enter Email address"
            placeholderText="Email address"
            {...getDataAutomationIdPair(formInputSuffix, autoId)}
          />
          <Button type="submit" primary={true} spinner={loading}
            {...getDataAutomationIdPair(formButtonSuffix, autoId)}>Sign Up</Button>
          <div className="footer-GlobalEmailSignup-form-exclusions">
            {configs.emailExclusions}
          </div>
        </form>
      </div>
    );
  }

  render(): ReactElement {
    const {
      moduleData: {
        type,
        moduleId,
        configs
      },
      autoId
    } = this.props;

    return (
      <CollectorContext moduleId={moduleId}>
        <div className="footer-GlobalEmailSignup" data-module={type} data-module-id={moduleId}
          {...getDataAutomationIdPair(autoId, "")}>
          {this._renderHeader(configs)}
          {this._renderEmailForm(this.props)}
          {this._renderSignupModal(this.props)}
        </div>
      </CollectorContext>
    );
  }
}

GlobalEmailSignup.displayName = "GlobalEmailSignup";

GlobalEmailSignup.propTypes = {
  /**
   check mobile device
   */
  isMobile: PropTypes.bool,
  /**
   Tempo module Data
   */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      campaignId: PropTypes.string,
      emailInfoText: PropTypes.string,
      emailExclusions: PropTypes.string,
      headerColor: PropTypes.string,
      header: PropTypes.string.isRequired,
      link: PropTypes.shape({
        linkText: PropTypes.string.isRequired,
        clickThrough: PropTypes.shape({
          value: PropTypes.string.isRequired
        })
      })
    }).isRequired
  }).isRequired,
  /**
   Show modal with customer Email
   */
  showModal: PropTypes.bool,
  /**
   Callback trigger on modal close.
   */
  onModalClose: PropTypes.func,
  /**
   Pass value of the email box to set showModal
   */
  onEmailSubmitted: PropTypes.func.isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string,
  emailId: PropTypes.string,
  loading: PropTypes.bool,
  didInvalidate: PropTypes.bool
};

GlobalEmailSignup.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      campaignId: "",
      emailInfoText: "",
      emailExclusions: "",
      headerColor: "",
      header: "",
      link: {
        linkText: "",
        clickThrough: {
          value: ""
        }
      }
    }
  },
  showModal: false,
  onModalClose: () => {},
  autoId: "",
  emailId: ""
};

GlobalEmailSignup.contextTypes = {
  analytics: PropTypes.object
};

export default GlobalEmailSignup;
