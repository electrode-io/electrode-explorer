/* @flow */
import React, { Component, PropTypes } from "react";

import classNames from "classnames";

/**
Wraps an stack fill cell.
@import {Stack}
@component Stack.Fill
@references Stack
@playground
```
<Stack>
  <Stack.Fill>Foo</Stack.Fill>
</Stack>
```
*/
export default class StackFill extends Component {
  render(): ReactElement {
    return (
      <div className={classNames("stack-fill",
          this.props.hidden ? "hide-content" : "")}
        {... this.props}>
        <div className="stack-cell">
          {this.props.children}
        </div>
      </div>
    );
  }
}

StackFill.displayName = "Stack.Fill";

StackFill.propTypes = {
  /**
   * Children to render in the container
   */
  children: PropTypes.any,
  hidden: PropTypes.bool
};
