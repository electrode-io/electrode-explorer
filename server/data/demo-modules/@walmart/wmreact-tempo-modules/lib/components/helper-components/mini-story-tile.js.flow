/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import { checkImageSrc as torbitizeImage } from "@walmart/wmreact-image-utils";

// Torbit Image sizes
// Mobile Image Dimensions
const MOBILE_WIDTH_SMALLER = "364";
const MOBILE_WIDTH_LARGER = "738";
const MOBILE_HEIGHT_ALL = "210";

// Desktop Image Dimensions
const DESKTOP_WIDTH_SMALLER = "433";
const DESKTOP_WIDTH_LARGER = "878";
const DESKTOP_HEIGHT_ALL = "250";

/**
Ministory tile
@examples
@component MiniStoryTile
@import {MinistoryStackable.Tile}
@playground
MiniStoryTile
```
<MiniStoryTile
isMobile={false}
isMobileHidden={false}
spot={{
  image: {
    alt: "ph"
    clickThrough: {
      type: "url",
      value: "/"
    },
    src: "http://ll-us-i5.wal.co/dfw/4ff9c6c9-4f61/k2-_d7c7f588-ff11-41de-89a4-e6188bec9a0d.v1.jpg",
    title: "ph",
    width: "433"
  }
}}
/>
```
*/
/**
 * @param  {String} imageUrl image source url
 * @param  {boolean} isMobile whether mobile or desktop
 * @param  {boolean} isSmallerWidth whether oneThird or twoThird
 * @returns {string} Image url with torbit size
 */
export const _getTorbitUrl = (imageUrl, isMobile, isSmallerWidth) => {
  let imageWidth;

  const imageHeight = (isMobile) ? MOBILE_HEIGHT_ALL : DESKTOP_HEIGHT_ALL;

  if (isSmallerWidth) {
    imageWidth = (isMobile) ? MOBILE_WIDTH_SMALLER : DESKTOP_WIDTH_SMALLER;
  } else {
    imageWidth = (isMobile) ? MOBILE_WIDTH_LARGER : DESKTOP_WIDTH_LARGER;
  }

  return torbitizeImage(imageUrl, imageHeight, imageWidth);
};

const MiniStoryTile = (props) => {
  const {
    spot: {
      image: {
        width,
        src,
        title,
        alt,
        uid,
        clickThrough: {
          value
        }
      }
    },
    isMobile,
    isMobileHidden,
    dataAutomationId
  } = props;
  const isSmallerWidth = width === DESKTOP_WIDTH_SMALLER;
  const torbitImageUrl = _getTorbitUrl(src, isMobile, isSmallerWidth);

  const gridClasses = classNames(
    "Grid-col",
    { "u-size-1-2 u-size-1-3-m": isSmallerWidth,
    "u-size-2-3-m": !isSmallerWidth,
    "hide-content-max-m": isMobileHidden
  });

  return (
    <div className={gridClasses}>
      <div className="MiniStoryStackable-imageWrapper">
        <Link
          data-uid={uid}
          href={value}
          alt={title}
          {...getDataAutomationIdPair("link", dataAutomationId)}>
          <Image
            className="img-hide-alt MiniStoryStackable-image display-block"
            alt={alt}
            src={torbitImageUrl}
          />
      </Link>
      </div>
    </div>
  );
};

MiniStoryTile.displayName = "MinistoryTile";

MiniStoryTile.propTypes = {
  /**
  story spot image object
  */
  spot: PropTypes.object.isRequired,
  /**
  To load proper image sizes based on mobile or desktop
  */
  isMobile: PropTypes.bool,
  /**
  Should be hidden or visible?
  */
  isMobileHidden: PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

MiniStoryTile.defaultProps = {
  isMobile: true,
  isMobileHidden: false,
  dataAutomationId: ""
};

export default MiniStoryTile;
