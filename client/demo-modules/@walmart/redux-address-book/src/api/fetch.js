import fetch from "isomorphic-fetch";

const defaultOptions = {
  credentials: "same-origin",
  headers: {
    "accept": "application/json",
    "content-type": "application/json"
  }
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw response;
};

// Certain endpoints/methods may return empty payload when the operation is succeeded and
// the HTTP status is 200 OK. Empty payload is not a valid JSON so allow user to accept
// the empty payload in certain cases.
const parseTextResponse = (options) => {
  return (text) => {
    const len = text.length;
    if (!len && !options.allowEmptyResponse) {
      throw new SyntaxError();
    }

    return len ? JSON.parse(text) : {};
  };
};

export default (url, options = {}) =>
  fetch(url, Object.assign(defaultOptions, options))
    .then(checkStatus)
    .then((response) => response.text())
    .then(parseTextResponse(options));
