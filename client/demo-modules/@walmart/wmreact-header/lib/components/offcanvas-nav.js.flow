import React, { Component, PropTypes } from "react";

import * as WidthWatcher from "@walmart/wmreact-layout/lib/components/utils/width-watcher";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

import { TempoZone } from "../tempo-core";
import GlobalLefthandNavMobile from "./global-lefthand-nav-mobile";
import GlobalEyebrowNavMobile from "./global-eyebrow-nav-mobile";

const OPEN_CLASS_NAME = "offcanvasNav-open";

/**
 An intermediate component for the header for rendering the offcanvas nav and overlay. Should be
 used inside a TempoWrapper so all modules are populated
 @examples
 ```jsx
 <OffcanvasNav userName="Foo" />
 ```
 @component OffcanvasNav
 @import {OffcanvasNav}
 @references OffcanvasNav
 @playground
 OffcanvasNav
 */

class OffcanvasNav extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      open: false,
      deptSelected: false,
      eyebrowMenuSelected: false
    };

    this.setOpen = this.setOpen.bind(this);
    this._setClosed = this._setClosed.bind(this);
    this._toggleDeptSelected = this._toggleDeptSelected.bind(this);
    this._toggleEyebrowMenuSelected = this._toggleEyebrowMenuSelected.bind(this);

    this.scrollTop = 0;
    this.widthWatcher = new WidthWatcher.WidthWatcher();
  }

  componentWillMount(): void {
    this.widthWatcher.addSubscriber(this);
  }

  componentWillUpdate(nextProps: Object, nextState: Object): void {
    const nextOpen = nextState.open;
    const prevOpen = this.state.open;
    const { body } = window.document;
    // Opens the offcanvas nav by shifting the page over to the right and freezing the body at the
    // correct scroll position
    if (!prevOpen && nextOpen) {
      this.scrollTop = window.scrollY;
      body.classList.add(OPEN_CLASS_NAME);
      body.style.top = `${-1 * this.scrollTop}px`;
    // Closes the offcanvas nav by shifting the page back and returns to the correct scroll position
    } else if (prevOpen && !nextOpen) {
      body.classList.remove(OPEN_CLASS_NAME);
      body.style.top = null;
      window.scrollTo(0, this.scrollTop);
    }
  }

  componentDidUpdate(): void {
    if (this.state.open) {
      this.refs.nav.scrollTop = 0;
    }
  }

  componentWillUnmount(): void {
    this.widthWatcher.removeSubscriber(this);
  }

  // Executed by width watcher when the breakpoint changes. Used to close nav if widening screen.
  updateWidth(width: string): void {
    if (this.state.open && (width === "large" || width === "x-large")) {
      this._setClosed();
    }
  }

  setOpen(): void {
    this.setState({
      open: true
    });
  }

  _setClosed(): void {
    this.setState({
      open: false
    });
  }

  _toggleDeptSelected(): void {
    this.setState({
      deptSelected: !this.state.deptSelected
    });
  }

  _toggleEyebrowMenuSelected(): void {
    this.setState({
      eyebrowMenuSelected: !this.state.eyebrowMenuSelected
    });
  }

  // Invisible overlay to capture clicks and close the offcanvas nav when it is open
  _renderOverlay(open: boolean): ?ReactElement {
    if (open) {
      return (
        <div
          onClick={this._setClosed}
          style={{top: this.scrollTop}}
          className="header-OffcanvasNav-overlay"
          {...getDataAutomationIdPair("overlay", "header-OffcanvasNav")}>
        </div>
      );
    }
  }

  _renderUser(deptSelected: boolean, eyebrowMenuSelected: boolean, userName: string):
    ?ReactElement {
    if (deptSelected || eyebrowMenuSelected) {
      return null;
    }

    const greeting = `Hello${userName ? `, ${userName}` : ". Sign in"}`;

    return (
      <Link
        className="header-OffcanvasNav-entry header-OffcanvasNav-entry--top"
        href="/account/"
        {...getDataAutomationIdPair("user", "header-OffcanvasNav")}>
        {greeting}
      </Link>
    );
  }

  _renderSignOut(deptSelected: boolean, eyebrowMenuSelected: boolean, userName: string):
    ?ReactElement {
    if (!userName || deptSelected || eyebrowMenuSelected) {
      return null;
    }
    return (
      <div>
        <Separator />
        <Link
          className="header-OffcanvasNav-entry"
          href="/account/logout"
          {...getDataAutomationIdPair("signOut", "header-OffcanvasNav")}>
          Sign Out
        </Link>
      </div>
    );
  }

  _renderLeftHandNav(eyebrowMenuSelected: boolean, isBot: boolean): ?ReactElement {
    if (eyebrowMenuSelected) {
      return null;
    }
    return (
      <TempoZone
        zoneName="headerZone3"
        moduleTypeComponentMap={{ GlobalLefthandNav: GlobalLefthandNavMobile }}
        onSuperDeptClick={this._toggleDeptSelected}
        onBackClick={this._toggleDeptSelected}
        isBot={isBot} />
    );
  }

  _renderSecondaryNav(deptSelected: boolean, eyebrowMenuSelected: boolean): ?ReactElement {
    if (deptSelected || eyebrowMenuSelected) {
      return null;
    }
    return (
      <div>
        <Separator />
        <TempoZone
          zoneName="headerZone4"
          inOffcanvasNav={true} />
        <Separator />
      </div>
    );
  }

  _renderEyebrowNav(deptSelected: boolean): ?ReactElement {
    if (deptSelected) {
      return null;
    }
    return (
      <TempoZone
        zoneName="headerZone1"
        onMenuClick={this._toggleEyebrowMenuSelected}
        onBackClick={this._toggleEyebrowMenuSelected}
        moduleTypeComponentMap={{ GlobalEyebrowNav: GlobalEyebrowNavMobile }} />
    );
  }

  render() {
    const { userName, isBot } = this.props;
    const { open, deptSelected, eyebrowMenuSelected } = this.state;

    return (
      <div className="hide-content-l">
        {this._renderOverlay(open)}
        <nav
          className="header-OffcanvasNav"
          ref="nav"
          {...getDataAutomationIdPair("OffcanvasNav", "header")}>
          {this._renderUser(deptSelected, eyebrowMenuSelected, userName)}
          {this._renderLeftHandNav(eyebrowMenuSelected, isBot)}
          {this._renderSecondaryNav(deptSelected, eyebrowMenuSelected)}
          {this._renderEyebrowNav(deptSelected)}
          {this._renderSignOut(deptSelected, userName)}
        </nav>
      </div>
    );
  }
}

OffcanvasNav.displayName = "OffcanvasNav";

OffcanvasNav.propTypes = {
  /**
  Check for web crawler bots.
  */
  isBot: PropTypes.bool,
  /**
  First name of the user if signed in. Null otherwise.
  */
  userName: React.PropTypes.string
};

OffcanvasNav.defaultProps = {
  isBot: false,
  userName: null
};

export default OffcanvasNav;
