/* @flow */
import React from "react";

import Link from "@walmart/wmreact-base/lib/components/link";
import StoreList from "./store-list";
import StoreListItem from "./store-list-item";
import StoreFinderField from "./store-finder-field";
import { getStoreFinderUrl } from "../utils/store-finder-utils";
import classNames from "classnames";
import StoresProp from "../props/stores-prop";

const PREFERRED_STORE_TITLE = "Your preferred store";

type StoreFinderPanelPropTypes = {
  preferredStores: ?Array,
  nearbyStores: ?Array,
  location: string,
  dataAutomationId: ?string,
  className: ?string
};

type StoreFinderPanelDefaultProps = {
  preferredStores: Array,
  nearbyStores: Array,
  dataAutomationId: string,
  className: string
};

/**
This component is the stores near you panel. This displays preferred stores,
nearby stores and ablity to find stores at a specified location.

@import {StoreFinderPanel}
@flags noVisibleRender
@component StoreFinderPanel
@playground
StoreFinderPanel
```
<StoreFinderPanel  preferredStores={check examples} nearbyStore={check examples}
location="San Bruno"
/>
```
*/

export const _getNearByStoresTitle = ({ preferredStores, location }): string => {
  return (preferredStores && preferredStores.length)
    ? `Other stores near ${location}`
    : `Stores near you`;
};

const StoreFinderPanel = (props: Object): ReactElement<StoreFinderPanelPropTypes,
  StoreFinderPanelDefaultProps> => {
  const {
    preferredStores,
    nearbyStores,
    dataAutomationId,
    location,
    className
  } = props;
  const classes = classNames("header-StoreFinderPanel font-normal", className);

  const _renderPreferredStores = (): ReactElement => {
    if (preferredStores && preferredStores.length) {
      return (
        <StoreList title={PREFERRED_STORE_TITLE}>
          {preferredStores.map((store, index) => (
            <StoreListItem {...store}
              key={`pref-${index}`}
              preferred={true}
              className="header-StoreFinderPanel-preferredStore"
              dataAutomationId={`${dataAutomationId}-preferredStoreListItem-${index}`}
            />
          ))}
        </StoreList>
      );
    }
  };

  const _renderNearByStores = (): ReactElement => {
    if (nearbyStores && nearbyStores.length) {
      const nearbyStoresTitle = _getNearByStoresTitle(props);
      return (
        <StoreList title={nearbyStoresTitle} className="header-StoreFinderPanel-storeList">
          {nearbyStores.map((store, index) => (
            <StoreListItem {...store}
              key={`near-${index}`}
              className="header-StoreFinderPanel-nearbyStore"
              dataAutomationId={`${dataAutomationId}-nearyByStoreListItem-${index}`}
            />
          ))}
        </StoreList>
      );
    }
  };

  const _renderMoreStores = (): ReactElement => {
    return (
      <Link
        className="font-normal header-StoreFinderPanel-moreStores"
        href={getStoreFinderUrl(location)}>
        See more nearby stores
      </Link>
    );
  };

  const _renderStoreFinderField = (): ReactElement => {
    return (
      <StoreFinderField
        className="header-StoreFinderPanel-field"
        dataAutomationId={`${dataAutomationId}-storeFinderField`}
      />
    );
  };

  return (
    <div className={classes}>
      <Link
        className="font-semibold arrow-link"
        href="/store/finder"
        dataAutomationId={`${dataAutomationId}-storefinder`}
      >
        Find a store on Map
      </Link>
      {_renderStoreFinderField()}
      <div className="header-StoreFinderPanel-content">
        {_renderPreferredStores()}
        {_renderNearByStores()}
        {_renderMoreStores()}
      </div>
    </div>
  );
};

StoreFinderPanel.displayName = "StoreFinderPanel";

StoreFinderPanel.propTypes = StoresProp;

export default StoreFinderPanel;
