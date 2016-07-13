import {formFieldErrors} from "../actions/form";
import createValidator from "./create-validator";
import pickby from "lodash/pickBy";
import isempty from "lodash/isEmpty";
import difference from "lodash/difference";
import noop from "lodash/noop";
import alertMessageMap from "./alert-message-map";

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
  const transientState = state.signIn &&
    state.signIn.tempForm && state.signIn.tempForm.email;

  return transientState || defaultState;
};
export const getEmailFromForgotEmailResponse = (state) => {
  const defaultState = state.customer && state.customer.email;
  const transientState = state.forgotEmail && state.forgotEmail.email;
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

export const getResetPasswordEmail = (state) => {
  const defaultState = state.resetPassword && state.resetPassword.email;
  return defaultState || "";
};
