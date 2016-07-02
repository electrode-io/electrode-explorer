"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataAutomationId = getDataAutomationId;
exports.getDataAutomationIdPair = getDataAutomationIdPair;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PRODUCTION_ENV = "production";

function getDataAutomationId(id, context) {
  var checkProduction = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
  // eslint-disable-line func-style, max-len
  if (!checkProduction || process.env.NODE_ENV !== PRODUCTION_ENV) {
    return context ? context + "-" + id : id;
  }
}

function getDataAutomationIdPair(id, context) {
  // eslint-disable-line func-style, max-len
  var automationKey = "data-tl-id";
  if (process.env.NODE_ENV !== PRODUCTION_ENV) {
    automationKey = "data-automation-id";
  }
  return _defineProperty({}, automationKey, getDataAutomationId(id, context, false));
}