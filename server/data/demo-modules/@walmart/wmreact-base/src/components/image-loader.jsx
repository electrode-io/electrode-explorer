/* @flow */
/* eslint prefer-const:0 */
import React from "react";

import ImageLoader from "react-imageloader";

import { fireUIEvent } from "@walmart/wmreact-analytics";

/**
Image loader that manages errors and can display a loading
image.
@examples
```jsx
<ImageLoader src="foo.jpg" size={50} />
```
@component ImageLoader
@import {ImageLoader}
@playground
```
<div>
  <ImageLoader src="http://placehold.it/1000x1000" />
</div>
```
*/
export default class InstrumentedImageLoader extends React.Component {
  render() {
    const props = {};

    props.onError = (event) => {
      if (this.props.onError) {
        this.props.onError(event);
      }
      fireUIEvent(this, event, {eventType: "image-loader-error"});
    };

    return (
      <ImageLoader {... this.props} {... props} />
    );
  }
}

InstrumentedImageLoader.propTypes = {
  onError: React.PropTypes.func
};

InstrumentedImageLoader.contextTypes = {
  analytics: React.PropTypes.object
};
