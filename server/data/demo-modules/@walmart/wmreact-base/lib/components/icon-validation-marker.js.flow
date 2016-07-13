/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";
import classNames from "classnames";

/**
Validation marker component
@examples
```jsx
<Icon.ValidationMarker />
```
@return {ReactElement} - React element
@param {object} props Properties
@param {string} props.error Error
@component Icon.ValidationMarker
@import {Icon}
@playground
```
<Icon.ValidationMarker />
```
*/
const IconValidationMarker = (props) => {
  const classes = classNames(
    "validation-marker validation-marker-error",
    props.hidden ? "hide-content" : "",
    props.className);

  return (
    <i className={classes} {... props}>
      <span className="visuallyhidden">{props.error}</span>
    </i>
  );
};

IconValidationMarker.propTypes = {
  /**
  The error string
  */
  error: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  hidden: React.PropTypes.bool
};

export default IconValidationMarker;
