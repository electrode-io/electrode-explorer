export default (validators) => {
  const validateAll = (arr, value, allValues = {}) => {
    if (!Array.isArray(arr)) {
      if (!arr.validate(value, allValues)) {
        return arr.message;
      }
    }
    for (const validator of arr) {
      if (!validator.validate(value, allValues)) {
        return validator.message;
      }
    }
    return null;
  };

  return (values = {}) => {
    return Object.keys(values)
      .filter((key) => validators[key])
      .reduce((obj, key) => {
        const error = validateAll(validators[key], values[key], values);
        if (error !== null) {
          obj[key] = error;
        }
        return obj;
      }, {});
  };
};
