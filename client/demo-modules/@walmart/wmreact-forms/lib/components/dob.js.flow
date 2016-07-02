/* @flow */
import React, { PropTypes } from "react";
import Field from "./field";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";

/**
Date of birth field.
@examples
```jsx
<DOB />
```
@component DOB
@import {DOB}
@wraps Field
@mixin fieldValidationMixin
@playground
DOB
```
<DOB />
```
*/
export default React.createClass({
  displayName: "DOB",

  mixins: [fieldValidationMixin(["dob"])],

  propTypes: {
    labelText: PropTypes.string,
    placeholderText: PropTypes.string,
    automationId: PropTypes.string
  },

  getDefaultProps(): {
    automationId: string,
    labelText: string,
    placeholderText: string
  } {
    return {
      automationId: "date-of-birth",
      labelText: "Date of birth",
      placeholderText: "mm/dd/yyyy"
    };
  },

  render(): ReactElement {
    const { labelText, placeholderText } = this.props;

    return (
      <Field
        ref="dob"
        inputName="dob"
        labelText={labelText}
        placeholderText={placeholderText}
        validationType="dob"
        mask="date"
        {...this.props} />
    );
  }
});
