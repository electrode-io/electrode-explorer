/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import ThemeButton from "../helper-components/theme-button";

/**

The banner message component has links costomisable by text, color, url font
weight and height.

```jsx
  <BannerMessage moduleData={
    {
      "type": "BannerMessage",
      "configs": {
        "height": "small",
        "themeColor": null,
        "headerText1": "Daily",
        "headerColor1": "#A1D7F8",
        "headerFontWeight1": "bold",
        "headerText2": "Center",
        "headerColor2": "#F07330",
        "headerFontWeight2": "bold",
        "headerText3": "Savings",
        "headerColor3": "#A1D7F8",
        "headerFontWeight3": "bold",
        "secondaryText1": "Your Hottest values for |date|.",
        "secondaryColor1": "#FFFFFF",
        "secondaryFontWeight1": "regular",
        "secondaryText2": null,
        "secondaryColor2": null,
        "secondaryFontWeight2": null,
        "secondaryText3": null,
        "secondaryColor3": null,
        "secondaryFontWeight3": null,
        "themeButton": {
          "linkText": "Shop All",
          "title": "Shop All",
          "clickThrough": {
            "type": "url",
            "value": "http://www.walmart.com/browse/3944_1078524_1231200"
          },
          "uid": "CLAM4z1m"
        },
        "themeButtonColor": null,
        "buttonTextColor": "#007dc6",
        "image": null,
        "mobileImage": null,
        "athenaEnabled": "true",
        "filterType": null,
        "moduleList": [],
        "useListForAll": null
      },
      "moduleId": "84c9fa92-2122-443a-89fe-b4a21c75d0d2"
    }
  } />
```
@import {BannerMessage}
@component BannerMessage
@playground
BannerMessage
*/

class BannerMessage extends Component {
  _renderIcon(linkText: string): ?ReactElement {
    const iconClass = classNames(
      "display-inline-block",
      "BannerMessage-subHeader-linkArrow"
    );

    if (linkText) {
      return <i className={iconClass}></i>;
    }
  }

  _getClassNames(height: string): string {
    const bannerClass = `BannerMessage BannerMessage--${height}`;
    return classNames(bannerClass);
  }

  _isEmpty(text: string): boolean {
    return (text === "" || text === undefined || text === null);
  }

  _renderThemeButton(themeButton: Object, dataAutomationId: string): ?ReactElement {
    if (themeButton) {
      return (
        <ThemeButton
          {...themeButton}
          showLinkText={false}
          className="BannerMessage-button"
          dataAutomationId={dataAutomationId} />
      );
    }
  }

  _processTextDate(text: string): string {
    const date = new Date();
    const currentDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
    const processedText = text.replace("\|date\|", currentDate);

    return processedText;
  }

  _renderMessageSegment(segmentType, segmentIndex, configs): ?ReactElement {
    const text = configs[`${segmentType}Text${segmentIndex}`];
    const textColor = configs[`${segmentType}Color${segmentIndex}`];
    const fontWeight = configs[`${segmentType}FontWeight${segmentIndex}`];

    const classes = classNames(
      {"font-bold": fontWeight === "bold"},
      {"font-semibold": fontWeight === "semibold"},
      {"font-normal": fontWeight === "regular"}
    );

    if (!this._isEmpty(text)) {
      return (
        <span className={classes} style={{color: textColor}} key={segmentIndex}>
          &nbsp;{this._processTextDate(text)}
        </span>
      );
    }
  }

  _renderBannerMessageHeader(configs: Object): ReactElement {
    const { height, headerText1, secondaryText1 } = configs;

    const classes = classNames(
      "BannerMessage-headerText",
      { "display-block":
        (height === "small"
        && !this._isEmpty(headerText1)
        && !this._isEmpty(secondaryText1))
      },
      { "display-inline-block-m":
        (height === "small"
        && !this._isEmpty(headerText1)
        && this._isEmpty(secondaryText1))
      },
      { "display-inline-block-m font-semibold": height !== "small"}
    );

    return (
      <div className={classes}>
        {[1, 2, 3].map((value) =>
          this._renderMessageSegment("header", value, configs))}
      </div>
    );
  }

  _renderSubText(configs: Object): ReactElement {
    const { height, headerText1, themeButton } = configs;

    const classes = classNames(
      "BannerMessage-subHeader",
      { "display-inline-block": height === "small" },
      { "display-inline-block-m": height !== "small" },
      { "BannerMessage-subHeaderOnly": height === "small" &&
      this._isEmpty(headerText1) }
    );

    return (
      <div className={classes}>
        {[1, 2, 3].map((value) =>
          this._renderMessageSegment("secondary", value, configs))}
        {themeButton && this._renderLink(configs)}
      </div>
    );
  }

  _renderLink(configs): ReactElement {
    const { height, buttonTextColor, themeButton: { linkText } } = configs;
    const spanClasses = classNames(
      { "display-inline-block": height === "small" },
      { "display-inline-block-m": height !== "small" }
    );

    return (
      <span className={spanClasses} style={{color: buttonTextColor}}>
        &nbsp;{linkText}
        {this._renderIcon(linkText)}
      </span>
    );
  }

  render() {
    const {
      moduleData: {
        moduleId,
        type,
        configs
      },
      dataAutomationId
    } = this.props;
    const automationId = `${dataAutomationId}-BannerMessage`;

    return (
      <CollectorContext moduleId={moduleId}>
        <div
          style={{"backgroundColor": configs.themeColor}}
          className={this._getClassNames(configs.height)}
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(automationId, "")}>
          {this._renderThemeButton(configs.themeButton, automationId)}
          {this._renderBannerMessageHeader(configs)}
          {this._renderSubText(configs)}
        </div>
      </CollectorContext>
    );
  }
}

BannerMessage.displayName = "BannerMessage";

BannerMessage.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: PropTypes.shape({
    moduleId: PropTypes.string,
    type: PropTypes.string,
    configs: PropTypes.shape({
      themeColor: PropTypes.string,
      themeButton: PropTypes.shape({
        clickThrough: PropTypes.object
      })
    })
  }).isRequired,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

BannerMessage.defaultProps = {
  moduleData: {
    configs: {
      themeColor: "#222",
      themeButton: {
        clickThrough: {}
      }
    }
  },
  dataAutomationId: "homepage-zone1"
};

export default BannerMessage;
