/* @flow */
/* eslint react/prop-types: 0 */
import React, { PropTypes } from "react";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import GlobalFooterItem from "./global-footer-item";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import isEmpty from "lodash/isEmpty";


/**
This component displays the GlobalSocialIcons

@import {GlobalSocialIcons}
@flags noVisibleRender
@component GlobalSocialIcons
@playground
Global Social Icons
```
<GlobalSocialIcons moduleData={
  {
   "type":"GlobalSocialIcons",
   "configs":{
      "icons": [
        {
          "link": {
            "linkText": "facebook",
            "title": "facebook",
            "clickThrough": {
              "type": "url",
              "value": "https://www.facebook.com/walmart"
            },
            "uid": "iyoJypJ2"
          },
          "uid": "5uh7ZTD-"
        }
     ]
   },
   "module_id":"640e8519-fda6-4bf3-aae5-caa0574a2345"
  }
}/>
```
@return {ReactElement} Element tree
@param {object} props Props
*/

const GlobalSocialIcons = (props) => {
  const {
    isMobile,
    autoId,
    heading,
    moduleData: {
      type,
      moduleId,
      configs
    }
  } = props;

  const _getHeading = ():ReactElement => {
    return (
      <Heading.H5
        className="footer-GlobalSocialIcons--heading hide-content display-inline-block-xl">
        {heading}
      </Heading.H5>
    );
  };

  const _renderLinkIcons = (linkDetails: Object, index: number): ReactElement => {
    const {
      link
    } = linkDetails;
    const linkSuffix = `link-${index}`;
    return (
      <GlobalFooterItem link={link} icon={true} className="display-inline-block"
        newTab={true} key={index} autoId={`${autoId}-${linkSuffix}`}/>
    );
  };

  return (
    <CollectorContext moduleType={type}>
      <div className="footer-GlobalSocialIcons" data-module={type} data-module-id={moduleId}
        {...getDataAutomationIdPair(autoId, "")}>
        {!isMobile && !isEmpty(heading) && _getHeading(heading)}
        <div className="footer-GlobalSocialIcons--list display-inline-block">
          {configs.icons.map(_renderLinkIcons)}
        </div>
      </div>
    </CollectorContext>
  );
};

GlobalSocialIcons.displayName = "GlobalSocialIcons";

GlobalSocialIcons.propTypes = {
  /**
   check mobile device
   */
  isMobile: PropTypes.bool,
  /*
  heading to display before Icons
  */
  heading: PropTypes.string,
  /**
   Tempo module Data
   */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      icons: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string
};

GlobalSocialIcons.defaultProps = {
  isMobile: false,
  heading: "Stay Connected",
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      icons: []
    }
  },
  autoId: ""
};

export default GlobalSocialIcons;
