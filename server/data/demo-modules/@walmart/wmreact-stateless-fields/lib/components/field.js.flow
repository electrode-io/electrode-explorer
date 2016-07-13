/* @flow */
import type {Props} from "../types";

import React, {Component, PropTypes} from "react";
import classnames from "classnames";
import Instructions from "./instructions";

import {shouldDisplayError, shouldDisplayValid} from "./utils";

/**
 * <Field
 *    name="example-field"
 *    touched={false}
 *    error=""
 *    value={213}
 *    type="number" />
 */
class Field extends Component {
  props: Props;
  static defaultProps: {
    element: string;
    shouldDisplayError: typeof shouldDisplayError;
    shouldDisplayValid: typeof shouldDisplayValid;
  } = {
    element: "input",
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    label: PropTypes.any,
    instructions: PropTypes.any,
    icon: PropTypes.any,
    shouldDisplayError: PropTypes.func,
    shouldDisplayValid: PropTypes.func
  };

  state: {};

  render() {
    const {
      label,
      instructions,
      shouldDisplayError, // eslint-disable-line no-shadow
      shouldDisplayValid, // eslint-disable-line no-shadow
      icon,
      ...props
    } = this.props;

    const hasError = shouldDisplayError(this.props);
    const isValid = shouldDisplayValid(this.props);

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
          <div className={classnames({
            "form-control-with-icon": icon,
            "form-control-with-icon--disabled": props.disabled,
            "form-control-with-icon--error": hasError
          })}>
            {icon && <span className="form-icon">{icon}</span>}
            <this.props.element
              id={props.name}
              {...props}
              className={`form-control ${hasError ? "form-control--error" : ""}`}
            />
            {icon && <span className="form-control-faux-shadow" />}
          </div>
          {hasError && <p className="error-label">{props.error}</p>}
        </div>
      </label>
    );
  }
}

export default Field;
