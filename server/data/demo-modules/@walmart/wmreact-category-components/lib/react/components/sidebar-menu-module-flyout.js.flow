import React, { Component, PropTypes } from "react";
import isEmpty from "lodash/isEmpty";
import chunk from "lodash/chunk";
import classNames from "classnames";

/**
A component for displaying a flyout of subcategory menu items in columns.

@examples
```jsx
<SideBarMenuModuleFlyout subMenuData={[
  {
    "title": "TVs",
    "imageAlt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/k2-_ace57524-f8e5-4fb9-8189.v1.jpg",
    "url": "http://www.walmart.com/#"
  },
  {
    "title": "Cell Phones",
    "imageAlt": "Cell Phones",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-bc99/k2-_7607b6d6-d13b-4dbe-b29a.v1.jpg",
    "url": "http://www.walmart.com/#"
  }
]} maxItemPerColumn=10 active=false />
```
@component SideBarMenuModuleFlyout
@import {SideBarMenuModuleFlyout}
@playground
SideBarMenuModuleFlyout
```
<SideBarMenuModuleFlyout subMenuData={[
  {
    "title": "TVs",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/k2-_ace57524-f8e5-4fb9-8189.v1.jpg",
    "url": "http://www.walmart.com/#",
    "catId": "3944_1060825_447913"
  },
  {
    "title": "Cell Phones",
    "alt": "Cell Phones",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-bc99/k2-_7607b6d6-d13b-4dbe-b29a.v1.jpg",
    "url": "http://www.walmart.com/#",
    "catId": "1105910"
  }
]} maxItemPerColumn=10 active=false />
```
@Example output for a single subcategory with two columns
```
<div class="SideBarMenu-flyout"> <
  <div class="SideBarMenu-flyout-inner SideBarMenu-flyout-2col">
    <ul class="block-list pull-left">
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
    </ul>
    <ul class="block-list pull-left">
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
    </ul>
  </div>
</div>
```
*/
export default class SideBarMenuModuleFlyout extends Component {

  getNumberOfColumns(subMenuData, maxItemPerColumn) {
    return Math.ceil(subMenuData.length / maxItemPerColumn);
  }

  renderItem(data, index) {
    return (
        <li key={ index } >
          <a href={data.url} tabIndex="-1">{data.title}</a>
        </li>
    );
  }

  renderItems(menuItems) {
    return menuItems.map((item, index) => this.renderItem(item, index));
  }

  renderColumn(menuItems, index) {
    return (
      <ul className="block-list pull-left" key={index}>
        {this.renderItems(menuItems)}
      </ul>
    );
  }

  renderColumns(subMenuData, maxItemPerColumn) {
    return chunk(subMenuData, maxItemPerColumn).map((menuItems, index) => {
      return this.renderColumn(menuItems, index);
    });
  }

  render() {
    const { subMenuData, maxItemPerColumn, active } = this.props;

    if (isEmpty(subMenuData)) {
      return null;
    }

    const columns = this.renderColumns(subMenuData, maxItemPerColumn);

    const classes = classNames("SideBarMenu-flyout", {
      "is-active": active
    });

    const numberOfColumns = this.getNumberOfColumns(subMenuData, maxItemPerColumn);
    const innerClasses = `SideBarMenu-flyout-inner SideBarMenu-flyout-${numberOfColumns}col`;

    return (
      <div className={classes}>
        <div className={innerClasses}>
          {columns}
        </div>
      </div>
    );
  }
}

SideBarMenuModuleFlyout.displayName = "SideBarMenuModule.Flyout";

SideBarMenuModuleFlyout.propTypes = {
  /**
  Array of tile data
  */
  subMenuData: PropTypes.arrayOf(PropTypes.object),
  /**
  Maximum number of items each column can have
  */
  maxItemPerColumn: PropTypes.number,
  /**
  The flyout is display or not
  */
  active: PropTypes.bool.isRequired
};

SideBarMenuModuleFlyout.defaultProps = {
  maxItemPerColumn: 6,
  subMenuData: []
};
