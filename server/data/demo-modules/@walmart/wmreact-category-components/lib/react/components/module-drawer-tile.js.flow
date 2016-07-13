/* @flow */
import React, {PropTypes} from "react";
import Image from "@walmart/wmreact-base/lib/components/image";
import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";

const IMAGE_SIZE = 144;

const _renderHeading = (displayTitle, title, url) => {
  return (
    !(displayTitle && title) ? null :
      <div className="ModuleDrawerTile-heading">
        <a className="ModuleDrawerTile-heading-link" href={url}>
          <span>{title}</span>
        </a>
      </div>
  );
};

/**
A component for displaying a tile containing an image and optionally a title.
@examples
```jsx
<ModuleDrawerTile
  title="TVs",
  url="/browse/electronics/tvs/3944_1060825_447913",
  alt="TVs",
  imageUrl="//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
    "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
  categoryId="3944_1060825_447913",
  assetId="b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
  uid="2TXEZx_h" />
```
@component ModuleDrawerTile
@import {ModuleDrawerTile}
@playground
ModuleDrawerTile
```
<ModuleDrawerTile
  title="TVs",
  url="/browse/electronics/tvs/3944_1060825_447913",
  alt="TVs",
  imageUrl="//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
    "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
  categoryId="3944_1060825_447913",
  assetId="b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
  uid="2TXEZx_h" />
```
*/

const ModuleDrawerTile = ({displayTitle, imageUrl, url, alt, title}) => {
  // TODO: Replace Image with TorbitImage
  // JIRA: https://jira.walmart.com/browse/CDSFE-1981
  return (
    <div className="ModuleDrawerTile">
      <a className="ModuleDrawerTile-link" href={url}>
        <Image
          src={checkImageSrc(imageUrl, IMAGE_SIZE, IMAGE_SIZE)}
          className="ModuleDrawerTile-image"
          imgAlt={alt}
          lazy={true} />
      </a>
      {_renderHeading(displayTitle, title, url)}
    </div>
  );
};

ModuleDrawerTile.displayName = "ModuleDrawer.Tile";

ModuleDrawerTile.propTypes = {
  /**
  Boolean value indicating if title should be displayed
  */
  displayTitle: PropTypes.bool,
  /**
  Image alt text
  */
  alt: PropTypes.string,
  /**
  Image URL
  */
  imageUrl: PropTypes.string.isRequired,
  /**
  Popular category page title
  */
  title: PropTypes.string,
  /**
  Popular category page URL
  */
  url: PropTypes.string.isRequired
};

ModuleDrawerTile.defaultProps = {
  displayTitle: true,
  alt: "",
  title: ""
};

export default ModuleDrawerTile;
