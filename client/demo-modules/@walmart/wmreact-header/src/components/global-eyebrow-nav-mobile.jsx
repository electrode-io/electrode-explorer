/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";

import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
This component displays the EyebrowNav in the Offcanvas nav in the header.

@import {GlobalEyebrowNavMobile}
@flags noVisibleRender
@component GlobalEyebrowNavMobile
@playground
GlobalEyeBrowNavMobile
moduleData is too long please check examples
```
<GlobalEyebrowNavMobile moduleData={{please check examples under demo}}/>
```
*/

const SUBNAV_CLASS_NAME = "header-OffcanvasNav-subNav";
const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

class GlobalEyebrowNavMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: null
    };
  }

  _getClassNames(selectedMenu: number): string {
    return classNames(SUBNAV_CLASS_NAME, "header-GlobalEyebrowNavMobile", {
      "has-depth0Selected": selectedMenu !== null
    });
  }

  _getEntryClassName(depth: number, index: ?number, selected: ?number): string {
    return classNames(ENTRY_CLASS_NAME, {
      [`${ENTRY_CLASS_NAME}--depth0`]: depth === 0,
      "is-selected": index !== null && index === selected
    });
  }

  _renderMenu(entry: Object, index: number, dataAutomationId: string, selectedMenu: number): // eslint-disable-line max-params, max-len
    ReactElement {
    const { linkData: { uid, title, linkText }, dropdown } = entry;
    const automationId = `${dataAutomationId}-link-${index}`;

    return (
      <div key={index}>
        <Button
          fakelink={true}
          data-uid={uid}
          title={title}
          onClick={() => this._setSelectedMenu(index)}
          className={this._getEntryClassName(0, index, selectedMenu)}
          {...getDataAutomationIdPair(automationId, "")}>
          {linkText}<Icon className="pull-right" name="angle-right" />
        </Button>
        <div className={`${SUBNAV_CLASS_NAME}-menu`}>
          {dropdown.map((link, linkIndex) => {
            const { header, menu } = link;
            const linkData = header || menu;
            return this._renderLink(linkData, linkIndex, `${automationId}-menu`, null);
          })}
        </div>
      </div>
    );
  }

  _renderLink(linkData: Object, index: number, dataAutomationId: string, depth: number): // eslint-disable-line max-params, max-len
    ReactElement {
    const {
      uid,
      title,
      linkText,
      clickThrough: { value }
     } = linkData;

    return (
      <Link
        className={this._getEntryClassName(depth, index)}
        data-uid={uid}
        href={value}
        alt={title}
        key={index}
        {...getDataAutomationIdPair(`link-${index}`, dataAutomationId)}>
        {linkText}
      </Link>
    );
  }

  _renderNav(configs: Object, dataAutomationId: string, selectedMenu: number): Array<ReactElement> {
    const {
      giftCardsMainNav,
      registryMainNav,
      listsMainNav,
      weeklyAdsMainNav,
      orderStatusMainNav,
      customNav,
      customNav2,
      customNav3,
      customNav4,
      registry,
      giftCards
    } = configs;

    const accountLinkData = {
      linkText: "My Account",
      title: "My Account",
      clickThrough: {
        value: "/account/"
      }
    };

    const entries = [
      { linkData: accountLinkData },
      { linkData: giftCardsMainNav, dropdown: giftCards },
      { linkData: registryMainNav, dropdown: registry },
      { linkData: listsMainNav },
      { linkData: weeklyAdsMainNav },
      { linkData: orderStatusMainNav },
      { linkData: customNav },
      { linkData: customNav2 },
      { linkData: customNav3 },
      { linkData: customNav4 }
    ];

    return entries.map((entry, index) => {
      const { linkData, dropdown } = entry;
      if (dropdown) {
        return this._renderMenu(entry, index, dataAutomationId, selectedMenu);
      } else if (linkData) {
        return this._renderLink(linkData, index, dataAutomationId, 0);
      }
    });
  }

  _renderBack(selectedMenu: number, dataAutomationId: string): ?ReactElement {
    if (selectedMenu !== null) {
      return (
        <Button
          className={`${ENTRY_CLASS_NAME} ${ENTRY_CLASS_NAME}--top`}
          fakelink={true}
          onClick={() => this._clearSelectedMenu()}
          {...getDataAutomationIdPair("back", dataAutomationId)}>
          <Icon className="pull-left" name="angle-left" />Main Menu
        </Button>
      );
    }
  }

  _setSelectedMenu(index: number): void {
    if (this.state.selectedMenu === null) {
      this.setState({
        selectedMenu: index
      });
      this.props.onMenuClick();
    }
  }

  _clearSelectedMenu(): void {
    this.setState({
      selectedMenu: null
    });
    this.props.onBackClick();
  }

  render() {
    const {
      moduleData: {
        type,
        moduleId,
        configs
      },
      dataAutomationId
    } = this.props;
    const { selectedMenu } = this.state;


    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(selectedMenu)}
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          {this._renderBack(selectedMenu, dataAutomationId)}
          {this._renderNav(configs, dataAutomationId, selectedMenu)}
        </div>
      </CollectorContext>
    );
  }
}

GlobalEyebrowNavMobile.displayName = "GlobalEyebrowNavMobile";

GlobalEyebrowNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      giftCardsMainNav: PropTypes.object,
      registryMainNav: PropTypes.object,
      listsMainNav: PropTypes.object,
      weeklyAdsMainNav: PropTypes.object,
      orderStatusMainNav: PropTypes.object,
      customNav: PropTypes.object,
      customNav2: PropTypes.object,
      customNav3: PropTypes.object,
      customNav4: PropTypes.object
    }).isRequired
  }).isRequired,
  /**
  Callback to execute after a super department is clicked
  */
  onMenuClick: PropTypes.func,
  /**
  Callback to execute after back button is clicked
  */
  onBackClick: PropTypes.func,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

GlobalEyebrowNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      giftCardsMainNav: {},
      registryMainNav: {},
      listsMainNav: {},
      weeklyAdsMainNav: {},
      orderStatusMainNav: {},
      customNav: {},
      customNav2: {},
      customNav3: {},
      customNav4: {}
    }
  },
  onMenuClick: () => {},
  onBackClick: () => {},
  dataAutomationId: "header-GlobalEyebrowNavMobile"
};

export default GlobalEyebrowNavMobile;
