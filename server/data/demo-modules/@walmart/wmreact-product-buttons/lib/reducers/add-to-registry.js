"use strict";

exports.__esModule = true;
exports.addToRegistry = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addToRegistry = exports.addToRegistry = function addToRegistry(state, action) {
  switch (action.type) {
    case "SIGN_IN_STATUS":
      return (0, _assign2.default)({}, state, { isSignedIn: action.isSignedIn, status: action.status });
    case "ADD_TO_REGISTRY_REQUEST":
    case "ADD_TO_REGISTRY_ERROR":
    case "ADD_TO_REGISTRY_SUCCESS":
    case "REGISTRY_PROMPT_CLOSED":
      return (0, _assign2.default)({}, state, { status: action.status });
    case "SHOW_REGISTRIES":
      var status = state.status;
      var lists = state.lists;
      var rest = (0, _objectWithoutProperties3.default)(state, ["status", "lists"]);

      return (0, _extends3.default)({
        status: "PROMPT",
        lists: action.lists
      }, rest);
    default:
      return state;
  }
};