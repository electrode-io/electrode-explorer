import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
import Config from "@walmart/electrode-ui-config";
import ExecutionEnvironment from "exenv";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {}
    };
  }

  componentWillMount() {
    const host = ExecutionEnvironment.canUseDOM ?
      window.location.origin :
      "http://localhost:3000";

    return fetchJSON(`${host}/portal/data/orgs.json`)
      .then((menu) => {
        this.setState({menu: menu.allOrgs});
      }).catch((err) => {
        console.error(err);
      });
  }

  _subModuleLink(link, submodule) {
    const hash = submodule.replace(/\s/g, "").toLowerCase();
    return (
      <li>
        <a href={`/portal/${link}#${hash}`}>
          {submodule}
        </a>
      </li>
    );
  }

  _renderSubModules(link, submodules) {
    if (!submodules || !submodules.length) {
      return;
    }

    return (
      <ul className="menu-submodules">
      {submodules.map((submodule) => this._subModuleLink(link, submodule))}
      </ul>
    );
  }

  _renderLinks(org) {
    const { menu } = this.state;
    const { repos } = menu[org];

    return Object.keys(repos).map((repoName) => {
      const { link, submodules } = repos[repoName];

      return (<li>
        <a
          href={`/portal/${link}`}>
          {repoName}
        </a>
        {this._renderSubModules(link, submodules)}
      </li>);
    });
  }

  render() {
    const { menu } = this.state;

    return (
      <div className="portal-menu">
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
