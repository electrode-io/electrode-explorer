"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  credentials: "same-origin",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  }
};

var checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  throw response;
};

// Certain endpoints/methods may return empty payload when the operation is succeeded and
// the HTTP status is 200 OK. Empty payload is not a valid JSON so allow user to accept
// the empty payload in certain cases.
var parseTextResponse = function parseTextResponse(options) {
  return function (text) {
    var len = text.length;
    if (!len && !options.allowEmptyResponse) {
      throw new SyntaxError();
    }

    return len ? JSON.parse(text) : {};
  };
};

exports.default = function (url) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return (0, _isomorphicFetch2.default)(url, Object.assign(defaultOptions, options)).then(checkStatus).then(function (response) {
    return response.text();
  }).then(parseTextResponse(options));
};