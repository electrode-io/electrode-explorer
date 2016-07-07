import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
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
        this.setState({menu: menu.orgs});
      }).catch((err) => {
        console.error(err);
      });
  }

  _renderLinks(org) {
    const { menu } = this.state;
    const { repos } = menu[org];

    return repos.map((repo) => (
      <li>
        <a
          href={`/portal/${repo.link}`}>
          {repo.name}
        </a>
      </li>
    ));
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
