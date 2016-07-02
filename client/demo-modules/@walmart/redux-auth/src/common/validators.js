export const required = {validate: (val) => !!val, message: "This information is required"};
export const equalToField = (field, message) => ({
  validate: (val, {[field]: other}) => val === other,
  message: message || "Values needs to match"
});
