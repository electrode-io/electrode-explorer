/* @flow */
import React, { PropTypes } from "react";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import POVStory from "../helper-components/pov-story";

/**

The SingleStory POV component has links, Images, Theme Button, dynamic pricing and theme buttons.
 * Provides link to the special Categories
 * Offers scaling and cropping on with safe zone on defined breakpoints

```jsx
<SingleStoryPOVResponsive
  isMobile={true}
  moduleData={singleStoryData}/>
```
@import {SingleStoryPOVResponsive}
@component SingleStoryPOVResponsive
@playground
SingleStoryPOVResponsive
*/

const SingleStoryPOVResponsive = (props) => {
  const {
    moduleData: {
      moduleId,
      type,
      configs
    },
    isMobile,
    dataAutomationId
  } = props;
  const automationId = `${dataAutomationId}-SingleStoryPOVResponsive`;

  return (
    <CollectorContext moduleId={moduleId}>
      <div
        className="SingleStoryPOVResponsive"
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair("SingleStoryPOVResponsive", dataAutomationId)}>
        <POVStory
          story={configs}
          povIndex="0"
          isMobile={isMobile}
          lazy={false}
          dataAutomationId={automationId} />
      </div>
    </CollectorContext>
  );
};

SingleStoryPOVResponsive.displayName = "SingleStoryPOVResponsive";

SingleStoryPOVResponsive.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    type: PropTypes.string,
    configs: PropTypes.shape({
      image: PropTypes.Object,
      themeButton: PropTypes.object,
      themeButtonColor: PropTypes.string,
      buttonTextColor: PropTypes.string,
      overlays: PropTypes.array,
      mobileImage: PropTypes.object
    }).isRequired
  }).isRequired,
  /**
  To add proper torbit params (width and height)
  */
  isMobile: PropTypes.bool,
  /**
  Tempo module type for analytics and automation testing
  */
  dataAutomationId: PropTypes.string
};

SingleStoryPOVResponsive.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

export default SingleStoryPOVResponsive;
