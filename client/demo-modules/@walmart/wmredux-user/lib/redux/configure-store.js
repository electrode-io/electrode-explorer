"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)();

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, logger)(_redux.createStore);

exports.default = function () {
  var reducers = arguments.length <= 0 || arguments[0] === undefined ? { captcha: function captcha() {
      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      return state;
    } } : arguments[0];
  var initialState = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return createStoreWithMiddleware((0, _redux.combineReducers)(_extends({}, reducers)), initialState);
};