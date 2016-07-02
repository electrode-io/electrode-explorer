import {fetchJSON} from "@walmart/electrode-fetch";

const baseFetchBuilder = function (method) {
  return (url, data) =>
    fetchJSON(url, {
      method,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data && JSON.stringify(data)
    });
};

export const getJSON = baseFetchBuilder("GET");
export const putJSON = baseFetchBuilder("PUT");
