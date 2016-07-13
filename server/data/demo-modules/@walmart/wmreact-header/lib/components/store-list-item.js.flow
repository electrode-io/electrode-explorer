/* @flow */
import React from "react";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import classNames from "classnames";
import StoreProp from "../props/store-prop";

const STORE_URL_PREFIX = "/store/";

type StoreListItemPropTypes = {
  id: number,
  name: string,
  address: string,
  distance: string,
  preferred: bool,
  dataAutomationId: ?string
};

type StoreListItemDefaultProps = {
  preferred: bool,
  dataAutomationId: string
};

/**
This component displays store information like name, address and distance from
user's location

@import {StoreListItem}
@flags noVisibleRender
@component StoreListItem
@playground
StoreListItem
```
<StoreListItem id="1234" name="San Bruno" address="850 Cherry Ave"
distance="13 mi"/>
/>
```
*/

export const _getStoreLink = (storeId: Number): string => {
  return `${STORE_URL_PREFIX}${storeId}`;
};

const StoreListItem = (props: Object): ReactElement<StoreListItemPropTypes,
  StoreListItemDefaultProps> => {
  const {
    address,
    distance,
    dataAutomationId,
    id,
    name,
    preferred
  } = props;

  const _renderStar = (): ReactElement => {
    return preferred && (<Icon.Star />);
  };

  const _renderSmallCopy = (text: String): ReactElement => {
    const className = classNames(
      "copy-small",
      "header-StoreListItem-text",
      "no-margin"
    );
    return (
      <span className={className}>
        {text}
      </span>
    );
  };

  const _renderName = (): ReactElement => {
    return (
      <div>
        <Link
          className="header-StoreListItem-name font-normal"
          href={_getStoreLink(id)}
          {...getDataAutomationIdPair("storeLink", dataAutomationId)}>
          <span className="display-inline-block">
            {_renderStar()}
            {name}
          </span>
        </Link>
      </div>
    );
  };

  const _renderAddress = (): ReactElement => {
    return (
      <div
        className="Grid-col u-size-10-12 header-StoreListItem-address"
        {...getDataAutomationIdPair("storeAddress", dataAutomationId)}>
        {_renderSmallCopy(address)}
      </div>
    );
  };

  const _renderDistance = (): ReactElement => {
    return (
      <div
        className="Grid-col u-size-2-12 header-StoreListItem-distance text-right"
        {...getDataAutomationIdPair("storeDistance", dataAutomationId)}>
        {_renderSmallCopy(distance)}
      </div>
    );
  };

  return (
    <div className="header-StoreListItem">
      {_renderName()}
      <div className="text-left Grid">
        {_renderAddress()}
        {_renderDistance()}
      </div>
    </div>
  );
};

StoreListItem.propTypes = StoreProp;

StoreListItem.displayName = "StoreListItem";

StoreListItem.defaultProps = {
  dataAutomationId: "storeListItem",
  preferred: false
};

export default StoreListItem;
