/* @flow */
import React from "react";
import classNames from "classnames";

/**
Makes mini copy.
@examples
```jsx
<Copy.Mini>
  Foo
</Copy.Mini>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy.Mini
@import {Copy}
@references Copy
@playground
```
<Copy.Mini>
  Foo
</Copy.Mini>
```
*/
const CopyMini = (props) => (
  <p className={classNames("copy-mini", props.hidden ? "hide-content" : "")}>
    {props.children}
  </p>
);

CopyMini.displayName = "Copy.Mini";

CopyMini.propTypes = {
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default CopyMini;
