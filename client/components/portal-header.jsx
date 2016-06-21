import React from "react";

import { fetchJSON } from "@walmart/electrode-fetch";
import Config from "@walmart/electrode-ui-config";
import classnames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";

export default class PortalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false,
      menu: []
    };
  }

  componentWillMount() {
    return fetchJSON(`http://localhost:3000/portal/data/orgs.json`)
      .then((res) => {
        const menu = res.orgs;
        console.log("menu", menu);
        this.setState({menu});
      }).catch((err) => {
        console.error(err);
      });
  }

  _toggleNav() {
    this.setState({
      navVisible: !this.state.navVisible
    });
  }

  _renderLinks() {
    const { menu } = this.state;
    const orgs = Object.keys(menu);

    return orgs.map((org) => {
      const { repos } = menu[org];

      const links = repos.map((repo) => {
        return (
          <Link
            className="nav-link"
            onClick={this._toggleNav.bind(this)}
            href={`${Config.ui.basePath}/${repo.link}`}>
            {repo.name}
          </Link>
        );
      });

      return (
        <div>
          <div className="nav-link">{org}</div>
          {links}
        </div>
      );
    });
  }

  render() {
    const bodyClass = classnames("portal-slider", {
      "is-navigable": this.state.navVisible
    });
    const headerClass = classnames(bodyClass, "portal-header");

    return (
      <div className={headerClass}>
        {this.state.navVisible &&
        <div className="portal-nav">
          <ol className="nav-list">
            {this._renderLinks()}
          </ol>
        </div>}

        <div className="portal-slider">
          <div onClick={this._toggleNav.bind(this)} className="nav-toggle">
            <Icon name="menu" size={1}/>
          </div>
          <div className="portal-header">
            <h1 className="portal-title">{Config.ui.meta.portalLogo ?
              <img src={Config.ui.meta.portalLogo}/> :
              Config.ui.meta.portalName}
            </h1>
          </div>
        </div>

        <div className={bodyClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
