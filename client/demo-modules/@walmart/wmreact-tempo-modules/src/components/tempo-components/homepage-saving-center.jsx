import React, { PropTypes } from "react";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import ModuleHeader from "../helper-components/module-header";
import Image from "@walmart/wmreact-base/lib/components/image";
import Link from "@walmart/wmreact-base/lib/components/link";

/**

Displaying Savings Center links with icons

```jsx
<HomepageSavingCenter moduleData={ HomepageSavingCenterData } />
```
@import {HomepageSavingCenter}
@component HomepageSavingCenter
@playground
HomepageSavingCenter
*/

export const _renderLinks = (tiles, dataAutomationId) => {
  const linkArray = tiles.map((tile, index) => {
    const {
      link: {
        title,
        clickThrough: {
          value
        },
        linkText,
        uid
      },
      image: {
        alt,
        height,
        src,
        width
      }
    } = tile;

    return (
      <Link
        className="HomepageSavingCenter-link u-size-1 u-size-1-4-m pull-left font-semibold"
        href={value}
        {...getDataAutomationIdPair(`HomepageSavingCenter-link-${index}`, dataAutomationId)}
        alt={title}
        key={index}
        data-uid={uid}>
        <Image
          className="HomepageSavingCenter-image"
          alt={alt}
          height={height}
          src={src}
          width={width} />
        {linkText}
      </Link>
      );
  });
  return linkArray;
};

const HomepageSavingCenter = (props) => {
  const {
    moduleData: {
      moduleId,
      type,
      configs: {
        tiles,
        title
      }
    },
    dataAutomationId
  } = props;
  const automationId = `${dataAutomationId}-HomepageSavingCenter`;

  return (
    <CollectorContext moduleId={moduleId}>
      <div
        data-module={type}
        data-module-id={moduleId}
        className="ResponsiveContainer HomepageSavingCenter"
        {...getDataAutomationIdPair("HomepageSavingCenter", dataAutomationId)}>
        <ModuleHeader
          headerTitle={title}
          dataAutomationId={automationId}
        />
        {_renderLinks(tiles, dataAutomationId)}
      </div>
    </CollectorContext>
  );
};

HomepageSavingCenter.displayName = "HomepageSavingCenter";

HomepageSavingCenter.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains the header text, as well as the link text and URLs.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    type: PropTypes.string,
    configs: PropTypes.shape({
      title: PropTypes.string,
      tiles: PropTypes.arrayOf(React.PropTypes.shape({
        link: PropTypes.shape({
          linkText: PropTypes.string,
          title: PropTypes.string,
          clickThrough: PropTypes.shape({
            type: PropTypes.string,
            value: PropTypes.string
          })
        }),
        uid: PropTypes.string
      }))
    }).isRequired
  }).isRequired,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

HomepageSavingCenter.defaultProps = {
  moduleData: {
    moduleId: "",
    type: "",
    configs: {
      title: "",
      tiles: [{
        link: {
          linkText: "",
          title: "",
          clickThrough: {
            type: "",
            value: ""
          },
          uid: ""
        },
        uid: ""
      }]
    }
  },
  dataAutomationId: ""
};

export default HomepageSavingCenter;
