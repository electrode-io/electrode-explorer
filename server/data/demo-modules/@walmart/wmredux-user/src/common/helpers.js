import {formFieldErrors} from "../actions/form";
import createValidator from "./create-validator";
import pickby from "lodash/pickBy";
import isempty from "lodash/isEmpty";
import difference from "lodash/difference";
import noop from "lodash/noop";
import alertMessageMap from "./alert-message-map";
import checkStrength from "./password-checker";
/**
 * Return a string containing the default customer email.
 * This could either be the transient state or the actual default state
 * from the customer cookie
 *
 * @param {Object} state the store state.
 * @return {String} a string containing the default email
 */
export const getDefaultEmail = (state) => {
  const defaultState = state.customer && state.customer.email;
  const transientState = state.signInWidget &&
    state.signInWidget.tempForm && state.signInWidget.tempForm.email;

  return transientState || defaultState;
};

export const getTouchedErrors = (errors = {}, form) =>
  pickby(errors, (value, key) => form[key] && form[key].touched);

/**
 * A little herlper to centralize validation logic for all connected components
 *
 * @param {Object} validators - the object of feilds and their validators.
 * @param {String} formName - the string containing the form name.
 *
 * @return {Object} errors
 */
export const validateForm = (validators, formName) => {
  const validate = createValidator(validators);

  return (fields, {dispatch, form}) => {
    const errors = validate(fields, form);
    const touchedErrors = getTouchedErrors(errors, form);

    //Fire validation event for all errors when a field is touched
    if (!isempty(touchedErrors)) {
      dispatch(formFieldErrors(formName, errors));
    }

    return errors;
  };
};

/*eslint-disable max-params*/
export const handleResponse = (promise, onSuccess = noop, onError = noop, fields) => {
/*eslint-enable max-params*/
  return promise.then(onSuccess)
    .catch((errObj = {}) => {
      const isValidationError =
        difference(Object.keys(errObj), Object.keys(fields)).length === 0;

      onError(isValidationError ?
        alertMessageMap.getAlert("validation_fail") : errObj);

      if (!isValidationError && !errObj.isKnownError) {
        throw errObj;
      }
    });
};

const passwordStrength = (state, action) => {
  if (action.type === "redux-form/CHANGE" && action.field === "password") {
    const strength = checkStrength(action.value);
    return {...state, passwordStrength: {...state.passwordStrength, value: strength}};
  }
  return state;
};

export const formReducerPlugin = {
  resetPassword: (state, action) => {
    if (action.form !== "resetPassword") {
      return state;
    }
    return passwordStrength(state, action);
  },
  signUp: (state, action) => {
    if (action.form !== "signUp") {
      return state;
    }
    return passwordStrength(state, action);
  }
};
