/* @flow */
import type {MaskedProps} from "../types";

import React, {Component, PropTypes} from "react";
import classnames from "classnames";
import MaskedInput from "react-maskedinput";
import Instructions from "./instructions";

import {shouldDisplayError, shouldDisplayValid} from "./utils";

/**
 * <MaskedField
 *    mask="(111) 111-1111"
 *    name="example-field"
 *    touched={false}
 *    error=""
 *  />
 */
class MaskedField extends Component {
  props: MaskedProps;
  static defaultProps: {
    shouldDisplayError: typeof shouldDisplayError;
    shouldDisplayValid: typeof shouldDisplayValid;
  } = {
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    label: PropTypes.any,
    instructions: PropTypes.any,
    icon: PropTypes.any,
    shouldDisplayValid: PropTypes.func,
    shouldDisplayError: PropTypes.func
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
            <MaskedInput
              id={props.name}
              {...props}
              className={classnames("form-control", {"form-control--error": hasError})}
            />
            {icon && <span className="form-control-faux-shadow" />}
          </div>
          {hasError && <p className="error-label">{props.error}</p>}
        </div>
      </label>
    );
  }
}

export default MaskedField;

