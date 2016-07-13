import * as actionTypes from "./action-types";

export const formFieldErrors = (form, errors) => {
  return {
    type: actionTypes.FORM_FIELD_ERRORS,
    form,
    errors
  };
};
