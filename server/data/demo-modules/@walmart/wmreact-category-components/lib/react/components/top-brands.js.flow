/* @flow */
import React, {PropTypes} from "react";
import ModuleDrawer from "./module-drawer";
import AnalyticsDispatcher from "./analytics-dispatcher";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

const _formTiles = (tileData, maxTiles) => (
  tileData
    .slice(0, maxTiles)
    .map((tile) => ({...tile, displayTitle: false}))
);

/**
A component for displaying a list of top brands.
@examples
```jsx
<TopBrands data={[
  {
    "title": "Samsung Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Samsung",
    "alt": "Samsung Electronics ",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5484/" +
      "k2-_a1d90899-3b0e-4f74-8c80-4be9b336b163.v1.gif",
    "categoryId": "3944",
    "assetId": "c0058390-c359-11e4-8f2a-ef40d94420a5",
    "uid": "jToSBtCX"
  },
  {
    "title": "Apple Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Apple",
    "alt": "Apple Electronics",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-643a/" +
      "k2-_3db1015a-9400-42ca-8fe2-2fca614388b1.v1.jpg",
    "categoryId": "3944",
    "assetId": "bfd39ac0-d17d-11e3-842a-cf01f4d25362",
    "uid": "Vzmv1a7X"
  }
]} />
```
@component TopBrands
@import {TopBrands}
@playground
TopBrands
```
<TopBrands data={[
  {
    "title": "Samsung Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Samsung",
    "alt": "Samsung Electronics ",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5484/" +
      "k2-_a1d90899-3b0e-4f74-8c80-4be9b336b163.v1.gif",
    "categoryId": "3944",
    "assetId": "c0058390-c359-11e4-8f2a-ef40d94420a5",
    "uid": "jToSBtCX"
  },
  {
    "title": "Apple Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Apple",
    "alt": "Apple Electronics",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-643a/" +
      "k2-_3db1015a-9400-42ca-8fe2-2fca614388b1.v1.jpg",
    "categoryId": "3944",
    "assetId": "bfd39ac0-d17d-11e3-842a-cf01f4d25362",
    "uid": "Vzmv1a7X"
  }
]} />
```
*/

const TopBrands = (props) => {
  const {data, maxTiles, moduleType} = props;
  return (
    <AnalyticsDispatcher {...props}>
      <div className="TopBrands"
        {...getTempoModuleAutomationId(moduleType, process)}>
        <ModuleDrawer {...props} data={_formTiles(data, maxTiles)} />
      </div>
    </AnalyticsDispatcher>
  );
};

TopBrands.displayName = "TopBrands";

TopBrands.propTypes = {
  /**
  Array of tile data
  */
  data: PropTypes.array.isRequired,
  /**
  Maximum number of tiles displayed in the open revealer
  */
  maxTiles: PropTypes.number,
  /**
  Number of top brand tiles per row at large breakpoints
  */
  large: PropTypes.number,
  /**
  Number of top brand tiles per row at medium breakpoints
  */
  medium: PropTypes.number,
  /**
  Component title
  */
  moduleTitle: PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  Number of rows that are visible when the revealer is closed
  */
  rows: PropTypes.number,
  /**
  Number of top brand tiles per row at small breakpoints
  */
  small: PropTypes.number,
  /**
  Number of top brand tiles per row at x-large breakpoints
  */
  xLarge: PropTypes.number,
  /**
  Number of top brand tiles per row at x-small breakpoints
  */
  xSmall: PropTypes.number
};

TopBrands.defaultProps = {
  maxTiles: 20,
  large: 6,
  medium: 6,
  moduleTitle: "Top Brands",
  moduleType: ModuleTypes.TOP_BRAND,
  rows: 2,
  small: 6,
  xLarge: 6,
  xSmall: 4
};

export default TopBrands;
