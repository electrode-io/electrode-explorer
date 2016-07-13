/* @flow */
import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import classNames from "classnames";
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

const GlobalAccountFlyout = (props: Object): ReactElement => {
  const {
    moduleData: {
      type,
      moduleId,
      configs: {
        loggedIn,
        loggedOut
      }
    },
    customerName,
    dataAutomationId
  } = props;

  const _getClassNames = (className: string, dropdown: boolean): string => {
    return classNames("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  };

  const _renderInstructionalText = (text: string): ReactElement => {
    if (text) {
      return (
        <span className="header-GlobalAccountFlyout-instructional display-block">
          {text}
        </span>
      );
    }
  };

  const _renderLink = (
    {menu, instructionalText, dropdown}, id: string, className: string): ReactElement => {
    const {
      uid,
      title,
      linkText,
      clickThrough: { value }
    } = menu;
    return (
      <div>
        <Link
          className={_getClassNames(className, dropdown)}
          data-uid={uid}
          href={value}
          alt={title}
          key={uid}
          {...getDataAutomationIdPair(id, dataAutomationId)}>
          {linkText}
        </Link>
        {_renderInstructionalText(instructionalText)}
      </div>
    );
  };

  const _renderButton = (linkText: string, id: string): ReactElement => {
    return (
      <Button
        className="header-GlobalAccountFlyout-flyout-link dropdown-link font-bold display-block"
        fakelink
        {...getDataAutomationIdPair(id, dataAutomationId)}
      >
        {linkText}
      </Button>
    );
  };

  const _renderFlyoutLink = (linkDetails: Object, index: number): ReactElement => {
    const linkId = `flyout-link-${index}`;
    const {
      menu,
      instructionalText
    } = linkDetails;
    const linkClass = "display-block";
    return (
      <li className="header-GlobalAccountFlyout-flyout-listItem font-normal" key={index}>
        {_renderLink({menu, instructionalText, dropdown: false}, linkId, linkClass)}
      </li>
    );
  };

  const _renderFlyoutWithLink = (
    flyoutLink: Object, links: Array<Object>, infoLink: Object): ReactElement => {
    const linkId = "link";
    const infoLinkId = "customerInfo-link";
    const infoLinkClass = "header-GlobalAccountFlyout-name display-block";
    const { linkText } = flyoutLink;
    return (
      <div>
        {_renderLink({menu: infoLink, dropdown: false}, infoLinkId, infoLinkClass)}
        <Flyout className="header-GlobalAccountFlyout-flyout display-block"
          direction="bottom"
          size="fluid"
          hover
          trigger={_renderButton(linkText, linkId)}>
          <ul className="header-GlobalAccountFlyout-flyout-list block-list no-margin">
            {links.map((linkDetails, index) => _renderFlyoutLink(linkDetails, index))}
          </ul>
        </Flyout>
      </div>
    );
  };

  const _renderCustomerStatus = (): ReactElement => {
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
      return _renderFlyoutWithLink(flyoutLink, loggedIn, customerInfoLink);
    } else {
      return _renderFlyoutWithLink(flyoutLink, loggedOut, customerInfoLink);
    }
  };

  return (
    <CollectorContext moduleId={moduleId}>
      <div
        className="header-GlobalAccountFlyout font-semibold text-right"
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        {_renderCustomerStatus()}
      </div>
    </CollectorContext>
  );
};

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
