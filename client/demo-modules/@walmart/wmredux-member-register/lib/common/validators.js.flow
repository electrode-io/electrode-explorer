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
export default {
  ...validators,
  required,
  password
};
