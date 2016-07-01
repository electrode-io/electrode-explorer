/* @flow */
import React from "react";
import classNames from "classnames";

/**
Makes open-leading copy
@examples
```jsx
<Copy.OpenLeading>
  Foo
</Copy.OpenLeading>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.OpenLeading
@import {Copy}
@references Copy
@playground
```
<Copy.OpenLeading>
  Foo
</Copy.OpenLeading>
```
*/
const CopyOpenLeading = (props) => (
  <p className={classNames("copy-open-leading", props.hidden ? "hide-content" : "")}>
    {props.children}
  </p>
);

CopyOpenLeading.displayName = "Copy.OpenLeading";

CopyOpenLeading.propTypes = {
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default CopyOpenLeading;
