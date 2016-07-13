import { fetchJSON } from "@walmart/electrode-fetch";

import { convertModuleArrayToZoneMap } from "./convert-module-array-to-zone-map";

export const fetchQuimbyData = (urlString, fetchOptions) => {
  // fetchJSON handles logging and error handling internally
  return fetchJSON(urlString, fetchOptions)
    .then((responseJSON) => {
      if (!responseJSON || !responseJSON.modules || !Array.isArray(responseJSON.modules)) {
        throw new Error("responseJSON did not contain valid modules property");
      }

      if (responseJSON.modules.length === 0) {
        throw new Error("responseJSON contained empty modules array");
      }

      return convertModuleArrayToZoneMap(responseJSON.modules);
    });
};
