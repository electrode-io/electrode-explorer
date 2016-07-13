/* @flow */
import React from "react";

import Carousel from "@walmart/wmreact-carousel/lib/components/carousel";
import ProductItem from "@walmart/wmreact-product-card/lib/components/product-item-tile";

/**
Products carousel.
@examples
```jsx
<ProductsCarousel products={productsData} />
```
@component ProductsCarousel
@import {ProductsCarousel}
@playground
ProductsCarousel
```
<ProductsCarousel products={productsData} />
```
*/
export default class ProductsCarousel extends React.Component {
  render(): ReactElement {
    return this.props.products.length > 0 ? (
      <Carousel
        framePadding="20px 0"
        initialSlideWidth={200}
        responsive={[
          {
            selectors: ["small"],
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              cellSpacing: 8
            }
          },
          {
            selectors: ["medium"],
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              cellSpacing: 8
            }
          },
          {
            selectors: ["large"],
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              cellSpacing: 8
            }
          },
          {
            selectors: ["x-large"],
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              cellSpacing: 12,
              initialSlideWidth: 280
            }
          },
          {
            selectors: ["xx-large"],
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              cellSpacing: 20
            }
          }
        ]}>
        {this.props.products.map((product, index) => {
          return <ProductItem key={index} {... product} />;
        })}
      </Carousel>
    ) : <div/>;
  }
}

ProductsCarousel.propTypes = {
  /**
  The array of products
  */
  products: React.PropTypes.array
};

ProductsCarousel.defaultProps = {
  products: []
};
