require("es6-promise").polyfill();

import fetch from "isomorphic-fetch";
import ExecutionEnvironment from "exenv";

let getAuthData = null;

if (ExecutionEnvironment.canUseDOM) {
  getAuthData = () => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/api/auth/status`)
        .then((res) => {
          if (res.status >= 400) {
            reject();
          }
          return res.json();
        }).then((data) => {
          resolve(data);
        }).catch((e) => {
          reject(e);
        });
    });
  };
} else {
  const authPlugin = require("@walmart/auth-plugin");
  getAuthData = () => {
    return new Promise((resolve) => {
      resolve(authPlugin.getAuthData());
    });
  };
}

export default getAuthData;
