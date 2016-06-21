import React from "react";

import Config from "@walmart/electrode-ui-config";
import classnames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";

export default class PortalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false
    };
  }

  _toggleNav() {
    this.setState({
      navVisible: !this.state.navVisible
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
            <Link
              className="nav-link"
              onClick={this._toggleNav.bind(this)}
              href="/portal/react/carousel">
              Carousel
            </Link>
            <Link
              className="nav-link"
              onClick={this._toggleNav.bind(this)}
              href="/portal/react/base">
              Base
            </Link>
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
