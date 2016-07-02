/* @flow */
// This form field is intended for scenarios where the user is inputting their existing password.

import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Existing Password field.
@examples
```jsx
<PasswordExisting />
```
@component PasswordExisting
@import {PasswordExisting}
@wraps Field
@mixin fieldValidationMixin
@playground
PasswordExisting
```
<PasswordExisting />
```
*/
export default React.createClass({
  displayName: "passwordExistingField",

  mixins: [fieldValidationMixin(["passwordExistingField"])],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "password-existing"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="passwordExistingField"
        inputName="passwordExistingField"
        labelText="Your Walmart.com account password"
        placeholderText=""
        inputType="password"
        validationType="notEmpty"
        {...this.props} />
    );
  }
});
