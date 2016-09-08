import React from "react";

import { canUseDOM } from "exenv";
import fetch from "isomorphic-fetch";

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
          const org = Object.keys(res.allOrgs || {})[0];
          if (org) {
            const repo = Object.keys(res.allOrgs[org].repos)[0];
            return window.location.pathname = `/${org}/${repo}`;
          }
        });
    }

    return (
      <span>Explorer!</span>
    );
  }
}
