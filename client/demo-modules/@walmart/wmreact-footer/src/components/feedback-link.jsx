import React, { PropTypes } from "react";
import waypointEngine from "../vendor/opinion-lab/waypoint-engine";
import waypointConfig from "../vendor/opinion-lab/waypoint-config";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

const FeedbackLink = (props) => {
  const {
    uid,
    title,
    pathToAssets,
    linkText,
    className
  } = props;

  const _onFeedbackLinkClick = () => {
    waypointConfig.waypointInit(pathToAssets);
    waypointEngine.Waypoint.getWaypoint();
  };

  return (
    <Button
      fakelink={true}
      data-uid={uid}
      alt={title}
      onClick={_onFeedbackLinkClick}
      className={className}
      {...getDataAutomationIdPair("footer", "feedback-link")}>
        {linkText}
    </Button>
  );
};

FeedbackLink.displayName = "FeedbackLink";

FeedbackLink.propTypes = {
  /**
  Link data from tempo
  */
  uid: PropTypes.string,
  /**
  Link data from tempo
  */
  title: PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: PropTypes.string,
  /**
  Link Text
  */
  linkText: PropTypes.string,
  /**
  Additional classes
  */
  className: PropTypes.string
};

FeedbackLink.defaultProps = {
  uid: "",
  title: "",
  pathToAssets: "",
  linkText: "",
  className: ""
};

export default FeedbackLink;
