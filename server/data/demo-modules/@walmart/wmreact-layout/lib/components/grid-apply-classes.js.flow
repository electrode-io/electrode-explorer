/* @flow */
import React from "react";

/**
A responsive helper class that applies the `classes` prop to all of the children.

An example that applies 'foo bar' to the classNames of all of the children.
@examples
```jsx
<Grid.ApplyClasses classes="foo bar">
  <div>A</div><div>B</div><div>C</div>
</Grid.ApplyClasses>
```
@import {Grid}
@component Grid.ApplyClasses
@param {object} props object with following properties classes, children.
@returns {ReactElement} A React Element
*/

const ApplyClasses = (props) => {
  return (
    <div {...props}>
      {React.Children.map(props.children, (child) => {
        return (
          <div className={props.classes}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

ApplyClasses.propTypes = {
  /**
   The classes to add to each of the children
   */
  classes: React.PropTypes.string.isRequired,
  /**
   * Children to render in the container
   */
  children: React.PropTypes.array
};

export default ApplyClasses;
