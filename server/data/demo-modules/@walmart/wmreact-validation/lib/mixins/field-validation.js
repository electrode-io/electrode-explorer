"use strict";

var _invoke = require("lodash/invoke");

var _invoke2 = _interopRequireDefault(_invoke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// refName must refer to a react-validation Input component
module.exports = function (refName) {
  return {
    getValue: function getValue() {
      return (0, _invoke2.default)(this.refs[refName], "getValue");
    },
    setValue: function setValue(val) {
      (0, _invoke2.default)(this.refs[refName], "setValue", val);
    },
    clearValue: function clearValue() {
      (0, _invoke2.default)(this.refs[refName], "clearValue");
    },
    isValid: function isValid() {
      return (0, _invoke2.default)(this.refs[refName], "isValid");
    },
    validate: function validate(isFormValidate) {
      return (0, _invoke2.default)(this.refs[refName], "validate", isFormValidate);
    },

    // Used for server error invalidation
    invalidate: function invalidate(message) {
      return (0, _invoke2.default)(this.refs[refName], "invalidate", message);
    },
    clearValidation: function clearValidation() {
      (0, _invoke2.default)(this.refs[refName], "clearValidation");
    },

    // Clear both value and validation
    resetInput: function resetInput() {
      (0, _invoke2.default)(this.refs[refName], "resetInput");
    }
  };
};