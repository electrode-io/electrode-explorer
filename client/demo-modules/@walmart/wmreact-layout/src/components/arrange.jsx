/* @flow */
import React from "react";

import classNames from "classnames";

import ArrangeFit from "./arrange-fit";
import ArrangeFill from "./arrange-fill";
import ArrangeFitAll from "./arrange-fit-all";

/**
Container component for arrange layouts.
@examples
```jsx
<Arrange>
  <Arrange.Fill>Foo</Arrange.Fill>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
@component Arrange
@import {Arrange}
@playground
```
<Arrange>
  <Arrange.Fill>Foo</Arrange.Fill>
  <Arrange.Fit>Foo</Arrange.Fit>
</Arrange>
```
@param {object} props object with following properties children, spaced,
middle, bottom, equalSpacing, equal and hidden.
@returns {ReactElement} A React Element
*/
const Arrange = (props) => {
  const extras = {
    "arrange-spaced": props.spaced,
    "arrange-middle": props.middle,
    "arrange-bottom": props.bottom,
    "arrange-equal-spacing": props.equalSpacing,
    "arrange-equal": props.equal,
    "arrange-baseline": props.baseline
  };
  return (
    <div
      className={classNames(
        "arrange",
        extras,
        props.hidden ? "hide-content" : ""
      )}
      {... props}>
      {props.children}
    </div>
  );
};

Arrange.propTypes = {
  /**
   * Children to render in the container
   */
  children: React.PropTypes.node,
  /**
   Applies `arrange-spaced` class
   */
  spaced: React.PropTypes.bool,
  /**
   Applies `arrange-middle` class
   */
  middle: React.PropTypes.bool,
  /**
   Applies `arrange-bottom` class
   */
  bottom: React.PropTypes.bool,
  /**
   Applies `arrange-baseline` class
   */
  baseline: React.PropTypes.bool,
  /**
   Applies `arrange-equal-spacing` class
   */
  equalSpacing: React.PropTypes.bool,
  /**
   Applies `arrange-equal` class
   */
  equal: React.PropTypes.bool,
  hidden: React.PropTypes.bool
};

Arrange.Fit = ArrangeFit;
Arrange.Fill = ArrangeFill;
Arrange.FitAll = ArrangeFitAll;

export default Arrange;
