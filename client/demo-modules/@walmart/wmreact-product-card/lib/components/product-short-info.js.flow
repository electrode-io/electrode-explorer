/* @flow */
import React, { PropTypes } from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils";
import classNames from "classnames";
import Flag from "@walmart/wmreact-product-descriptors/lib/components/flag";
import ProductImage from "./product-image";
import Stars from "@walmart/wmreact-product-descriptors/lib/components/stars";
import TextTruncate from "@walmart/wmreact-product-typography/lib/components/text-truncate";

/**
This component display basic product information on the marketplace page.
```jsx
  <ProductShortInfo
    title="Apple iPad mini 2 16GB Wifi"
    imageUrl="https://placehold.it/150X150"
    imageOnClick={(e)=>{e.preventDefault();console.log("Clicked Image")}}
    quantityIncluded={3}
    stars={{
      total: 5,
      average: 4,
      count: 37
    }}
    starsOnClick={(e)=>{e.preventDefault();console.log("Clicked Stars")}}
    shortDescription={{
      maxLines: 8,
      asHTML: true,
      text: "<li>7.9&quot; Retina display</li><li>A7 chip with M7 motion coprocessor</li><li>Front
      and Back cameras</li><li>Lorem Ipsum is simply dummy text</li> Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book."
    }}
    bottomLinkText="Quick Look"
    bottomLinkOnClick={(e)=>{e.preventDefault();console.log("Clicked Quicklook")}}
  />
*/

const AUTOMATION_CONTEXT = "ProductShortInfo";

const ProductShortInfo = (props) => {
  const {
    bottomLinkOnClick,
    bottomLinkText,
    className,
    infoClassName,
    imageClassName,
    imageOnClick,
    imageSize,
    imageUrl,
    quantityIncluded,
    shortDescription,
    stars,
    starsOnClick,
    title
  } = props;

  const _getTitle = () => {
    return (quantityIncluded > 1)
      ? `${title} - ${quantityIncluded} included`
      : `${title}`;
  };

  const _renderProductImage = () => {
    let productImage;

    if (imageOnClick) {
      productImage = (
        <button
          {...getDataAutomationIdPair("imageButton", AUTOMATION_CONTEXT)}
          className="ProductShortInfo-imageButton"
          onClick={imageOnClick}
        >
          <ProductImage productTitle={title} size={imageSize} imageUrl={imageUrl} />
        </button>
      );
    } else {
      productImage = <ProductImage productTitle={title} size={imageSize} imageUrl={imageUrl} />;
    }

    return (
      <div className={classNames("ProductShortInfo-image", imageClassName)}>
        {productImage}
      </div>
    );
  };

  const _renderQuantityFlag = () => {
    return (quantityIncluded > 1) ? (
     <div className="ProductShortInfo-quantityIncluded">
       <Flag text={`${quantityIncluded} included`} />
     </div>
    ) : null;
  };

  const _renderStars = () => {
    const {
      total,
      count,
      average
    } = stars;

    return (stars && total && count && average) ? (
      <Stars size="small" {...stars} onCountClick={starsOnClick} />
    ) : null;
  };

  const _renderShortDescription = () => {
    const {
      maxLines,
      asHTML,
      text
    } = shortDescription;

    return (text && text.length) ? (
      <div className="ProductShortInfo-shortDescription">
        <TextTruncate
          line={maxLines}
          doInsertHTMLTitle={asHTML}
          text={text} />
      </div>
    ) : null;
  };

  const _renderModalLink = (link) => {
    return (link && link.length) ? (
      <div className="ProductShortInfo-bottomLink tile-controls tile-controls-dotted">
        <a className="dropdown-link" href="#" onClick={bottomLinkOnClick}>
          {link}
        </a>
      </div>
    ) : null;
  };

  return (
    <div
      {...getDataAutomationIdPair("ProductShortInfo", AUTOMATION_CONTEXT, process)}
      className={classNames("ProductShortInfo", className)}
    >
      {_renderProductImage()}
      <div className={classNames("ProductShortInfo-details", infoClassName)}>
        {_renderQuantityFlag()}
        <h4
          {...getDataAutomationIdPair("Title", AUTOMATION_CONTEXT, process)}
          className="product-title display-inline"
        >
          {_getTitle()}
        </h4>
        {_renderStars()}
        {_renderShortDescription()}
        {_renderModalLink(bottomLinkText)}
      </div>
    </div>
  );
};


ProductShortInfo.displayName = "ProductShortInfo";

ProductShortInfo.propTypes = {
  /**
   Bottom link handler
   */
  bottomLinkOnClick: PropTypes.function,
  /**
   Bottom link text
   */
  bottomLinkText: PropTypes.string,
  /**
   Any additonal component style classes
   */
  className: PropTypes.string,
  /**
   Image container optional class
   */
  imageClassName: PropTypes.string,
  /**
   Image button handler
   */
  imageOnClick: PropTypes.function,
  /**
   The size of the item preview image
   */
  imageSize: PropTypes.number,
  /**
   The image url of the product
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   Product info optional class
   */
  infoClassName: PropTypes.string,
  /**
   Number of items in package
   */
  quantityIncluded: PropTypes.number.isRequired,
  /**
   Short description properties (maxLines, asHTML, text)
   */
  shortDescription: PropTypes.object.isRequired,
  /**
   Star rating information
   */
  stars: PropTypes.object,
  /**
   Function to run when the number of ratings is clicked
   */
  starsOnClick: PropTypes.function,
  /**
   The title of the product
   */
  title: PropTypes.string.isRequired
};

ProductShortInfo.defaultProps = {
  bottomLinkOnClick: () => {},
  bottomLinkText: "",
  className: "",
  imageClassName: "Grid-col u-size-1-4-xs",
  imageOnClick: "",
  imageSize: 150,
  infoClassName: "Grid-col u-size-3-4-xs",
  stars: {},
  starsOnClick: () => {}
};

export default ProductShortInfo;
