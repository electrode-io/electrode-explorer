/* @flow */
import React from "react";
import FlagDirection from "./flag-direction";
import classNames from "classnames";

/**
Product flag.
@examples
```jsx
<div style={{padding: 20}}>
  <Flag>Product Flag</Flag>
</div>
```
@component Flag`
@import {Flag}
@playground
Flag
```
<div style={{padding: 20}}>
  <Flag>Product Flag</Flag>
</div>
```
*/

const Flag = (props) => {
  const {
    type = "",
    align = "left",
    text = "",
    children = [],
    outline = false,
    className = ""
  } = props;

  const componentClass = classNames(
    "flag",
    type ? `flag-${type}` : "",
    {"flag-outline": outline},
    {"flag-alt": align === "right"},
    {"hidden": props.hidden},
    className
  );
  // if user provides text through props, honor it.
  const displayText = text || children;

  return (
    <span className={componentClass}>
      {displayText}
    </span>
  );
};

Flag.propTypes = {
  /**
  True if this is a certain type
  */
  type: React.PropTypes.string,
  /**
  True if we should render in an outline mode
  */
  outline: React.PropTypes.bool,
  /**
  An additional classes passed in
  */
  className: React.PropTypes.string,
  /**
  All the children
  */
  children: React.PropTypes.array,
  /**
  Specify alignment of left or right if required.
  The default is no alignment.
  */
  align: FlagDirection,
  /**
  text is the display content in the flag
  */
  text: React.PropTypes.string,
  hidden: React.PropTypes.bool
};

export default Flag;
