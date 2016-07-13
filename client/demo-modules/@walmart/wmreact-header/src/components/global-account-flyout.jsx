/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";

import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
This component displays the AccountFlyout in header.
It contains links, instructional texts and flyout in the header.

@import {GlobalAccountFlyout}
@flags noVisibleRender
@component GlobalAccountFlyout
@playground
Global Account Flyout
moduleData is too long please check examples
```
<GlobalAccountFlyout customerName="test"
  moduleData={{please check examples under demo}}/>
```
*/

class GlobalAccountFlyout extends Component {
  constructor(props) {
    super(props);
  }

  _getClassNames(className: string, dropdown: boolean): string {
    return classNames("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  }

  _renderInstructionalText(text: string): ReactElement {
    if (text) {
      return (
        <span className="header-GlobalAccountFlyout-instructional display-block">
          {text}
        </span>
      );
    }
  }

  _renderLink(// eslint-disable-line max-params
    { menu, instructionalText, dropdown },
    id: string,
    className: string,
    dataAutomationId: string): ReactElement {// eslint-disable-line max-params
    const {
      uid,
      title,
      linkText,
      clickThrough: { value }
    } = menu;
    return (
      <div>
        <Link
          className={this._getClassNames(className, dropdown)}
          data-uid={uid}
          href={value}
          alt={title}
          key={uid}
          {...getDataAutomationIdPair(id, dataAutomationId)}>
          {linkText}
        </Link>
        {this._renderInstructionalText(instructionalText)}
      </div>
    );
  }

  _renderButton(linkText: string, id: string, dataAutomationId: string): ReactElement {
    return (
      <Button
        className="header-GlobalAccountFlyout-flyout-link dropdown-link font-bold display-block"
        fakelink
        {...getDataAutomationIdPair(id, dataAutomationId)}
      >
        {linkText}
      </Button>
    );
  }

  _renderFlyoutLink(linkDetails: Object, index: number, dataAutomationId: string): ReactElement {
    const linkId = `flyout-link-${index}`;
    const {
      menu,
      instructionalText
    } = linkDetails;
    const linkClass = "display-block";
    return (
      <li className="header-GlobalAccountFlyout-flyout-listItem font-normal" key={index}>
        {this._renderLink({menu, instructionalText, dropdown: false}, linkId, linkClass,
          dataAutomationId)}
      </li>
    );
  }

  _renderFlyoutWithLink(// eslint-disable-line max-params
    flyoutLink: Object, links, {customerName, dataAutomationId}, infoLink: Object): ReactElement {
    const linkId = "link";
    const infoLinkId = "customerInfo-link";
    const infoLinkClass = "header-GlobalAccountFlyout-name display-block";
    const { linkText } = flyoutLink;

    return (
      <div>
        {this._renderLink({menu: infoLink, dropdown: false}, infoLinkId, infoLinkClass,
          dataAutomationId)}
        <Flyout className="header-GlobalAccountFlyout-flyout display-block"
          direction="bottom"
          size="fluid"
          hover
          trigger={this._renderButton(linkText, linkId, dataAutomationId)}>
          <ul className="header-GlobalAccountFlyout-flyout-list block-list no-margin">
            {links.map((linkDetails, index) => this._renderFlyoutLink(linkDetails, index,
              dataAutomationId))}
          </ul>
        </Flyout>
      </div>
    );
  }

  _renderCustomerStatus(props): ReactElement {
    const {
      moduleData: {
        configs: {
          loggedIn,
          loggedOut
        }
      },
      customerName,
      dataAutomationId
    } = props;

    const accountKeyword = "Hello";
    const accountUrl = "/account";
    const flyoutLink = {
      "clickThrough": { "value": accountUrl },
      "linkText": "My Account"
    };
    const customerInfoLink = {
      "clickThrough": { "value": accountUrl },
      "linkText": `${accountKeyword}. Sign In`
    };

    if (customerName) {
      customerInfoLink.linkText = `${accountKeyword}, ${customerName}`;
      return this._renderFlyoutWithLink(flyoutLink, loggedIn,
        {customerName, dataAutomationId}, customerInfoLink);
    } else {
      return this._renderFlyoutWithLink(flyoutLink, loggedOut,
        {customerName, dataAutomationId}, customerInfoLink);
    }
  }

  render() {
    const {
      moduleData: {
        type,
        moduleId
      },
      dataAutomationId
    } = this.props;

    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className="header-GlobalAccountFlyout font-semibold text-right"
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          {this._renderCustomerStatus(this.props)}
        </div>
      </CollectorContext>
    );
  }
}

GlobalAccountFlyout.displayName = "GlobalAccountFlyout";

GlobalAccountFlyout.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL and link text to use for the links.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      loggedIn: PropTypes.array,
      loggedOut: PropTypes.array
    }).isRequired
  }).isRequired,
  /**
  Get customer name to check loggedIn and loogedOut status.
  */
  customerName: PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  dataAutomationId: PropTypes.string
};

GlobalAccountFlyout.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      loggedIn: [],
      loggedOut: []
    }
  },
  customerName: "",
  dataAutomationId: "header-GlobalAccountFlyout"
};

export default GlobalAccountFlyout;
