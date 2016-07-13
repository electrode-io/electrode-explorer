/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import ThemeButton from "./theme-button";
import ExecutionEnvironment from "exenv";


/**
 The banner message component has links customizable by text, color, url font
 weight and height.
 ```jsx
 <BannerMessage messages={
    {
      "type": "BannerMessage",
      "configs": {
        "height": "small",
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
  constructor(props) {
    super(props);
    const { messages } = this.props.moduleData.configs;
    this.state = {
      msgIndex: 0,
      messagesLength: messages.length,
      animationState: false,
      messageDuration: 6000
    };
    this._prepareNextMessage = this._prepareNextMessage.bind(this);
  }

  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM && window) {
      this.timer = window.setInterval(this._prepareNextMessage, this.state.messageDuration);
    }
  }

  componentWillUnmount() {
    if (ExecutionEnvironment.canUseDOM && window && this.timer) {
      window.clearInterval(this.timer);
    }
  }

  _prepareNextMessage() {
    const newIndex = (this.state.msgIndex + 1) % this.state.messagesLength;
    this.setState({
      msgIndex: newIndex,
      animationState: !this.state.animationState
    });
  }

  _convertMillisecondsToSeconds(ms) {
    const seconds = (parseInt(ms, 10) / 1000).toString();
    return `${seconds}s`;
  }

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
    const { height, headerText1, themeButton, style } = configs;

    const classes = classNames(
      "BannerMessage-subHeader",
      { "display-inline-block": height === "small" },
      { "display-inline-block-m": height !== "small" },
      { "BannerMessage-subHeaderOnly": height === "small" &&
      this._isEmpty(headerText1) }
    );

    return (
      <div style={style} className={classes}>
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
        configs: {
          messages
        }
      },
      moduleId,
      type,
      dataAutomationId
    } = this.props;

    const msgIndex = this.state.msgIndex;
    const message = messages[msgIndex];
    const automationId = `${dataAutomationId}-BannerMessage`;

    let animationName = " BannerMessage-fade";
    animationName += this.state.animationState ? "-ping" : "-pong";
    message.style = {
      animationName,
      animationDuration: this._convertMillisecondsToSeconds(this.state.messageDuration),
      animationTimingFunction: "linear"
    };

    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(message.height)}
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(automationId, "")}>
          {this._renderThemeButton(message.themeButton, automationId)}
          {this._renderBannerMessageHeader(message)}
          {this._renderSubText(message)}
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
    configs: PropTypes.shape({
      themeButton: PropTypes.shape({
        clickThrough: PropTypes.object
      }),
      messages: PropTypes.array
    })
  }).isRequired,
  moduleId: PropTypes.string,
  type: PropTypes.string,

  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

BannerMessage.defaultProps = {
  messages: {
    configs: {
      themeButton: {
        clickThrough: {}
      }
    }
  },
  dataAutomationId: "homepage-zone1"
};

export default BannerMessage;
