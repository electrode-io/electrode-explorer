"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formFieldErrors = undefined;

var _actionTypes = require("./action-types");

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var formFieldErrors = exports.formFieldErrors = function formFieldErrors(form, errors) {
  return {
    type: actionTypes.FORM_FIELD_ERRORS,
    form: form,
    errors: errors
  };
};