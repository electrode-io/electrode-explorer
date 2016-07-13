/* eslint-disable valid-jsdoc */
/* jscs: disable */

import isArray from "lodash/isArray";
import isUndefined from "lodash/isUndefined";
import flow from "lodash/fp/flow";
import head from "lodash/fp/head";
import has from "lodash/has";
import find from "lodash/find";
import filter from "lodash/fp/filter";
import map from "lodash/fp/map";
import flatten from "lodash/fp/flatten";
import uniq from "lodash/fp/uniq";
import partial from "lodash/partial";

import messageMap from "./maps/error-message-map";

const DEFAULT_ERROR_CODE = "internal_server_error";
const UNKNOWN_ERROR_CODE = "unknown";

/**
 * Convert various server error formats into an error object
 */

/* eslint-disable complexity, max-statements */
const _sanitizeServerResponse = (rawData) => {

  rawData = rawData || {};

  const error = {
    type: "warning"
  };
  let errorInfo;

  if (rawData.source) {
    error.source = rawData.source;
  }

  if (rawData.validation) {
    error.code = rawData.code || "validation";
    error.type = "error";
    error.validation = true;

    if (rawData.validation.keys && isArray(rawData.validation.keys)) {
      // Assign fields that had errors
      error.fields = rawData.validation.keys;

      // Generate a useful error message that overrides the default message of:
      // "Something went wrong processing your request, please check the form and try again."
      // If multiple error messages are present, only the first one is selected
      // and shown. The override messages can be given in the messageMap as
      // validation: { keys: { myKey: { message: "Override error message here." } }}
      error.message = flow(
        // Ignore anything without a message map entry
        filter((cur) => {
          return has(messageMap.validation.keys, cur) &&
            has(messageMap.validation.keys[cur], "message");
        }),
        // Get the error message
        map((cur) => {
          return messageMap.validation.keys[cur].message;
        }),
        // Take the first error message from the list
        head
      )(rawData.validation.keys);

      // If there is a map of keys -> invalidations load them here
      // so that we can automatically use handy to invalidate the
      // appropriate fields.
      error.invalidations = flow(
        // Ignore anything without a message map entry
        filter((cur) => {
          return has(messageMap.validation.keys, cur) &&
            has(messageMap.validation.keys[cur], "invalidate");
        }),
        // Pick out the invalidators to use
        map((cur) => {
          return messageMap.validation.keys[cur].invalidate;
        }),
        // Flatten everything
        flatten,
        // Strip out duplicate values
        uniq)(rawData.validation.keys);
    }

    error.message = error.message || messageMap.validation.message;
    error.details = rawData.validation;
  } else if (rawData.restriction) {
    error.code = "state_restriction";
    error.type = "error";
    error.message = messageMap.state_restriction[rawData.code] ?
      messageMap.state_restriction[rawData.code].message : "";
    error.restriction = true;
  } else if (rawData.code) {
    // Allow consumers to override the error code, in order to use a specific message.
    // Sometimes, `code` is not always in the response from the server, or,
    // it is not specific enough.
    const code = rawData.code || DEFAULT_ERROR_CODE;

    errorInfo = messageMap[code] || messageMap[DEFAULT_ERROR_CODE];

    error.code = code;
    error.type = errorInfo.type || "warning";
    error.message = errorInfo.message;
    error.details = rawData.details || {};
  } else {
    // This is the case when Pangaea error is not mapped on the Node layer. Assigning the
    // "unknown" code for this error allows to handle it by default catch-all error handler.
    errorInfo = messageMap[rawData.statusCode] || messageMap[UNKNOWN_ERROR_CODE];

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
const _getXhr = (args) => {
  // Examine all the arguments searching for an XHR object. Each argument
  // can be an XHR object itself, or something that references an XHR object.
  // The first useful result is returned.
  for (let i = 0; i < args.length; ++i) {
    const xhr = args[i] || {};
    let prop;
    if (xhr.responseJSON) {
      return xhr;
    } else if ((prop = find(["jqXHR", "xhr"], partial(has, xhr)))) {
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
const _generateErrorObject = (args) => {
  let error;
  const xhr = _getXhr(args);

  if (xhr && xhr.responseJSON) {
    error = _sanitizeServerResponse(xhr.responseJSON);
    error.xhr = xhr;
  } else {
    const errorThrown = args.length && args[0].errorThrown;
    const textStatus = args.length && args[0].textStatus;

    let code;
    if (errorThrown && textStatus === "parsererror") {
      code = "invalid_payload";
    }
    code = code || UNKNOWN_ERROR_CODE;

    const errorInfo = messageMap[code] || {};

    error = {
      code,
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
const handleServerError = (callback, ...args) => {
  // Generate a standard object from all the response format variants
  const error = _generateErrorObject(args);

  callback(error);
};


const handleServerErrorFactory = (callback) => {
  return handleServerError.bind(this, callback); // eslint-disable-line no-invalid-this
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

module.exports = (error, callback) => {
  if (isUndefined(callback)) {
    callback = error;

    return handleServerErrorFactory(callback);
  } else {
    handleServerErrorFactory(callback)(error);
  }
};

/* jscs: enable */
