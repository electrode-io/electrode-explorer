import React, {PropTypes} from "react";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

/*eslint-disable max-len*/

/**
A component for displaying a single image banner that is responsive
@examples
```jsx
const data = {
  backgroundColor: "#ddd",
  mobileImage: {
    clickThrough: {
      value: "http://walmart.com"
    },
    title: "Image",
    src: "http://i5.walmartimages.com/dfw/4ff9c6c9-a732/k2-_3965685c-a835-4eee-b0c9-3154910191f9.v1.jpg",
    alt: "Image"
  }
};

React.render(<Banner.Image {...data} />, mountNode);
```
@component Banner.Image
@import {Banner}
@references Banner
@playground
```
const data = {
  backgroundColor: "#ddd",
  mobileImage: {
    clickThrough: {
      value: "http://walmart.com"
    },
    title: "Image",
    src: "http://i5.walmartimages.com/dfw/4ff9c6c9-a732/k2-_3965685c-a835-4eee-b0c9-3154910191f9.v1.jpg",
    alt: "Image"
  }
};

React.render(<Banner.Image {...data} />, mountNode);
```
*/

/*eslint-enable max-len*/

const BannerImage = ({image, mobileImage, moduleType, backgroundColor}) => {
  image = mobileImage || image;
  return (
    <div className="BannerImage"
      style={{backgroundColor}}
      {...getTempoModuleAutomationId(moduleType, process)}>
      {!!image &&
        <a href={image.clickThrough.value} title={image.title}>
          <img
            className="BannerImage-image"
            src={image.src}
            alt={image.alt}
            hidefocus="true"/>
        </a>
      }
    </div>
  );
};

BannerImage.displayName = "Banner.Image";

BannerImage.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.object,
  mobileImage: PropTypes.object,
  moduleType: PropTypes.string
};

BannerImage.defaultProps = {
  backgroundColor: "",
  image: null,
  mobileImage: null,
  moduleType: ModuleTypes.VALUE_OF_DAY_MESSAGING
};

export default BannerImage;
