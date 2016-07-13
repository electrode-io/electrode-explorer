"use strict";

exports.__esModule = true;
exports.bootstrapHeader = undefined;

var _tempoCore = require("../tempo-core");

// NOTE: getQuimbyData needs request object on server render
// so bootstrap header needs request object on server render
var bootstrapHeader = exports.bootstrapHeader = function bootstrapHeader(request, options) {
  return function (dispatch) {
    // make sure we return a promise
    return dispatch((0, _tempoCore.getQuimbyDataAction)(request, options));
  };
};