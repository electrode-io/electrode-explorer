"use strict";

exports.__esModule = true;
exports.handleResponse = exports.validateForm = exports.getTouchedErrors = exports.getDefaultEmail = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _form = require("../actions/form");

var _createValidator = require("./create-validator");

var _createValidator2 = _interopRequireDefault(_createValidator);

var _pickBy = require("lodash/pickBy");

var _pickBy2 = _interopRequireDefault(_pickBy);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _difference = require("lodash/difference");

var _difference2 = _interopRequireDefault(_difference);

var _noop = require("lodash/noop");

var _noop2 = _interopRequireDefault(_noop);

var _alertMessageMap = require("./alert-message-map");

var _alertMessageMap2 = _interopRequireDefault(_alertMessageMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a string containing the default customer email.
 * This could either be the transient state or the actual default state
 * from the customer cookie
 *
 * @param {Object} state the store state.
 * @return {String} a string containing the default email
 */
var getDefaultEmail = exports.getDefaultEmail = function getDefaultEmail(state) {
  var defaultState = state.customer && state.customer.email;
  var transientState = state.signUp && state.signUp.tempForm && state.signUp.tempForm.email;

  return transientState || defaultState;
};

var getTouchedErrors = exports.getTouchedErrors = function getTouchedErrors() {
  var errors = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var form = arguments[1];
  return (0, _pickBy2.default)(errors, function (value, key) {
    return form[key] && form[key].touched;
  });
};

/**
 * A little herlper to centralize validation logic for all connected components
 *
 * @param {Object} validators - the object of feilds and their validators.
 * @param {String} formName - the string containing the form name.
 *
 * @return {Object} errors
 */
var validateForm = exports.validateForm = function validateForm(validators, formName) {
  var validate = (0, _createValidator2.default)(validators);

  return function (fields, _ref) {
    var dispatch = _ref.dispatch;
    var form = _ref.form;

    var errors = validate(fields, form);
    var touchedErrors = getTouchedErrors(errors, form);

    //Fire validation event for all errors when a field is touched
    if (!(0, _isEmpty2.default)(touchedErrors)) {
      dispatch((0, _form.formFieldErrors)(formName, errors));
    }

    return errors;
  };
};

/*eslint-disable max-params*/
var handleResponse = exports.handleResponse = function handleResponse(promise) {
  var onSuccess = arguments.length <= 1 || arguments[1] === undefined ? _noop2.default : arguments[1];
  var onError = arguments.length <= 2 || arguments[2] === undefined ? _noop2.default : arguments[2];
  var fields = arguments[3];

  /*eslint-enable max-params*/
  return promise.then(onSuccess).catch(function () {
    var errObj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var isValidationError = (0, _difference2.default)((0, _keys2.default)(errObj), (0, _keys2.default)(fields)).length === 0;

    onError(isValidationError ? _alertMessageMap2.default.getAlert("validation_fail") : errObj);

    if (!isValidationError && !errObj.isKnownError) {
      throw errObj;
    }
  });
};