"use strict";

exports.__esModule = true;
exports.bootstrapFooter = undefined;

var _tempoCore = require("../tempo-core");

// NOTE: getQuimbyData needs request object on server render
// so bootstrap footer needs request object on server render
var bootstrapFooter = exports.bootstrapFooter = function bootstrapFooter(request, options) {
  return function (dispatch) {
    // make sure we return a promise
    return dispatch((0, _tempoCore.getQuimbyDataAction)(request, options));
  };
};