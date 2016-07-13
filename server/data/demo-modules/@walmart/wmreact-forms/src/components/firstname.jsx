/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
First name field.
@examples
```jsx
<FirstName />
```
@component FirstName
@import {FirstName}
@wraps Field
@mixin fieldValidationMixin
@playground
FirstName
```
<FirstName />
```
*/
export default React.createClass({
  displayName: "firstNameField",
  mixins: [fieldValidationMixin(["firstNameField"])],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "first-name"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="firstNameField"
        inputName="firstName"
        labelText="First name"
        validationType="firstname"
        {...this.props} />
    );
  }
});
