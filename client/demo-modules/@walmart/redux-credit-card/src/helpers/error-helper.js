// Streamlined code from atlas-common server-errors.js
import isArray from "lodash/isArray";
import isEmpty from "lodash/isEmpty";

const translateError = function (rawData = {}) {

  const error = {
    type: "warning",
    source: rawData.source,
    statusCode: rawData.statusCode,
    message: rawData.message,
    details: rawData.details || {}
  };

  if (rawData.validation) {
    error.code = rawData.code || "validation";
    error.type = "error";
    error.validation = true;

    if (!isEmpty(rawData.validation.keys) && isArray(rawData.validation.keys)) {
      // Assign fields that had errors
      error.fields = rawData.validation.keys;
    }

    error.details = rawData.validation;
  } else if (rawData.restriction) {
    error.code = "state_restriction";
    error.type = "error";
    error.restriction = true;
  } else {
    error.code = rawData.code || "unknown";
    error.details = [];
  }

  return error;
};

export {
  translateError
};
