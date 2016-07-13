/* @flow */
import React, { Component, PropTypes } from "react";

import classNames from "classnames";

/**
A shelf component.
@examples
```jsx
<Shelf>This is a Shelf</Shelf>
```
@component Shelf
@import {Shelf}
@playground
Shelf
```
<Shelf>This is a Shelf</Shelf>
```
*/

class Shelf extends Component {
  render(): ReactElement {
    const classes = classNames(
      "shelf-sidebar", this.props.className, {
        "col3": this.props.threeCol,
        "hide-content": this.props.hidden
      });

    return (
      <div {... this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}

Shelf.displayName = "Shelf";

Shelf.propTypes = {
  /**
    True if the shelf is hidden
  */
  hidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  threeCol: React.PropTypes.bool
};

Shelf.defaultProps = {
  hidden: false,
  children: "",
  className: "",
  threeCol: true
};

export default Shelf;
