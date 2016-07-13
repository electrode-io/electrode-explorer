/* @flow */
import React from "react";

import { Layout } from "@walmart/wmreact-layout";

/**
The tablet header
@private
*/
export default class TabletHeader extends React.Component {
  render(): ReactElement {
    return (
      <header className="zeus-header">
        <Layout small-sizes={[2, 8]} medium-sizes={[2, 8]} padded={true} vertical="middle">
          <a href={this.props.navTarget}>
            <i className="wmicon wmicon-16 wmicon-angle-left"></i>
            {this.props.navShort}
          </a>
          <div className="text-center">
            <a href={this.props.headerHref} className="zeus-header-logo">
              <img alt="Walmart. Save Money. Live Better." src={this.props.logoImage} />
              <h1>{this.props.title}</h1>
            </a>
          </div>
        </Layout>
      </header>
    );
  }
}

TabletHeader.propTypes = {
  visibleWidths: React.PropTypes.array,
  logoImage: React.PropTypes.string,
  title: React.PropTypes.string,
  navTarget: React.PropTypes.string,
  navShort: React.PropTypes.string,
  showHeader: React.PropTypes.bool,
  headerHref: React.PropTypes.string
};
