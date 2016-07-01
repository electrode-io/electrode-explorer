/* @flow */
/*eslint max-len: [2, 100, 4, { "ignorePattern": ".*i5.walmartimages.com.*" }]*/
import React from "react";
import { Layout, MediaSelector } from "@walmart/wmreact-layout";

import MobileHeader from "./body-mobile-header";
import TabletHeader from "./body-tablet-header";
import DesktopHeader from "./body-desktop-header";

/**
Body container component.
@examples
```jsx
<Body>
  Foo
</Body>
```
@component Body
@property {object} props
@import {Body}
@playground
Body
```
<Body title="Test Title">
  <p>Body Copy!</p>
</Body>
```
*/
export default class Body extends React.Component {
  _renderHeader(): ReactElement {
    return (
      <MediaSelector>
        <DesktopHeader visibleAtOrAbove="large" {...this.props}/>
        <TabletHeader visibleWidths={["medium"]} {...this.props}/>
        <MobileHeader hiddenAbove="small" {...this.props}/>
      </MediaSelector>
    );
  }

  _renderFooter(): ReactElement {
    return (
      <div className="clearfix zeus-footer">
        <Layout small={2} className="zeus-footer-container">
          <div className="zeus-footer-left">
            &copy; 2015&ndash;{new Date().getFullYear()} Walmart Stores, Inc.
          </div>
          <div className="zeus-footer-right">
            <div className="zeus-footer-left-content">
              {this.props.footerLeft}
            </div>
            <div className="zeus-footer-right-content">
              {this.props.footerRight}
            </div>
          </div>
        </Layout>
      </div>
    );
  }

  render(): ReactElement {
    return (
      <div className="page-wrapper">
        {this.props.showHeader === true && this._renderHeader()}
        <div className="body-wrapper">
          {this.props.children}
        </div>
        {this.props.showFooter === true && this._renderFooter()}
      </div>
    );
  }
}

Body.displayName = "Body";

Body.propTypes = {
  /**
  The logo image to use
  */
  logoImage: React.PropTypes.string,
  /**
  The page title
  */
  title: React.PropTypes.string,
  /**
  The navigation target
  */
  navTarget: React.PropTypes.string,
  /**
  The navigation text
  */
  navText: React.PropTypes.string,
  /**
  The short name for the nav
  */
  navShort: React.PropTypes.string,
  /**
  The navigation icon
  */
  navIcon: React.PropTypes.string,
  /**
  Extra content for the left of the footer
  */
  footerLeft: React.PropTypes.node,
  /**
  Extra content for the right of the footer
  */
  footerRight: React.PropTypes.node,
  /**
  True if the header should be shown
  */
  showHeader: React.PropTypes.bool,
  /**
  True if the footer should be shown
  */
  showFooter: React.PropTypes.bool,
  /**
  The link for the title on the header
  */
  headerHref: React.PropTypes.string,
  children: React.PropTypes.node
};

Body.defaultProps = {
  logoImage: "//i5.walmartimages.com/dfw/63fd9f59-a546/k2-_47005cc8-29da-4fa9-ac2c-45e102a55bf5.v1.png",
  title: "",
  navTarget: "",
  navText: "",
  navShort: "",
  navIcon: "",
  footerLeft: null,
  footerRight: (
    <a className="js-footer-feedback-opinion-lab"
      href="https://secure.opinionlab.com/ccc01/comment_card_d.asp">
      Leave feedback
    </a>
  ),
  showHeader: true,
  showFooter: true,
  headerHref: "/"
};
