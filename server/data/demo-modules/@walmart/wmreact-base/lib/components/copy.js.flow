/* @flow */
import React from "react";

import OpenLeading from "./copy-openleading";
import Small from "./copy-small";
import Mini from "./copy-mini";

/**
Makes copy
@examples
```jsx
<Copy>
  Foo
</Copy>
```
@return {ReactElement} - React element
@param {object} props Properties
@component Copy
@import {Copy}
@playground
Copy
```
<Copy>Base Copy</Copy>
```
*/
const Copy = (props) => (
  <p className={props.hidden ? "hide-content" : ""} {...props}>
    {props.children}
  </p>
);

Copy.displayName = "Copy";

Copy.propTypes = {
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

Copy.OpenLeading = OpenLeading;
Copy.Small = Small;
Copy.Mini = Mini;

export default Copy;
