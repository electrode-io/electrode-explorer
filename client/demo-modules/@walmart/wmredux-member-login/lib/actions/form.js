"use strict";

exports.__esModule = true;
exports.formFieldErrors = undefined;

var _form = require("./constants/form");

var formFieldErrors = exports.formFieldErrors = function formFieldErrors(form, errors) {
  return {
    type: _form.FORM_FIELD_ERRORS,
    form: form,
    errors: errors
  };
};