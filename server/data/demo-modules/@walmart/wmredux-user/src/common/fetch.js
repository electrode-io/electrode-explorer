import { fetch } from "@walmart/electrode-fetch";

const options = {
  credentials: "include",
  headers: {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Content-Type": "application/json"
  },
  method: "POST"
};

const getExceptionCode = (code) =>
  ({code});

export default (url, body = {}) =>
  fetch(url, {
    ...options,
    body: JSON.stringify(body)
  }).catch((err) => {
    if (err.response) {
      return err.response.json().then((json) => {throw json;},
        () => {throw getExceptionCode("parsing_error");});
    } else {
      throw getExceptionCode("service_call_error");
    }
  });
