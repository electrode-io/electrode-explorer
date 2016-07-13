import validators from "@walmart/wmreact-validation/lib/validators";
import mapValues from "lodash/mapValues";
import {
  firstName,
  lastName,
  phone,
  addressLineOne,
  addressLineTwo,
  city,
  postalCode
} from "../enums/field-names";

const isInvalid = (validatorName, value) => !validators[validatorName].validate(value || "");
const getErrorMessage = (validatorName) => validators[validatorName].message;

const addressFormValidator = () => (formValues) => {
  const fieldErrorsDefinitions = {
    [firstName]: [
      {
        errorCondition: () => !formValues[firstName],
        errorMessage: "This information is required."
      },

      {
        errorCondition: () => isInvalid("firstname", formValues[firstName]),
        errorMessage: getErrorMessage("firstname")
      }
    ],

    [lastName]: [
      {
        errorCondition: () => !formValues[lastName],
        errorMessage: "This information is required."
      },

      {
        errorCondition: () => isInvalid("lastname", formValues[lastName]),
        errorMessage: getErrorMessage("lastname")
      }
    ],

    [phone]: [
      {
        errorCondition: () => !formValues[phone],
        errorMessage: "This information is required."
      },

      {
        errorCondition: () => formValues[phone] && isInvalid("phone", formValues[phone]),
        errorMessage: getErrorMessage("phone")
      }
    ],

    [addressLineOne]: [
      {
        errorCondition: () => !formValues[addressLineOne],
        errorMessage: "This information is required."
      },

      {
        errorCondition: () => isInvalid("address1", formValues[addressLineOne]),
        errorMessage: getErrorMessage("address1")
      }
    ],

    [addressLineTwo]: [
      {
        errorCondition: () => (
          formValues[addressLineTwo] &&
          isInvalid("address2", formValues[addressLineTwo])
        ),

        errorMessage: getErrorMessage("address2")
      }
    ],

    [city]: [
      {
        errorCondition: () => !formValues[city],
        errorMessage: "This information is required."
      },

      {
        errorCondition: () => isInvalid("city", formValues[city]),
        errorMessage: getErrorMessage("city")
      }
    ],

    [postalCode]: [
      {
        errorCondition: () => !formValues[postalCode],
        errorMessage: "This information is required."
      },

      {
        errorCondition: () => isInvalid("postalcode", formValues[postalCode]),
        errorMessage: getErrorMessage("postalcode")
      }
    ]
  };

  const reduceFieldErrorsToAnErrorMessage = (fieldErrorsDefinition) => {
    return fieldErrorsDefinition.reduce((errorMessage = "", fieldError) => {
      if (errorMessage.length > 0) {
        return errorMessage;
      } else if (fieldError.errorCondition()) {
        return fieldError.errorMessage;
      } else {
        return undefined;
      }
    }, "");
  };

  return mapValues(fieldErrorsDefinitions, reduceFieldErrorsToAnErrorMessage);
};

export default addressFormValidator;
