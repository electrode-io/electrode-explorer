/* @flow */
import type {Props, MaskedProps} from "../types";

import React, {Component, PropTypes} from "react";
import MaskedInput from "react-maskedinput";
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
class FloatingField extends Component {
  props: Props & MaskedProps;
  static defaultProps: {
    shouldDisplayError: typeof shouldDisplayError;
    shouldDisplayValid: typeof shouldDisplayValid;
  } = {
    shouldDisplayError,
    shouldDisplayValid
  };

  static propTypes = {
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    label: PropTypes.any,
    instructions: PropTypes.any,
    icon: PropTypes.any,
    mask: PropTypes.any,
    placeholder: PropTypes.any,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    shouldDisplayError: PropTypes.func,
    shouldDisplayValid: PropTypes.func
  };

  state: {
    floating: boolean;
    focused: boolean;
  };

  // input ref for when operating in defaultValue mode
  input: any;
  onFocus: (...args:any) => void;
  onBlur: (...args:any) => void;

  constructor(props:Props, context:any) {
    super(props, context);

    // initial floating state is based on whether a value is pased in or not
    this.state = {
      floating: !!props.value || !!props.defaultValue,
      focused: false
    };

    this.onFocus = (...args) => {
      this.setState({floating: true, focused: true});
      if (this.props.onFocus) {
        this.props.onFocus(...args);
      }
    };
    this.onBlur = (...args) => {
      this.setState({focused: false});
      if (typeof this.props.defaultValue === "undefined" && !this.props.value) {
        this.setState({floating: false});
      } else if (typeof this.props.defaultValue === "string" && this.input && !this.input.value) {
        this.setState({floating: false});
      }
      if (this.props.onBlur) {
        this.props.onBlur(...args);
      }
    };
  }

  componentWillReceiveProps(nextProps:Props & MaskedProps) {
    if (this.props.value === nextProps.value) {
      return;
    }
    if (nextProps.value) {
      this.setState({floating: true});
    } else if (typeof nextProps.defaultValue === "undefined") {
      this.setState({floating: false});
    }
  }

  render() {
    // don’t pass the placeholder through
    const {
      label,
      instructions,
      placeholder,
      shouldDisplayError, // eslint-disable-line no-shadow
      shouldDisplayValid, // eslint-disable-line no-shadow
      mask,
      icon,
      ...props
    } = this.props;

    const hasError = shouldDisplayError(this.props);
    const isValid = shouldDisplayValid(this.props);

    const {floating, focused} = this.state;
    const InputComponent = mask ? MaskedInput : "input";
    // This comment is regarding `mask` and `placeholder` props of the previous Component
    // When the InputComponent is a MaskedInput, we want to override the placeholder when the
    // label has no value and is not focused
    const maskProps = mask ? {
      mask,
      placeholder: !focused && " ",
      value: props.defaultValue ? props.defaultValue : props.value
    } : {};

    return (
      <label
        className={`form-group form-group--float ${props.disabled ? "form-group--disabled" : ""}`}
        htmlFor={props.id || props.name}>
        <div className={classnames("form-label-float", {
          "form-label-float--focused": focused,
          "form-label-float--floating": focused || floating
        })}>
          {icon && !floating && <span className="form-icon-spacer">{icon}</span>}
          <span className="form-label">
            {label || placeholder} {instructions && <Instructions>{instructions}</Instructions>}
          </span>
        </div>
        <div className="validation-group">
          {hasError && <i className="validation-marker validation-marker-error" />}
          {isValid && <i className="validation-marker validation-marker-success" />}
          <div className={classnames({
            "form-control-with-icon": icon,
            "form-control-with-icon--disabled": props.disabled,
            "form-control-with-icon--error": hasError,
            "form-control-with-icon--focus": focused
          })}>
            {icon && <span className="form-icon">{icon}</span>}
            <InputComponent
              ref={(node) => {
                // if it’s a MaskedInput, grab it’s `input` node
                if (node) {
                  this.input = node.input ? node.input : node;
                }
              }}
              id={props.name}
              {...props}
              className={`form-control form-control--float ${hasError ? "form-control--error" : ""}`} // eslint-disable-line
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              {...maskProps}
            />
          </div>
          {hasError && <p className="error-label">{props.error}</p>}
        </div>
      </label>
    );
  }
}

export default FloatingField;

