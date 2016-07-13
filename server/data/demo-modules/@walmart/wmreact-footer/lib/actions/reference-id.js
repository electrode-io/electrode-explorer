"use strict";

exports.__esModule = true;
exports.setFooterReferenceId = undefined;

var _types = require("../types");

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Add Flow validations JIRA: https://jira.walmart.com/browse/GPRDT-193
var setFooterReferenceId = exports.setFooterReferenceId = function setFooterReferenceId() {
  var bstcCookieValue = _electrodeCookies2.default.get("bstc");
  var referenceId = "";
  if (bstcCookieValue) {
    referenceId = bstcCookieValue.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
    // In rare case where there are less than 10 alphanumeric chars append "A" until there
    // are 10. Will produce deterministic result.
    var charsRemaining = 10 - referenceId.length;
    referenceId = (charsRemaining > 0 ? referenceId + "AAAAAAAAAA" : referenceId).substr(0, 10);
  }
  return {
    type: _types.SET_FOOTER_REFERENCE_ID,
    referenceId: referenceId
  };
};