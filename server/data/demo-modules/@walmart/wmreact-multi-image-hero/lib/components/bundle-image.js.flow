/* @flow */
import React, { PropTypes } from "react";
import Image from "@walmart/wmreact-base/lib/components/image";

const getComponentsHeader = (decorate, showDetails, details) => {
  return decorate && showDetails ?
    (<div className="details">{details}</div>) :
    null;
};

/**
Hero image of a bundle component.
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<BundleImage
  imageUrl="test.png"
  title="Item Title"
  numberComponents={5}
  decorate={true}
  showHeader={false}
  />
```
@component BundleImage
@import {BundleImage}
@playground
BundleImage
```
<BundleImage
  imageUrl="test.png"
  title="Item Title"
  numberComponents={5}
  decorate={true}
  showHeader={false}
  />
```
*/
const BundleImage = (props) : ReactElement => {
  const {
    decorate,
    showDetails,
    details,
    imageUrl,
    title,
    ...rest
  } = props;

  const outerClass = decorate ? "decorated-item" : "";

  return (
    <div className="bundle-image display-inline-block">
      <div className={outerClass}>
        {getComponentsHeader(decorate, showDetails, details)}
        <Image src={imageUrl} {...rest}/>
      </div>
      <div className="item-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

BundleImage.propTypes = {
  decorate: PropTypes.bool,
  showHeader: PropTypes.bool,
  details: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string
};

BundleImage.defaultProps = {
  decorate: false,
  showHeader: false,
  numberComponents: 1,
  imageUrl: "http://i5.walmartimages.com/no-image.png",
  title: ""
};

export default BundleImage;
