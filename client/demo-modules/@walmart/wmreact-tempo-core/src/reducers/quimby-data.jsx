export const quimbyDataReducer = (config = {}, state = {}, action = {}) => {
  const {
    type,
    pageType,
    pageId,
    zoneModuleMap
  } = action;
  const configsPageType = config.pageType;
  if (type === "TEMPO_CORE_QUIMBY_DATA" &&
    (pageType === configsPageType || Array.isArray(configsPageType) &&
      configsPageType.indexOf(pageType) > -1)) {
    const quimbyData = {};

    // Assume tenant and channel are constant during application lifecycle
    if (pageId) {
      quimbyData[pageType] = state[pageType] ? {...state[pageType]} : {};
      quimbyData[pageType][pageId] = zoneModuleMap;
    } else {
      quimbyData[pageType] = zoneModuleMap;
    }

    return {...state, ...quimbyData};
  } else {
    return state;
  }
};
