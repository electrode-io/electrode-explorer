"use strict";

exports.__esModule = true;

var _redux = require("redux");

var _reduxEffects = require("redux-effects");

var _reduxEffects2 = _interopRequireDefault(_reduxEffects);

var _reduxEffectsFetch = require("redux-effects-fetch");

var _reduxEffectsFetch2 = _interopRequireDefault(_reduxEffectsFetch);

var _reduxMulti = require("redux-multi");

var _reduxMulti2 = _interopRequireDefault(_reduxMulti);

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _index = require("./reducers/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Middleware


var middleware = [_reduxMulti2.default, _reduxEffects2.default, _reduxEffectsFetch2.default, _reduxThunk2.default, (0, _reduxLogger2.default)()];

var createStoreWithMiddleware = function createStoreWithMiddleware() {
  return _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
};
var createReduxStore = function createReduxStore() {
  return createStoreWithMiddleware()(_index2.default);
};
exports.default = createReduxStore;