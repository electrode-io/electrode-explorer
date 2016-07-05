"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);

exports.default = function () {
  var reducers = arguments.length <= 0 || arguments[0] === undefined ? { captcha: function captcha() {
      var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      return state;
    } } : arguments[0];
  var initialState = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return createStoreWithMiddleware((0, _redux.combineReducers)((0, _extends3.default)({}, reducers)), initialState);
};