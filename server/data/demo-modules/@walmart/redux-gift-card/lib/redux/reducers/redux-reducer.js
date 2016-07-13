"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxReducer = function reduxReducer(reducerMap) {
  var initial = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initial : arguments[0];
    var _ref = arguments[1];
    var type = _ref.type;
    var payload = _ref.payload;

    if (typeof reducerMap[type] === "function") {
      var patch = reducerMap[type](payload, state);
      return (0, _assign2.default)({}, state, patch);
    }
    return state;
  };
};

exports.default = reduxReducer;