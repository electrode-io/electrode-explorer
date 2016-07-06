"use strict";

exports.__esModule = true;
exports.SamsFooter = exports.FooterReducers = exports.FooterActions = undefined;

var _reducers = require("./reducers");

Object.defineProperty(exports, "FooterReducers", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reducers).default;
  }
});

var _samsFooter = require("./components/sams-footer");

Object.defineProperty(exports, "SamsFooter", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_samsFooter).default;
  }
});

var _actions = require("./actions");

var FooterActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FooterActions = FooterActions;