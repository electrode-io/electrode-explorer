/* @flow */
import React from "react";

import { Layout } from "@walmart/wmreact-layout";

/**
The mobile header
@private
*/
export default class MobileHeader extends React.Component {
  render(): ReactElement {
    return (
      <header className="zeus-header">
        <Layout x-small-sizes={[2, 8]} padded={true} vertical="middle">
          <a href={this.props.navTarget}>
            <i className="wmicon wmicon-16 wmicon-angle-left"></i>
            <i className={`wmicon wmicon-20 ${this.props.navIcon}`}></i>
          </a>
          <div className="text-center">
            <a href={this.props.headerHref} className="zeus-header-logo">
              <i title="Walmart. Save Money. Live Better."
                className="valign-middle wmicon wmicon-spark wmicon-32"/>
              <h1>{this.props.title}</h1>
            </a>
          </div>
        </Layout>
      </header>
    );
  }
}

MobileHeader.propTypes = {
  visibleWidths: React.PropTypes.array,
  logoImage: React.PropTypes.string,
  title: React.PropTypes.string,
  navTarget: React.PropTypes.string,
  navIcon: React.PropTypes.string,
  showHeader: React.PropTypes.bool,
  headerHref: React.PropTypes.string
};
