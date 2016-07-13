"use strict";

var _isArray = require("lodash/isArray");

var _isArray2 = _interopRequireDefault(_isArray);

var _isUndefined = require("lodash/isUndefined");

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _flow = require("lodash/fp/flow");

var _flow2 = _interopRequireDefault(_flow);

var _head = require("lodash/fp/head");

var _head2 = _interopRequireDefault(_head);

var _has = require("lodash/has");

var _has2 = _interopRequireDefault(_has);

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

var _filter = require("lodash/fp/filter");

var _filter2 = _interopRequireDefault(_filter);

var _map = require("lodash/fp/map");

var _map2 = _interopRequireDefault(_map);

var _flatten = require("lodash/fp/flatten");

var _flatten2 = _interopRequireDefault(_flatten);

var _uniq = require("lodash/fp/uniq");

var _uniq2 = _interopRequireDefault(_uniq);

var _partial = require("lodash/partial");

var _partial2 = _interopRequireDefault(_partial);

var _errorMessageMap = require("./maps/error-message-map");

var _errorMessageMap2 = _interopRequireDefault(_errorMessageMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable valid-jsdoc */
/* jscs: disable */

var DEFAULT_ERROR_CODE = "internal_server_error";
var UNKNOWN_ERROR_CODE = "unknown";

/**
 * Convert various server error formats into an error object
 */

/* eslint-disable complexity, max-statements */
var _sanitizeServerResponse = function _sanitizeServerResponse(rawData) {

  rawData = rawData || {};

  var error = {
    type: "warning"
  };
  var errorInfo = void 0;

  if (rawData.source) {
    error.source = rawData.source;
  }

  if (rawData.validation) {
    error.code = rawData.code || "validation";
    error.type = "error";
    error.validation = true;

    if (rawData.validation.keys && (0, _isArray2.default)(rawData.validation.keys)) {
      // Assign fields that had errors
      error.fields = rawData.validation.keys;

      // Generate a useful error message that overrides the default message of:
      // "Something went wrong processing your request, please check the form and try again."
      // If multiple error messages are present, only the first one is selected
      // and shown. The override messages can be given in the messageMap as
      // validation: { keys: { myKey: { message: "Override error message here." } }}
      error.message = (0, _flow2.default)(
      // Ignore anything without a message map entry
      (0, _filter2.default)(function (cur) {
        return (0, _has2.default)(_errorMessageMap2.default.validation.keys, cur) && (0, _has2.default)(_errorMessageMap2.default.validation.keys[cur], "message");
      }),
      // Get the error message
      (0, _map2.default)(function (cur) {
        return _errorMessageMap2.default.validation.keys[cur].message;
      }),
      // Take the first error message from the list
      _head2.default)(rawData.validation.keys);

      // If there is a map of keys -> invalidations load them here
      // so that we can automatically use handy to invalidate the
      // appropriate fields.
      error.invalidations = (0, _flow2.default)(
      // Ignore anything without a message map entry
      (0, _filter2.default)(function (cur) {
        return (0, _has2.default)(_errorMessageMap2.default.validation.keys, cur) && (0, _has2.default)(_errorMessageMap2.default.validation.keys[cur], "invalidate");
      }),
      // Pick out the invalidators to use
      (0, _map2.default)(function (cur) {
        return _errorMessageMap2.default.validation.keys[cur].invalidate;
      }),
      // Flatten everything
      _flatten2.default,
      // Strip out duplicate values
      _uniq2.default)(rawData.validation.keys);
    }

    error.message = error.message || _errorMessageMap2.default.validation.message;
    error.details = rawData.validation;
  } else if (rawData.restriction) {
    error.code = "state_restriction";
    error.type = "error";
    error.message = _errorMessageMap2.default.state_restriction[rawData.code] ? _errorMessageMap2.default.state_restriction[rawData.code].message : "";
    error.restriction = true;
  } else if (rawData.code) {
    // Allow consumers to override the error code, in order to use a specific message.
    // Sometimes, `code` is not always in the response from the server, or,
    // it is not specific enough.
    var code = rawData.code || DEFAULT_ERROR_CODE;

    errorInfo = _errorMessageMap2.default[code] || _errorMessageMap2.default[DEFAULT_ERROR_CODE];

    error.code = code;
    error.type = errorInfo.type || "warning";
    error.message = errorInfo.message;
    error.details = rawData.details || {};
  } else {
    // This is the case when Pangaea error is not mapped on the Node layer. Assigning the
    // "unknown" code for this error allows to handle it by default catch-all error handler.
    errorInfo = _errorMessageMap2.default[rawData.statusCode] || _errorMessageMap2.default[UNKNOWN_ERROR_CODE];

    error.code = UNKNOWN_ERROR_CODE;
    error.type = errorInfo.type || "warning";
    error.message = errorInfo.message;
    error.details = [];
  }

  return error;
};
/* eslint-enable complexity, max-statements */

/**
 * Get the XHR object out of any of the three allowed argument formats
 *
 * Reference:
 *
 *   $.ajax:
 *     error(jqXHR jqXHR, String textStatus, String errorThrown)
 *
 *   Backbone.sync
 *     error(Model model, jqXHR jqXHR, Object options)
 *
 *   promise.catch(({model: model, xhr: xhr, options: options}) => {
 *     ...
 *   })
 *   promise.catch(({textStatus: textStatus, xhr: xhr, errorThrown: errorThrown}) => {
 *     ...
 *   })
 *
 */
var _getXhr = function _getXhr(args) {
  // Examine all the arguments searching for an XHR object. Each argument
  // can be an XHR object itself, or something that references an XHR object.
  // The first useful result is returned.
  for (var i = 0; i < args.length; ++i) {
    var xhr = args[i] || {};
    var prop = void 0;
    if (xhr.responseJSON) {
      return xhr;
    } else if (prop = (0, _find2.default)(["jqXHR", "xhr"], (0, _partial2.default)(_has2.default, xhr))) {
      return xhr[prop];
    }
  }
  return null;
};

/**
 * Parse the arguments of handleServerError to generate a consistent error object
 *
 * @param {Array}    args                 The original arguments passed to Handy
 * @return {Object} An Error object in the format below
 *
 * {
 *   code: ""
 *   message: ""
 *   details: {...}
 * }
 *
 */
var _generateErrorObject = function _generateErrorObject(args) {
  var error = void 0;
  var xhr = _getXhr(args);

  if (xhr && xhr.responseJSON) {
    error = _sanitizeServerResponse(xhr.responseJSON);
    error.xhr = xhr;
  } else {
    var errorThrown = args.length && args[0].errorThrown;
    var textStatus = args.length && args[0].textStatus;

    var code = void 0;
    if (errorThrown && textStatus === "parsererror") {
      code = "invalid_payload";
    }
    code = code || UNKNOWN_ERROR_CODE;

    var errorInfo = _errorMessageMap2.default[code] || {};

    error = {
      code: code,
      type: errorInfo.type || "warning",
      message: errorInfo.message,
      details: errorInfo.message
    };
  }
  return error;
};

/**
 * Handle server side errors by returning a function that can be called by any of the below
 *
 * Available error handling syntax
 *   - Backbone.sync
 *   - jquery.ajax
 *   - Wrapped Backbone
 *       promise.resolve({model: model, xhr: xhr, options: options})
 *   - Wrapped jQuery
 *       promise.resolve({textStatus: textStatus, xhr: xhr, errorThrown: errorThrown})
 *
 * When called with one of the above error types, the generated function will both call the
 * appropriate handler with the sanitized error data, as well as return that error
 * data to the caller.
 */
var handleServerError = function handleServerError(callback) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  // Generate a standard object from all the response format variants
  var error = _generateErrorObject(args);

  callback(error);
};

var handleServerErrorFactory = function handleServerErrorFactory(callback) {
  return handleServerError.bind(undefined, callback); // eslint-disable-line no-invalid-this
};

/**
 * Supports two invocations:
 *
 * As a factory for sanitizing errors from promises, jquery or backbone e.g.
 *
 * model.save().fail(handleServerError((sanitizedError) => {}));
 *
 * Or call it directly
 *
 * handleServerError(error, (sanitizedError) => {});
 *
 * // TODO: Allow for default error code
 */

module.exports = function (error, callback) {
  if ((0, _isUndefined2.default)(callback)) {
    callback = error;

    return handleServerErrorFactory(callback);
  } else {
    handleServerErrorFactory(callback)(error);
  }
};

/* jscs: enable */