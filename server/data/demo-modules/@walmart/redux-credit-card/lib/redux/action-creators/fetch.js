"use strict";

exports.__esModule = true;
exports.postJson = exports.putJson = exports.deleteJson = exports.getJson = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _reduxEffectsFetch = require("redux-effects-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseFetchBuilder = function baseFetchBuilder(method) {
  return function (url, data) {
    return (0, _reduxEffectsFetch.fetch)(url, {
      method: method,
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data && (0, _stringify2.default)(data)
    });
  };
};

var getJson = exports.getJson = baseFetchBuilder("get");

var deleteJson = exports.deleteJson = baseFetchBuilder("delete");

var putJson = exports.putJson = baseFetchBuilder("put");

var postJson = exports.postJson = baseFetchBuilder("post");