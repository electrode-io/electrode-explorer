import React, {PropTypes, Children} from "react";
import Carousel from "@walmart/wmreact-carousel/lib/components/carousel";

/**
Carousel of images.
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<CarouselList separator={(<span>&amp;,</span>)}
  slidesToShow={2}
  slidesToScroll={1}>
  <div>Item 1</div>
  <div>Item 2</div>
</CarouselList>
```
@component CarouselList
@import {CarouselList}
@playground
CarouselList
```
<CarouselList separator={(<span>&amp;,</span>)}
  slidesToShow={2}
  slidesToScroll={1}>
  <div>Item 1</div>
  <div>Item 2</div>
</CarouselList>
```
*/
const CarouselList = (props) => {
  const {
    children,
    separator,
    ...rest
  } = props;

  const getItemClass = (numberSections) => {
    return `list-item size-1-${numberSections} display-inline-block`;
  };

  return (
    <div className="bundle-image-list carousel-list">
      <Carousel {...rest}>
        {Children.map(children, (child, index) => (
          <div className="carousel-item" key={index}>
            { index ?
              <div className="list-separator display-inline-block">
                {separator}
              </div> : null}
            <div className={getItemClass(children.length)} >{child}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

CarouselList.propTypes = {
  separator: PropTypes.element,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
  responsive: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

CarouselList.defaultProps = {
  separator: (<span className="plus-sign display-inline-block">+</span>),
  slidesToShow: 2.25,
  slidesToScroll: 2,
  responsive: [
    {
      selectors: ["small", "x-small"],
      settings: {
        slidesToShow: 2
      }
    },
    {
      // Visibility at all breakpoints
      selectors: ["medium", "large", "x-large", "xx-large"]
    }
  ]
};

export default CarouselList;
