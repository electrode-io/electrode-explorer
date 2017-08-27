import React from "react";

import { canUseDOM } from "exenv";
import fetch from "isomorphic-fetch";

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export class Home extends React.Component {
  render() {
    if (canUseDOM) {
      const host = window.location.origin;
      const url = `${host}/data/orgs.json`;

      fetch(url)
        .then((res) => {
          if (res.status >= 400) {
            throw res;
          }
          return res.json();
        })
        .then((res) => {
          const org = random(Object.keys(res.allOrgs || {}));
          if (org) {
            const repo = random(Object.keys(res.allOrgs[org].repos));
            return window.location.pathname = `/${org}/${repo}`;
          }
        });
    }

    return (
      <span>Explorer!</span>
    );
  }
}
