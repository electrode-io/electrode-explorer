import get from "lodash/get";
import map from "lodash/map";
import { adaptAdUnits } from "../utils/wpa-utils";

export const adapt = (results) => {
  const adaptedData = {};
  if (results) {
    adaptedData.moduleTitle = get(results, "moduleTitle", "Sponsored Products");
    adaptedData.pageBeacons = get(results, "pageBeacons", {});

    adaptedData.adModule = get(results, "adModule", null);
    adaptedData.bucketId = get(results, "bucketId", null);
    adaptedData.details = get(results, "details", null);
    adaptedData.uuid = get(results, "uuid", null);
    adaptedData.relUuid = get(results, "relUuid", adaptedData.uuid);

    const adUnits = results.adUnits ? results.adUnits : [];
    adaptedData.adUnits = map(adUnits, adaptAdUnits);
  }
  return {
    adaptedData
  };
};
