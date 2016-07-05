"use strict";

exports.__esModule = true;
exports.bootstrapModules = exports.receiveModules = exports.RECEIVE_MODULES = undefined;

var _electrodeFetch = require("@walmart/electrode-fetch");

var _getFetchOptions = require("@walmart/wmreact-tempo-core/lib/utils/get-fetch-options");

var _preso = require("../helpers/preso");

// Action Types
var RECEIVE_MODULES = exports.RECEIVE_MODULES = "RECEIVE_MODULES";

// Action creators
var receiveModules = exports.receiveModules = function receiveModules(data) {
  return {
    type: RECEIVE_MODULES,
    data: data
  };
};

var bootstrapModules = exports.bootstrapModules = function bootstrapModules(params) {
  return function (dispatch) {
    return (0, _electrodeFetch.fetchJSON)((0, _preso.buildPresoUri)(params), (0, _getFetchOptions.getFetchOptions)(params.req)).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Invalid response");
      }

      if (response.redirectUrl || (0, _preso.isEmptyModules)(response.modules)) {
        // Preso service was unable to find valid modules for the requested category id;
        // therefore, redirect to provided url. This assumes the redirectUrl property will
        // not be present if the service returns valid module data from Tempo
        var error = new Error("Category Page modules could not be found.");
        var headers = params.req && params.req.headers || {};

        var redirectUrl = response.redirectUrl || "/browse/" + params.categoryId;
        error.path = "http://" + headers.host + redirectUrl;

        // TODO: Figure out why 301 does not automatically redirect user
        // https://jira.walmart.com/browse/CDSFE-2637
        error.status = 302;

        throw error;
      }

      dispatch(receiveModules(response));
    }).catch(function (err) {
      throw err;
    });
  };
};