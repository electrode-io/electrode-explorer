import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";

import { getTorbitImage } from "../helpers/image-utils";
import POVImageMaps from "./pov-image-maps";

const _renderClickThroughImage = (props) => {
  const { alt, clickThrough, title, src, height, width, lazy, isMobile } = props;
  const imageProps = { alt, title, height, width, lazy };

  imageProps.src = getTorbitImage(src, isMobile);
  return (
    <Link href={clickThrough.value}>
      <Image {...imageProps} />
    </Link>
  );
};

/*eslint-disable max-len*/
/**
An image link component which wraps a image inside a link.
Current use-case is to use inside POVSlide frame.

@param {Object} props React props for the component
@returns {ReactElement} Image link component
@examples
ImageLink
```jsx
<ImageLink
  url="http://www.walmart.com",
  image= {{
    src: "http://i5.walmartimages.com/dfwrs/4ff4222f-c72c/k2-_3d50319d-d056-44d6-9f03-465511812f77.v1.jpg",
    alt: "Chrome cast audio",
    width: 1364,
    height: 300
  }}
/>
```

@import {POVFrame.Image}
@component POVFrame.Image
@playground
POVFrame.Image
```
<POVFrame.Image
  url="http://www.walmart.com",
  image= {{
    src: "http://i5.walmartimages.com/dfwrs/4ff4222f-c72c/k2-_3d50319d-d056-44d6-9f03-465511812f77.v1.jpg",
    alt: "Chrome cast audio",
    width: 1364,
    height: 300
  }}
  />
```
*/
/*eslint-disable max-len*/
const POVImage = (props) => {
  const { clickThrough: { type }} = props;

  if (type === "url") {
    return _renderClickThroughImage(props);
  } else if (type === "map") {
    return <POVImage.Maps {...props} />;
  }

  return <span />;
};

POVImage.displayName = "POVFrame.Image";

POVImage.Maps = POVImageMaps;

POVImage.propTypes = {
  /**
  Alt text for image.
  */
  alt: PropTypes.string,
  /**
  identifier used in analytics.
  */
  assetId: PropTypes.string,
  /**
  An object with target url information in form of simple link or image maps.
  */
  clickThrough: PropTypes.object.isRequired,
  /**
  Content Type of image file. To be used in module preview.
  */
  contentType: PropTypes.string,
  /**
  Image height.
  */
  height: PropTypes.string.isRequired,
  /**
  Size of image file in bytes. To be used in module preview.
  */
  size: PropTypes.string,
  /**
  Image source.
  */
  src: PropTypes.string.isRequired,
  /**
  Image title.
  */
  title: PropTypes.string,
  /**
  identifier used in analytics.
  */
  uid: PropTypes.string,
  /**
  Image width.
  */
  width: PropTypes.string.isRequired,
  /**
   * lazy load image
   */
  lazy: PropTypes.bool,
  /**
    * is mobile or desktop?
    */
  isMobile: PropTypes.bool
};

export default POVImage;
