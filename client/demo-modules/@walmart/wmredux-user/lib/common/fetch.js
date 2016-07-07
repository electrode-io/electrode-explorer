"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _electrodeFetch = require("@walmart/electrode-fetch");

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
  return (0, _electrodeFetch.fetch)(url, _extends({}, options, {
    body: JSON.stringify(body)
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