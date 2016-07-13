/* @flow */
import React from "react";
import tweenState from "react-tween-state";

/**
A wrapper component for implementing a fade out or fade in.

```jsx
<Fader type="fadeOut" duration={1000}>
  <div style={{height: 50, width: 50, background: "blue"}}>
  </div>
</Fader>
```

@import {Fader}
@flags noVisibleRender
@component Fader
@playground
Fader
*/

const Fader = React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    /**
    Type of fade ("fadeIn", "fadeOut", or "none")
    */
    type: React.PropTypes.oneOf(["fadeIn", "fadeOut", "none"]),
    /**
    Duration of the fade in milliseconds
    */
    duration: React.PropTypes.number,
    /**
    Callback to be executed after fade is complete
    */
    callback: React.PropTypes.func,
    /**
    Children components to render
    */
    children: React.PropTypes.any
  },

  getDefaultProps(): Object {
    return {
      type: "none",
      duration: 1000
    };
  },

  getInitialState(): Object {
    return {
      opacity: 1
    };
  },

  _fade(props: Object): void {
    if (props.type === "none") {
      if (props.callback) {
        clearTimeout(this.timeoutId);
        // FlowDisable: Flow throws error on instance variable declaration
        this.timeoutId = setTimeout(() => {
          props.callback();
        }, props.duration);
      }
    } else {
      this.tweenState("opacity", {
        duration: props.duration,
        endValue: props.type === "fadeIn" ? 1 : 0,
        onEnd: props.callback
      });
    }
  },

  componentDidMount(): void {
    this._fade(this.props);
  },

  componentWillReceiveProps(nextProps: Object): void {
    this._fade(nextProps);
  },

  componentWillUnmount(): void {
    clearTimeout(this.timeoutId);
  },

  render(): ReactElement {
    return (
      <div style={{opacity: this.getTweeningValue("opacity")}}>
        {this.props.children}
      </div>
    );
  }
});

export default Fader;
