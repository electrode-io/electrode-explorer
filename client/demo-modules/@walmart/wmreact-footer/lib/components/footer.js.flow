/* @flow */
import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import TempoAnalyticsCollector
from "@walmart/wmreact-tempo-analytics-utils/lib/components/tempo-analytics-collector";
import { TempoWrapper, TempoZone, mapQuimbyStateToProps } from "../tempo-core";
import GlobalEmailSignup from "./global-email-signup";
import GlobalFooter from "./global-footer";
import FooterCopyright from "./footer-copyright";
import GlobalSocialIcons from "./global-social-icons";
import { sendSignupRequest, emailSignupModalClose, setFooterReferenceId } from "../actions";

const moduleTypeComponentMap = {
  GlobalEmailSignup,
  GlobalSocialIcons,
  GlobalFooter
};
const ANALYTICS_PAGE_CONTEXT = "Footer";

/**
This component displays the footer on page

@import {Footer}
@flags noVisibleRender
@component Footer
@playground
Footer
```
<Footer
  copyrightText="© Walmart Stores, Inc."
  emailSignup= {{showModal: false, loading: false, didInvalidate: false, emailId: ""}}
  referenceId="ASWEDF123W"
/>
```
*/

export class Footer extends Component {
  componentDidMount(): void {
    this.props.onBootstrap();
  }

  _renderEmailSignupZone(
    {emailSignup, onEmailSubmitted, emailSignupUrl, onModalClose, isMobile}
  ): ReactElement {
    return (
      <TempoZone
        zoneName="footerZone1"
        isMobile={isMobile}
        onEmailSubmitted={(emailId) => { onEmailSubmitted(emailId, emailSignupUrl); }}
        onModalClose={() => { onModalClose(); }}
        autoId="footer-GlobalEmailSignup"
        {...emailSignup}/>
    );
  }

  _renderSocialIconsZone({isMobile}): ReactElement {
    return (
      <TempoZone
        isMobile={isMobile}
        zoneName="footerZone2"
        autoId="footer-GlobalSocialIcons"/>
    );
  }

  _renderGlobalFooterZone({isMobile, pathToAssets}): ReactElement {
    return (
      <TempoZone
        isMobile={isMobile}
        zoneName="footerZone3"
        pathToAssets={pathToAssets}
        autoId="footer-GlobalFooter"/>
    );
  }

  _renderFooterCopyright({copyrightText, referenceId, isMobile}): ReactElement {
    return (
      <FooterCopyright
        text={copyrightText}
        referenceId={referenceId}
        isMobile={isMobile}
        autoId="footer-FooterCopyright"/>
    );
  }

  render(): ReactElement {
    return (
      <CollectorContext pageContext={ANALYTICS_PAGE_CONTEXT}>
        <footer className="footer-Footer">
          <TempoWrapper
            zoneNameModuleMap={mapQuimbyStateToProps(this.props.quimbyData)}
            moduleTypeComponentMap={moduleTypeComponentMap}
          >
            <TempoAnalyticsCollector />
            <div className="ResponsiveContainer">
              <div>
                {this._renderEmailSignupZone(this.props)}
                {this._renderSocialIconsZone(this.props)}
              </div>
               {this._renderGlobalFooterZone(this.props)}
            </div>
            {this._renderFooterCopyright(this.props)}
          </TempoWrapper>
        </footer>
      </CollectorContext>
    );
  }
}

Footer.displayName = "Footer";

Footer.propTypes = {
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
    showModal: PropTypes.bool
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

Footer.defaultProps = {
  isMobile: false,
  copyrightText: "© Walmart Stores, Inc.",
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

export default connect(mapFooterStateToProps, mapFooterDispatchToProps)(Footer);
