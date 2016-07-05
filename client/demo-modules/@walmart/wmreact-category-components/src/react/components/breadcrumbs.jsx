import React, { PropTypes } from "react";
import CommonBreadCrumbs from "@walmart/wmreact-navigation/lib/components/breadcrumbs";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";
import AnalyticsDispatcher from "./analytics-dispatcher";

const renderNodes = (data) => data.map((item, i) => (i + 1) === data.length
  ? <h1 key={i} className="breadcrumb-leaf">{item.name}</h1>
  : <a key={i} href={item.url}>{item.name}</a>
);

/**
A component for displaying category breadcrumb
@examples
```jsx
<BreadCrumbs data={[
  {
    "name": "Electronics",
    "id": "3944",
    "url": "/category/3944"
  },
  {
    "name": "TV & Video",
    "id": "3944_1060825"
  }
]} />
```
@component BreadCrumbs
@import {BreadCrumbs}
@playground
BreadCrumbs
```
<BreadCrumbs data={[
  {
    "name": "Electronics",
    "id": "3944",
    "url": "/category/3944"
  },
  {
    "name": "TV & Video",
    "id": "3944_1060825"
  }
]} />
```
*/

const BreadCrumbs = (props) => {
  const { data, moduleType } = props;
  return (
    <AnalyticsDispatcher {...props}>
      <div className="CategoryBreadCrumbs"
        {...getTempoModuleAutomationId(moduleType, process)}>
        <CommonBreadCrumbs>
          {renderNodes(data)}
        </CommonBreadCrumbs>
      </div>
    </AnalyticsDispatcher>
  );
};

BreadCrumbs.displayName = "BreadCrumbs";

BreadCrumbs.propTypes = {
  data: PropTypes.array,
  moduleType: PropTypes.string
};

BreadCrumbs.defaultProps = {
  data: [],
  moduleType: ModuleTypes.BREADCRUMB
};

export default BreadCrumbs;
