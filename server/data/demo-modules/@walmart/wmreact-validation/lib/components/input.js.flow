/* global setTimeout */
/* eslint-disable no-invalid-this */
import React from "react";

// JSX gets compiled to lib
import masker from "../masker";
import validators from "../validators";
import maskMap from "../maps/mask-map";
import cloneDeep from "lodash/cloneDeep";
import classNames from "classnames";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";

module.exports = React.createClass({
  displayName: "Input",
  propTypes: {
    inputName: React.PropTypes.string.isRequired,
    validationType(props, propName) {
      // If it's not a function and not a string that corresponds to a validator, it's not valid
      if (typeof props[propName] !== "function" &&
        typeof validators[props[propName]] === "undefined") {
        return new Error("validationType must be a function or a validator name");
      }
    },
    validationParams: React.PropTypes.any,
    isRequiredField: React.PropTypes.bool,
    errorLabel: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    placeholderText: React.PropTypes.string,
    inputType: React.PropTypes.string,
    mask: React.PropTypes.string,
    isDisabled: React.PropTypes.bool,
    isLocked: React.PropTypes.bool,
    lockedClassName: React.PropTypes.string,
    isMini: React.PropTypes.bool,
    showPlaceholder: React.PropTypes.bool,
    automationId: React.PropTypes.string,
    tealeafId: React.PropTypes.string,
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
  },
  getDefaultProps() {
    return {
      inputName: "",
      validationType: "legaltext",
      isRequiredField: true,
      errorLabel: "",
      defaultValue: "",
      placeholderText: "",
      inputType: "text",
      isDisabled: false,
      isLocked: false,
      lockedClassName: "",
      isMini: false,
      showPlaceholder: false,
      automationId: undefined,
      tealeafId: undefined
    };
  },
  contextTypes: {
    analytics: React.PropTypes.object
  },
  cleanState() {
    if (this.props.isLocked) {
      return {
        hasBlurred: false,
        val: this.props.defaultValue,
        isValid: true,
        errorMessage: ""
      };
    }

    let val = this.props.defaultValue || "";

    if ((val || !this.props.showPlaceholder) && this.props.mask) {
      const el = {
        value: val,
        selectionStart: 0
      };

      const mask = masker(el, {
        pattern: this.getMask()
      });

      val = mask.value;
    }

    return {
      hasBlurred: false,
      val,
      isValid: true,
      errorMessage: ""
    };
  },
  getInitialState() {
    return this.cleanState();
  },
  isValid() {
    return this.state.isValid;
  },
  getValue() {
    return this.state.val;
  },
  setValue(newVal, shouldMask) {
    fireDataEvent(this, "setValue", {
      value: newVal,
      shouldMask
    });
    if (shouldMask && this.props.mask) {
      const el = {
        value: newVal,
        selectionStart: 0
      };
      const mask = masker(el, {
        pattern: this.getMask()
      });

      newVal = mask.value;
    }

    this.setState({
      val: newVal
    });
  },
  clearValue() {
    fireDataEvent(this, "clearValue", {});
    let mask;

    if (this.props.mask) {
      const el = {
        value: "",
        selectionStart: 0
      };
      mask = masker(el, {
        pattern: this.getMask()
      });
    }

    this.setState({
      val: mask ? mask.value : ""
    });
  },
  getMask() {
    if (maskMap[this.props.mask]) {
      return maskMap[this.props.mask];
    } else {
      return this.props.mask;
    }
  },
  onFocus(ev) {
    fireUIEvent(this, ev);
    if (this.props.onFocus) {
      this.props.onFocus(ev);
    }

    if (this.props.mask) {
      const mask = masker(
        this.refs.input, {
          pattern: this.getMask()
        });

      // if we were skipping the mask to show the placeholder, now apply it
      if (mask.count === 0 && this.props.showPlaceholder) {
        this.onChange();
      }

      const self = this;
      setTimeout(() => {
        self.refs.input.setSelectionRange(
          mask.cursor.start,
          mask.cursor.end
        );
      }, 0);
    }
  },
  /* eslint-disable max-statements */
  validate() {
    let validation = {};
    let isValid = true;
    const errorLabel = this.props.errorLabel;
    let validationParams = this.props.validationParams;

    // If not required (and is still empty) and form called validate, return true
    if (!this.props.isRequiredField && this.state.val === "") {
      return isValid;
    }

    // If the field has been locked return true
    if (this.props.isLocked) {
      return isValid;
    }

    let mask = {};
    if (this.props.mask) {
      mask = masker(
        this.refs.input, {
          pattern: this.getMask()
        });
    }

    // If required and empty, show required message and is not valid
    if (this.props.isRequiredField &&
      (this.props.mask ? mask.count === 0 : this.state.val === "")
    ) {
      validation = validators.required;
      isValid = false;
    // If not required validate from a string or a function, see propTypes
    } else if (typeof this.props.validationType === "string") {
      // If the params are not already in an array put them in one for spread syntax
      if (!Array.isArray(this.props.validationParams)) {
        validationParams = [this.props.validationParams];
      }

      validation = validators[this.props.validationType];
      isValid = validation.validate(this.state.val, ...validationParams);

      if (errorLabel) {
        validation.message = errorLabel;
      }
    } else {
      isValid = this.props.validationType(this.state.val);

      if (errorLabel) {
        validation.message = errorLabel;
      }
    }

    this.setState({
      hasBlurred: true,
      isValid,
      errorMessage: validation.message
    });

    if (!isValid) {
      fireDataEvent(this, "validate-fail", {errorMessage: validation.message});
    }

    return isValid;
  },
  /* eslint-enable max-statements */
  // Used for server error invalidation
  invalidate(message) {
    fireDataEvent(this, "invalidate", {message});

    // Reset hasBlurred so that typing doesn't immediately clear server message
    const state = {
      isValid: false,
      hasBlurred: false
    };

    if (message) {
      state.errorMessage = message;
    }

    this.setState(state);
  },
  clearValidation() {
    fireDataEvent(this, "clearValidation", {});
    this.setState({
      isValid: true,
      hasBlurred: false
    });
  },
  resetInput() {
    fireDataEvent(this, "resetInput", {});
    this.clearValidation();
    this.clearValue();
  },
  onBlur(ev) {
    fireUIEvent(this, ev);

    if (this.props.mask) {
      const mask = masker(
        this.refs.input, {
          pattern: this.getMask()
        });
      if (mask.count === 0) {
        this.setState({val: ""}, this.validate.bind(this, false));
        return;
      }
    }

    if (this.props.onBlur) {
      this.props.onBlur(ev);
    }

    if (!this.state.hasBlurred) {
      this.setState({
        hasBlurred: true
      }, this.validate.bind(this, false));
    } else {
      this.validate();
    }
  },
  onChange(ev) {
    if (ev !== undefined) {
      fireUIEvent(this, ev);
    } else {
      fireDataEvent(this, "onChange", {});
    }

    // ev references dissapear after setState
    // so we cache the whole object to pass to setState callback
    const cachedEv = cloneDeep(ev);

    if (this.props.mask) {

      const mask = masker(
        this.refs.input, {
          pattern: this.getMask()
        });

      this.setState({
        val: mask.value
      }, () => {
        if (this.props.onChange) {
          this.props.onChange(cachedEv);
        }
        this.refs.input.setSelectionRange(
          mask.cursor.start,
          mask.cursor.end
        );

        if (!this.state.hasBlurred) {
          return;
        }

        this.validate();

      });

    } else {

      this.setState({
        val: ev.target.value
      }, function () {
        if (this.props.onChange) {
          this.props.onChange(cachedEv);
        }
        if (!this.state.hasBlurred) {
          return;
        }

        this.validate();
      });

    }
  },
  render() {
    if (this.props.isLocked) {
      return (
        <div className="validation-group">
          <span
            data-automation-id={this.props.automationId}
            data-tl-id={this.props.tealeafId}
            className={this.props.lockedClassName}
          >
            {this.state.val}
          </span>
        </div>
      );
    }

    return (
      <div className="validation-group">
        <input
          {...this.props}
          ref="input"
          name={this.props.inputName}
          className={classNames(
            this.props.className,
            "form-control",
            {
              "form-control-mini": this.props.isMini,
              "error": !this.state.isValid
            }
          )}
          data-automation-id={this.props.automationId}
          data-tl-id={this.props.tealeafId}
          type={this.props.inputType}
          disabled={this.props.isDisabled ? "disabled" : ""}
          value={this.state.val}
          placeholder={this.props.placeholderText}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus} />
        {this.state.isValid ? "" :
          <i className="validation-marker validation-marker-error">
            <span className="visuallyhidden">Help</span>
          </i>
        }
        {this.state.isValid ? "" :
          <p className="error-label">{this.state.errorMessage}</p>
        }
      </div>
    );
  }
});
