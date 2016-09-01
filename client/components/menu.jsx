/* globals console */
/* eslint-disable no-console */

import React from "react";
import ExecutionEnvironment from "exenv";
import fetch from "isomorphic-fetch";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {}
    };
  }

  componentWillMount() {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const host = window.location.origin;

    return fetch(`${host}/data/orgs.json`)
      .then((res) => {
        if (res.status >= 400) {
          throw res;
        }
        return res.json();
      })
      .then((menu) => {
        this.setState({menu: menu.allOrgs});
      }).catch((err) => {
        console.log(err);
      });
  }

  _subModuleLink(link, submodule) {
    const hash = submodule.replace(/\s/g, "").toLowerCase();
    return (
      <li>
        <a href={`/${link}#${hash}`}>
          {submodule}
        </a>
      </li>
    );
  }

  _renderSubModules(link, submodules) {
    return submodules && submodules.length && (
      <ul className="menu-submodules">
        {submodules.map((submodule) => this._subModuleLink(link, submodule))}
      </ul>
    );
  }

  _renderLinks(org) {
    const { menu } = this.state;
    const { repos } = menu[org];
    const sortedRepos = Object.keys(repos);
    sortedRepos.sort();
    return sortedRepos.map((repoName) => {
      const { link, submodules } = repos[repoName];

      return (<li>
        <a
          href={`/${link}`}>
          {repoName}
        </a>
        {this._renderSubModules(link, submodules)}
      </li>);
    });
  }

  render() {
    const { menu } = this.state;

    return (
      <div className="explorer-menu">
        {menu && Object.keys(menu).map((org) => (
          <span>
            <h4>{org}</h4>
            <ul>
              {this._renderLinks(org)}
            </ul>
          </span>
        ))}
      </div>
    );
  }
}
