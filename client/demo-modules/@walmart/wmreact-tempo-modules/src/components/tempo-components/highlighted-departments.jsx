/* @flow */
import React, { PropTypes } from "react";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import ModuleHeader from "../helper-components/module-header";
import Link from "@walmart/wmreact-base/lib/components/link";

/**

Displaying links to the Highlighted departments with a header

```jsx
  <HighlightedDepartments moduleData={
  {
    "type":"HighlightedDepartments",
    "configs":{
      "header":"In the Spotlight",
      "links":[
        {
          "link":{
            "linkText":"Father's Day",
            "title":"Father's Day",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"HSlyb82-"
          },
          "uid":"5YljRMTM"
        },
        {
          "link":{
            "linkText":"Fall Savings",
            "title":"Fall Savings",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"I2SSPQTo"
          },
          "uid":"-MBdxI4n"
        },
        {
          "link":{
            "linkText":"Swim Shop",
            "title":"Swim Shop",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"4o59Sc--"
          },
          "uid":"5sUdwiTz"
        },
        {
          "link":{
            "linkText":"Back to College",
            "title":"Back to College",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"8_U-rz-O"
          },
          "uid":"UFXHxbNe"
        },
        {
          "link":{
            "linkText":"Back to School",
            "title":"Back to School",
            "clickThrough":{
              "type":"url",
              "value":"/"
            },
            "uid":"Qbw96gbm"
          },
          "uid":"KgZF9Pd2"
        }
      ]
    },
    "moduleId":"6bbb57c3-681e-4337-aec9-bc75168de1b4"
  }
} />
```
@import {HighlightedDepartments}
@component HighlightedDepartments
@playground
HighlightedDepartments
*/

export const _renderLinks = (configs, dataAutomationId) => {
  const linkArray = configs.links.map((linkData, index) => {
    if (linkData.link) {
      const {
        title,
        clickThrough: {
          value
        },
        linkText,
        uid
      } = linkData.link;
      return (
        <Link
          className="HighlightedDepartments-button u-size-1 u-size-1-4-m pull-left font-semibold"
          href={value}
          key={index}
          {...getDataAutomationIdPair(`HighlightedDepartments-link-${index}`, dataAutomationId)}
          alt={title}
          data-uid={uid}>
          {linkText}
        </Link>
      );
    } else {
      return null;
    }
  });

  return linkArray;
};


const HighlightedDepartments = (props) => {
  const {
    moduleData: {
      moduleId,
      type,
      configs
    },
    dataAutomationId
  } = props;
  const automationId = `${dataAutomationId}-HighlightedDepartments`;

  return (
    <CollectorContext moduleId={moduleId}>
      <div
        data-module={type}
        data-module-id={moduleId}
        className="ResponsiveContainer HighlightedDepartments"
        {...getDataAutomationIdPair("HighlightedDepartments", dataAutomationId)}>
        <ModuleHeader
          headerTitle={configs.header}
          dataAutomationId={automationId}
        />
        {_renderLinks(configs, dataAutomationId)}
      </div>
    </CollectorContext>
  );
};

HighlightedDepartments.displayName = "HighlightedDepartments";

HighlightedDepartments.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains the header text, as well as the link text and URLs.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    type: PropTypes.string,
    configs: PropTypes.shape({
      header: PropTypes.string,
      links: PropTypes.arrayOf(React.PropTypes.shape({
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
    })
  }).isRequired,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

HighlightedDepartments.defaultProps = {
  moduleData: {
    moduleId: "",
    type: "",
    configs: {
      header: "",
      links: [{
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

export default HighlightedDepartments;
