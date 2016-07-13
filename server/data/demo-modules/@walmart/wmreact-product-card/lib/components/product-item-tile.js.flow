/* @flow */
import React from "react";

import Tile from "./tile";

/**
Product item tile.
@examples
```jsx
<ProductItemTile {...tileData}/>
```
@component ProductItemTile
@import {ProductItemTile}
@playground
ProductItemTile
```
<ProductItemTile {...tileData}/>
```
*/

const ProductItemTile = (props) => {
  return (
    <Tile
      imageSrc={props.img || props.image}
      title={props.title}
      price={{
        price: props["display-price"],
        wasPrice: props["original-price"],
        currency: ""
      }}
      overlay={false}
      rollback={props.reduced}
      stars={{
        average: props.stars,
        count: props.numReviews,
        total: 5
      }}
      url={props.properties && props.properties.walmart_canonical_url}
      variants={props.properties && props.properties.base_variants}
      offerShippingPassEligible={props.offerShippingPassEligible} />
  );
};

ProductItemTile.propTypes = {
  /**
  Product image
  */
  img: React.PropTypes.string,
  /**
  Product image
  */
  image: React.PropTypes.string,
  /**
  Title
  */
  title: React.PropTypes.string,
  /**
  Display price
  */
  "display-price": React.PropTypes.number,
  /**
  Original price
  */
  "original-price": React.PropTypes.number,
  /**
  Reduced
  */
  reduced: React.PropTypes.string,
  /**
  Number of stars
  */
  stars: React.PropTypes.number,
  /**
  Is offerShippingPassEligible
  */
  offerShippingPassEligible: React.PropTypes.bool,
  /**
  Number of reviews
  */
  numReviews: React.PropTypes.number,
  /**
  Additional properties object including URL and variants
  */
  properties: React.PropTypes.object
};

export default ProductItemTile;
