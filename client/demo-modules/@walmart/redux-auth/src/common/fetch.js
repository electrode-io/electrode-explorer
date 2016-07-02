import fetch from "isomorphic-fetch";

const checkStatus = (response) => {
  const json = response.json();

  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json.then((err) => { throw err; });
  }
};

export default (url, options = {}) =>
  fetch(url, Object.assign({}, options))
    .then(checkStatus);
