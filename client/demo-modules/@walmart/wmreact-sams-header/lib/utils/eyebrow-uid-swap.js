"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *  "configs": {
        "elements": [
          {
            "title": "Your Lists",
            "link": {
              "clickThrough": {
                "type": "url",
                "value": "http://m.samsclub.com/lists"
              },
              "uid": "CiNpAijP"
            },
            "hideIfLoggedIn": "false",
            "linkColor": null,
            "linkHoverColor": null,
            "uid": "CRiCqhUQ"
          }
        ]
      }
 */

var EBN = "EBN-";
var LNK = "LNK-";

var generateEyeBrowNavUids = function generateEyeBrowNavUids(configs) {
  var updatedConfigs = (0, _assign2.default)({}, configs);
  var updatedConfigsElements = updatedConfigs.elements;

  var elementUidCounter = 1;
  var linkUidCounter = 1;

  if (updatedConfigsElements.length) {
    updatedConfigsElements.forEach(function (element) {
      element.uid = "" + EBN + elementUidCounter;
      element.link.uid = "" + EBN + elementUidCounter + "-" + LNK + linkUidCounter;

      elementUidCounter++;
      linkUidCounter++;
    });
  }

  return updatedConfigs;
};

module.exports = generateEyeBrowNavUids;