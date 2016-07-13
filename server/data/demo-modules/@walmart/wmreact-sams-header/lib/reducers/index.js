"use strict";

exports.__esModule = true;

var _redux = require("redux");

var _storeFinder = require("./store-finder");

var _storeFinder2 = _interopRequireDefault(_storeFinder);

var _userName = require("@walmart/wmreact-header/lib/reducers/user-name");

var _cartCount = require("@walmart/wmreact-header/lib/reducers/cart-count");

var _shippingPass = require("@walmart/wmreact-header/lib/reducers/shipping-pass");

var _tempoCore = require("@walmart/wmreact-header/lib/tempo-core");

var _businessToolNavMobile = require("./business-tool-nav-mobile");

var _businessToolNavMobile2 = _interopRequireDefault(_businessToolNavMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerReducer = (0, _redux.combineReducers)({
  userName: _userName.userName,
  shippingPass: _shippingPass.shippingPass,
  totalItemsCount: _cartCount.cartCount,
  storeFinder: (0, _redux.combineReducers)({
    response: _storeFinder2.default
  }),
  quimbyData: _tempoCore.quimbyDataReducer,
  bizToolsMob: _businessToolNavMobile2.default
});

exports.default = headerReducer;