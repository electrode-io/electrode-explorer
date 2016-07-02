"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var checkStatus = function checkStatus(response) {
  var json = response.json();

  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json.then(function (err) {
      throw err;
    });
  }
};

exports["default"] = function (url) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return (0, _isomorphicFetch2["default"])(url, Object.assign({}, options)).then(checkStatus);
};

module.exports = exports["default"];