/**
 * A PasswordField is <Field type="password" /> with an additional `[ ] Show password`
 * checkbox. The resulting ascii art UI representation:
 *
 *  ._Password_____.          ._Password_____.
 *  |_******_______|          |_s3cr3t_______|
 *   [ ] Show password         [√] Show password
 *
 * @flow
 **/

import type {Props} from "../types";

import React, {Component, PropTypes} from "react";
import Instructions from "./instructions";

import {shouldDisplayError, shouldDisplayValid} from "./utils";

type P = {
  onChangeVisibility?: (event: any) => any;
} & Props;

type S = {
  type: "text"|"password";
}

type D = {
  shouldDisplayError: typeof shouldDisplayError;
  shouldDisplayValid: typeof shouldDisplayValid;
};

/**
 * <PasswordField
 *    name="example-field"
 *    touched={false}
 *    error=""
 *    value="helloThereSecuritySnooper!"
 *  />
 */
class PasswordField extends Component {
  props: P;
  state: S;
  static defaultProps: D = {
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChangeVisibility: PropTypes.func,
    label: PropTypes.any,
    instructions: PropTypes.any,
    shouldDisplayValid: PropTypes.func,
    shouldDisplayError: PropTypes.func
  };

  toggle: (event: any) => void;

  constructor(props:Props, context:any) {
    super(props, context);
    const initializeAsText = props.defaultChecked || props.checked;
    if (typeof props.checked === "undefined") {
      this.state = {type: initializeAsText ? "text" : "password"};
    }

    this.toggle = (event) => {
      if (typeof props.checked !== "undefined") {
        if (!this.props.onChangeVisibility) {
          console.warn( // eslint-disable-line
            "WARNING: PasswordField must be given an `onChangeVisibility` prop when passed a " +
            "`checked` property. See " +
            "https://facebook.github.io/react/docs/forms.html#controlled-components " +
            "for more information."
          );
        } else {
          this.props.onChangeVisibility(event);
        }
      } else {
        this.setState({
          type: this.state.type === "password" ? "text" : "password"
        });
      }
    };
  }

  render() {
    const {
      label,
      instructions,
      defaultChecked,
      checked,
      shouldDisplayError, // eslint-disable-line no-shadow
      shouldDisplayValid, // eslint-disable-line no-shadow
      ...props
    } = this.props;

    const hasError = shouldDisplayError(this.props);
    const isValid = shouldDisplayValid(this.props);
    let type;
    // controlled mode
    if (this.state) {
      type = this.state.type;
    } else {
      type = checked ? "text" : "password";
    }
    const isText = type === "text";

    return (
      <div
        className={`form-group ${props.disabled ? "form-group--disabled" : ""}`}>
        <label
          htmlFor={props.id || props.name}
          className="form-label-password">
          {(label || instructions)
            ? <div className="form-label">
                {label} {instructions && <Instructions>{instructions}</Instructions>}
              </div>
            : (props.placeholder && <span className="visuallyhidden">{props.placeholder}</span>)}
          <div className="validation-group">
            <label className="toggle-show-label">
              <input
                className="toggle-show-label-input"
                type="checkbox"
                checked={isText}
                onChange={this.toggle}
              />
              <span className="toggle-show-label-text">
                {isText ? "Hide password" : "Show password"}
              </span>
            </label>
            {hasError && <i className="validation-marker validation-marker-error" />}
            {isValid && <i className="validation-marker validation-marker-success" />}
            <input
              id={props.name}
              {...props}
              className={`form-control ${hasError ? "form-control--error" : ""}`}
              type={type}
            />
            {hasError && <p className="error-label">{props.error}</p>}
          </div>
        </label>
      </div>
    );
  }
}

export default PasswordField;
