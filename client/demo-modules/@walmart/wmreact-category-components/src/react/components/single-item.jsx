import React, { PropTypes } from "react";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";
import ProductCarousel from "./product-carousel";
import ModuleTitle from "./module-title";
import AnalyticsDispatcher from "./analytics-dispatcher";

/*
Single Item Module: Consist of One Title and product carousel with see more link.
@examples
```jsx
<SingleItem
  zone="contentZone1"
  moduleType="SingleItem"
  backgroundImage="//backgroundimage.url"
  items={[{item1, item2}]}
  firstTile={firstTile}
/>
```
@component SingleItem
@import {SingleItem}
@playground
```
<SingleItem
  zone="contentZone1"
  moduleType="SingleItem"
  backgroundImage="//backgroundimage.url"
  items={[{item1, item2}]}
  firstTile={firstTile}
/>
```
*/

const SingleItem = (props) => {
  const {
    backgroundColor,
    backgroundImage,
    title,
    seeAllUrl,
    firstTile,
    items,
    zone,
    moduleType
  } = props;
  const inlineStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundColor };

  return (
    <AnalyticsDispatcher {...props}>
      <div
        style={inlineStyle}
        className="SingleItem"
        data-zone={zone}
        {...getTempoModuleAutomationId(moduleType, process)}>
        <ModuleTitle
          title={title}
          linkUrl={seeAllUrl}
        />
        <ProductCarousel {...{firstTile, items}}/>
      </div>
    </AnalyticsDispatcher>
  );
};

SingleItem.displayName = "SingleItem";

SingleItem.propTypes = {
  /**
  background color on the module. Optional.
  */
  backgroundColor: PropTypes.string,
  /**
  background image on the module. Optional.
  */
  backgroundImage: PropTypes.string,
  /**
  First tile configuration for themed tile
  */
  firstTile: PropTypes.object,
  /**
  Products array to be displayed as part of carousel
  */
  items: PropTypes.array.isRequired,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  Url for see all link on right side.
  */
  seeAllUrl: PropTypes.string,
  /**
  Module Title
  */
  title: PropTypes.string,
  /**
  zone configured in tempo
  */
  zone: PropTypes.string.isRequired
};

SingleItem.defaultProps = {
  backgroundColor: "#fff",
  backgroundImage: "",
  firstTile: {},
  moduleType: ModuleTypes.SINGLE_ITEM,
  seeAllUrl: "",
  title: ""
};

export default SingleItem;
