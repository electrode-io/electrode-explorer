/* @flow */
import React from "react";
import classNames from "classnames";
/**
Wraps an arrange fill cell.
@component Arrange.Fill
@import {Arrange}
@references Arrange
@flags noVisibleRender
@playground
```
<Arrange>
  <Arrange.Fill>Foo</Arrange.Fill>
</Arrange>
```
@param {object} props object with following properties mediaObject, noWrap, hidden.
@returns {ReactElement} A React Element
*/
const ArrangeFill = (props) => {
  const extras = {
    "arrange-media-object": props.mediaObject,
    "no-wrap": props.noWrap
  };

  return (
    <div {... props}
      className={classNames("arrange-fill",
        extras, props.className,
        props.hidden ? "hide-content" : "")}>
      {props.children}
    </div>
  );
};

ArrangeFill.propTypes = {
  mediaObject: React.PropTypes.bool,
  noWrap: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  children: React.PropTypes.any
};

export default ArrangeFill;
