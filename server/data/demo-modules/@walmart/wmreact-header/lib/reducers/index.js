"use strict";

exports.__esModule = true;

var _redux = require("redux");

var _storeFinder = require("./store-finder");

var _userName = require("./user-name");

var _cartCount = require("./cart-count");

var _shippingPass = require("./shipping-pass");

var _tempoCore = require("../tempo-core");

var headerReducer = (0, _redux.combineReducers)({
  userName: _userName.userName,
  shippingPass: _shippingPass.shippingPass,
  totalItemsCount: _cartCount.cartCount,
  storeFinder: _storeFinder.storeFinder,
  quimbyData: _tempoCore.quimbyDataReducer
});

exports.default = headerReducer;