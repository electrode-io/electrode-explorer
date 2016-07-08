/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";

/**
A percentage circle type meter.
@examples
```jsx
<Meter.PercentageCircle percent={50}/>
```
@component Meter.PercentageCircle
@import {Meter}
@playground
Meter
```
<div style={{minHeight:100}}>
  <Meter.PercentageCircle percent={50}/>
</div>
```
*/

class MeterCircle extends Component {
  render(): ReactElement {
    const percent = Math.floor(this.props.percent); // make sure it"s an int
    const classes = classNames(
      "meter-circle",
      `meter-circle-p${percent}`,
      this.props.hidden ? "hide-content" : ""
    );

    return (
      <div className={classes}>
        <span>{this.props.percent}%</span>
        <div className="meter-circle-slice">
          <div className="meter-circle-bar"></div>
          <div className="meter-circle-fill"></div>
        </div>
      </div>
    );
  }
}

MeterCircle.displayName = "MeterCircle";
MeterCircle.propTypes = {
  percent: PropTypes.number.isRequired,
  hidden: PropTypes.bool
};
MeterCircle.defaultProps = {
  hidden: false
};
export default MeterCircle;
