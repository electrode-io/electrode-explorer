/* @flow */
import React from "react";
import classNames from "classnames";
/**
Wraps an arrange fit cell.
@import {Arrange}
@component Arrange.Fit
@references Arrange
@flags noVisibleRender
@playground
```
<Arrange>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
@param {object} props object with following properties mediaObject, noWrap, hidden.
@returns {ReactElement} A React Element
*/
const ArrangeFit = (props) => {
  const extras = {
    "arrange-media-object": props.mediaObject,
    "no-wrap": props.noWrap
  };

  return (
    <div {... props}
      className={classNames("arrange-fit",
        extras, props.className,
        props.hidden ? "hide-content" : "")}>
      {props.children}
    </div>
  );
};

ArrangeFit.propTypes = {
  mediaObject: React.PropTypes.bool,
  noWrap: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  children: React.PropTypes.any
};

export default ArrangeFit;
