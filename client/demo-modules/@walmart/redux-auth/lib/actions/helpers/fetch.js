"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxEffectsFetch = require("redux-effects-fetch");

var baseFetchBuilder = function baseFetchBuilder(method) {
  return function (url, data) {
    return (0, _reduxEffectsFetch.fetch)(url, {
      method: method,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data && JSON.stringify(data)
    });
  };
};

var getJson = baseFetchBuilder("get");

exports.getJson = getJson;
var deleteJson = baseFetchBuilder("delete");

exports.deleteJson = deleteJson;
var putJson = baseFetchBuilder("put");

exports.putJson = putJson;
var postJson = baseFetchBuilder("post");
exports.postJson = postJson;