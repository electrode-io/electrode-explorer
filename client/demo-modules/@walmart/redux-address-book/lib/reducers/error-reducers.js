"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var clearError = exports.clearError = function clearError(state) {
  return _extends({}, state, { alert: null, invalidAddressError: null });
};

var setError = exports.setError = function setError(state, action) {
  var defaultType = "warning";
  var defaultMessage = "We're having trouble with your request. Please wait a moment and then try again.";

  var error = action.payload;
  var alert = {
    message: error.message || defaultMessage,
    alertType: error.alertType || defaultType
  };

  var patch = error.responseCode ? { invalidAddressError: error } : { alert: alert };

  return _extends({}, state, patch);
};