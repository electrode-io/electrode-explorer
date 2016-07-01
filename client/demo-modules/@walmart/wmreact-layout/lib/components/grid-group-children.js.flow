/* @flow */
import React from "react";

const renderAsGroup = (cols, children, groupRender) => {
  let group = [];
  const out = [];
  React.Children.forEach(children, (child, index) => {
    group.push(child);
    if (group.length % cols === 0 && index > 0) {
      out.push(groupRender(group, index));
      group = [];
    }
  });
  if (group.length > 0) {
    // -1 is a key that's outside the [0,...] range we use above.
    out.push(groupRender(group, -1));
  }
  return out;
};

/**
Groups children into rows with a set number of columns.

This example organizes the children into rows of 2 columns where each row
is given the `className` of `my-column`.
@examples
```jsx
<Grid.GroupChildren classes="my-column" columns={2}>
  <div>A</div><div>B</div><div>C</div>
</Grid.GroupChildren>
```
@import {Grid}
@component Grid.GroupChildren
@param {object} props object with following properties classes, columns.
@returns {ReactElement} A React Element
*/
const GroupChildren = (props) => {
  const { columns, classes, ...other } = props;
  return (
    <div {...other}>
      {renderAsGroup(props.columns, props.children, (children, key) => {
        return (
          <div className={props.classes} key={key}>
            {children}
          </div>
        );
      })}
    </div>
  );
};

GroupChildren.propTypes = {
  /**
   The classes to apply to the row div
   */
  classes: React.PropTypes.string.isRequired,
  /**
   The number of columns in a row
   */
  columns: React.PropTypes.number.isRequired
};

export default GroupChildren;
