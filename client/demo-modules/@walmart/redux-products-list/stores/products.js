"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _redux = require("redux");

var _reducersProducts = require("../reducers/products");

var _reducersProducts2 = _interopRequireDefault(_reducersProducts);

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

exports["default"] = function () {
  return (0, _redux.applyMiddleware)(_reduxThunk2["default"])(_redux.createStore)(_reducersProducts2["default"]);
};

module.exports = exports["default"];