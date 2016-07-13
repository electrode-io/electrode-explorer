/* @flow */
import React from "react";
import Image from "@walmart/wmreact-base/lib/components/image";
import Link from "@walmart/wmreact-base/lib/components/link";

import { checkImageSrc } from "@walmart/wmreact-image-utils";

const IMAGE_SIZE = 300;

/**
Product theme tile.
@examples
```
<ProductThemeTile
  title="Demo theme"
  imageSrc="http://placehold.it/300X300"
  url="www.walmart.com/tp/mini-fridge"
/>
```

@component ProductThemeTile
@import {ProductThemeTile}
@playground
ProductThemeTile
```
<ProductThemeTile
  title="Demo theme"
  imageSrc="http://placehold.it/300X300"
  url="www.walmart.com/tp/mini-fridge"
/>
```
*/

const ProductThemeTile = (props) => {
  const {url, imageSrc, title} = props;
  return (
    <div className="theme-tile-container Tile">
      <Link className="Tile-linkOverlay" href={url} />
      <Image className="Tile-img" size={IMAGE_SIZE}
        src={checkImageSrc(imageSrc, IMAGE_SIZE, IMAGE_SIZE)} />
      <span className="theme-tile-heading display-block pull-left font-normal">
        {title}
      </span>
    </div>
  );
};

ProductThemeTile.propTypes = {
  /**
  Image URL
  */
  imageSrc: React.PropTypes.string.isRequired,
  /**
  Theme title
  */
  title: React.PropTypes.string.isRequired,
  /**
  Theme page url
  */
  url: React.PropTypes.string.isRequired
};

export default ProductThemeTile;
