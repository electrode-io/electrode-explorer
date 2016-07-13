"use strict";

exports.__esModule = true;
exports.wpaMap = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _index = require("../actions/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wpaMap = exports.wpaMap = function wpaMap() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _index.initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _index.RECEIVE_WPA:
      if (action.result) {
        return (0, _extends3.default)({}, state, {
          result: (0, _get2.default)(action, "result", {})
        });
      }
      return state;

    case _index.invalidateWpa:
      if (action.err) {
        return (0, _extends3.default)({}, state, {
          err: (0, _get2.default)(action, "err", {})
        });
      }
      return state;

    case _index.wpaRendered:
      return (0, _extends3.default)({}, state, {
        parameters: (0, _get2.default)(action, "parameters", ""),
        adaptedData: (0, _get2.default)(action, "adaptedData", {}),
        resultDetail: (0, _get2.default)(action, "resultDetail", {})
      });

    case _index.LOADING_WPA:
      return (0, _extends3.default)({}, state, { loading: true });

    case _index.LOADED_WPA:
      var midasContext = action.midasContext;
      var midasConfig = action.midasConfig;

      return (0, _extends3.default)({}, state, { loading: false, midasContext: midasContext, midasConfig: midasConfig });

    default:
      return state;
  }
};

exports.default = wpaMap;