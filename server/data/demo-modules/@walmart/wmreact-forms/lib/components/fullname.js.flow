/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Full name field.
@examples
```jsx
<FullName />
```
@component FullName
@import {FullName}
@wraps Field
@mixin fieldValidationMixin
@playground
FullName
```
<FullName />
```
*/
const FullNameField = React.createClass({
  displayName: "FullName",

  mixins: [fieldValidationMixin("fullNameField")],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "full-name"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="fullNameField"
        inputName="fullName"
        labelText="Full name"
        validationType="fullname"
        {...this.props} />
    );
  }
});

export default FullNameField;
