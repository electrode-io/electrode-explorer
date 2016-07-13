import { fetchJSON } from "@walmart/electrode-fetch";
import isEmpty from "lodash/isEmpty";

import { buildWpaUri } from "../utils/wpa-utils";

const wpaFetcher = {
  fetch(props) {
    if (isEmpty(props)) {
      return null;
    }

    return fetchJSON(buildWpaUri(props), {
      method: "GET",
      headers: props.headers
    }).then((res) => {

      if (res.status >= 400) {
        return {
          err: `service response ${res.status}`
        };
      }
      return res;

    }).catch((err) => {

      return {err};

    });
  }
};

module.exports = wpaFetcher;
