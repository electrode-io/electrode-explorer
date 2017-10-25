import React from "react";

import { canUseDOM } from "exenv";
import fetch from "isomorphic-fetch";

const random = arr => arr[Math.floor(Math.random() * arr.length)];
const HTTP_BAD_REQUEST = 400;

export class Home extends React.Component {
  render() {
    if (canUseDOM) {
      const host = window.location.origin;
      const url = `${host}/data/orgs.json`;

      fetch(url)
        .then(res => {
          if (res.status >= HTTP_BAD_REQUEST) {
            throw res;
          }
          return res.json();
        })
        .then(res => {
          const org = random(Object.keys(res.allOrgs || {}));
          if (org) {
            const repo = random(Object.keys(res.allOrgs[org].repos));
            return (window.location.pathname = `/${org}/${repo}`);
          }
          return (window.location.pathname = `/`);
        });
    }

    return <span>Explorer!</span>;
  }
}
