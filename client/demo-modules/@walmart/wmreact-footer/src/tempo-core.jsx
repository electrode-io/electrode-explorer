// This file is now the entry point into `@walmart/wmreact-tempo-core`
// applyConfigToTempoCore returns all of the exported tempo-core pieces with the passed in config.
// runtime options will take precedence over this config.
import { applyConfigToTempoCore } from "@walmart/wmreact-tempo-core";

const {
  TempoZone,
  TempoWrapper,
  getQuimbyDataAction,
  quimbyDataReducer,
  mapQuimbyStateToProps
} = applyConfigToTempoCore({pageType: "global_footer", enrich: "0"});

export {
  TempoZone,
  TempoWrapper,
  getQuimbyDataAction,
  quimbyDataReducer,
  mapQuimbyStateToProps
};
