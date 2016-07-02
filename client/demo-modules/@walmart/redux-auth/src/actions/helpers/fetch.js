import {fetch} from "redux-effects-fetch";

const baseFetchBuilder = function (method) {
  return (url, data) =>
    fetch(url, {
      method,
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data && JSON.stringify(data)
    });
};

export const getJson = baseFetchBuilder("get");

export const deleteJson = baseFetchBuilder("delete");

export const putJson = baseFetchBuilder("put");

export const postJson = baseFetchBuilder("post");

