/* @flow */
import React, { PropTypes } from "react";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import classnames from "classnames";

const STORE_LIST_CLASS = "header-StoreList";

type StoreListPropTypes = {
  title: ?string,
  dataAutomationId: ?string,
  className: ?string
};

type StoreListDefaultProps = {
  title: string,
  dataAutomationId: string,
  className: string
};

/**
This component displays a store list

@import {StoreList}
@flags noVisibleRender
@component StoreList
@playground
StoreList
```
<StoreList dataAutomationId="storeList">
  <StoreListItem id="1234" name="San Bruno" address="850 Cherry Ave" distance="13 mi"/>
  <StoreListItem id="2031" name="Union City" address="30600 Dyer st" distance="13 mi"/>
</StoreList>
/>
```
*/

const StoreList = (props: Object): ReactElement<StoreListPropTypes,
  StoreListDefaultProps> => {
  const {
    title,
    dataAutomationId,
    className,
    children
  } = props;

  return (
    <div className={classnames(STORE_LIST_CLASS, className)}>
      <Heading.H3 className="header-StoreList-title font-normal">
        {title}
      </Heading.H3>
      <div className="header-StoreList-list"
        {...getDataAutomationIdPair("storeList", dataAutomationId)}>
        {children}
      </div>
    </div>
  );
};

StoreList.propTypes = {
  /**
  Tile for the list
  */
  title: PropTypes.string,
  /**
  dataAutomationId used for testings
  */
  dataAutomationId: PropTypes.string,
  /**
  Any additional classes
  */
  className: PropTypes.string,
  /**
  children
  */
  children: PropTypes.arrayOf(PropTypes.node)
};

StoreList.displayName = "StoreList";

StoreList.defaultProps = {
  title: "Stores near you",
  dataAutomationId: "storeList",
  className: ""
};

export default StoreList;
