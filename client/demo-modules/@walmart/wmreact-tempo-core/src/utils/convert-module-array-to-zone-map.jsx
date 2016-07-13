export const convertModuleArrayToZoneMap = (moduleArray) => {
  return moduleArray.reduce((zoneMap, currentModule) => {
    zoneMap[currentModule.matchedTrigger.zone] = currentModule;

    return zoneMap;
  }, {});
};
