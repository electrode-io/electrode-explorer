"use strict";

exports.__esModule = true;
exports.translateError = undefined;

var _isArray = require("lodash/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Streamlined code from atlas-common server-errors.js


var translateError = function translateError() {
  var rawData = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


  var error = {
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

    if (!(0, _isEmpty2.default)(rawData.validation.keys) && (0, _isArray2.default)(rawData.validation.keys)) {
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

exports.translateError = translateError;