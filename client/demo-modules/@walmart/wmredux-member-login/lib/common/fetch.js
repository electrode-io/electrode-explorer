"use strict";

exports.__esModule = true;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _electrodeFetch = require("@walmart/electrode-fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = {
  credentials: "include",
  headers: {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/json"
  },
  method: "POST"
};

var getExceptionCode = function getExceptionCode(code) {
  return { code: code };
};

exports.default = function (url) {
  var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return (0, _electrodeFetch.fetch)(url, (0, _extends3.default)({}, options, {
    body: (0, _stringify2.default)(body)
  })).catch(function (err) {
    if (err.response) {
      return err.response.json().then(function (json) {
        throw json;
      }, function () {
        throw getExceptionCode("parsing_error");
      });
    } else {
      throw getExceptionCode("service_call_error");
    }
  });
};