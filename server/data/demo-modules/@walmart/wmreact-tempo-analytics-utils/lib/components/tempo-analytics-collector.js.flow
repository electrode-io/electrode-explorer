/* @flow */
/*eslint-disable no-unused-vars */ // Disabling because React has to be in context for JSX
import React, { Component, PropTypes } from "react";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";

/**
* Utility component which fires a data event containing the full Tempo response when inserted as a
* child in a TempoWrapper component.
* Usage:
* <TopLevelComponent>
*   <TempoWrapper>
*     <TempoAnalyticsCollector />
*     <TempoZone />
*   </TempoWrapper>
* </TopLevelComponent>
*/
class TempoAnalyticsCollector extends Component {
  // fire data event when the component is mounted with all the Tempo data
  componentDidMount(): void {
    fireDataEvent(this, "tempo", this.context.allModules);
  }

  render(): ?ReactElement {
    return null;
  }
}

TempoAnalyticsCollector.displayName = "TempoAnalyticsCollector";

TempoAnalyticsCollector.contextTypes = {
  allModules: PropTypes.object,
  analytics: PropTypes.object
};

export default TempoAnalyticsCollector;
