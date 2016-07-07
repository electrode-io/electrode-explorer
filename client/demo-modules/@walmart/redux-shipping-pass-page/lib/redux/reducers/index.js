"use strict";

exports.__esModule = true;
exports.creditCardReducer = exports.shippingPassReducer = undefined;

var _redux = require("redux");

var _shippingPass = require("./shipping-pass");

var _shippingPass2 = _interopRequireDefault(_shippingPass);

var _reduxCreditCard = require("@walmart/redux-credit-card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  shippingPass: _shippingPass2.default,
  creditCards: _reduxCreditCard.reducers.creditCards
});

var shippingPassReducer = exports.shippingPassReducer = _shippingPass2.default;
var creditCardReducer = exports.creditCardReducer = _reduxCreditCard.reducers.creditCards;

exports.default = rootReducer;