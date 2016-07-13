/* @flow */
import React, { PropTypes, Component } from "react";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import GlobalFooterItem from "./global-footer-item";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
This component displays the confermation modal to user
when they signup for emails.

@import {GlobalEmailSignupModal}
@flags noVisibleRender
@component GlobalEmailSignupModal
@playground
Global Email Signup Modal
```
<GlobalEmailSignupModal showModal={true} emailId="a@a.com" link={
  {
    "linkText": "Walmart MoneyCenter",
    "title": "Walmart MoneyCenter",
    "clickThrough": {
      "type": "url",
      "value": "http:\/\/www-e16.walmart.com\/instantcredit"
    },
    "uid": "iyoJypI4"
  }
}/>
```
*/

class GlobalEmailSignupModal extends Component {
  _renderResponsiveModalContent(link: Object, emailId: string): ReactElement {
    const emailSuffix = "emailId";
    const linkSuffix = "link";
    const {
      autoId
    } = this.props;
    return (
      <div>
        <h2 className="footer-GlobalEmailSignupModal-heading heading-d">
          Thank you for signing up!
        </h2>
        <p className="footer-GlobalEmailSignupModal-text">
          You’ll receive an email shortly at:&nbsp;
          <span className="footer-GlobalEmailSignupModal-emailId font-semibold"
            {...getDataAutomationIdPair(emailSuffix, autoId)}>
            {emailId}
          </span>
        </p>
        <p className="footer-GlobalEmailSignupModal-text">
          For even more access to Walmart values, including special in-app savings,
          download the Walmart App today.
        </p>
        <p className="footer-GlobalEmailSignupModal-text">
          Here at Walmart.com, we are committed to protecting your privacy.
          Your email address will never be sold or distributed to a third party for any reason.
          Please take a minute to review our&nbsp;
          <GlobalFooterItem newTab link={link} autoId={`${autoId}-${linkSuffix}`}/>.
        </p>
      </div>
    );
  }

  _renderSlidePanel({showModal, onModalClose, link, emailId}): ReactElement {
    return (
      <div className="hide-content-m">
        <SlidePanel active={showModal}
          ref="emailSlidePanel" onClose={onModalClose} direction="bottom">
          {showModal && this._renderResponsiveModalContent(link, emailId)}
        </SlidePanel>
      </div>
    );
  }

  _renderModal({showModal, onModalClose, link, emailId}): ReactElement {
    return (
      <div className="hide-content-max-m">
        <Modal active={showModal} padded={true}
          ref="emailModal" onClose={onModalClose} fixed={true}>
          {showModal && this._renderResponsiveModalContent(link, emailId)}
        </Modal>
      </div>
    );
  }

  render(): ReactElement {
    const {isMobile, autoId} = this.props;
    return (
      <div className="footer-GlobalEmailSignupModal"
        {...getDataAutomationIdPair(autoId, "", process)}>
        {this._renderSlidePanel(this.props)}
        {!isMobile && this._renderModal(this.props)}
      </div>
    );
  }
}

GlobalEmailSignupModal.displayName = "GlobalEmailSignupModal";

GlobalEmailSignupModal.propTypes = {
  /**
   check mobile device
   */
  isMobile: PropTypes.bool,
  /**
   Used to hide and show modal
   */
  showModal: PropTypes.bool,
  /**
   Show email id for customer
   */
  emailId: PropTypes.string.isRequired,
  /**
   Show Privacy link in the modal
   */
  link: PropTypes.shape({
    linkText: PropTypes.string.isRequired,
    clickThrough: PropTypes.shape({
      value: PropTypes.string.isRequired
    })
  }),
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string,
  onModalClose: PropTypes.func
};

GlobalEmailSignupModal.defaultProps = {
  isMobile: false,
  showModal: false,
  link: {
    linkText: "",
    clickThrough: {
      value: ""
    }
  },
  autoId: "",
  onModalClose: () => {}
};

export default GlobalEmailSignupModal;
