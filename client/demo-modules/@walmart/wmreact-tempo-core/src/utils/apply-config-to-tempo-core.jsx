import TempoZone from "../components/tempo-zone";
import TempoWrapper from "../components/tempo-wrapper";
import { generateMapStateFromConfig } from "./generate-map-state-from-config";
import { getQuimbyActionWithDefaults } from "../actions/get-quimby-data";
import { quimbyDataReducer } from "../reducers/quimby-data";

export const applyConfigToTempoCore = (defaultConfig) => (config) => {
  return {
    TempoZone,
    TempoWrapper,
    getQuimbyDataAction: getQuimbyActionWithDefaults(defaultConfig).bind({}, config),
    quimbyDataReducer: quimbyDataReducer.bind({}, config),
    mapQuimbyStateToProps: generateMapStateFromConfig(config)
  };
};
