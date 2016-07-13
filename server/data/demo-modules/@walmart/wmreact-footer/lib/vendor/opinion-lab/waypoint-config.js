"use strict";

exports.__esModule = true;

var _waypointEngine = require("./waypoint-engine");

var _waypointEngine2 = _interopRequireDefault(_waypointEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // Builds the custom variables used by OpinionLab in a format they require
  generateOpinionLabVars: function generateOpinionLabVars() {
    var vars = {},

    /*jshint camelcase:false */
    s_vi = _waypointEngine2.default.readCookie("s_vi"),

    /*jshint camelcase:true */
    bstc = _waypointEngine2.default.readCookie("bstc"),
        cartId = _waypointEngine2.default.readCookie("WMSessionID"),
        // more parsing required
    visitorId = _waypointEngine2.default.readCookie("com.wm.anoncart"),
        jSessionId = _waypointEngine2.default.readCookie("com.wm.visitor"),
        serverName = document.getElementsByClassName("env-info") && document.getElementsByClassName("env-info")[0],
        // more parsing required
    ACID = _waypointEngine2.default.readCookie("ACID"),
        CRT = _waypointEngine2.default.readCookie("CRT"),
        PCID = _waypointEngine2.default.readCookie("PCID"),
        CID = _waypointEngine2.default.readCookie("CID"),
        referenceId = document.getElementsByClassName("reference-id") && document.getElementsByClassName("reference-id")[0]; // more parsing required

    /*jshint camelcase:false */
    vars.s_vi = s_vi !== null ? s_vi : "null";
    /*jshint camelcase:true */
    vars.bstc = bstc !== null ? bstc : "null";
    vars.cartId = cartId !== null ? (cartId = cartId.split("_")[1], cartId) : "null";
    vars.visitorId = visitorId !== null ? visitorId : "null";
    vars.jSessionId = jSessionId !== null ? jSessionId : "null";
    vars.serverName = serverName !== undefined ? serverName.innerText : "null";
    vars.ACID = ACID !== null ? ACID : "null";
    vars.CRT = CRT !== null ? CRT : "null";
    vars.PCID = PCID !== null ? PCID : "null";
    vars.CID = CID !== null ? CID : "null";
    vars.referenceId = referenceId !== undefined ? referenceId.innerText : "null";
    /*jshint camelcase:false, undef:true */
    // TODO: Figure out how to pass this dynamically as an arg
    vars.deviceType = "DESKTOP";

    /*global s_omni*/
    if (typeof s_omni !== "undefined") {
      vars.departmentSubcategory = typeof s_omni.eVar16 !== "undefined" ? s_omni.eVar16 : "null";
      vars.siteSpectTest = typeof s_omni.eVar21 !== "undefined" ? s_omni.eVar21 : "null";
      vars.pageName = typeof s_omni.pageName !== "undefined" ? s_omni.pageName : "null";
      vars.marketingVehicle = typeof s_omni.prop12 !== "undefined" ? s_omni.prop12 : "null";
      vars.SS_GUID = typeof s_omni.prop13 !== "undefined" ? s_omni.prop13 : "null";
      vars.checkoutFulfillmentMethod = typeof s_omni.eVar31 !== "undefined" ? s_omni.eVar31 : "null";
      vars.orderNumber = typeof s_omni.eVar20 !== "undefined" ? s_omni.eVar20 : "null";
      vars.siteSpectCampaign = typeof s_omni.prop20 !== "undefined" ? s_omni.prop20 : "null";
      vars.siteSpectCampaignTwo = typeof s_omni.prop58 !== "undefined" ? s_omni.prop58 : "null";
      vars.departmentInfo = typeof s_omni.prop3 !== "undefined" ? s_omni.prop3 : "null";
      vars.granularPageName = typeof s_omni.prop2 !== "undefined" ? s_omni.prop2 : "null";
      vars.orderId = typeof s_omni.eVar20 !== "undefined" ? s_omni.eVar20 : "null";
      vars.eVar72 = typeof s_omni.eVar72 !== "undefined" ? s_omni.eVar72 : "null";
    }
    /*jshint camelcase:true, undef:false */

    return vars;
  },

  waypointInit: function waypointInit(path) {
    /*jshint camelcase:false */
    _waypointEngine2.default.oo_waypoint = new _waypointEngine2.default.Waypoint({
      /* REQUIRED - Asset identification */
      pathToAssets: path || "//i5.walmartimages.com/dfw",
      companySlogan: "Feedback",
      /* waypoint_logo */
      companyLogo: "//i5.walmartimages.com/dfw/4ff9c6c9-4d2a/k2-_1ad7df9a-6552-4a7e-899a-7987b95410e8.v1.png",
      /* OPTIONAL - Configuration */
      categories: {
        Website_feedback: {
          oCode: {
            legacyVariables: {
              vars: _waypointEngine2.default.readCookie("bstc"),
              override: true
            },
            customVariables: this.generateOpinionLabVars()
          },
          /* icon_web */
          icon: "/4ff9c6c9-e5ab/k2-_43a6221c-42f7-4841-ba9d-979161ba3ba1.v1.png"
        },
        Store_feedback: {
          oCode: {
            referrerRewrite: {
              searchPattern: /:\/\/[^\/]*/,
              replacePattern: "://store.www.walmart.com"
            },
            legacyVariables: {
              vars: _waypointEngine2.default.readCookie("bstc"),
              override: true
            },
            customVariables: this.generateOpinionLabVars()
          },
          icon: "/4ff9c6c9-f025/k2-_325eebb7-11c7-4bd4-a6c2-bf88fa910885.v1.png" //"icon_store.png"
        }
      }
    });
    /*jshint camelcase:false */
  }
};
/*eslint-enable */
/*
 OnlineOpinion v5.9.0
 Released: 11/17/2014. Compiled 11/17/2014 01:01:01 PM -0600
 Branch: master 7cffc7b9a0b11594d56b71ca0cb042d9b0fc24f5
 Components: Full
 UMD: enabled
 The following code is Copyright 1998-2014 Opinionlab, Inc. All rights reserved.
 Unauthorized use is prohibited. This product and other products of OpinionLab, Inc.
 are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending.
 http://www.opinionlab.com
 */
/*eslint-disable */