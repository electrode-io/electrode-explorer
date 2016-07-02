/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Full name field.
@examples
```jsx
<LastName />
```
@component LastName
@import {LastName}
@wraps Field
@mixin fieldValidationMixin
@playground
LastName
```
<LastName />
```
*/
export default React.createClass({
  displayName: "lastNameField",
  mixins: [fieldValidationMixin(["lastNameField"])],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "last-name"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="lastNameField"
        inputName="lastName"
        labelText="Last name"
        validationType="lastname"
        {...this.props} />
    );
  }
});
