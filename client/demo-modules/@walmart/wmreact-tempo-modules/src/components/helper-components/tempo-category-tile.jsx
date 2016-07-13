/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";
import { AllHtmlEntities } from "html-entities";

import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import TextTruncate from "@walmart/wmreact-product-typography/lib/components/text-truncate";
import { checkImageSrc as torbitizeImage } from "@walmart/wmreact-image-utils";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
Tempo Featured Category Tile
@examples
@component TempoCategoryTile
@import {TempoCategoryTile}
@playground
TempoCategoryTile
```
<TempoCategoryTile
lazy={false}
category = {
  image: {
    assetName: "pop-cat.jpg",
    height: "150",
    assetId: "979ef190-cea5-11e5-8d67-95f4e54a0dde",
    src: "some-image.jpg",
    width: "150",
    size: "8999",
    contentType: "image/jpeg",
    alt: "Wall Art",
    title: "Wall Art",
    uid: "c49vzR0p"
  },
  itemId: null,
  link: {
    clickThrough: {
      type: "url",
      value: "/"
    },
    linkText: "Wall Art",
    title: "Wall Art",
    uid: "f8zCNFYd"
  },
  uid: "Xf_LGiNx"
}
/>
```
*/

const TempoCategoryTile = (props) => {
  const {
    category: {
      image,
      link: {
        clickThrough: {
          value
        },
        linkText,
        title,
        uid
      },
      productImageSrc
    },
    className,
    hiddenClasses,
    lazy,
    titleAlignment,
    dataAutomationId,
    isMobile,
    mobileImageSize
  } = props;
  const tileClasses = classNames(
    "TempoCategoryTile",
    className,
    hiddenClasses
  );

  const imageSize = isMobile || className === "font-semibold" ? mobileImageSize : 144;
  const contentClass = classNames(
    "TempoCategoryTile-tile-content",
    "TempoCategoryTile-tile-linkText",
    `text-${titleAlignment}`
  );

  //making one line false for featured categories curated link text.
  const isOneLineLinkText = titleAlignment === "center" && mobileImageSize !== 90;

  return (
    <div className={tileClasses}
      {...getDataAutomationIdPair(dataAutomationId)}>
      <div className="TempoCategoryTile-tile display-inline-block">
          <Image
            className="TempoCategoryTile-tile-img"
            alt={image && image.alt || title}
            height={imageSize}
            width={imageSize}
            src={torbitizeImage(productImageSrc || image && image.src, imageSize, imageSize)}
            lazy={lazy}
          />
        {linkText &&
          <div className={contentClass}>
            <TextTruncate
              line={isOneLineLinkText ? 1 : 2}
              text={AllHtmlEntities.decode(linkText)}
              raf={false}
            />
          </div>
        }
        <Link
          className="TempoCategoryTile-tile-overlay"
          title={title}
          href={value}
          data-uid={uid}
          {...getDataAutomationIdPair("link", dataAutomationId)}/>
      </div>
    </div>
  );
};

TempoCategoryTile.displayName = "TempoCategoryTile";

TempoCategoryTile.propTypes = {
  category: PropTypes.shape({
    image: PropTypes.shape({
      height: PropTypes.string,
      src: PropTypes.string,
      width: PropTypes.string,
      title: PropTypes.string,
      alt: PropTypes.string
    }),
    link: PropTypes.shape({
      clickThrough: PropTypes.shape({
        type: PropTypes.string,
        value: PropTypes.string
      }),
      linkText: PropTypes.string,
      title: PropTypes.string,
      uid: PropTypes.string
    }),
    productImageSrc: PropTypes.string
  }).isRequired,
  /**
  * Additional classes for styling
  */
  className: PropTypes.string,
  /**
  * to hide tile
  */
  hiddenClasses: PropTypes.string,
  /**
  * Don't load image initially?
  */
  lazy: PropTypes.bool,
  /**
  * Automation ID
  */
  dataAutomationId: PropTypes.string,
  /**
  * Number of lines to trunctate the title to.
  */
  titleAlignment: PropTypes.oneOf(["center", "right", "left"]),
  /**
  * True if on mobile device
  */
  isMobile: PropTypes.bool,
  /**
  * Width/height to use for mobile image
  */
  mobileImageSize: PropTypes.number
};

TempoCategoryTile.defaultProps = {
  className: "",
  hiddenClasses: "",
  lazy: false,
  dataAutomationId: "",
  titleAlignment: "center",
  isMobile: false,
  mobileImageSize: 120
};

export default TempoCategoryTile;
