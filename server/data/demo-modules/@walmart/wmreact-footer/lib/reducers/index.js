"use strict";

exports.__esModule = true;

var _redux = require("redux");

var _emailSignup = require("./email-signup");

var _referenceId = require("./reference-id");

var _tempoCore = require("../tempo-core");

var footerReducer = (0, _redux.combineReducers)({
  emailSignup: _emailSignup.emailSignup,
  referenceId: _referenceId.referenceId,
  quimbyData: _tempoCore.quimbyDataReducer
});

exports.default = footerReducer;