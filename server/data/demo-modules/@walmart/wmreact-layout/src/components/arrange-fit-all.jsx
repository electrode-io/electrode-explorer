/* @flow */
import React from "react";

import classNames from "classnames";

/**
Convencience component to apply an arrange-fit layout to all of the children.
@examples
```jsx
<Arrange.FitAll>
  <div>A</div>
  <div>B</div>
  <div>C</div>
</Arrange.FitAll>
```
@component Arrange.FitAll
@import {Arrange}
@flags noVisibleRender
@playground
```
<Arrange.FitAll>
  <div style={{background: '#ccc', padding: '1rem'}}>A</div>
  <div style={{background: '#aaa', padding: '1rem'}}>B</div>
  <div style={{background: '#ccc', padding: '1rem'}}>C</div>
  <div style={{background: '#ccc', padding: '1rem'}}>D</div>
  <div style={{background: '#aaa', padding: '1rem'}}>E</div>
  <div style={{background: '#ccc', padding: '1rem'}}>F</div>
</Arrange.FitAll>
```
@param {object} props object with following properties children, spaced, middle,
bottom, equalSpacing, equal, hidden.
@returns {ReactElement} A React Element
*/
const ArrangeFitAll = (props) => {
  const extras = {
    "arrange-spaced": props.spaced || true,
    "arrange-middle": props.middle,
    "arrange-bottom": props.bottom,
    "arrange-equal-spacing": props.equalSpacing,
    "arrange-equal": props.equal
  };

  return (
    <div
      className={classNames(
        "arrange",
        extras,
        props.hidden ? "hide-content" : ""
      )}
      {... props}>
      {React.Children.map(props.children, (child, index) => {
        return (
          <div className="arrange-fit" key={index}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

ArrangeFitAll.propTypes = {
  /**
   * Children to render in the container
   */
  children: React.PropTypes.array,
  /**
   * Applies `arrange-spaced` to the container.
   */
  spaced: React.PropTypes.bool,
  /**
   * Applies `arrange-middle` to the container.
   */
  middle: React.PropTypes.bool,
  /**
   * Applies `arrange-bottom` to the container.
   */
  bottom: React.PropTypes.bool,
  /**
   * Applies `arrange-equal-spacing` to the container.
   */
  equalSpacing: React.PropTypes.bool,
  /**
   * Applies `arrange-equal` to the container.
   */
  equal: React.PropTypes.bool,
  hidden: React.PropTypes.bool
};

export default ArrangeFitAll;
