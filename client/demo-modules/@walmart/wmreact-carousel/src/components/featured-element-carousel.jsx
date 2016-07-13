import React, { PropTypes } from "react";
import classNames from "classnames";

import Carousel from "./carousel";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
Renders a header that pulls itself towards the carousel if available
@returns {ReactElement} Header
 */
const _renderHeader = ({padding, header}) => {
  if (!header) {
    return null;
  }

  return (
    <div
      className="FeaturedElementCarousel-header"
      style={{margin: `0 ${padding}px`, marginBottom: -padding}}>
      {header}
    </div>
  );
};

/**
Renders Static Tile pulling left with set width (default: 200px) if available
@returns {ReactElement} Static Tile pulling left
 */
const _renderStaticTile = ({padding, staticTile, staticWidth}) => {
  if (!staticTile) {
    return null;
  }

  return (
    <div
      className="FeaturedElementCarousel-staticTile display-inline-block"
      style={{
        width: staticWidth,
        padding: `${padding}px 0 ${padding}px ${padding}px`,
        verticalAlign: "top"
      }}>
      {staticTile}
    </div>
  );
};

/**
Renders Carousel with all passed on props. Overrides width and pulls left
@returns {ReactElement} Carousel pulling left
 */
const _renderCarousel = ({children, staticWidth, ...props}) => {
  if (!staticWidth) {
    return <Carousel {...props}>{children}</Carousel>;
  }

  return (
    <div
      className="FeaturedElementCarousel-carousel display-inline-block"
      style={{width: `calc(100% - ${staticWidth})`}}>
      <Carousel {...props}>
        {children}
      </Carousel>
    </div>
  );
};

/**
Responsive Carousel with option of static tile, background color and background image
@examples
```jsx
<FeaturedElementCarousel style={{marginBottom: 40}}
  cellSpacing={20}
  staticTile={
    <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  }
  backgroundColor="#fe9">
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</FeaturedElementCarousel>
```

It takes all arguments that carousel takes.

@component FeaturedElementCarousel
@import Carousel
@playground
Carousel
```
<FeaturedElementCarousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}
  header={<h3 style={{lineHeight: "50px"}}>Example title</h3>}
  staticTile={<div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>Static</div>}
  backgroundColor="hotpink"
  responsive={[
    {
      selectors: ['x-small','small'],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      selectors: ['medium','large'],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      selectors: ['x-large'],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>E</div>
</FeaturedElementCarousel>
```

@returns {ReactElement} returns Stateless FeaturedElementCarousel component
 */
const FeaturedElementCarousel = ({
  header,
  staticTile,
  staticTileWidth,
  children,
  backgroundColor,
  backgroundImage,
  dataModuleType,
  dataModuleId,
  dataAutomationId,
  className,
  containerProps,
  otherChild,
  ...props
}) => {
  const staticWidth = staticTile ? staticTileWidth : null;

  return (
    <div
      className={classNames("FeaturedElementCarousel-container", className)}
      style={{backgroundColor, backgroundImage}}
      data-module={dataModuleType}
      data-module-id={dataModuleId}
      {...containerProps}
      {...getDataAutomationIdPair(dataModuleType, dataAutomationId)}
    >
      {_renderHeader({padding: props.framePadding, header})}
      {_renderStaticTile({padding: props.framePadding, staticTile, staticWidth})}
      {_renderCarousel({children, staticWidth, ...props})}
      {otherChild}
    </div>
  );
};

FeaturedElementCarousel.propTypes = {
  /**
   * Header to be rendered inside customized area
   */
  header: PropTypes.node,
  /**
   * Static tile to be rendered, doesn't rotate with children
   */
  staticTile: PropTypes.node,
  /**
   * Static tile width
   */
  staticTileWidth: PropTypes.string.isRequired,
  /**
   * Child components to be rendered as slides in the carousel
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS background-color property to be set on carousel wrapper
   */
  backgroundColor: PropTypes.string,
  /**
   * CSS background-image property to be set on carousel wrapper
   */
  backgroundImage: PropTypes.string,
  /**
   * Padding of carousel, also pads static tile
   */
  framePadding: PropTypes.string,
  /**
   * Required for Tempo modules and automation tests
   */
  dataModuleType: PropTypes.string,
  /**
   * Required for Tempo modules and automation tests
   */
  dataModuleId: PropTypes.string,
  /**
   * Required for automation tests
   */
  dataAutomationId: PropTypes.string,
  /**
   * Additional classes for styling
   */
  className: PropTypes.string,
  /**
  * Additional props to put on the container div
  */
  containerProps: PropTypes.object,
  /**
  * Additional child of container that is not a carousel tile
  */
  otherChild: PropTypes.node
};

FeaturedElementCarousel.defaultProps = {
  header: null,
  staticTile: null,
  staticTileWidth: "200px",
  backgroundColor: "transparent",
  backgroundImage: null,
  framePadding: "0",
  dataModuleType: "",
  dataModuleId: "",
  dataAutomationId: "",
  className: "",
  containerProps: {},
  otherChild: null
};

export default FeaturedElementCarousel;
