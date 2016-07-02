"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wmreactValidation = require("@walmart/wmreact-validation");

var _lodash = require("lodash");

var _fieldNames = require("../enums/field-names");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isInvalid = function isInvalid(validatorName, value) {
  return !_wmreactValidation.validators[validatorName].validate(value || "");
};
var getErrorMessage = function getErrorMessage(validatorName) {
  return _wmreactValidation.validators[validatorName].message;
};

var addressFormValidator = function addressFormValidator() {
  return function (formValues) {
    var _fieldErrorsDefinitio;

    var fieldErrorsDefinitions = (_fieldErrorsDefinitio = {}, _defineProperty(_fieldErrorsDefinitio, _fieldNames.firstName, [{
      errorCondition: function errorCondition() {
        return !formValues[_fieldNames.firstName];
      },
      errorMessage: "This information is required."
    }, {
      errorCondition: function errorCondition() {
        return isInvalid("firstname", formValues[_fieldNames.firstName]);
      },
      errorMessage: getErrorMessage("firstname")
    }]), _defineProperty(_fieldErrorsDefinitio, _fieldNames.lastName, [{
      errorCondition: function errorCondition() {
        return !formValues[_fieldNames.lastName];
      },
      errorMessage: "This information is required."
    }, {
      errorCondition: function errorCondition() {
        return isInvalid("lastname", formValues[_fieldNames.lastName]);
      },
      errorMessage: getErrorMessage("lastname")
    }]), _defineProperty(_fieldErrorsDefinitio, _fieldNames.phone, [{
      errorCondition: function errorCondition() {
        return !formValues[_fieldNames.phone];
      },
      errorMessage: "This information is required."
    }, {
      errorCondition: function errorCondition() {
        return formValues[_fieldNames.phone] && isInvalid("phone", formValues[_fieldNames.phone]);
      },
      errorMessage: getErrorMessage("phone")
    }]), _defineProperty(_fieldErrorsDefinitio, _fieldNames.addressLineOne, [{
      errorCondition: function errorCondition() {
        return !formValues[_fieldNames.addressLineOne];
      },
      errorMessage: "This information is required."
    }, {
      errorCondition: function errorCondition() {
        return isInvalid("address1", formValues[_fieldNames.addressLineOne]);
      },
      errorMessage: getErrorMessage("address1")
    }]), _defineProperty(_fieldErrorsDefinitio, _fieldNames.addressLineTwo, [{
      errorCondition: function errorCondition() {
        return formValues[_fieldNames.addressLineTwo] && isInvalid("address2", formValues[_fieldNames.addressLineTwo]);
      },

      errorMessage: getErrorMessage("address2")
    }]), _defineProperty(_fieldErrorsDefinitio, _fieldNames.city, [{
      errorCondition: function errorCondition() {
        return !formValues[_fieldNames.city];
      },
      errorMessage: "This information is required."
    }, {
      errorCondition: function errorCondition() {
        return isInvalid("city", formValues[_fieldNames.city]);
      },
      errorMessage: getErrorMessage("city")
    }]), _defineProperty(_fieldErrorsDefinitio, _fieldNames.postalCode, [{
      errorCondition: function errorCondition() {
        return !formValues[_fieldNames.postalCode];
      },
      errorMessage: "This information is required."
    }, {
      errorCondition: function errorCondition() {
        return isInvalid("postalcode", formValues[_fieldNames.postalCode]);
      },
      errorMessage: getErrorMessage("postalcode")
    }]), _fieldErrorsDefinitio);

    var reduceFieldErrorsToAnErrorMessage = function reduceFieldErrorsToAnErrorMessage(fieldErrorsDefinition) {
      return fieldErrorsDefinition.reduce(function () {
        var errorMessage = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
        var fieldError = arguments[1];

        if (errorMessage.length > 0) {
          return errorMessage;
        } else if (fieldError.errorCondition()) {
          return fieldError.errorMessage;
        } else {
          return undefined;
        }
      }, "");
    };

    return (0, _lodash.mapValues)(fieldErrorsDefinitions, reduceFieldErrorsToAnErrorMessage);
  };
};

exports.default = addressFormValidator;