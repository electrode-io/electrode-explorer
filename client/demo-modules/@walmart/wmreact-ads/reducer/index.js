"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wpaMap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        return _extends({}, state, {
          result: (0, _get2.default)(action, "result", {})
        });
      }
      return state;

    case _index.invalidateWpa:
      if (action.err) {
        return _extends({}, state, {
          err: (0, _get2.default)(action, "err", {})
        });
      }
      return state;

    case _index.wpaRendered:
      return _extends({}, state, {
        parameters: (0, _get2.default)(action, "parameters", ""),
        adaptedData: (0, _get2.default)(action, "adaptedData", {}),
        resultDetail: (0, _get2.default)(action, "resultDetail", {})
      });

    case _index.LOADING_WPA:
      return _extends({}, state, { loading: true });

    case _index.LOADED_WPA:
      var midasContext = action.midasContext;
      var midasConfig = action.midasConfig;

      return _extends({}, state, { loading: false, midasContext: midasContext, midasConfig: midasConfig });

    default:
      return state;
  }
};

exports.default = wpaMap;