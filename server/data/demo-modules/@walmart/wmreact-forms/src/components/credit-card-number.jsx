/* @flow */
import React from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Credit card number field.
@examples
```jsx
<CreditCardNumber />
```
@component CreditCardNumber
@import {CreditCardNumber}
@wraps Field
@mixin fieldValidationMixin
@playground
CreditCardNumber
```
<CreditCardNumber />
```
*/
const CreditCardNumber = React.createClass({
  displayName: "CreditCardNumberField",

  mixins: [fieldValidationMixin("credit-card-number-field")],

  getDefaultProps(): {automationId: string} {
    return {
      automationId: "credit-card-number"
    };
  },

  render(): ReactElement {
    return (
      <Field
        ref="credit-card-number-field"
        inputName="credit-card-number"
        labelText="Card number"
        validationType="creditcard"
        maxLength="16"
        errorLabel="Please enter a valid credit card number"
        {...this.props} />
    );
  }
});

export default CreditCardNumber;
