/* @flow */
import React from "react";

import Option from "./option";

/**
A simplified component that makes building a set of components easy.
@examples
```jsx
<Options
  choices={[{
    label: "one",
    checked: true
  }, {
    label: "two",
    checked: false
  }, {
    label: "three",
    checked: false
  }, {
    label: "four",
    checked: false
  }]}
  onChange={(checkedOptions, index) => {
    let checked = checkedOptions
      .filter((choice) => choice.checked)
      .map((choice) => choice.label);

    console.log(checked); // Check your console
    console.log('index changed:', index);
  }} />
```
@component Options
@import {Options}
@synonym checkbox
@playground
Options
```
<Options
  choices={[{
    label: "one",
    checked: true
  }, {
    label: "two",
    checked: false
  }, {
    label: "three",
    checked: false
  }, {
    label: "four",
    checked: false
  }]}
  onChange={(checkedOptions, index) => {
    let checked = checkedOptions
      .filter((choice) => choice.checked)
      .map((choice) => choice.label);

    console.log(checked); // Check your console
    console.log('index changed:', index);
  }} />
```
*/
const Options = React.createClass({
  displayName: "Options",

  propTypes: {
    /**
    The choices. Which is an array of `label` and `checked`
    */
    choices: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string,
      checked: React.PropTypes.bool
    })),
    /**
    Called when the radio selection changes
    */
    onChange: React.PropTypes.func,
    /**
    The optional automation ID
    */
    automationId: React.PropTypes.string,
    /**
    The optional TeaLeaf ID
    */
    tealeafId: React.PropTypes.string
  },

  getDefaultProps(): {automationId: string, tealeafId: string, idName: string} {
    return {
      automationId: "options",
      tealeafId: "options",
      idName: ""
    };
  },

  getInitialState(): {choices: Array<any>} {
    return {
      choices: this.props.choices ? this.props.choices : []
    };
  },

  componentWillReceiveProps(nextProps: Object): void {
    this.setState({
      choices: nextProps.choices
    });
  },

  _onCheckboxChange(idx: number, isChecked: true): void {
    const selection = this.state.choices[idx];
    const newChoices = this.state.choices.slice();
    newChoices[idx] = {label: selection.label, checked: isChecked};

    this.setState({choices: newChoices}, () => {
      if (this.props.onChange) { this.props.onChange(this.state.choices, idx); }
    });
  },

  getCheckedOptions(): Array<any> {
    return this.state.choices;
  },

  render(): ReactElement {
    return (
      <div>
        {this.state.choices.map((choice, idx) => {
          const onCheckboxChange = (val) => this._onCheckboxChange(idx, val);
          const automationId = `${this.props.automationId}-option-${idx}`;
          const tealeafId = `${this.props.tealeafId}-option-${idx}`;
          return (
            <Option
              automationId={automationId}
              tealeafId={tealeafId}
              checkboxName={choice.label}
              idName={choice.idName}
              defaultChecked={choice.checked}
              onCheckedChange={onCheckboxChange}
              key={idx}>
              {choice.label}
            </Option>
          );
        })}
      </div>
    );
  }
});

export default Options;
