"use strict";

var _electrodeFetch = require("@walmart/electrode-fetch");

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _wpaUtils = require("../utils/wpa-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wpaFetcher = {
  fetch: function fetch(props) {
    if ((0, _isEmpty2.default)(props)) {
      return null;
    }

    return (0, _electrodeFetch.fetchJSON)((0, _wpaUtils.buildWpaUri)(props), {
      method: "GET",
      headers: props.headers
    }).then(function (res) {

      if (res.status >= 400) {
        return {
          err: "service response " + res.status
        };
      }
      return res;
    }).catch(function (err) {

      return { err: err };
    });
  }
};

module.exports = wpaFetcher;