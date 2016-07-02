import omit from "lodash.omit";

//TBD: how redux-form validations play with electrode/field
const errorsMesage = {
  required: "Required",
  passwordConfirmation: "Passwords must match"
};

export default (values = {}) => {
  const errors = {};

  //Everything is required
  for (const key in omit(values, ["newsletter"])) {
    if (!values[key]) {
      errors[key] = errorsMesage.required;
    }
  }

  //Password confirmation validation
  if (values.password && values.passwordConfirmation) {
    if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = errorsMesage.passwordConfirmation;
    }
  }

  return errors;
};
