import filter from "lodash/filter";
import each from "lodash/each";
import extend from "lodash/extend";
import isFunction from "lodash/isFunction";
let actions = [];
const history = [];
let init;
let initTime = 0;
const BEACON_VERSION = "1.0.1";
const BFD_CONTEXT_PREFIX = "Irs_";
//const carouselIndex = 0;   // carousel index

const retrieve = (type) => {
  return filter(history, (item) => {
    return item.type === type;
  });
};

// this data is appended to all item rec beacons
const globals = {
  /*jshint camelcase: false */
  "time_since_init"() {
    // there should only be one init beacon
    // var init = self.retrieve('init')[0],
    //   time = init ? init.timestamp : 0;
    if (initTime === 0) {  // set or cache init time, no need to lookup every time.
      init = retrieve("init")[0];
      if (init) {
        initTime = init.timestamp;
      } else {
        initTime = new Date().valueOf();
      }
    }
    return this.timestamp - initTime;
  },
  "time_since_response"() {
    return this.timestamp - initTime;
  }
};

export const beaconMessage = (data) => {
  return {
    _type: "beacon",
    data
  };
};

export const generateBeacon = (module, resultDetail, visitorId, product) => {
  return {
    "action": "product_interest",
    "action_type": "title",
    "item_id": product ? product.itemId : "",
    "placement_id": module.placementId,
    "strategy": module.strategy,
    "config_id": resultDetail.configId,
    "parent_item_id": module.hasOwnProperty("parentItem") ? module.parentItem.itemId
      : module.parentEntities[0].itemId,
    "parent_anchor_item_id": module.hasOwnProperty("parentItem")
      ? module.parentItem.itemId
      : module.parentEntities[0].itemId,
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
export const beaconBuilder = (ctxId, action, type, data, override) => {
  /*jshint camelcase: false */
  let tagAction = "_tagAction";
  const contextId = BFD_CONTEXT_PREFIX + ctxId;
  const version = BEACON_VERSION;
  let base = {
    action,
    "action_type": type,
    "evt_v": version,
    "timestamp": new Date().valueOf(),
    "reporter": "recommendations",
    "source": "new_site",
    "wmt_id": "unknown",
    "findingMethod": "p13n"
  };

  data = data || {};

  base = extend(base, globals, data, override);

  each(base, (item, key) => {
    if (isFunction(item)) {
      base[key] = base[key](base);
    }
  });

  if (action === "PRODUCT_INTEREST") {
    tagAction = "_tagOutboundAction";
  }

  actions = [tagAction, contextId, action, "rec.rec.vww.mod", [
    ["rec", action, base]   // we will add evt_d later.
  ]];

  return beaconMessage(actions);
};
