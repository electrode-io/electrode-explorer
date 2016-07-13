/* @flow */
import React, {
  PropTypes
} from "react";
import classNames from "classnames";

import { getDataAutomationIdPair } from "@walmart/automation-utils";
import TextTruncate from "@walmart/wmreact-product-typography/lib/components/text-truncate";
import SelectedVariantPropType from "./selected-variant-proptype";
import ProductImage from "./product-image";
import Price from "@walmart/wmreact-product-offers/lib/components/price";

/**
This component display basic product information on the marketplace page.
```jsx
<ProductBasicInfo
  title="Apple iPad mini 2 16GB Wifi"
  imageUrl="/dfw/dce07b8c-cc1b/k2-_ddfe92b5-b5b2-489a-bf63-5fe7e2839a2a.v5.jpg"
  usItemId="1531"
  selectedVariant="{[
    {
      name: "Space Grey",
      isImageSwatch: true,
      swatchImageUrl: "http://placekitten.com/g/1024/1024"
    },
    {
      name: "Large",
      isImageSwatch: false,
      swatchImageUrl: ""
    }
  ]}"
/>
*/

const AUTOMATION_CONTEXT = "ProductBasicInfo";
const MAX_TITLE_LINES = 1;

export const _renderVariant = (variant) => {
  return variant.map((type, index) => {
    let variantSwatch;
    if (type.isImageSwatch) {
      const divStyle = {
        backgroundImage: `url(${type.swatchImageUrl})`,
        backgroundSize: "100% 100%"
      };
      variantSwatch = (
        <div className="variant">
          <div style={divStyle} className="variant-swatch"></div>
        </div>
      );
    }
    return (
      <div key={index} className={index !== 0
        ? "variant-info variant-pipe-separator"
        : "variant-info"}>
        {variantSwatch}
        <div className="variant-name">{type.name}</div>
      </div>
    );
  });
};

const ProductBasicInfo = (props) => {
  const {
    title,
    imageUrl,
    imageSize,
    usItemId,
    selectedVariant,
    price,
    className
  } = props;

  const returnLink = `/ip/${usItemId}`;

  return (
    <div
      {...getDataAutomationIdPair("ProductBasicInfo", AUTOMATION_CONTEXT, process)}
      className={classNames("product-basic-info", className)}
    >
      <ProductImage url={returnLink} size={imageSize} imageUrl={imageUrl}/>
      <div>
        <h4
          {...getDataAutomationIdPair("Title", AUTOMATION_CONTEXT, process)}
          className="product-title display-inline"
        >
          <TextTruncate line={MAX_TITLE_LINES} text={title} raf={false} />
        </h4>
        {price && <Price.Hero price={price.value} currency={price.currency} />}
        {selectedVariant && _renderVariant(selectedVariant)}
      </div>
    </div>
  );
};

export default ProductBasicInfo;

ProductBasicInfo.displayName = "ProductBasicInfo";

ProductBasicInfo.propTypes = {
  /**
   The title of the product
   */
  title: PropTypes.string.isRequired,
  /**
   The image url of the product
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   The size of the item preview image
   */
  imageSize: PropTypes.number,
  /**
  The UsItemID of the product
  */
  usItemId: PropTypes.string.isRequired,
  /**
   Selected Variant Array (i.e. size & color)
   */
  selectedVariant: PropTypes.arrayOf(SelectedVariantPropType),
  /**
   Price details for the product
   */
  "price": PropTypes.shape({
    /**
    The primary price of the product.
   */
    "value": PropTypes.number,
    /**
    The primary currency unit of the product price.
    */
    "currency": PropTypes.string
  }),
  /**
   Any additonal style classes
   */
  className: PropTypes.string
};

ProductBasicInfo.defaultProps = {
  imageSize: 100
};
