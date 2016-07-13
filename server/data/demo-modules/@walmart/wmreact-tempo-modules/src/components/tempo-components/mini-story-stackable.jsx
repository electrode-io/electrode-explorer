/* @flow */
import React, { PropTypes } from "react";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import MiniStoryTile from "../helper-components/mini-story-tile";
import ModuleHeader from "../helper-components/module-header";

/**
The MiniStory Stackable component has links, Images, Module Header and Theme Button.
 * Provides link to the special Categories
 * Offers scaling and cropping on with safe zone on defined breakpoints
 * Provides ModuleHeader and BannerMessage
 * Includes dropping the spot to align on smaller breakpoints.

```jsx
<MiniStoryStackable
  isMobile={true}
  moduleData={miniStoryData}/>
```
@import {MiniStoryStackable}
@component MiniStoryStackable
@playground
MiniStoryStackable
*/

const MiniStoryStackable = (props) => {
  const _getSpots = (row, isMobile, dataAutomationId) => {
    const lastRowIndex = row.length - 1;
    const miniStoryTiles = [];

    for (let rowIndex = 0; rowIndex <= lastRowIndex; rowIndex++) {
      const isLastRow = (rowIndex === lastRowIndex);
      const lastSpotIndex = row[rowIndex].spot.length - 1;

      for (let spotIndex = 0; spotIndex <= lastSpotIndex; spotIndex++) {
        const isLastSpot = spotIndex === lastSpotIndex;
        const isSpotHiddenEligible = isLastRow && isLastSpot && (rowIndex % 2 === 0);
        const automationId = `${dataAutomationId}-row-${rowIndex}-spot-${spotIndex}`;

        miniStoryTiles.push(
          <MiniStoryTile
            key={`${rowIndex}-${spotIndex}`}
            spot={row[rowIndex].spot[spotIndex]}
            isMobile={isMobile}
            isMobileHidden={isSpotHiddenEligible}
            dataAutomationId={automationId}
          />
        );
      }
    }
    return miniStoryTiles;
  };

  const {
    moduleData: {
      moduleId,
      type,
      configs: {
        headerTextLink,
        headerButtonLink,
        row
      }
    },
    isMobile,
    dataAutomationId
  } = props;
  const automationId = `${dataAutomationId}-MiniStoryStackable`;

  return (
    <CollectorContext moduleId={moduleId}>
      <div className="ResponsiveContainer MiniStoryStackable"
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair("MiniStoryStackable", dataAutomationId)}>
        {headerTextLink &&
          <ModuleHeader
            headerTitle={headerTextLink.linkText}
            themeButton={headerButtonLink}
            dataAutomationId={automationId}
          />
        }
        <div className="Grid Grid--gutters MiniStoryStackable-grid">
          {_getSpots(row, isMobile, automationId)}
        </div>
      </div>
    </CollectorContext>
  );
};

MiniStoryStackable.displayName = "MiniStoryStackable";

MiniStoryStackable.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    type: PropTypes.string,
    configs: PropTypes.shape({
      headerTextLink: PropTypes.shape({
        linkText: PropTypes.string
      }),
      headerButtonLink: PropTypes.shape({
        linkText: PropTypes.string
      }),
      row: PropTypes.array.isRequired
    })
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

MiniStoryStackable.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

export default MiniStoryStackable;
