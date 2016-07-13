/* @flow */
/* eslint global-strict:0 */

import React, { Component, PropTypes } from "react";
import classNames from "classnames";

/**
Well container component.
@examples
```jsx
<Well padded={true}>
  <p>Well</p>
</Well>
```
@component Well
@import {Well}
@playground
Well
```
<Well padded={true}>
  <p>Well</p>
</Well>
```
*/

class Well extends Component {
  render(): ReactElement {
    const extras = {
      "well-below": this.props.below,
      "well-filled": this.props.filled,
      "well-padded": this.props.padded
    };
    const classes = classNames(
      this.props.className,
      "well",
      extras,
      this.props.hidden ? "hide-content" : ""
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Well.displayName = "Well";

Well.propTypes = {
  /**
  True if the well should be padded
  */
  padded: PropTypes.bool,
  /**
  True if the well should be filled
  */
  filled: PropTypes.bool,
  /**
  True if the well should be below
  */
  below: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

Well.defaultProps = {
  padded: true,
  filled: false,
  below: false,
  className: "",
  children: "",
  hidden: false
};

export default Well;
