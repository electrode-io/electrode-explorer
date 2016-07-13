/* @flow */
/* eslint react/prop-types: 0 */
import React, { PropTypes } from "react";
import isEmpty from "lodash/isEmpty";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import FeedbackLink from "./feedback-link";

const TEXT_SMALL = "Ref:";
const TEXT_LARGE = "To ensure we’re able to help you as best we can" +
  ", please include your reference number:";

/**
This component displays the FooterCopyright text

@import {FooterCopyright}
@flags noVisibleRender
@component FooterCopyright
@playground
Footer Copyright
```
<FooterCopyright text="© Walmart Stores, Inc." referenceId="ASWEDF123W" />
```
@return {ReactElement} Element tree
@param {object} props Props
*/

const FooterCopyright = (props) => {
  const {
    isMobile,
    referenceId,
    autoId,
    feedbackText,
    text
  } = props;

  const _renderReferenceInfo = (): ?ReactElement => {
    const suffix = "referenceInfo";
    if (!isEmpty(referenceId)) {
      return (
        <div className="footer-FooterCopyright-referenceInfo"
          {...getDataAutomationIdPair(suffix, autoId)}>
          <span className="hide-content-m">{TEXT_SMALL}</span>
          {!isMobile && <span className="hide-content-max-m">{TEXT_LARGE}</span>}
          {` ${referenceId}`}
        </div>
      );
    }
  };

  const _renderFeedbackLink = (): ?ReactElement => {
    if (!isEmpty(feedbackText)) {
      return (
        <FeedbackLink
          linkText={feedbackText}
          className="footer-FooterCopyright-feedbackLink pull-right" />
      );
    }
  };

  return (
    <div className="footer-FooterCopyright">
      <div className="ResponsiveContainer">
        <span className="footer-FooterCopyright-text"
          data-automation-id="footer-FooterCopyright-text">
          {text}
        </span>
        {_renderFeedbackLink()}
        {_renderReferenceInfo()}
      </div>
    </div>
  );
};

FooterCopyright.displayName = "FooterCopyright";

FooterCopyright.propTypes = {
  /**
   check mobile device
   */
  isMobile: PropTypes.bool,
  /**
   Footer copyright text
   */
  text: PropTypes.string.isRequired,
  /**
   Customer reference Id
   */
  referenceId: PropTypes.string,
  /**
   Used for generating unique automation id's
   */
  autoId: PropTypes.string,
  /**
   Feedback link text
   */
  feedbackText: PropTypes.string
};

FooterCopyright.defaultProps = {
  isMobile: false,
  text: "",
  referenceId: "",
  autoId: "",
  feedbackText: ""
};

export default FooterCopyright;
