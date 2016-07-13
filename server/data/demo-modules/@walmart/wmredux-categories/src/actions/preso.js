import { fetchJSON } from "@walmart/electrode-fetch";
import { getFetchOptions } from "@walmart/wmreact-tempo-core/lib/utils/get-fetch-options";
import { buildPresoUri } from "../helpers/preso";

// Action Types
export const RECEIVE_MODULES = "RECEIVE_MODULES";

// Action creators
export const receiveModules = (data) => ({
  type: RECEIVE_MODULES,
  data
});

export const bootstrapModules = (params) => (dispatch) =>
  fetchJSON(buildPresoUri(params), getFetchOptions(params.req))
    .then((response) => {
      if (response.status >= 400) { throw new Error("Invalid response"); }

      if (response.redirectUrl) {
        // Preso service was unable to find valid modules for the requested category id;
        // therefore, redirect to provided url. This assumes the redirectUrl property will
        // not be present if the service returns valid module data from Tempo
        const error = new Error("Category Page modules could not be found.");
        const headers = params.req && params.req.headers || {};

        error.path = `http://${headers.host}${response.redirectUrl}`;

        // TODO: Figure out why 301 does not automatically redirect user
        // https://jira.walmart.com/browse/CDSFE-2637
        error.status = 302;

        throw error;
      }

      dispatch(receiveModules(response));
    }).catch((err) => {
      throw err;
    });
