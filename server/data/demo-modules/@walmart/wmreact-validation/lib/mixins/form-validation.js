"use strict";

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _errorMessageMap = require("../maps/error-message-map");

var _errorMessageMap2 = _interopRequireDefault(_errorMessageMap);

var _fireDataEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-data-event");

var _fireDataEvent2 = _interopRequireDefault(_fireDataEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// refName must refer to a react-validation Input component
module.exports = function (refNames) {
  return {
    getInvalidMessage: function getInvalidMessage() {
      return _errorMessageMap2.default.form_invalid_error.message;
    },

    // Only returns current state of form, does not call validate on inputs
    isValid: function isValid() {
      var _this = this;

      var valid = true;
      refNames.forEach(function (refName) {
        if (!_this.refs[refName].isValid()) {
          valid = false;
        }
      }, this);

      return valid;
    },

    // Calls validate on each input, will update state on inputs and this form
    validate: function validate() {
      var _this2 = this;

      var valid = true;
      refNames.forEach(function (refName) {
        if (!_this2.refs[refName].validate( /*isFormValidate*/true)) {
          valid = false;
        }
      }, this);

      (0, _fireDataEvent2.default)(this, "valid", { valid: valid });

      return valid;
    },

    // Takes a map of {refName: "field specific message"}
    invalidate: function invalidate(fieldErrorMap) {
      var _this3 = this;

      (0, _map2.default)(fieldErrorMap, function (message, refName) {
        _this3.refs[refName].invalidate(message);
      }, this);
    },
    clearValidation: function clearValidation() {
      var _this4 = this;

      (0, _fireDataEvent2.default)(this, "clearValidation", {});
      refNames.forEach(function (refName) {
        _this4.refs[refName].clearValidation();
      }, this);
    },
    clearValues: function clearValues() {
      var _this5 = this;

      (0, _fireDataEvent2.default)(this, "clearValues", {});
      refNames.forEach(function (refName) {
        _this5.refs[refName].clearValue();
      }, this);
    },
    resetForm: function resetForm() {
      var _this6 = this;

      (0, _fireDataEvent2.default)(this, "resetForm", {});
      refNames.forEach(function (refName) {
        _this6.refs[refName].resetInput();
      }, this);
    }
  };
};