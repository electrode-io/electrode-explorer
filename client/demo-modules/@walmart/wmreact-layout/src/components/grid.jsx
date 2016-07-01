/* @flow */
import React from "react";

import classNames from "classnames";

import GridApplyClasses from "./grid-apply-classes";
import GridGroupChildren from "./grid-group-children";

/**
Component that adds the `grid` CSS class to container
PropTypes:
1) className: CSS class name to apply to the container.
2) children: Array of Children to render in the container.
3) hidden: Assigns a hide-content class when set to true.
@deprecated
@component Grid
@param {object} props object with following properties className, children, hidden.
@returns {ReactElement} A React Element
*/
const Grid = (props) => {
  return (
    <div {...props}
      className={classNames(
        props.className,
        "grid",
        props.hidden ? "hide-content" : ""
      )}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  /**
   CSS class name to apply to the container
   */
  className: React.PropTypes.string,
  /**
   * Children to render in the container
   */
  children: React.PropTypes.array,
  hidden: React.PropTypes.bool
};

Grid.ApplyClasses = GridApplyClasses;
Grid.GroupChildren = GridGroupChildren;

export default Grid;
