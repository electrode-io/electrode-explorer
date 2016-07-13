"use strict";

exports.__esModule = true;
exports.referenceId = undefined;

var _types = require("../types");

var referenceId = exports.referenceId = function referenceId() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? "" : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_FOOTER_REFERENCE_ID:
      return action.referenceId;
    default:
      return state;
  }
}; // TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193