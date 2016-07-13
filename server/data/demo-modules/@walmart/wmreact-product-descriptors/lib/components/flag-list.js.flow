/* @flow */
import React from "react";
import classNames from "classnames";

/**
This component displays a list of flags

```jsx
<div style={{height: 100}}>
  <FlagList>
    <Flag type="rollback" text="Rollback" />
    <Flag text="Clearance" align="right" />
    <Flag text="New flag" outline={true}/>
  </FlagList>
</div>

```

@import {FlagList}
@flags noVisibleRender
@component FlagList
@playground
FlagList
```
<div style={{height: 100}}>
  <FlagList>
    <Flag type="rollback" text="Rollback" />
    <Flag text="Clearance" align="right" />
    <Flag text="New flag" outline={true}/>
  </FlagList>
</div>

```
*/

const FlagList = (props) => {
  return (
    <div className={classNames("prod-FlagList-container", props.className)}>
      {props.children}
    </div>
  );
};

FlagList.propTypes = {
  /**
  An additional classes passed in
  */
  className: React.PropTypes.string,
  /**
  All the children
  */
  children: React.PropTypes.array
};

FlagList.defaultProps = {
  "outline": false
};

FlagList.displayName = "FlagList";

export default FlagList;
