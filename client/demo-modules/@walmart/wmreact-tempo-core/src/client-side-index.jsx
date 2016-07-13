// Client side entry point and config, does not load for server render.
// This works because of differing `main` and `browser` fields in `package.json`
//
// See `index.js` for server config which has a different urlBase that shouldn't be exposed
// on the client.

import TempoZone from "./components/tempo-zone";
import TempoWrapper from "./components/tempo-wrapper";
import { getQuimbyActionWithDefaults } from "./actions/get-quimby-data";
import { quimbyDataReducer } from "./reducers/quimby-data";
import { applyConfigToTempoCore } from "./utils/apply-config-to-tempo-core";
import { generateMapStateToPropsFromConfig } from "./utils/generate-map-state-from-config";

const defaultTempoConfig = {
  urlBase: "http://quimby-stg.mobile.walmart.com/tempo",
  tenant: "Walmart.com",
  channel: "WWW"
};

if (process.env.NODE_ENV === "production") {
  defaultTempoConfig.urlBase = "http://quimby.mobile.walmart.com/tempo";
}

module.exports = {
  TempoZone,
  TempoWrapper,
  getQuimbyDataAction: getQuimbyActionWithDefaults(defaultTempoConfig),
  quimbyDataReducer,
  generateMapStateToPropsFromConfig,
  // MOST APPS SHOULD USE THIS AND ONLY THIS TO GENERATE IMPORTABLE MODULES
  applyConfigToTempoCore: applyConfigToTempoCore(defaultTempoConfig)
};
