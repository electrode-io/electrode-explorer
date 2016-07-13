/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Store number field.
@examples
```jsx
<StoreNumber />
```
@component StoreNumber
@import {StoreNumber}
@wraps Field
@mixin fieldValidationMixin
@playground
StoreNumber
```
<StoreNumber />
```
*/
export default React.createClass({
  displayName: "StoreNumberField",

  mixins: [fieldValidationMixin(["storeNumberField"])],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "store-number"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="storeNumberField"
        inputName="storeNumber"
        labelText="Store #"
        instructionText="(4 digits)"
        validationType="exactdigitlength"
        validationParams={4}
        errorLabel="Please enter a valid store number."
        {...this.props} />
    );
  }
});
