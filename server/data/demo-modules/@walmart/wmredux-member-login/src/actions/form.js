import {FORM_FIELD_ERRORS} from "./constants/form";

export const formFieldErrors = (form, errors) => {
  return {
    type: FORM_FIELD_ERRORS,
    form,
    errors
  };
};
