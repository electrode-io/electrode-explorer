/* @flow */
import React from "react";
import classNames from "classnames";

/**
Makes samll copy
@examples
```jsx
<Copy.Small>
  Foo
</Copy.Small>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.Small
@import {Copy}
@references Copy
@playground
```
<Copy.Small>
  Foo
</Copy.Small>
```
*/
const CopySmall = (props) => (
  <p className={classNames("copy-small", props.hidden ? "hide-content" : "")}>
    {props.children}
  </p>
);

CopySmall.displayName = "Copy.Small";

CopySmall.propTypes = {
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default CopySmall;
