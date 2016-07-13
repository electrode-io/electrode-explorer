/* global navigator */
import React, { Component } from "react";

import SelectField from "@walmart/wmreact-stateless-fields/lib/components/select-field";
import States from "@walmart/wmreact-state-chooser/static/states";
import classNames from "classnames";
import { canUseDOM } from "exenv";

const isIE = canUseDOM && /MSIE 9/.test(navigator.appVersion);

class StateChooser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      touched: false,
      error: props.errorLabel
    };
  }

  getValue() {
    return this.props.value;
  }

  validate() {
    if (!this.props.value) {
      this.setState({
        error: this.props.errorLabel,
        touched: true
      });
      return false;
    }
    return true;
  }

  _onChange(ev) {
    this.setState({
      error: false,
      touched: true
    }, () => this.validate());

    this.props.onChange(ev);
  }

  render() {
    const options = States;
    const {value} = this.props;

    return (
      <div className={classNames({
        "select-state": true,
        "potato-ie-hackarino": isIE
      })}>
        <label className="form-label">
          {this.props.labelText}
        </label>
        <SelectField
          error={this.state.error}
          touched={this.state.touched}
          {...this.props}
          onChange={(ev) => this._onChange(ev)}>
          {options.map(({name, code}, index) =>
            <option
              key={code}
              value={code}
              selected={code === value}
              data-automation-id={`select-state-option-${index}`}
            >{name}</option>
          )}
        </SelectField>
      </div>
    );
  }
}

StateChooser.propTypes = {
  errorLabel: React.PropTypes.string,
  labelText: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func
};

StateChooser.defaultProps = {
  value: "",
  errorLabel: "This information is required.",
  labelText: "State",
  onChange: () => {
  }
};

export default StateChooser;
