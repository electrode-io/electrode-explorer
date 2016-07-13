"use strict";

exports.__esModule = true;
exports.getShippingPass = undefined;

var _wmreactShippingPass = require("@walmart/wmreact-shipping-pass");

var _types = require("../types");

//TODO: use shipping pass redux component https://jira.walmart.com/browse/GPRDT-291
var getShippingPass = exports.getShippingPass = function getShippingPass() {
  var shippingPass = arguments.length <= 0 || arguments[0] === undefined ? (0, _wmreactShippingPass.isSubscribed)() : arguments[0];

  return {
    type: _types.GET_SHIPPING_PASS,
    shippingPass: shippingPass
  };
};