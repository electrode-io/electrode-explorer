/* @flow */
/* eslint react/prop-types: 0*/

import type {Props} from "../types";

import React, {Component, PropTypes} from "react";
import classnames from "classnames";
import Instructions from "./instructions";

import {shouldDisplayError, shouldDisplayValid} from "./utils";

/**
 * <SelectField name="example-field">
 *   <option>Hello</option>
 *   <option>World</option>
 *   <option>Good night</option>
 *   <option>Moon</option>
 * </SelectField>
 */
class SelectField extends Component {
  props: Props;
  static defaultProps: {
    shouldDisplayError: typeof shouldDisplayError;
    shouldDisplayValid: typeof shouldDisplayValid;
  } = {
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    label: PropTypes.any.isRequired,
    instructions: PropTypes.any,
    shouldDisplayError: PropTypes.func.isRequired,
    shouldDisplayValid: PropTypes.func
  };

  render() {
    const {
      label,
      instructions,
      shouldDisplayError, // eslint-disable-line no-shadow
      shouldDisplayValid, // eslint-disable-line no-shadow
      ...props
    } = this.props;

    const hasError = shouldDisplayError(this.props);
    const isValid = shouldDisplayValid(this.props);
    const showCaret = props.disabled || (!isValid && !hasError);

    return (
      <label
        className={`form-group ${props.disabled ? "form-group--disabled" : ""}`}
        htmlFor={props.id || props.name}>
        {(label || instructions)
          ? <div className="form-label">
              {label} {instructions && <Instructions>{instructions}</Instructions>}
            </div>
          : (props.placeholder && <span className="visuallyhidden">{props.placeholder}</span>)}
        <div className="validation-group">
          {hasError && <i className="validation-marker validation-marker-error" />}
          {isValid && <i className="validation-marker validation-marker-success" />}
          {showCaret &&
            <svg
              className="select-field--caret"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="6">
              <polygon fill={props.disabled ? "#C2CFD6" : "#027DC3"} points="5.5,6 0,0 11,0" />
            </svg>
          }
          <select
            id={props.name}
            {...props}
            className={classnames("select-field", {
              "select-field--error": hasError,
              "select-field--success": isValid
            })}>
            {props.children}
          </select>
          {hasError && (
            <p
              className="error-label"
              data-automation-id={`${this.props["data-automation-id"] || "selectField"}-error`}>
              {props.error}
            </p>
          )}
        </div>
      </label>
    );
  }
}

export default SelectField;
