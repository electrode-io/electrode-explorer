"use strict";

exports.__esModule = true;

var _findClicks = require("./rules/find-clicks");

var _findClicks2 = _interopRequireDefault(_findClicks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0, no-undef: 0 */
var canary = require("@walmart/canary")();

canary.log(function (evt) {
  console.log(["log", evt]);
});

canary.message(function (message) {
  console.log(["message", message]);
});

canary.applyRules([_findClicks2.default]);

exports.default = canary.process;