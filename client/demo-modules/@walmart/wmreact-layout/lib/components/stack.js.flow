/* @flow */
import React, { Component, PropTypes } from "react";

import classNames from "classnames";
import StackFit from "./stack-fit";
import StackFill from "./stack-fill";

/**
Container component for stack layouts.
@examples
Here is a simple example of a stack layout where the first cell is fills and the
second cell fits.

```jsx
<Stack>
  <Stack.Fill>Foo</Stack.Fill>
  <Stack.Fit>Foo</Stack.Fit>
</Stack>
```
@import {Stack}
@component Stack
@playground
```
<Stack>
  <Stack.Fill>Foo</Stack.Fill>
  <Stack.Fit>Foo</Stack.Fit>
</Stack>
```
*/

export default class Stack extends Component {
  render() {
    return (
      <div className={classNames("stack", this.props.hidden ? "hide-content" : "",
          this.props.className)}
        {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

Stack.displayName = "Stack";

Stack.propTypes = {
  /**
   CSS class name to apply to the container
   */
  className: PropTypes.string,
  /**
   * Children to render in the container
   */
  children: PropTypes.array,
  hidden: PropTypes.bool
};

Stack.Fit = StackFit;
Stack.Fill = StackFill;
