/* @flow */
/* eslint react/no-did-mount-set-state: 0 */
import React from "react";

import RadioGroup from "./radio-group";
import RadioButton from "./radio-button";

/**
A simplified radio group.
@examples
```jsx
<Radio.Simple group="foo"
  values={["1", "2", "3"]}
  selected="1" />
```
@component Radio.Simple
@import {Radio}
*/
const RadioSimple = React.createClass({
  propTypes: {
    /**
    The values for the check boxes
    */
    values: React.PropTypes.array.isRequired,
    /**
    The group name
    */
    group: React.PropTypes.string.isRequired,
    /**
    The currently selected value
    */
    selected: React.PropTypes.string,
    /**
    True if we should use the alt presentation
    */
    alt: React.PropTypes.bool,
    hidden: React.PropTypes.bool
  },

  getInitialState(): {
    selected: string;
  } {
    return {
      selected: ""
    };
  },

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.selected !== undefined) {
      this.setState({
        selected: nextProps.selected
      });
    }
  },

  _onChange(index: number): void {
    this.setState({
      selected: this.props.values[index]
    });
  },

  render(): ReactElement {
    const self = this;

    let selectedIndex = 0;
    this.props.values.forEach((val, index) => {
      if (val === self.state.selected) {
        selectedIndex = index;
      }
    });

    return (
      <span className={
        this.props.hidden ? "hide-content" : ""
      }>
        <RadioGroup
          name={this.props.group}
          selected={selectedIndex}
          onChange={this._onChange}>
          {this.props.values.map((val) => {
            return (
              <RadioButton
                alt={self.props.alt ? self.props.alt : false}
                group={self.props.group}
                key={val}
              >
                {val}
              </RadioButton>
              );
          })}
        </RadioGroup>
      </span>
    );
  }
});

export default {
  Button: RadioButton,
  Group: RadioGroup,
  Simple: RadioSimple
};
