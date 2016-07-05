import React, { PropTypes, Component } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import classNames from "classnames";

import { checkImageSrc as torbitizeImage } from "@walmart/wmreact-image-utils";

// Torbit Image sizes
// Mobile Image Dimensions
const MOBILE_WIDTH_SMALLER = 364;
const MOBILE_WIDTH_LARGER = 738;
const MOBILE_HEIGHT_ALL = 210;

// Desktop Image Dimensions
const DESKTOP_WIDTH_SMALLER = 433;
const DESKTOP_WIDTH_LARGER = 878;
const DESKTOP_HEIGHT_ALL = 250;

/*eslint-disable max-len */
/**
Ministory tile
@examples
```jsx
<MinistoryTile
  uid="JC7k1RuY",
  assetId="3201753",
  url="http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
  imageUrl="http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
  width=433,
  alt="Windows 10"
/>
```
@component MinistoryTile
@import {MinistoryStackable.Tile}
@playground
MinistoryTile
```
<MinistoryTile
  uid="JC7k1RuY",
  assetId="3201753",
  url="http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
  imageUrl="http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
  width=433,
  alt="Windows 10"
/>
```
*/
/*eslint-enable max-len */

export default class MinistoryTile extends Component {
  /**
   * @param  {String} imageUrl image source url
   * @param  {boolean} isMobile whether mobile or desktop
   * @param  {boolean} isSmallerWidth whether oneThird or twoThird
   * @return {String} torbitized Image url
   */
  _getTorbitUrl(imageUrl, isMobile, isSmallerWidth) {
    let imageHeight;
    let imageWidth;

    imageHeight = (isMobile) ? MOBILE_HEIGHT_ALL : DESKTOP_HEIGHT_ALL;

    if (isSmallerWidth) {
      imageWidth = (isMobile) ? MOBILE_WIDTH_SMALLER : DESKTOP_WIDTH_SMALLER;
    } else {
      imageWidth = (isMobile) ? MOBILE_WIDTH_LARGER : DESKTOP_WIDTH_LARGER;
    }

    return torbitizeImage(imageUrl, imageHeight, imageWidth);
  }

  render() {
    const { ...spot, isMobile, isHidden } = this.props;
    const isSmallerWidth = spot.width === DESKTOP_WIDTH_SMALLER;
    const torbitImageUrl = this._getTorbitUrl(spot.imageUrl, isMobile, isSmallerWidth);

    const gridClasses = classNames({
      "Grid-col": true,
      "u-size-1-2 u-size-1-3-m": isSmallerWidth,
      "u-size-2-3-m": !isSmallerWidth,
      "hide-content-max-m": isHidden
    });

    return (
      <div className={gridClasses}>
        <div className="ministory-stackable-image-wrapper">
          <Link href={spot.url} title={spot.title || spot.alt}>
            <Image
              className="img-hide-alt ministory-stackable-image"
              alt={spot.alt}
              src={torbitImageUrl}
            />
        </Link>
        </div>
      </div>
    );
  }
}

MinistoryTile.displayName = "MinistoryTile";

MinistoryTile.propTypes = {
  /**
  Image url
  */
  imageUrl: PropTypes.string.isRequired,
  /**
  image width: 433 => oneThird, 878 => twoThird
  */
  width: PropTypes.number.isRequired,
  /**
  target url
  */
  url: PropTypes.string.isRequired,
  /**
  image title
  */
  title: PropTypes.string,
  /**
  image alt text
  */
  alt: PropTypes.string,
  /**
  To load proper image sizes based on mobile or desktop
  */
  isMobile: PropTypes.bool,
  /**
  Should be hidden or visible?
  */
  isHidden: PropTypes.bool
};

MinistoryTile.defaultProps = {
  isMobile: true,
  isHidden: false,
  alt: "",
  title: ""
};
