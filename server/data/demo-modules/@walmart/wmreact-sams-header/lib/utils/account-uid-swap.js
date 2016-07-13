"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *  "configs": {
   "SubMenu": [{
     "link": {
       "linkText": "Your Account",
       "title": "Your Account",
       "clickThrough": {
         "type": "url",
         "value": "account"
       },
       "uid": "c5SoiEZ9"
     },
     "uid": "BY447SQL"
   }]
 }
 */

var ACN = "ACN-";
var LNK = "LNK-";

var generateAccountNavUids = function generateAccountNavUids(configs) {
  var updatedConfigs = (0, _assign2.default)({}, configs);
  var updatedConfigsElements = updatedConfigs.SubMenu;

  var subMenuUidCounter = 1;
  var linkUidCounter = 1;

  if (updatedConfigsElements.length) {
    updatedConfigsElements.forEach(function (subMenu) {
      subMenu.uid = ACN + " " + subMenuUidCounter;
      subMenu.link.uid = ACN + " " + subMenuUidCounter + " - " + LNK + " " + linkUidCounter;
      subMenuUidCounter++;
      linkUidCounter++;
    });
  }

  return updatedConfigs;
};

exports.default = generateAccountNavUids;