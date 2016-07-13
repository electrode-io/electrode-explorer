"use strict";

exports.__esModule = true;
exports.storeFinder = undefined;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = {
  loading: false,
  didInvalidate: false,
  response: {}
};

var storeFinder = exports.storeFinder = function storeFinder() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? DEFAULT_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _types.HEADER_FETCH_STORES_REQUEST:
      return (0, _assign2.default)({}, state, {
        loading: true,
        didInvalidate: false,
        response: {}
      });
    case _types.HEADER_FETCH_STORES_SUCCESS:
      var response = action.response;

      return (0, _assign2.default)({}, state, {
        loading: false,
        didInvalidate: false,
        response: response
      });
    case _types.HEADER_FETCH_STORES_ERROR:
      return (0, _assign2.default)({}, state, {
        loading: false,
        didInvalidate: true,
        response: {}
      });
    default:
      return state;
  }
};