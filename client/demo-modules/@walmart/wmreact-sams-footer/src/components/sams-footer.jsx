/* @flow */
import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import TempoAnalyticsCollector
from "@walmart/wmreact-tempo-analytics-utils/lib/components/tempo-analytics-collector";
import { TempoWrapper, TempoZone, mapQuimbyStateToProps }
from "@walmart/wmreact-footer/lib/tempo-core";
import GlobalEmailSignup from "./global-email-signup";
import GlobalFooter from "./global-footer";
import Copyright from "./sams-copyright";
import { sendSignupRequest, emailSignupModalClose, setFooterReferenceId }
from "@walmart/wmreact-footer/lib/actions";
import LegalLinks from "./legal-links";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import Button from "@walmart/wmreact-interactive/lib/components/button";

const moduleTypeComponentMap = {
  GlobalEmailSignup,
  GlobalFooter,
  LegalLinks,
  Copyright
};
const ANALYTICS_PAGE_CONTEXT = "Footer";

/**
This component displays the footer on page
*/

export class SamsFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalToggle: false
    };
  }
  componentDidMount(): void {
    this.props.onBootstrap();
  }

  _signup() {
    if (this.state.modalToggle) {
      this.setState({modalToggle: false});
    } else {
      this.setState({modalToggle: true});
    }
  }

  _renderEmailSignupZone(
    {emailSignup, isMobile}
  ): ReactElement {
    return (
      <TempoZone
        zoneName="signup_zone"
        isMobile={isMobile}
        onEmailSubmitted={() => {this._signup();}}
        autoId="footer-GlobalEmailSignup"
        {...emailSignup}/>
    );
  }

  _renderSocialIconsZone({isMobile}): ReactElement {
    return (
      <TempoZone
        isMobile={isMobile}
        zoneName="copyright_zone"
        autoId="footer-GlobalSocialIcons"/>
    );
  }

  _renderGlobalFooterZone({isMobile, pathToAssets}): ReactElement {
    return (
      <TempoZone
        isMobile={isMobile}
        zoneName="footer_links_zone"
        pathToAssets={pathToAssets}
        autoId="footer-GlobalFooter"
        {...GlobalFooter} />
    );
  }

  _renderLegalLinksZone({isMobile}) {
    return (
      <TempoZone
        isMobile={isMobile}
        zoneName="legal_links_zone"
        autoId="footer-GlobalFooter"
        {...LegalLinks}/>
    );
  }

  render(): ReactElement {
    return (

      <CollectorContext pageContext={ANALYTICS_PAGE_CONTEXT}>
        <footer className="footer-Footer">
          <TempoWrapper
            zoneNameModuleMap={mapQuimbyStateToProps(this.props.quimbyData)}
            moduleTypeComponentMap={moduleTypeComponentMap}>
            <TempoAnalyticsCollector />
            <div className="ResponsiveContainer">
              {this._renderEmailSignupZone(this.props)}
              <div className="divider hide-content display-inline-block-l"></div>
              {this._renderGlobalFooterZone(this.props)}
              <div className="divider hide-content display-inline-block-l"></div>
              {this._renderLegalLinksZone(this.props)}
              {this._renderSocialIconsZone(this.props)}
            </div>
          </TempoWrapper>
          <Modal active={this.state.modalToggle} fixed={true} className="modal-confirm">
            <div className="user-message">Thanks! You're subscribed to our email</div>
              <Button
                onClick={() => {this._signup();}}>Continue shopping
              </Button>
          </Modal>
        </footer>
      </CollectorContext>
    );
  }
}

SamsFooter.displayName = "Footer";

SamsFooter.propTypes = {
  /**
   check mobile device
   */
  isMobile: PropTypes.bool,
  /**
   Copyright text
   */
  copyrightText: PropTypes.string.isRequired,
  /**
   Customer reference Id
   */
  referenceId: PropTypes.string,
  /**
   Emailsignup info
  */
  emailSignup: PropTypes.shape({
    loading: PropTypes.bool,
    emailId: PropTypes.string,
    didInvalidate: PropTypes.bool,
    showModal: PropTypes.bool,
    emailExclusions: PropTypes.string,
    emailInfoText: PropTypes.string
  }),
  /**
   The first action dispatched
  */
  onBootstrap: PropTypes.func,
  onEmailSubmitted: PropTypes.func,
  onModalClose: PropTypes.func,
  /**
  quimbyData is the result of tempo-core calls to quimby stored in redux
  */
  quimbyData: PropTypes.object,
  /**
  Path to opinion lab assets
  */
  pathToAssets: PropTypes.string,
  /**
  Url for email signup
  */
  emailSignupUrl: PropTypes.string
};

SamsFooter.defaultProps = {
  isMobile: false,
  copyrightText: "© SamsClub, Inc.",
  referenceId: "",
  emailSignup: {
    loading: false,
    emailId: "",
    didInvalidate: false,
    showModal: false
  },
  onEmailSubmitted: () => {},
  onModalClose: () => {},
  onBootstrap: () => {},
  pathToAssets: "",
  emailSignupUrl: "/ajax/footer-email"
};
export const mapFooterStateToProps = (state) => {
  const isMobile = state.isMobile;
  const footer = state.footer;
  return {
    isMobile,
    ...footer
  };
};

export const mapFooterDispatchToProps = (dispatch) => {
  return {
    onBootstrap: () => {
      dispatch(setFooterReferenceId());
    },

    onEmailSubmitted: (emailId, emailSignupUrl) => {
      dispatch(sendSignupRequest(emailId, emailSignupUrl));
    },
    onModalClose: () => {
      dispatch(emailSignupModalClose());
    }
  };
};

export default connect(mapFooterStateToProps, mapFooterDispatchToProps)(SamsFooter);
