import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Zipcode field.
@examples
```jsx
<ZipCode />
```
@component ZipCode
@import {ZipCode}
@wraps Field
@mixin fieldValidationMixin
@playground
ZipCode
```
<ZipCode />
```
*/
export default React.createClass({
  displayName: "zipCodeField",

  mixins: [fieldValidationMixin(["zipCode"])],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "zipcode"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="zipCode"
        inputName="zip-code"
        labelText="ZIP Code"
        validationType="postalcode"
        {...this.props} />
    );
  }
});
