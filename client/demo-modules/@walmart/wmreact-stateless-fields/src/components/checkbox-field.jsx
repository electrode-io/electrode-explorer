/**
 * @flow
 **/

/* eslint react/prop-types: 0*/

import type {Props} from "../types";

import React, {Component, PropTypes} from "react";
import classnames from "classnames";

import {shouldDisplayError, shouldDisplayValid} from "./utils";

type CheckboxProps = {
  isSmall: boolean;
  type: "standard"|"checkout"|"form";
} & Props;

type DefaultProps = {
  type: "standard";
  isSmall: boolean;
};

/**
Stateless checkbox field
@examples
```jsx
<CheckboxField
  name="example-field"
  touched={false}
  error=""
  checked={true}
/>
```
@component CheckboxField
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@import {CheckboxField}
@playground
```
<CheckboxField
  name="example-field"
  touched={false}
  error=""
  checked={true}
/>
```
*/
class CheckboxField extends Component {
  props: CheckboxProps;
  static defaultProps: DefaultProps = {
    type: "standard",
    isSmall: false,
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    label: PropTypes.any.isRequired,
    type: PropTypes.oneOf(["standard", "checkout", "form"]),
    isSmall: PropTypes.bool,
    shouldDisplayError: PropTypes.func.isRequired,
    shouldDisplayValid: PropTypes.func
  };

  render() {
    const {
      label,
      type,
      isSmall,
      shouldDisplayError, // eslint-disable-line no-shadow
      shouldDisplayValid, // eslint-disable-line no-shadow
      ...props
    } = this.props;

    const hasError = shouldDisplayError(this.props);
    const isValid = shouldDisplayValid(this.props);

    // TODO: disabled?
    return (
      <label
        className={classnames("option", {
          "option-checkout": type === "checkout",
          "option-form-control": type === "form",
          "option-small": isSmall
        })}
        htmlFor={props.id || props.name}>
        <div className="validation-group">
          <input
            type="checkbox"
            id={props.name}
            {...props}
            className="visuallyhidden"
          />
          <div className={`option-content ${hasError ? "option-content--error" : ""}`}>
            {label}
            &nbsp;
            {hasError && <i className="validation-marker validation-marker-error" />}
            {isValid && <i className="validation-marker validation-marker-success" />}
          </div>
          {hasError && (
            <p className="error-label"
              data-automation-id={`${this.props["data-automation-id"] || "checkboxField"}-error`}>
              {props.error}
            </p>
          )}
        </div>
      </label>
    );
  }
}

export default CheckboxField;
