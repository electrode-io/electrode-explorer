"use strict";

exports.__esModule = true;
exports.beaconBuilder = exports.generateBeacon = exports.beaconMessage = undefined;

var _filter = require("lodash/filter");

var _filter2 = _interopRequireDefault(_filter);

var _each = require("lodash/each");

var _each2 = _interopRequireDefault(_each);

var _extend = require("lodash/extend");

var _extend2 = _interopRequireDefault(_extend);

var _isFunction = require("lodash/isFunction");

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = [];
var history = [];
var init = void 0;
var initTime = 0;
var BEACON_VERSION = "1.0.1";
var BFD_CONTEXT_PREFIX = "Irs_";
//const carouselIndex = 0;   // carousel index

var retrieve = function retrieve(type) {
  return (0, _filter2.default)(history, function (item) {
    return item.type === type;
  });
};

// this data is appended to all item rec beacons
var globals = {
  /*jshint camelcase: false */

  "time_since_init": function time_since_init() {
    // there should only be one init beacon
    // var init = self.retrieve('init')[0],
    //   time = init ? init.timestamp : 0;
    if (initTime === 0) {
      // set or cache init time, no need to lookup every time.
      init = retrieve("init")[0];
      if (init) {
        initTime = init.timestamp;
      } else {
        initTime = new Date().valueOf();
      }
    }
    return this.timestamp - initTime;
  },
  "time_since_response": function time_since_response() {
    return this.timestamp - initTime;
  }
};

var beaconMessage = exports.beaconMessage = function beaconMessage(data) {
  return {
    _type: "beacon",
    data: data
  };
};

var generateBeacon = exports.generateBeacon = function generateBeacon(module, resultDetail, visitorId, product) {
  return {
    "action": "product_interest",
    "action_type": "title",
    "item_id": product ? product.itemId : "",
    "placement_id": module.placementId,
    "strategy": module.strategy,
    "config_id": resultDetail.configId,
    "parent_item_id": module.hasOwnProperty("parentItem") ? module.parentItem.itemId : module.parentEntities[0].itemId,
    "parent_anchor_item_id": module.hasOwnProperty("parentItem") ? module.parentItem.itemId : module.parentEntities[0].itemId,
    "guid": resultDetail.clientGuid,
    "bucket_id": resultDetail.bucketId,
    "beacon_version": "1.0.1",
    "findingMethod": "p13n",
    "customer_id_enc": "",
    "reporter": "recommendations",
    "source": "new_site",
    "client_guid": resultDetail.clientGuid,
    "visitor_id": visitorId
  };
};

/* eslint max-params: [1, 5] */
var beaconBuilder = exports.beaconBuilder = function beaconBuilder(ctxId, action, type, data, override) {
  /*jshint camelcase: false */
  var tagAction = "_tagAction";
  var contextId = BFD_CONTEXT_PREFIX + ctxId;
  var version = BEACON_VERSION;
  var base = {
    action: action,
    "action_type": type,
    "evt_v": version,
    "timestamp": new Date().valueOf(),
    "reporter": "recommendations",
    "source": "new_site",
    "wmt_id": "unknown",
    "findingMethod": "p13n"
  };

  data = data || {};

  base = (0, _extend2.default)(base, globals, data, override);

  (0, _each2.default)(base, function (item, key) {
    if ((0, _isFunction2.default)(item)) {
      base[key] = base[key](base);
    }
  });

  if (action === "PRODUCT_INTEREST") {
    tagAction = "_tagOutboundAction";
  }

  actions = [tagAction, contextId, action, "rec.rec.vww.mod", [["rec", action, base] // we will add evt_d later.
  ]];

  return beaconMessage(actions);
};