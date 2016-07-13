/* @flow */
import React, { PropTypes, Component } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import classNames from "classnames";
import Fader from "../utils/fader";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
 The header marketing message component. Has links customizable by text and url which rotate with a
 fade effect with configurable timing.

 ```jsx
 <GlobalMarketingMessages fadeDuration={800} sustainDuration={5000} moduleData={
   {
     type: "GlobalMarketingMessages",
     configs: {
       messages: [
         {
           link: {
             linkText: "FREE SHIPPING on $50 orders",
             title: "FREE SHIPPING on $50 orders",
             clickThrough: {
               type: "category",
               value: "/cp/1088989"
             },
             uid: "Rm-f-ARE"
           },
           uid: "noSNifYr",
         },
         {
           link: {
             linkText: "FREE in-store pickup",
             title: "FREE in-store pickup",
             clickThrough: {
               type: "category",
               value: "/cp/1088989"
             },
             uid: "Hu2fuUAj"
           },
           uid: "rC4mqJwC"
         }, {
           link: {
             clickThrough: {
               type: "url",
               value: "http://grocery.walmart.com/usd-estore/m/home/anonymouslanding.jsp"
             },
             linkText: "FREE Walmart Grocery pickup",
             title: "FREE Walmart Grocery Pickup",
             uid: "LAtNdeIe"
           },
           uid: "tKV0zOCO"
         }
       ],
     },
     moduleId: "8600fadf-4ad5-46d5-aa3c-52c02af51ced"
   }
 }/>
 ```

 @import {GlobalMarketingMessages}
 @flags noVisibleRender
 @component GlobalMarketingMessages
 @playground
 GlobalMarketingMessages
 */

class GlobalMarketingMessages extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      selected: 0,
      fadeType: "none"
    };

    this.currentCallback = 0;
    this.callbacks = [this._sustain, this._fadeOut, this._rotateMessageAndFadeIn];
  }

  _getClassNames(className: string, size: string): string {
    return classNames(className, "header-GlobalMarketingMessages font-semibold", {
      "header-GlobalMarketingMessages--medium": size === "medium",
      "header-GlobalMarketingMessages--small text-center": size === "small",
      "text-right": size !== "small"
    });
  }

  _fadeOut(): void {
    this.setState({
      fadeType: "fadeOut"
    });
  }

  _rotateMessageAndFadeIn(messageCount: number): void {
    this.setState({
      fadeType: "fadeIn",
      selected: (this.state.selected + 1) % messageCount
    });
  }

  _sustain(): void {
    this.setState({
      fadeType: "none"
    });
  }

  _selectCallback(): Function {
    // Select the next Fader callback according to the sequence:
    // sustain -> fadeOut -> rotate/fadeIn -> sustain etc.
    this.currentCallback = (this.currentCallback + 1) % this.callbacks.length;
    return this.callbacks[this.currentCallback];
  }

  _generateMessages(messages: Array<Object>): Array<ReactElement> {
    return messages.map((message, index) => {
      const {link} = message;
      return (
        <li className={index !== this.state.selected && "hide-content"} key={index}>
          <Link
            className="header-GlobalMarketingMessages-link"
            alt={link.title}
            href={link.clickThrough.value}
            {...getDataAutomationIdPair(`link-${index}`, this.props.dataAutomationId)}>
            {link.linkText}
          </Link>
        </li>
      );
    });
  }

  render(): ReactElement {
    const {
      moduleData: {
        type,
        moduleId,
        configs: {
          messages
        }
      },
      className,
      size,
      dataAutomationId,
      fadeDuration,
      sustainDuration
    } = this.props;
    const { fadeType } = this.state;

    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(className, size)}
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          <Fader
            type={fadeType}
            duration={fadeType === "none" ? sustainDuration : fadeDuration}
            callback={this._selectCallback().bind(this, messages.length)}>
            <ul className="no-padding no-margin header-GlobalMarketingMessages-list">
              {this._generateMessages(messages)}
            </ul>
          </Fader>
        </div>
      </CollectorContext>
    );
  }
}

GlobalMarketingMessages.displayName = "GlobalMarketingMessages";

GlobalMarketingMessages.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains information on the URL,
  link text.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      messages: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  True if using the version for the medium breakpoint
  */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
  How long (in milliseconds) to fade in/out
  */
  fadeDuration: PropTypes.number,
  /**
  How long (in milliseconds) at full opactiy
  */
  sustainDuration: PropTypes.number,
  /**
  Any additional CSS classes that need to be applied
  to the root element.
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

GlobalMarketingMessages.defaultProps = {
  className: "",
  size: "large",
  fadeDuration: 1000,
  sustainDuration: 7000,
  dataAutomationId: "header-GlobalMarketingMessages"
};

export default GlobalMarketingMessages;
