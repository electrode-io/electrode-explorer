/* @flow */
// This "field" is a dual field password intented for account creation scenarios.
// Forms that use this field can treat it as a single field.

import React from "react";
import Field from "./field";
import Layout from "@walmart/wmreact-layout/lib/components/layout";


// NOTE: normally, we would use the fieldValidationMixin from
//       react-validation, but that assumes a single field,
//       so a custom implementation of that mixin's API is here.
//       see: https://gecgithub01.walmart.com/react/zeus-components#methods
const customFieldValidationMixin = function (): {
  getValue: () => string;
  setValue: (val: string) => void;
  clearValidation: () => void;
  clearValue: () => void;
  isValid: () => boolean;
  passwordsMatch: () => boolean;
  validate: (isFormValidate: boolean) => boolean;
  invalidate: (message: string) => void;
  _setInvalidBecauseOfPasswordMismatch: () => void;
  resetInput: () => void;
} {
  return {
    getValue(): string {
      return this.refs.password1.getValue();
    },
    setValue(val: string): void {
      this.refs.password1.setValue(val);
      this.refs.password2.setValue(val);
    },
    clearValue(): void {
      this.refs.password1.clearValue();
      this.refs.password2.clearValue();
    },
    isValid(): boolean {
      return this.refs.password1.isValid()
        && this.refs.password2.isValid()
        && this.passwordsMatch();
    },
    passwordsMatch(): boolean {
      return this.refs.password1.getValue() === this.refs.password2.getValue();
    },
    validate(isFormValidate: boolean): boolean {
      let result = this.refs.password1.validate(isFormValidate)
        && this.refs.password2.validate(isFormValidate);

      if (!this.passwordsMatch()) {
        result = false;
        this._setInvalidBecauseOfPasswordMismatch();
      }
      return result;
    },
    invalidate(message: string): void {
      // Using the second field to show the error.
      this.refs.password1.invalidate();
      this.refs.password2.invalidate(message);
    },
    _setInvalidBecauseOfPasswordMismatch(): void {
      this.setState({
        isValid: false
      });
    },
    clearValidation(): void {
      this.refs.password1.clearValidation();
      this.refs.password2.clearValidation();
      this.setState({
        isValid: true
      });
    },
    resetInput(): void {
      this.refs.password1.resetInput();
      this.refs.password2.resetInput();
    }
  };
};

/**
Password with confirm field.
@examples
```jsx
<PasswordWithConfirmation />
```
@component PasswordWithConfirmation
@import {PasswordWithConfirmation}
@mixin fieldValidationMixin
@playground
```
<PasswordWithConfirmation />
```
*/
export default React.createClass({
  displayName: "passwordWithConfirmField",
  mixins: [customFieldValidationMixin()],

  propTypes: {
    /**
    The number of columns
    */
    cols: React.PropTypes.number,
    /**
    True if we should use the confirm label
    */
    useConfirmLabel: React.PropTypes.bool,
    /**
    True if we should use the password label
    */
    usePasswordLabel: React.PropTypes.bool,
    /**
    True if we should use the password place holder
    */
    usePasswordPlaceHolder: React.PropTypes.bool,
    /**
    True if we should use the confirm place holder
    */
    useConfirmPlaceHolder: React.PropTypes.bool,
    /**
    Called back when the value changes
    */
    onChange: React.PropTypes.func,
    /**
    True if the component is hidden
    */
    hidden: React.PropTypes.bool,
    /**
    The optional automation ID
    */
    automationId: React.PropTypes.string,
    /**
    The optional TeaLeaf ID
    */
    tealeafId: React.PropTypes.string
  },

  getDefaultProps(): {
    cols: number,
    useConfirmLabel: boolean,
    usePasswordLabel: boolean,
    useConfirmPlaceHolder: boolean,
    usePasswordPlaceHolder: boolean,
    automationId: string,
    tealeafId: string
  } {
    return {
      cols: 2,
      useConfirmLabel: true,
      usePasswordLabel: true,
      useConfirmPlaceHolder: false,
      usePasswordPlaceHolder: false,
      automationId: "password",
      tealeafId: "password"
    };
  },

  getInitialState(): {
    isValid: boolean
  } {
    return {
      isValid: true
    };
  },

  _checkIfCurrentPasswordMatchesOther(passwordRefCurrent: {
    validate: Function
  }, passwordRefOther: {getValue: Function}): void {
    const current = passwordRefCurrent;
    const other = passwordRefOther;
    const otherVal = other.getValue();
    if (otherVal.length) {
      if (this.passwordsMatch()) {
        const valid = current.validate();
        if (valid) {
          this.clearValidation();
        }
      } else {
        this._setInvalidBecauseOfPasswordMismatch();
      }
    }
  },

  _onChange1(): void {
    this._checkIfCurrentPasswordMatchesOther(this.refs.password1, this.refs.password2);
    if (this.props.onChange) {
      this.props.onChange.apply(this, arguments);
    }
  },

  _onChange2(): void {
    this._checkIfCurrentPasswordMatchesOther(this.refs.password2, this.refs.password1);
    if (this.props.onChange) {
      this.props.onChange.apply(this, arguments);
    }
  },

  render(): ReactElement {
    const {onChange, automationId, ...props} = this.props;
    // NOTE: below, automationId appears *after* props because we need to override the
    // id locally -- we'd otherwise end up with two fields with the same automationId.
    const pwAutomationId = `${this.props.automationId}-entry`;
    const confirmAutomationId = `${this.props.automationId}-confirm`;
    const pwTeaLeafId = `${this.props.tealeafId}-entry`;
    const confirmTeaLeafId = `${this.props.tealeafId}-confirm`;
    return (
      <div>
        <Layout small={this.props.cols} padded={true} hidden={!!this.props.hidden}>
          <Field
            ref="password1"
            inputName="password1"
            labelText={this.props.usePasswordLabel ? "Password" : ""}
            placeholderText={this.props.usePasswordPlaceHolder ? "Password" : ""}
            inputType="password"
            validationType="password"
            onChange={this._onChange1}
            {...props}
            automationId={pwAutomationId || ""}
            tealeafId={pwTeaLeafId || ""} />
          <Field
            ref="password2"
            inputName="password2"
            labelText={this.props.useConfirmLabel ? "Re-enter password" : ""}
            placeholderText={this.props.useConfirmPlaceHolder ? "Re-enter password" : ""}
            inputType="password"
            validationType="password"
            onChange={this._onChange2}
            {...props}
            automationId={confirmAutomationId}
            tealeafId={confirmTeaLeafId} />
        </Layout>
        {this.state.isValid ? null : (
            <p className="error-label">passwords need to match</p>
        )}
      </div>
    );
  }
});
