"use strict";

exports.__esModule = true;
exports.putJSON = exports.getJSON = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _electrodeFetch = require("@walmart/electrode-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseFetchBuilder = function baseFetchBuilder(method) {
  return function (url, data) {
    return (0, _electrodeFetch.fetchJSON)(url, {
      method: method,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data && (0, _stringify2.default)(data)
    });
  };
};

var getJSON = exports.getJSON = baseFetchBuilder("GET");
var putJSON = exports.putJSON = baseFetchBuilder("PUT");