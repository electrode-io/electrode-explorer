/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Phone number field.
@examples
```jsx
<Phone />
```
@component Phone
@import {Phone}
@wraps Field
@mixin fieldValidationMixin
@playground
Phone
```
<Phone />
```
*/
export default React.createClass({
  displayName: "PhoneNumber",

  mixins: [fieldValidationMixin("phone")],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "phone-number"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="phone"
        inputName="phone"
        labelText="Phone number"
        validationType="phone"
        mask="phone"
        placeholderText="(   )    -    "
        showPlaceholder={true}
        {...this.props} />
    );
  }
});
