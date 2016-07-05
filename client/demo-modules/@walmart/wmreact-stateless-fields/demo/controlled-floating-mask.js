import React from "react";
import FloatingField from "../lib/components/floating-field";

export default class ControlledFloatingMask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  onChange(event) {
    this.setState({value: event.target.value});
  };

  render () {
    return (
      <FloatingField
        value={this.state.value}
        mask="1111-1111-1111-1111"
        label="Credit Card"
        instructions="(This is a controlled component)"
        onChange={this.onChange.bind(this)}
      />
    );
  }
};
