/* @flow */
import React, { PropTypes } from "react";
import BannerImage from "./banner-image";
import BannerMessage from "./banner-message";

/**
A higher-order component to determine which Banner component to display.
@examples
```jsx
<Banner />
```
@component Banner
@import {Banner}
@playground
Banner
```
<Banner />
```
*/

const Banner = (props) => {
  return (
    props.data.image || props.data.mobileImage ?
      <Banner.Image {...props.data} /> :
      <Banner.Message {...props.data} />
  );
};

Banner.displayName = "Banner";

Banner.propTypes = {
  data: PropTypes.object.isRequired
};

// sub-components
Banner.Image = BannerImage;
Banner.Message = BannerMessage;

export default Banner;
