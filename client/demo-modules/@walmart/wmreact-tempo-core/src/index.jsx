// Server side entry point and config, does not load for client render.
// This works because of differing `main` and `browser` fields in `package.json`
//
// The urlBase defined below should not be made public, it is an internal API endpoint.
// See `csindex.js` for client config which has a different urlBase.

import TempoZone from "./components/tempo-zone";
import TempoWrapper from "./components/tempo-wrapper";
import { getQuimbyActionWithDefaults } from "./actions/get-quimby-data";
import { quimbyDataReducer } from "./reducers/quimby-data";
import { applyConfigToTempoCore } from "./utils/apply-config-to-tempo-core";
import { generateMapStateToPropsFromConfig } from "./utils/generate-map-state-from-config";
import { getFetchOptions } from "./utils/get-fetch-options";

const defaultTempoConfig = {
  urlBase: "http://quimby-stg-mobile.glb.prod.walmart.com/tempo",
  tenant: "Walmart.com",
  channel: "WWW",
  cacheDurationInSeconds: 0
};

if (process.env.NODE_ENV === "production") {
  defaultTempoConfig.urlBase = "http://quimby-mobile.glb.prod.walmart.com/tempo";
}

module.exports = {
  TempoZone,
  TempoWrapper,
  getQuimbyDataAction: getQuimbyActionWithDefaults(defaultTempoConfig),
  quimbyDataReducer,
  generateMapStateToPropsFromConfig,
  getFetchOptions,
  // MOST APPS SHOULD USE THIS AND ONLY THIS TO GENERATE IMPORTABLE MODULES
  applyConfigToTempoCore: applyConfigToTempoCore(defaultTempoConfig)
};
