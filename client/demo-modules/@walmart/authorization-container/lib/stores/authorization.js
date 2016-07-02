"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _redux = require("redux");

var _reducersAuthorization = require("../reducers/authorization");

var _reducersAuthorization2 = _interopRequireDefault(_reducersAuthorization);

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var store = (0, _redux.applyMiddleware)(_reduxThunk2["default"])(_redux.createStore)(_reducersAuthorization2["default"]);

exports["default"] = store;
module.exports = exports["default"];