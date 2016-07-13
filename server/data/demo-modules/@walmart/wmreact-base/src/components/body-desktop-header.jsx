/* @flow */
import React from "react";

import { Layout } from "@walmart/wmreact-layout";

/**
The desktop header
@private
*/
export default class DesktopHeader extends React.Component {
  render(): ReactElement {
    return (
      <header className="zeus-header">
        <Layout large-sizes={[6, 6]} padded={true} vertical="middle">
          <a href={this.props.headerHref} className="zeus-header-logo">
            <img alt="Walmart. Save Money. Live Better." src={this.props.logoImage} />
            <h1>{this.props.title}</h1>
          </a>
          <div className="text-right">
            <a href={this.props.navTarget}> {this.props.navText} </a>
          </div>
        </Layout>
      </header>
    );
  }
}

DesktopHeader.propTypes = {
  visibleWidths: React.PropTypes.array,
  logoImage: React.PropTypes.string,
  title: React.PropTypes.string,
  navTarget: React.PropTypes.string,
  navText: React.PropTypes.string,
  showHeader: React.PropTypes.bool,
  headerHref: React.PropTypes.string
};
