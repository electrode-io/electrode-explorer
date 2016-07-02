import validators from "@walmart/wmreact-validation/lib/validators";

const required = {
  validate: (val) => !!val,
  message: "This information is required."
};
const password = {
  validate: validators.password.validate,
  message: `Your password must contain between 6 and 12 characters,
  with no spaces. Please try again.`
};
const membership = {
  validate: validators.samsmembership.validate,
  message: `Please check your membership number.`
};
const lastname = {
  validate: validators.lastname.validate,
  message: `Please enter a valid last name.`
};
export default {
  ...validators,
  required,
  password,
  membership,
  lastname
};
