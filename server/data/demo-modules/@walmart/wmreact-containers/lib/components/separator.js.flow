/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";

/**
A seperator component.
@examples
```jsx
<Separator/>
```

And some variations:

```jsx
<Separator type="heavy"/>
<Separator type="alt"/>
<Separator type="dotted"/>
```
@component Separator
@import {Separator}
@playground
Separator
```
<div>
  <Separator/>
  <Separator type="heavy"/>
  <Separator type="alt"/>
  <Separator type="dotted"/>
</div>
```
*/
class Separator extends Component {
  render(): ReactElement {
    const classes = {
      "separator": true,
      [`separator-${this.props.type}`]: true
    };

    return (
      <hr className={classNames(
        classes,
        this.props.hidden ? "hide-content" : ""
      )} />
    );
  }
}

Separator.displayName = "Separator";

Separator.propTypes = {
  /**
  The type of separator
  */
  type: PropTypes.oneOf(["normal", "heavy", "alt", "dotted"]),
  hidden: PropTypes.bool
};

Separator.defaultProps = {
  type: "normal",
  hidden: false
};

export default Separator;
