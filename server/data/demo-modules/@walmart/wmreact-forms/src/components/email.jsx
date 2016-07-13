/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Email field.
@examples
```jsx
<Email />
```
@component Email
@import {Email}
@wraps Field
@mixin fieldValidationMixin
@playground
Email
```
<Email />
```
*/
export default React.createClass({
  displayName: "emailField",
  mixins: [fieldValidationMixin(["emailField"])],

  getDefaultProps(): Object {
    return {
      automationId: "email-address"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="emailField"
        inputName="email"
        labelText="Email"
        placeholderText="yourname@example.com"
        validationType="email"
        autoCapitalize="off"
        {...this.props} />
    );
  }
});
