"use strict";

exports.__esModule = true;
exports.formatPhone = exports.removeEvent = exports.addEvent = undefined;

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addEvent = exports.addEvent = function addEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === "undefined") {
    return;
  }
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + type, eventHandle);
  } else {
    elem["on" + type] = eventHandle;
  }
};

var removeEvent = exports.removeEvent = function removeEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === "undefined") {
    return;
  }
  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent("on" + type, eventHandle);
  } else {
    elem["on" + type] = null;
  }
};

var formatPhone = exports.formatPhone = function formatPhone(phoneNumber) {
  if (!(0, _isEmpty2.default)(phoneNumber)) {
    return phoneNumber.toString()
    // Normalize by removing all non-digits
    .replace(/[^\d]/g, "")
    // Remove US country code if present
    .replace(/^[1]/, "")
    // Add parentheses/space/hyphen and return
    .replace(/(^.{3})(.{3})/, "($1) $2-");
  }

  return "";
};