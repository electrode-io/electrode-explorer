import Icon from "@walmart/wmreact-base/lib/components/icon";
import React from "react";

import classNames from "classnames";

let __incrId = 0;

// see: https://gecgithub01.walmart.com/react/zeus-components#methods
const customValidationMixin = function (): {
  setValue: (checked: boolean) => void;
  getValue: () => boolean;
  clearValue: () => void;
  invalidate: (message: string) => void;
  clearValidation: () => void;
  resetInput: () => void;
} {
  return {
    setValue(checked: boolean): void {
      this.setState({
        checked
      });
    },
    getValue(): boolean {
      return this.state.checked;
    },
    clearValue(): void {
      const originalValue = (typeof this.props.defaultChecked !== "undefined")
        ? this.props.defaultChecked
        : false;

      this.setState({
        checked: originalValue
      });
    },
    invalidate(message: string): void {
      const state: { isValid: boolean; errorMessage: ?string; } = {
        isValid: false,
        errorMessage: null
      };
      if (typeof message === "string") {
        state.errorMessage = message;
      }
      this.setState(state);
    },
    clearValidation(): void {
      this.setState({
        isValid: true
      });
    },
    resetInput(): void {
      this.clearValidation();
      this.clearValue();
    }
  };
};

/**
A checkbox (or option).
@examples
```jsx
<Option
  checkboxName="demo">
  Click me
</Option>
```
@component Option
@import {Option}
@synonym checkbox
@playground
Option
```
<Option
  checkboxName="demo">
  Click me
</Option>
```
*/
export default React.createClass({
  displayName: "Option",

  mixins: [customValidationMixin()],

  propTypes: {
    idName: React.PropTypes.string,
    /**
    Called when the check state changes
    */
    onCheckedChange: React.PropTypes.func,
    /**
    The name of the checkbox
    */
    checkboxName: React.PropTypes.string.isRequired,
    /**
    True if disabled
    */
    disabled: React.PropTypes.bool,
    children: React.PropTypes.node,
    /**
    True if the input defaults to checked.
    */
    defaultChecked: React.PropTypes.bool,
    /**
    The optional automation ID.
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    /**
    The optional TeaLeaf ID.
    */
    tealeafId: React.PropTypes.string
  },

  getInitialState(): {
    isValid: boolean,
    checked: boolean,
    id: string
  } {
    return {
      isValid: true,
      checked: this.props.defaultChecked ? this.props.defaultChecked : false,
      id: this.props.idName || `checkbox-${(__incrId++)}`
    };
  },

  getDefaultProps(): {automationId: string, tealeafId: string, idName: string} {
    return {
      automationId: "option",
      tealeafId: "option",
      idName: ""
    };
  },

  componentWillReceiveProps(nextProps: Object): void {
    this.setState({
      checked: nextProps.defaultChecked
    });
  },

  _handleChange(ev: Object): void {
    this.setState({
      checked: ev.target.checked
    }, () => {
      if (this.props.onCheckedChange) {
        this.props.onCheckedChange(this.state.checked);
      }
    });
  },

  render(): ReactElement {
    const marker = this.state.isValid ?
      null :
      <Icon.ValidationMarker error={this.state.errorMessage} />;

    const {children, ...other} = this.props;

    if (this.props.disabled) {
      other["aria-disabled"] = true;
    }
    return (
      <div className={classNames(
        "option",
        this.props.hidden ? "hide-content" : ""
      )}
        data-automation-id={this.props.automationId}>
        <input
          type="checkbox"
          name={this.props.checkboxName}
          id={this.state.id}
          data-tl-id={this.props.tealeafId}
          checked={this.state.checked}
          onChange={this._handleChange}
          {...other}/>
        <label
          htmlFor={this.state.id}
          className={this.state.isValid ? "" : "validation-error"}>
            {this.props.children}
            {marker}
        </label>
      </div>
    );
  }
});
