/* @flow */
import React from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import Defaults from "./defaults";
import FlagPropType from "./flag-proptype";
import ProductCardFlagList from "./product-card-flag-list";
import { checkImageSrc } from "@walmart/wmreact-image-utils";
import TileImage from "./tile-image";
import classNames from "classnames";

const {
  DEFAULT_IMAGE_URL,
  DEFAULT_IMAGE_SIZE,
  DEFAULT_FLAGS,
  DEFAULT_IMAGE_MAX_FLAGS
} = Defaults;
const IMAGE_CLASS_NAME = "prod-ProductCard--ImageSrc";
const IMAGE_SIZE = 160;
const ITEM_PROP_IMG = "image";
const ITEM_PROP_URL = "url";

/**
This component displays product image

```jsx
<ProductImage url="/ip/1531"
imageUrl="http://placehold.it/1000x1000"
flags={[{text: "Rollback", type: "rollback"}]}/>
```

@import {ProductImage}
@flags noVisibleRender
@component ProductImage
@playground
Image
```
<ProductImage url="/ip/1531"
imageUrl="http://placehold.it/1000x1000"
flags={[{text: "Rollback", type: "rollback"}]}/>
```
*/
export default class ProductImage extends React.Component {
  _getImageProps(imageSize: number): Object {
    const imageProps = {
      className: IMAGE_CLASS_NAME,
      src: checkImageSrc(this.props.imageUrl, imageSize, imageSize),
      width: imageSize,
      height: imageSize,
      itemProp: ITEM_PROP_IMG,
      alt: this.props.productTitle
    };

    return imageProps;
  }

  _renderImage(): ReactElement {
    return (
      <Link href={this.props.url} itemProp={ITEM_PROP_URL}>
        {this.props.isTileImage ?
          <TileImage
            isLazy={this.props.isLazy}
            imgUrl={this.props.imageUrl}
            imgAlt={this.props.productTitle}
            width={180}
            height={180}
            dataUrlName={"data-original"}/> :
          <Image {...this._getImageProps(IMAGE_SIZE)}/> }
      </Link>
    );
  }

  _renderFlags(flags, isAValidOffer, maxFlags): ReactElement {
    return (isAValidOffer &&
        <ProductCardFlagList
          className="prod-ProductImage--FlagList hide-content display-inline-block-l"
          flags={flags}
          maxFlags={maxFlags}/>
    );
  }

  render(): ReactElement {
    const { isAValidOffer, flags, maxFlags } = this.props;
    const classes = classNames(
      "display-inline-block",
      "pull-left",
      "prod-ProductCard--Image"
    );
    return (
      <div className={classes}>
        {this._renderImage()}
        {this.props.shouldRenderFlags ? this._renderFlags(flags, isAValidOffer, maxFlags) : null }
      </div>
    );
  }
}

ProductImage.displayName = "ProductImage";

ProductImage.propTypes = {
  /**
    Lazy Loading Boolean
  */
  "isLazy": React.PropTypes.bool,
  /**
    Product image url
  */
  "imageUrl": React.PropTypes.string,
  /**
    Image size
  */
  "size": React.PropTypes.number,
  /**
    Product url
  */
  "url": React.PropTypes.string.isRequired,
  /**
    Price flags displayed on the image
  */
  "flags": React.PropTypes.arrayOf(FlagPropType),
  /**
    Maximum number of flags to render
  */
  "maxFlags": React.PropTypes.number,
  /**
   A flag for if the product isAValidOffer. Generally used for variant combination
   to tell if a product is available for purchase.
  */
  "isAValidOffer": React.PropTypes.bool,
  /**
  Product Title
  */
  "productTitle": React.PropTypes.string,
  /**
  A flag to help remove flags rendering when it's necessary
  */
  "shouldRenderFlags": React.PropTypes.bool,
  /**
  A flag to determine if tile image should be used
  */
  "isTileImage": React.PropTypes.bool
};

ProductImage.defaultProps = {
  "isLazy": false,
  "imageUrl": DEFAULT_IMAGE_URL,
  "flags": DEFAULT_FLAGS,
  "maxFlags": DEFAULT_IMAGE_MAX_FLAGS,
  "size": DEFAULT_IMAGE_SIZE,
  "isAValidOffer": true,
  "productTitle": "",
  "shouldRenderFlags": true,
  "isTileImage": false
};
