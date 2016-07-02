"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var required = { validate: function validate(val) {
    return !!val;
  }, message: "This information is required" };
exports.required = required;
var equalToField = function equalToField(field, message) {
  return {
    validate: function validate(val, _ref) {
      var other = _ref[field];
      return val === other;
    },
    message: message || "Values needs to match"
  };
};
exports.equalToField = equalToField;