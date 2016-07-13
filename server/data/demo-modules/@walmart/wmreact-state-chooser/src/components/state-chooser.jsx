import React from "react";
import States from "../../static/states";
import { Chooser } from "@walmart/wmreact-chooser";
import {fireDataEvent} from "@walmart/wmreact-analytics";
import classNames from "classnames";

export default React.createClass({
  displayName: "StateChooser",

  propTypes: {
    chooserName: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOf(States.map((state) => state.code)),
    showLabel: React.PropTypes.bool,
    isRequiredField: React.PropTypes.bool,
    labelText: React.PropTypes.string,
    placeholderText: React.PropTypes.string,
    instructionText: React.PropTypes.string,
    isDisabled: React.PropTypes.bool,
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  contextTypes: {
    analytics: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      showLabel: true,
      isRequiredField: false,
      placeholderText: "Select",
      isDisabled: false,
      labelText: "State"
    };
  },

  getInitialState() {
    return {
      value: this.props.defaultValue || "",
      errorMessage: "",
      invalidated: false
    };
  },

  validated() {
    this.setState({
      errorMessage: "",
      invalidated: false
    });
  },

  invalidate() {
    this.setState({
      errorMessage: "This information is required.",
      invalidated: true
    });
  },

  validate() {
    const isValid = (this.state.value && this.state.value !== "SELECT")
      || !this.props.isRequiredField;

    if (isValid) {
      this.validated();
    } else {
      this.invalidate();
    }

    return isValid;
  },

  getValue() {
    return this.state.value;
  },

  setValue(state) {
    fireDataEvent(this, "setValue", {state});
    this.setState({
      value: state
    }, this.validate);
  },

  renderErrorMessage() {
    return this.state.errorMessage ?
      <div> <p className="invalid-text"> {this.state.errorMessage} </p> </div> : null;
  },

  _getDefaultText(): ReactElement | string {
    return this.props.showLabel && this.props.instructionText ?
      <span className="form-label-instructional">{` ${this.props.instructionText}`}</span> : "";
  },

  renderStateOptions() {
    const initialOpt = [
      <Chooser.Option
        key="SELECT"
        value="SELECT"
        data-automation-id={"state-chooser-option-select"}
      >
        {this.props.placeholderText}
      </Chooser.Option>
    ];

    const stateOpts = States.map((state, index) => {
      return (
        <Chooser.Option
          key={index}
          value={state.code}
          data-automation-id={`select-option-${index}`}>
          {state.name}
        </Chooser.Option>
      );
    });

    return initialOpt.concat(stateOpts);
  },

  render(): ReactElement {
    const base = {
      "disabled": this.props.isDisabled,
      "state-chooser-wrapper": true,
      "form-label": true
    };
    const chooser = {
      "empty": !this.getValue(),
      "placeholder": !this.getValue() || this.getValue() === "SELECT",
      "disabled": this.props.isDisabled,
      "invalid-border": this.state.invalidated
    };
    const errorMessage = this.renderErrorMessage();
    const stateOptions = this.renderStateOptions();

    return (
      <label
        className={classNames(
          base,
          this.props.hidden ? "hide-content" : ""
        )}
        data-automation-id={this.props.automationId}
      >
        {this.props.showLabel ? this.props.labelText : ""}
        {this._getDefaultText()}
        <div>
          <Chooser
            {...this.props}
            onBlur={this.validate}
            onChange={this.setValue}
            className={classNames(chooser)}
            isRequiredField={this.props.isRequiredField}
          >
            {stateOptions}

          </Chooser>
        </div>
        {errorMessage}
      </label>
    );
  }
});
