"use strict";

exports.__esModule = true;
/* eslint no-unused-vars: 0, arrow-parens: 0 */

exports.default = function (analytics) {
  return function (store) {
    return function (next) {
      return function (action) {
        analytics.callback({
          _type: "redux-action",
          context: analytics.context,
          action: action
        });

        var result = next(action);

        analytics.callback({
          _type: "redux-new-state",
          context: analytics.context,
          action: action,
          state: result
        });

        return result;
      };
    };
  };
};