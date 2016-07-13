/* @flow */
import React, { PropTypes, Component } from "react";
import Field from "@walmart/wmreact-stateless-fields/lib/components/field";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { email } from "@walmart/wmreact-validation/lib/validators" ;
import GlobalFooterItem from "./global-footer-item";
import GlobalEmailSignupModal from "./global-email-signup-modal";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
This component displays the form to user
to signup for marketing emails at walmart.com

@import {GlobalEmailSignup}
@flags noVisibleRender
@component GlobalEmailSignup
@playground
Global Email Signup
```
<GlobalEmailSignup
  onEmailSubmitted={(emailId) => console.log(emailId)}
  showModal
  moduleData={
  {
    "type":"GlobalEmailSignup",
    "configs":{
       "campaignId":"1",
       "headerColor":"#888",
       "header":"Be the first to save!",
       "link": {
         "clickThrough": {
         "type": "url",
         "value": "http://www.walmart.com"
         },
       "linkText": "Privacy policy",
       "title": "Privacy policy",
       "uid": "6TTGai08"
       }
    },
    "moduleId":"640e8519-fda6-4bf3-aae5-caa0574ae15d"
  }
}/>
```
*/

class GlobalEmailSignup extends Component {
  constructor(props: Object): void {
    super(props);
    this.state = {
      email: "",
      showError: false
    };
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
    const emailId = this.state.email;
    const {
      onEmailSubmitted
    } = this.props;
    const isValid = email.validate(emailId);
    if (emailId && isValid) {
      this.setState({email: ""});
      onEmailSubmitted(emailId);
    }
    this.setState({showError: !isValid});
  }

  _renderHeader({ campaignId, headerColor, header }): ReactElement {
    const headerStyle = { color: headerColor };
    return (
      <div className="footer-GlobalEmailSignup-heading" data-id={campaignId}>
        <p className="font-semibold" style={headerStyle}>{header}</p>
      </div>
    );
  }

  _renderSignupModal({
    showModal, emailId, autoId, moduleData, onModalClose, isMobile
  }): ?ReactElement {
    const { configs: { link } } = moduleData;
    return (
      <GlobalEmailSignupModal
        isMobile={isMobile}
        onModalClose={onModalClose}
        showModal={showModal}
        emailId={emailId}
        link={link}
        autoId={`${autoId}-modal`} />
    );
  }

  _renderEmailForm({ autoId, loading }): ReactElement {
    const formSuffix = "form";
    const formInputSuffix = "formInput";
    const formButtonSuffix = "formButton";
    return (
      <div className="footer-GlobalEmailSignup-form display-inline-block valign-top">
        <form onSubmit={this._handleFormSubmit}
          {...getDataAutomationIdPair(formSuffix, autoId)}>
          <Field
            value={this.state.email}
            placeholder="Email address"
            shouldDisplayError={() => this.state.showError}
            error="Please enter a valid email address."
            onChange={(ev) => this.setState({email: ev.target.value})}
            {...getDataAutomationIdPair(formInputSuffix, autoId)}
          />
          <Button type="submit" primary={true} spinner={loading}
            {...getDataAutomationIdPair(formButtonSuffix, autoId)}>Sign Up</Button>
        </form>
      </div>
    );
  }

  _renderFooterItem({ moduleData, autoId }): ReactElement {
    const { configs: { link } } = moduleData;
    const linkSuffix = "link";
    return (
      <GlobalFooterItem
        className="footer-GlobalEmailSignup-link hide-content display-inline-block-m"
        link={link}
        autoId={`${autoId}-${linkSuffix}`}/>
    );
  }

  render(): ReactElement {
    const { moduleData: { type, moduleId, configs }, autoId } = this.props;

    return (
      <CollectorContext moduleId={moduleId}>
        <div className="footer-GlobalEmailSignup" data-module={type} data-module-id={moduleId}
          {...getDataAutomationIdPair(autoId, "")}>
          {this._renderHeader(configs)}
          {this._renderEmailForm(this.props)}
          {this._renderFooterItem(this.props)}
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
