"use strict";

exports.__esModule = true;
exports.defaultMiddleware = undefined;

var _redux = require("redux");

var _reduxEffects = require("redux-effects");

var _reduxEffects2 = _interopRequireDefault(_reduxEffects);

var _reduxEffectsFetch = require("redux-effects-fetch");

var _reduxEffectsFetch2 = _interopRequireDefault(_reduxEffectsFetch);

var _reduxMulti = require("redux-multi");

var _reduxMulti2 = _interopRequireDefault(_reduxMulti);

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require("./reducers/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)(_index2.default);

// The middleware


var defaultMiddleware = exports.defaultMiddleware = [_reduxMulti2.default, _reduxEffects2.default, _reduxEffectsFetch2.default, _reduxThunk2.default];

var createDefaultReduxStore = function createDefaultReduxStore(middleware) {
  return _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
};

var createReduxStore = function createReduxStore() {
  var middleware = arguments.length <= 0 || arguments[0] === undefined ? defaultMiddleware : arguments[0];

  return createDefaultReduxStore(middleware)(reducer);
};

exports.default = createReduxStore;