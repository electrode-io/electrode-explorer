import invoke from "lodash/invoke";

// refName must refer to a react-validation Input component
module.exports = (refName) => {
  return {
    getValue() {
      return invoke(this.refs[refName], "getValue");
    },
    setValue(val) {
      invoke(this.refs[refName], "setValue", val);
    },
    clearValue() {
      invoke(this.refs[refName], "clearValue");
    },
    isValid() {
      return invoke(this.refs[refName], "isValid");
    },
    validate(isFormValidate) {
      return invoke(this.refs[refName], "validate", isFormValidate);
    },
    // Used for server error invalidation
    invalidate(message) {
      return invoke(this.refs[refName], "invalidate", message);
    },
    clearValidation() {
      invoke(this.refs[refName], "clearValidation");
    },
    // Clear both value and validation
    resetInput() {
      invoke(this.refs[refName], "resetInput");
    }
  };
};
