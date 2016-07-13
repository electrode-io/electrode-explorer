/* @flow */
import React from "react";

import tweenState from "react-tween-state";
import StaticInfograph from "./static-infograph";


/**
Infograph component.
@examples
```jsx
<Infograph
  labels={["One", "Two", "Three", "Four", "Five"]}
  completed={2} />
```
@component Infograph
@import {Infograph}
@synonym progress
@playground
Simple
```
<div>
  <div style={{margin:50}}>
    <Infograph
      labels={["One", "Two", "Three", "Four", "Five"]}
      completed={2} />
  </div>
  <div style={{margin:50}}>
    <Infograph
      labels={["One", "Two", "Three", "Four"]}
      completed={1} />
  </div>
  <div style={{margin:50}}>
    <Infograph
      labels={["One", "Two", "Three", "Four", "Five", "Six"]}
      completed={6} />
  </div>
</div>
```
@playground
Animated
!noRenderFalse!
```
var InfographExample = React.createClass({
  getInitialState() {
    return {
      percent: 20
    }
  },
  changePercentage() {
    var pct = Math.random() * 100.0;
    this.setState({
      percent: Math.min(100, Math.max(10, pct))
    });
  },
  render() {
    return (
      <div>
        <div style={{margin:50}}>
          <Infograph
            labels={["One", "Two", "Three", "Four", "Five"]}
            completedPercent={this.state.percent} />
        </div>
        <a href="javascript:void(0)" onClick={this.changePercentage}>
          Change Percentage
        </a>
      </div>
    )
  }
});

React.render(<InfographExample/>, mountNode);
```
*/
const Infograph = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    /**
    Labels to use for the step points
    */
    labels: React.PropTypes.array.isRequired,
    /**
    The number of items completed
    */
    completed: React.PropTypes.number,
    /**
    The percentage completed
    */
    completedPercent: React.PropTypes.number,
    /**
    The animation speed in milliseconds
    */
    animationSpeed: React.PropTypes.number,
    /**
    The animation easing
    */
    animationEasing: React.PropTypes.func
  },

  getDefaultProps(): Object {
    return {
      labels: [],
      completed: null,
      completedPercent: null,
      animationSpeed: 500,
      animationEasing: tweenState.easingTypes.easeInOutQuad
    };
  },

  componentWillReceiveProps(nextProps: Object): void {
    this.tweenState("completedPercent", {
      easing: this.props.animationEasing,
      duration: this.props.animationSpeed,
      startValue: this.state.completedPercent,
      endValue: nextProps.completedPercent
    });
  },

  getInitialState(): Object {
    return {
      completedPercent: this.props.completedPercent
    };
  },

  getCompleted(): number {
    let comp = this.props.completed;
    if (!comp) {
      const sectionWidth = 100 / (this.props.labels.length - 1);
      comp = Math.floor(this.getTweeningValue("completedPercent") / sectionWidth) + 1;
      comp = Math.min(this.props.labels.length, Math.max(1, comp));
      if (this.getTweeningValue("completedPercent") >= 100.0) {
        comp = this.props.labels.length;
      }
    }
    return comp;
  },

  render(): ReactElement {
    const {labels} = this.props;
    return (
      <StaticInfograph
        labels={labels}
        completed={this.getCompleted()}
        completedPercentage={this.getTweeningValue("completedPercent")}
        />
    );
  }
});

export default Infograph;
