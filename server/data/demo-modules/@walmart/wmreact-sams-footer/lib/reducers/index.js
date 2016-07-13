"use strict";

exports.__esModule = true;

var _redux = require("redux");

var _emailSignup = require("@walmart/wmreact-footer/lib/reducers/email-signup");

var _referenceId = require("@walmart/wmreact-footer/lib/reducers/reference-id");

var _tempoCore = require("@walmart/wmreact-footer/lib/tempo-core");

var footerReducer = (0, _redux.combineReducers)({
  emailSignup: _emailSignup.emailSignup,
  referenceId: _referenceId.referenceId,
  quimbyData: _tempoCore.quimbyDataReducer
});

exports.default = footerReducer;