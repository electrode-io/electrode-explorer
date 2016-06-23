import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";
import Config from "@walmart/electrode-ui-config";
import Link from "@walmart/wmreact-base/lib/components/link";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import ExecutionEnvironment from "exenv";

function capitalizeFirstLetter(str) {
  if (!str) {
    return;
  }

  return str[0].toUpperCase() + str.substring(1);
}

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  componentWillMount() {
    let host = "http://localhost:3000";
    if (ExecutionEnvironment.canUseDOM) {
      host = window.location.origin;
    }
    return fetchJSON(`${host}/portal/data/orgs.json`)
      .then((menu) => {
        this.setState({menu});
      }).catch((err) => {
        console.error(err);
      });
  }

  _renderLinks(org) {
    const { menu } = this.state;
    const { repos } = menu[org];

    return repos.map((repo) => (
      <Link
        className="nav-link"
        href={`${Config.ui.basePath}/${repo.link}`}>
        {capitalizeFirstLetter(repo.name)}
      </Link>
    ));
  }

  render() {
    const { menu } = this.state;

    return (
      <div className="portal-menu">
        {menu && Object.keys(menu).map((org) => (
          <span>
          <Flyout className="menu-link"
            trigger={<a className="menu-link">{capitalizeFirstLetter(org)}</a>}
            direction="bottom"
            size="fluid"
            hover>
            {this._renderLinks(org)}
          </Flyout>
        </span>
        ))}
      </div>
    );
  }
} 
