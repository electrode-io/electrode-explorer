/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";

import MeterCircle from "./meter-circle";

/**
A simple meter.
@examples
```jsx
<div style={{height: 100}}>
  <Meter percent={50}/>
  <Meter.PercentageCircle percent={50}/>
</div>
```
@component Meter
@import {Meter}
@playground
Meter
```
<div style={{height: 100}}>
  <Meter percent={50}/>
  <Meter.PercentageCircle percent={50}/>
</div>
```
*/
class Meter extends Component {
  render(): ReactElement {
    return (
      <div className={classNames(
        "meter",
        this.props.hidden ? "hide-content" : ""
      )}>
        <span style={{width: `${this.props.percent}%`}} className="meter-bar">
          <b className="meter-text">{this.props.percent}%</b>
        </span>
      </div>
    );
  }
}

Meter.PercentageCircle = MeterCircle;

Meter.displayName = "Meter";

Meter.propTypes = {
  /**
    The percent to show
  */
  percent: PropTypes.number.isRequired,
  hidden: PropTypes.bool
};

Meter.defaultProps = {
  hidden: false
};

export default Meter;
