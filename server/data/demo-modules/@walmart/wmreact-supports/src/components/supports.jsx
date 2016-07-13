/* @flow */
/* global document */
import React from "react";
import ExecutionEnvironment from "exenv";

/**
Hides or shows children based on browser support for given
features
@examples
```jsx
<Supports svg>
  <div>This browser supports SVG.</div>
</Supports>
```
```jsx
<Supports canvas>
  <div>This browser supports the Canvas tag.</div>
</Supports>
```
@component Supports
@import {Supports}
@playground
Supports SVG
```
<Supports svg>
  <div>This browser supports SVG.</div>
</Supports>
```
@playground
Support Canvas
```
<Supports canvas>
  <div>This browser supports the Canvas tag.</div>
</Supports>
```
*/
export default class Supports extends React.Component {
  constructor(props: Object): void {
    super(props);
    this.state = {
      filters: {
        /**
        True if you only want to show children when the
        browser supports SVG
        */
        svg: this._svgCheck,
        /**
        True if you only want to show children when the
        browser supports the canvas tag
        */
        canvas: this._canvasCheck
      }
    };
  }

  _svgCheck(): boolean {
    return ExecutionEnvironment.canUseDOM ?
      document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") :
      true;
  }

  _canvasCheck(): boolean {
    if (ExecutionEnvironment.canUseDOM) {
      const elem = document.createElement("canvas");
      return !!(elem.getContext && elem.getContext("2d"));
    } else {
      return true;
    }
  }

  render(): ReactElement {
    let pass = true;
    for (const f in this.state.filters) {
      if (this.props[f]) {
        if (this.state.filters[f]() !== true) {
          pass = false;
        }
      }
    }
    return (
      <div>
        {pass ? this.props.children : null}
      </div>
    );
  }
}

Supports.propTypes = {
  children: React.PropTypes.array
};
