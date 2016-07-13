/* @flow */
import React, { Component, PropTypes } from "react";

import classNames from "classnames";

/**
Wraps an stack fill cell.
@import {Stack}
@component Stack.Fit
@references Stack
@playground
```
<Stack>
  <Stack.Fit>Foo</Stack.Fit>
</Stack>
```
*/
export default class StackFit extends Component {
  render(): ReactElement {
    return (
      <div className={classNames("stack-fit", this.props.hidden ? "hide-content" : "")}
        {... this.props}>
        <div className="stack-cell">
          {this.props.children}
        </div>
      </div>
    );
  }
}

StackFit.displayName = "Stack.Fit";

StackFit.propTypes = {
  /**
   * Children to render in the container
   */
  children: PropTypes.any,
  hidden: PropTypes.bool
};
