import React from "react";

import { Calendar } from "../src/index";

import "./demo.styl";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstDateField: null,
      secondDateField: null,
      secondFlyoutOpen: false
    };
  }

  handleFirstDateField(date) {
    this.setState({
      firstDateField: date
    });
  }

  handleSecondDateField(date) {
    this.setState({
      secondDateField: date,
      secondFlyoutOpen: date === this.state.date
    });
  }

  render() {
    const {
      firstDateField,
      secondDateField,
      secondFlyoutOpen // Only second example is controlled
    } = this.state;

    return (
      <div className="demo">
        <div className="example">
          Uncontrolled example: {firstDateField}
          <br/>
          <Calendar
            date={firstDateField}
            triggerText={firstDateField || "Choose date"}
            onDateChange={this.handleFirstDateField.bind(this)}/>
        </div>
        <div className="example">
          Controlled example: {secondDateField}
          <br/>
          <Calendar
            date={secondDateField}
            triggerText={secondDateField || "Choose date"}
            onDateChange={this.handleSecondDateField.bind(this)}
            active={secondFlyoutOpen}/>
        </div>
      </div>
    );
  }
}
