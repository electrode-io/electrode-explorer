/* @flow */
import React, { PropTypes } from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Ads from "@walmart/wmreact-ads/lib/components/connected/ads";

/**

The WMXOMPAdController component is a wrapper component for ads

```jsx
<WMXOMPAdController
  isMobile={true}
  moduleData={WMXOMPAdControllerData}/>
```
@import {WMXOMPAdController}
@component WMXOMPAdController
@playground
WMXOMPAdController
*/

const WMXOMPAdController = (props) => {
  const {
    moduleData: {
      moduleId,
      configs: {
        placement
      }
    },
    isMobile,
    dataAutomationId
  } = props;
  const adsContainer = "sponsored-container";
  const placementId = placement === "top" ? "" : "-1";
  const placementDesktopClasses = placement === "top"
    ? `${adsContainer}-${placement}-wrapper hide-content-max-m`
    : `${adsContainer}-${placement}`;

  const placementMobileClasses = placement === "top"
    ? ""
    : `${adsContainer}-mobile-${placement}`;

  if (placement === "top" && isMobile) {
    return null;
  }

  return (
    <div
      className="WMXOMPAdController"
      data-module-id={moduleId}
      {...getDataAutomationIdPair("WMXOMPAdController", dataAutomationId)}
    >
      {!isMobile && <Ads
        id={`sponsored-container-${placement}${placementId}`}
        className={placementDesktopClasses}
      />}
      <Ads
        id={`sponsored-container-mobile-${placement}${placementId}`}
        className={placementMobileClasses}
      />
    </div>
  );
};

WMXOMPAdController.displayName = "WMXOMPAdController";

WMXOMPAdController.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      placement: PropTypes.string.isRequired
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

WMXOMPAdController.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

export default WMXOMPAdController;
