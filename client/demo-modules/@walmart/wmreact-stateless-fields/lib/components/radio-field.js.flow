/* @flow */
import type {Props} from "../types";

import React, {Component, PropTypes} from "react";
import Instructions from "./instructions";
import classnames from "classnames";

import {shouldDisplayError, shouldDisplayValid} from "./utils";

type RadioProps = {
  type: ?("alt" | "hero");
} & Props;

type DefaultProps = {
   shouldDisplayError: typeof shouldDisplayError;
   shouldDisplayValid: typeof shouldDisplayValid;
};

/**
 * <RadioField
 *    id="radio-test"
 *    name="test"
 *    touched={false}
 *    error=""
 *    checked=true
 *  />
 */
class RadioField extends Component {
  props: RadioProps;
  static defaultProps: DefaultProps = {
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.any.isRequired,
    instructions: PropTypes.any,
    shouldDisplayError: PropTypes.func.isRequired,
    shouldDisplayValid: PropTypes.func
  };

  render() {
    const {
      label,
      type,
      instructions,
      shouldDisplayError, // eslint-disable-line no-shadow
      shouldDisplayValid, // eslint-disable-line no-shadow
      ...props
    } = this.props;

    const hasError = shouldDisplayError(this.props);
    const isValid = shouldDisplayValid(this.props);

    return (
      <label
        className={classnames("radio", {
          "radio-alt": type === "alt",
          "radio-hero": type === "hero"
        })}
        htmlFor={props.id || props.name}>
        <div className="validation-group">
          <input
            type="radio"
            id={props.name}
            {...props}
            className=""
          />
          <div
            className={`radio-content ${hasError ? "radio-content--error" : ""}`}>
            {label}
            {instructions && <Instructions><br />{instructions}</Instructions>}
            {hasError && <i className="validation-marker validation-marker-error" />}
            {isValid && <i className="validation-marker validation-marker-success" />}
          </div>
        </div>
        {hasError && <p className="error-label">{props.error}</p>}
      </label>
    );
  }
}

export default RadioField;
