import React, { PropTypes } from "react";
import ThemedTile from "./themed-tile";
import Carousel, { getCarouselDecorators } from "@walmart/wmreact-carousel";
import Tile from "@walmart/wmreact-product-card/lib/components/tile";
import Image from "@walmart/wmreact-base/lib/components/image";
import { getTempoModuleAutomationId } from "@walmart/category-utils";
import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";
import isEmpty from "lodash/isEmpty";

const IMAGE_SIZE = 144;

/* Responsive breakpoint settings */
const responsive = [
  {
    selectors: ["x-small"],
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      cellSpacing: 8
    }
  },
  {
    selectors: ["small"],
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      cellSpacing: 8
    }
  },
  {
    selectors: ["medium"],
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      cellSpacing: 8
    }
  },
  {
    selectors: ["large"],
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      cellSpacing: 12
    }
  },
  {
    selectors: ["x-large"],
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      cellSpacing: 20
    }
  }
];

/*
Stars.countNode prop sets the review count to the specified node. Setting this
prop to the count effectively displays the count without the parentheses.

@param item object representing single Tile
@return new item object with updated stars props
*/
const _addStarsCountNodeProp = (item) => {
  const stars = {
    ...item.stars,
    countNode: item.stars.count
  };

  return {...item, stars};
};

const _renderImage = (src, lazy) => {
  const imageProps = {
    src: checkImageSrc(src, IMAGE_SIZE, IMAGE_SIZE),
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    className: "Tile-img",
    lazy
  };

  return (<Image{...imageProps} />);
};

const _renderTiles = (props) => {
  const { firstTile, items } = props;
  const tiles = items.map((item, index) => {
    if (item.stars) {
      item = _addStarsCountNodeProp(item);
    }

    return (
      <Tile
        image={_renderImage(item.imageSrc, true)}
        key={index + 1}
        {...item}
        imageSrc={null}
        />
    );
  });

  if (!isEmpty(firstTile)) {
    tiles.unshift(<ThemedTile key={0} {...firstTile} />);
  }
  return tiles;
};

/**
Carousel component consist of product tiles and custom themed tiles (at starting)
@param {object} props component props
@return {ReactElement} product carousel component
@examples
```jsx
<ProductCarousel
  firstTile={...firstTile}
  items=[{...item1, ...item2}]
/>
```
@component ProductCarousel
@import {ProductCarousel}
@playground
```
<ProductCarousel
  firstTile={...firstTile}
  items=[{...item1, ...item2}]
/>```
*/
const ProductCarousel = (props) => (
  <div {...getTempoModuleAutomationId(props.moduleType, process)}>
    <Carousel
      className="product-carousel"
      responsive={responsive}
      decorators={getCarouselDecorators()} >
      {_renderTiles(props)}
    </Carousel>
  </div>
);

ProductCarousel.displayName = "ProductCarousel";

ProductCarousel.propTypes = {
  /**
  Themed Tile configuration
  */
  firstTile: PropTypes.object,
  /**
  product items array to be displayed in carousel
  */
  items: PropTypes.array.isRequired,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string
};

ProductCarousel.defaultProps = {
  firstTile: {},
  moduleType: "ProductCarousel"
};

export default ProductCarousel;
