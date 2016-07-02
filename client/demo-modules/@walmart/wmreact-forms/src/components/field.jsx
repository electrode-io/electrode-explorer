/* @flow */
import React from "react";
import classNames from "classnames";
import Input from "@walmart/wmreact-validation/lib/components/input";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
A generic field.
@component Field
@import {Field}
*/
export default React.createClass({
  displayName: "FormField",

  mixins: [fieldValidationMixin("input")],

  propTypes: {
    /**
    The field label
    */
    labelText: React.PropTypes.node,
    /**
    The instruction text
    */
    instructionText: React.PropTypes.string,
    /**
    True if the field is disabled
    */
    isDisabled: React.PropTypes.bool,
    /**
    True if we should show the label
    */
    showLabel: React.PropTypes.bool,
    /**
    The optional automation ID
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    /**
    The optional TeaLeaf ID
    */
    tealeafId: React.PropTypes.string
  },

  getDefaultProps(): {
    labelText: string,
    instructionText: string,
    isDisabled: boolean,
    showLabel: boolean,
    automationId: string,
    tealeafId: string
  } {
    return {
      labelText: "",
      instructionText: "",
      isDisabled: false,
      showLabel: true,
      automationId: "field",
      tealeafId: "field"
    };
  },

  _getDefaultText(): ReactElement | string {
    return this.props.showLabel && this.props.instructionText ?
      <span className="form-label-instructional">{` ${this.props.instructionText}`}</span> : "";
  },

  _getLabelText(): ReactElement | string {
    return this.props.showLabel && this.props.labelText ?
      <span className="form-label-text">{this.props.labelText}</span> : "";
  },

  render(): ReactElement {
    const extras = {
      "disabled": this.props.isDisabled
    };

    return (
      <label className={classNames(
        "form-label",
        extras,
        this.props.hidden ? "hide-content" : ""
      )}>
        {this._getLabelText()}
        {this._getDefaultText()}
        <Input {...this.props} ref="input" />
      </label>
    );
  }
});
