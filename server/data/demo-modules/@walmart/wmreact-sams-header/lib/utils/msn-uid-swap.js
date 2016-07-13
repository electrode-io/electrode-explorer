"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Returns configs object with updated uid's for analytics.
  @examples
  import generateLeftHandNavUids from "@walmart/tempo-analytics-utils"
  const newConfigs = generateLeftHandNavUids(configs);
*/

var MSN = "MSN-";
var LNK = "LNK-";

var generateMemberServicesNavUids = function generateMemberServicesNavUids(configs) {
  var updatedConfigs = (0, _assign2.default)({}, configs);
  var menuLinks = updatedConfigs.menuLinks;

  var menuLinkUidCounter = 1;
  var linkUidCounter = 1;

  if (menuLinks.length) {
    menuLinks.forEach(function (menulink) {
      menulink.uid = MSN + " " + menuLinkUidCounter;
      menulink.link.uid = MSN + " " + menuLinkUidCounter + " - " + LNK + " " + linkUidCounter;

      menuLinkUidCounter++;
      linkUidCounter++;
    });
  }

  return updatedConfigs;
};

exports.default = generateMemberServicesNavUids;