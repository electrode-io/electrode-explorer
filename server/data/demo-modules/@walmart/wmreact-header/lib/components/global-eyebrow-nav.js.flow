/* @flow */
import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import StoresProp from "../props/stores-prop";
import StoreFinderFlyout from "./store-finder-flyout";

/**
This component displays the EyebrowNav in header.
It contains links, icons and flyouts in the header.

@import {GlobalEyebrowNav}
@flags noVisibleRender
@component GlobalEyebrowNav
@playground
GlobalEyeBrowNav
moduleData is too long please check examples
```
<GlobalEyebrowNav moduleData={{please check examples under demo}}/>
```
*/

export const _renderIcon = (iconName: string): ?ReactElement => {
  if (iconName) {
    return <Icon name={iconName} />;
  }
};

export const _renderButton = (linkText: string, iconName: string, id: string): ReactElement => {
  return (
    <Button
      className="header-GlobalEyebrowNav-button dropdown-link"
      fakelink
      {...getDataAutomationIdPair(id, "")}
    >
      {_renderIcon(iconName)}{linkText}
    </Button>
  );
};

export const _renderLink = (linkData: Object, id: string, iconName: string): ReactElement => {
  const {
    uid,
    title,
    linkText,
    clickThrough: { value }
  } = linkData;

  return (
    <Link
      className="header-GlobalEyebrowNav-link"
      data-uid={uid}
      href={value}
      alt={title}
      key={uid}
      {...getDataAutomationIdPair(id, "")}>
      {_renderIcon(iconName)}{linkText}
    </Link>
  );
};

const GlobalEyebrowNav = (props: Object): ReactElement => {
  const {
    moduleData: {
      type,
      moduleId,
      configs: {
        giftCardsMainNav,
        giftCards,
        registryMainNav,
        registry,
        listsMainNav,
        weeklyAdsMainNav,
        storeFinderMainNav,
        orderStatusMainNav,
        customNav,
        customNav2
      }
    },
    storeFinderResponse,
    dataAutomationId,
    onStoreFinderActive
  } = props;

  const _renderFlyoutLink = (
    linkDetails: Object, flyoutIndex: number, linkIndex: number): ReactElement => {
    const flyoutLinkId = `${dataAutomationId}-flyout-${flyoutIndex}-link-${linkIndex}`;
    const linkData = linkDetails.menu || linkDetails.header;
    return (
      <li className="header-GlobalEyebrowNav-flyout-listItem font-normal" key={linkIndex}>
        {_renderLink(linkData, flyoutLinkId)}
      </li>
    );
  };

  const _renderFlyout = (linkConfig: Object, index: number): ?ReactElement => {
    const {
      linkData,
      links,
      iconName
    } = linkConfig;

    if (linkData) {
      const linkId = `${dataAutomationId}-link-${index}`;
      const {
        linkText
      } = linkData;
      if (links) {
        let linkIndex = 0;
        return (
          <Flyout className="header-GlobalEyebrowNav-flyout text-left"
            direction="bottom"
            size="fluid"
            key={index}
            hover
            trigger={_renderButton(linkText, iconName, linkId)}>
            <ul className="header-GlobalEyebrowNav-flyout-list">
              {links.map((linkDetails) => _renderFlyoutLink(linkDetails, index, linkIndex++))}
            </ul>
          </Flyout>
        );
      } else if (iconName === "pin") {
        return (
          <StoreFinderFlyout
            storeFinderResponse={storeFinderResponse}
            linkData={linkData}
            iconName={iconName}
            key={index}
            index={index}
            linkId={linkId}
            onStoreFinderActive={onStoreFinderActive}
            dataAutomationId={dataAutomationId}
          />
        );
      } else {
        return _renderLink(linkData, linkId, iconName);
      }
    }
  };

  const _renderLinks = (): Array<ReactElement> => {
    const links = [
      { linkData: giftCardsMainNav, links: giftCards, iconName: "card"},
      { linkData: registryMainNav, links: registry, iconName: "gift"},
      { linkData: listsMainNav, iconName: "list" },
      { linkData: weeklyAdsMainNav, iconName: "weekly-ad" },
      { linkData: storeFinderMainNav, iconName: storeFinderMainNav && "pin", storeFinderResponse },
      { linkData: orderStatusMainNav, iconName: "package" },
      { linkData: customNav, iconName: customNav && customNav.title },
      { linkData: customNav2, iconName: customNav2 && customNav2.title }
    ];

    return links.map((link, index) => {
      return _renderFlyout(link, index);
    });
  };

  return (
    <CollectorContext moduleId={moduleId}>
      <div className="header-GlobalEyebrowNav text-right font-semibold"
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        {_renderLinks()}
      </div>
    </CollectorContext>
  );
};

GlobalEyebrowNav.displayName = "GlobalEyebrowNav";

GlobalEyebrowNav.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      giftCardsMainNav: PropTypes.object,
      giftCards: PropTypes.array,
      registryMainNav: PropTypes.object,
      registry: PropTypes.array,
      listsMainNav: PropTypes.object,
      weeklyAdsMainNav: PropTypes.object,
      storeFinderMainNav: PropTypes.object,
      orderStatusMainNav: PropTypes.object,
      customNav: PropTypes.object,
      customNav2: PropTypes.object
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  dataAutomationId: PropTypes.string,
  /**
  Callback that is triggered when storefinder flyout is open
  */
  onStoreFinderActive: PropTypes.func,
  /**
  Data used to render storefinder panel.
  This includes the loading and error states and stores data
  */
  storeFinderResponse: PropTypes.shape({
    loading: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    stores: PropTypes.shape(StoresProp)
  })
};

GlobalEyebrowNav.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      giftCardsMainNav: {},
      giftCards: [],
      registryMainNav: {},
      registry: [],
      listsMainNav: {},
      weeklyAdsMainNav: {},
      storeFinderMainNav: {},
      orderStatusMainNav: {},
      customNav: {},
      customNav2: {}
    }
  },
  dataAutomationId: "header-GlobalEyebrowNav",
  onStoreFinderActive: () => {},
  storeFinderResponse: {
    loading: false,
    didInvalidate: false,
    stores: {}
  }
};

export default GlobalEyebrowNav;
