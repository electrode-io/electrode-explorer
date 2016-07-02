/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";
import classNames from "classnames";
import Button from "./button";
import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
Zoom component
@examples
```jsx
<Zoom zoomIn={true}/>
```

Or:

```jsx
<Zoom zoomOut={true}/>
```

`onClick` is passed through so you can:

```jsx
<Zoom zoomOut={true} onClick={this.zoomOut}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Zoom
@import {Zoom}
@references Zoom
@playground
Zoom
```
<div>
  <Zoom zoomIn={true}/>
  <Zoom zoomOut={true}/>
</div>
```
*/
const Zoom = (props, context) => {
  const _onClick = (event: Object) => {
    fireStatelessUIEvent(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };
  const extras = {
    "wmicon-zoom": props.zoomIn,
    "wmicon-zoom-out": props.zoomOut
  };
  const hiddenText = props.zoomIn ? "Zoom In" : "Zoom Out";
  return (
    <Button {...props}
      onClick={(e) => _onClick(e)}
      className={classNames(extras, "zoom wmicon", props.className)}>
      <span className="visuallyhidden">{hiddenText}</span>
    </Button>
  );
};

Zoom.contextTypes = {
  analytics: React.PropTypes.object
};

export default Zoom;
