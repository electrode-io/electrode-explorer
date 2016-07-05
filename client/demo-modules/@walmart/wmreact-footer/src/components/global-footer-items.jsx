/* @flow */
import React, { PropTypes, Component } from "react";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import GlobalFooterItem from "./global-footer-item";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
This component displays the GlobalFooterItems

@import {GlobalFooterItems}
@flags noVisibleRender
@component GlobalFooterItems
@playground
Global Footer Items
```
<GlobalFooterItems name="Walmart.com" links={
  [
    {
      "link": {
        "linkText": "About Walmart.com",
        "title": "Walmart credit card",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/6"
        },
        "uid": "XfEg85uC"
      },
      "uid": "5uh7ZTD-"
    },
    {
      "link": {
        "linkText": "Terms of Use",
        "title": "Terms of use",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/8"
        },
        "uid": "dKmHgWxk"
      },
      "image": {
        "assetName": "k2-_65ae56ce-e20a-4f67-8a4f-88fbc7f69cde.v1.jpg",
        "height": "66",
        "assetId": "2c35b6b0-481c-11e5-aa7b-3f9068f8e0a6",
        "src": "//i5.walmartimages.com/dfw/4ff9c6c9-9aee/k2-_704e0f82-62c6.v1.png",
        "width": "86",
        "size": "100",
        "contentType": "image/jpeg",
        "alt": "footer image",
        "title": "footer image",
        "uid": "9ZKpMSLd"
      },
      "uid": "erj58MVs"
    }
  ]
} />
```
Global Footer Items Inline
```
<GlobalFooterItems block={false} links={
  [
    {
      "link": {
        "linkText": "About Walmart.com",
        "title": "Walmart credit card",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/6"
        },
        "uid": "XfEg85uC"
      },
      "uid": "5uh7ZTD-"
    },
    {
      "link": {
        "linkText": "Terms of Use",
        "title": "Terms of use",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/8"
        },
        "uid": "dKmHgWxk"
      }
  ]
} />
```
*/

class GlobalFooterItems extends Component {
  constructor(props: Object): void {
    super(props);
    this.state = { open: null };
    this._items = this._items.bind(this);
    this._links = this._links.bind(this);
  }

  _isOpen(key: number): boolean {
    return (this.state.open === key);
  }

  _getClassName(key: number): string {
    return (
      this._isOpen(key)
        ? "footer-GlobalFooterItems-expander--expand"
        : "footer-GlobalFooterItems-expander--collapse"
    );
  }

  _expandToggle(key: number): void {
    this.setState({
      open: this._isOpen(key) ? null : key
    });
  }

  _generateToggleText(key: number): void {
    return (
      this._isOpen(key)
        ? "Collapse"
        : "Expand"
    );
  }

  _generateHeading(headingName: string): ReactElement {
    return (
      headingName && <Heading.H6 className="footer-GlobalFooterItems-heading">
        {headingName}
      </Heading.H6>
    );
  }

  _items(linkDetails: Object, index: number): ReactElement {
    const {
      link,
      image
    } = linkDetails;
    const {
      autoId
    } = this.props;
    const childData = linkDetails.children || [];
    const linkSuffix = `link-${index}`;
    const buttonSuffix = `button-${index}`;
    const subItemSuffix = `link-${index}-subItem`;
    if (childData.length > 0) {
      return (
        <li key={index}>
          <Button fakelink={true} className={this._getClassName(index)}
            onClick={this._expandToggle.bind(this, index)}
            {...getDataAutomationIdPair(buttonSuffix, autoId)}>
            <span className="visuallyhidden">{this._generateToggleText(index)}</span>
          </Button>
          <GlobalFooterItem link={link} image={image}
            autoId={`${autoId}-${linkSuffix}`}/>
          <Collapsable className="footer-GlobalFooterItems-subItems" isOpen={this._isOpen(index)}>
            <GlobalFooterItems links={childData} name={childData.name} key={childData.uid}
              autoId={`${autoId}-${subItemSuffix}`}/>
          </Collapsable>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <GlobalFooterItem link={link} image={image}
            autoId={`${autoId}-${linkSuffix}`}/>
        </li>
      );
    }
  }

  _links(linkDetails: Object, index: number): ReactElement {
    const {
      link
    } = linkDetails;
    const {
      autoId,
      pathToAssets
    } = this.props;
    const linkSuffix = `link-${index}`;
    return (
      <GlobalFooterItem link={link} className="display-inline-block"
        key={index} autoId={`${autoId}-${linkSuffix}`} pathToAssets={pathToAssets}/>
    );
  }

  render(): ReactElement {
    const {
      links,
      block,
      name
    } = this.props;
    if (block) {
      return (
        <div className="footer-GlobalFooterItems">
          {this._generateHeading(name)}
          <ul className="footer-GlobalFooterItems--blockList">
            {links.map(this._items)}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="footer-GlobalFooterItems--list">
          {links.map(this._links)}
        </div>
      );
    }
  }
}

GlobalFooterItems.displayName = "GlobalFooterItems";

GlobalFooterItems.propTypes = {
  /**
  True if we are applying the `footer-block-list` class
  */
  block: PropTypes.bool,
  /**
  The list of links
  */
  links: PropTypes.array.isRequired,
  /**
  The name of list
  */
  name: PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: React.PropTypes.string
};

GlobalFooterItems.defaultProps = {
  block: true,
  links: [],
  name: "",
  autoId: "",
  pathToAssets: ""
};

export default GlobalFooterItems;
