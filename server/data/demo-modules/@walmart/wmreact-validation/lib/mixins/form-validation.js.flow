import map from "lodash/map";
import errorMessageMap from "../maps/error-message-map";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";

// refName must refer to a react-validation Input component
module.exports = (refNames) => {
  return {
    getInvalidMessage() {
      return errorMessageMap.form_invalid_error.message;
    },
    // Only returns current state of form, does not call validate on inputs
    isValid() {
      let valid = true;
      refNames.forEach((refName) => {
        if (!this.refs[refName].isValid()) {
          valid = false;
        }
      }, this);

      return valid;
    },
    // Calls validate on each input, will update state on inputs and this form
    validate() {
      let valid = true;
      refNames.forEach((refName) => {
        if (!this.refs[refName].validate(/*isFormValidate*/true)) {
          valid = false;
        }
      }, this);

      fireDataEvent(this, "valid", {valid});

      return valid;
    },
    // Takes a map of {refName: "field specific message"}
    invalidate(fieldErrorMap) {
      map(fieldErrorMap, (message, refName) => {
        this.refs[refName].invalidate(message);
      }, this);
    },
    clearValidation() {
      fireDataEvent(this, "clearValidation", {});
      refNames.forEach((refName) => {
        this.refs[refName].clearValidation();
      }, this);
    },
    clearValues() {
      fireDataEvent(this, "clearValues", {});
      refNames.forEach((refName) => {
        this.refs[refName].clearValue();
      }, this);
    },
    resetForm() {
      fireDataEvent(this, "resetForm", {});
      refNames.forEach((refName) => {
        this.refs[refName].resetInput();
      }, this);
    }
  };
};
