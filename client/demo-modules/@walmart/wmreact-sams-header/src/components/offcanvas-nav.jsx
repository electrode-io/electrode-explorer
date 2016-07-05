import React, { Component} from "react";

import * as WidthWatcher from "@walmart/wmreact-layout/lib/components/utils/width-watcher";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

import { TempoZone } from "@walmart/wmreact-header/lib/tempo-core";
import GlobalLefthandNavMobile
from "./global-lefthand-nav-mobile";
import BusinessToolsNavMobile from "./business-tools-nav-mobile";
import MemberServicesNavMobile from "./member-services-nav-mobile";
import GlobalEyebrowNavMobile from "./global-eyebrow-nav-mobile";
import GlobalAccountNavMobile from "./global-account-nav-mobile";
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
      businessToolsSelected: false,
      memberServicesSelected: false,
      accountSelected: false
    };

    this.setOpen = this.setOpen.bind(this);
    this._setClosed = this._setClosed.bind(this);
    this._toggleDeptSelected = this._toggleDeptSelected.bind(this);
    this._toggleBusinessToolsSelected = this._toggleBusinessToolsSelected.bind(this);
    this._toggleMemberServicesSelected = this._toggleMemberServicesSelected.bind(this);
    this._toggleAccountSelected = this._toggleAccountSelected.bind(this);
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
      // Closes the offcanvas nav by shifting the page back and returns to the correct
      // scroll position
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

  _toggleBusinessToolsSelected(): void {
    this.setState({
      businessToolsSelected: !this.state.businessToolsSelected

    });
  }

  _toggleMemberServicesSelected(): void {
    this.setState({
      memberServicesSelected: !this.state.memberServicesSelected

    });
  }

  _toggleAccountSelected(): void {
    this.setState({
      accountSelected: !this.state.accountSelected

    });
  }
  _clearToggles():void {
    this.setState({

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

  _signInRequest() {
    return (
      <div className="hamburger greeting">
        Hello!
        <a className="pull-right hamburger signIn" href="/account/login" >
          Sign in
        </a>

      </div>
    );
  }

  _signedIn({userName}): ?ReactElement {
    return (
      <div className="pull-right hamburger find-a-club">
          {`Hi ${userName}`}
      </div>
    );
  }

  _renderUser({deptSelected, businessToolsSelected, memberServicesSelected,
    accountSelected}, userName: string): ?ReactElement {
    if (!deptSelected && !businessToolsSelected && !memberServicesSelected && !accountSelected) {
      const greeting = userName ? this._signedIn(userName) : this._signInRequest();
      return (

        <div className="header-OffcanvasNav-entry"
          {...getDataAutomationIdPair("user", "header-OffcanvasNav")} >
          { greeting }
        </div>
      );
    }
  }

  _cLSignedIn() {
    return (
      <div className="header-OffcanvasNav-entry">
        Your club
        <div>
          Sunnyvale
          <a className="pull-right hamburger find-a-club" href="club-locator">
              Change
          </a>
        </div>
      </div>
    );
  }

  _cLNotSignedIn() {
    return (
      <div className="header-OffcanvasNav-entry">
        Your club
        <a className="pull-right hamburger find-a-club" href="club-locator">
            Find a club
        </a>
      </div>
    );
  }

  _renderSignOut(deptSelected: boolean, userName: string): ?ReactElement {
    if (userName && !deptSelected) {
      return (
        <div>
          <Separator />
          <Link
            className="header-OffcanvasNav-entry hamburger find-a-club"
            href="/account/logout"
            {...getDataAutomationIdPair("signOut", "header-OffcanvasNav")}>
            Sign Out
          </Link>
        </div>
      );
    }
  }

  _renderNavLinks({deptSelected, businessToolsSelected, memberServicesSelected,
    accountSelected}): ?ReactElement {
    if (!deptSelected && !businessToolsSelected && !memberServicesSelected && !accountSelected) {
      return (
        <TempoZone
          zoneName="nav_links_zone"
          inOffcanvasNav={true} />
      );
    }
  }

  _renderMemberServices({deptSelected, businessToolsSelected, accountSelected}):?ReactElement {
    if (!deptSelected && !businessToolsSelected && !accountSelected) {
      return (
        <TempoZone
          zoneName="nav_flyout_3_zone"
          inOffcanvasNav={true}
          moduleTypeComponentMap={{ MemberServicesNav: MemberServicesNavMobile }}
          onMenuLinkClick={this._toggleMemberServicesSelected}
        />
      );
    }
  }

  _renderBusinessTools({deptSelected, memberServicesSelected, accountSelected}): ?ReactElement {
    if (!memberServicesSelected && !deptSelected && !accountSelected) {
      return (
        <TempoZone
          zoneName="nav_flyout_2_zone"
          inOffcanvasNav={true}
          moduleTypeComponentMap={{ BusinessToolsNav: BusinessToolsNavMobile }}
          onBusinessToolsClick={this._toggleBusinessToolsSelected}
          onBackClick={this._toggleBusinessToolsSelected}
          bizToolsMob={this.props.bizToolsMob}
          renderBizToolsMobile={this.props.renderBizToolsMobile}
          indexSuperDeptMobile={this.props.indexSuperDeptMobile}
          renderDeptMobile={this.props.renderDeptMobile}
          indexDeptMobile={this.props.indexDeptMobile}
          btoolsIndexMobile={this.props.btoolsIndexMobile}
        />
      );
    }
  }

  _renderEyebrowNav({deptSelected, businessToolsSelected, memberServicesSelected,
    accountSelected}):?ReactElement {
    if (!deptSelected && !memberServicesSelected && !businessToolsSelected && !accountSelected) {
      return (
        <TempoZone
          zoneName="eyebrow_zone"
          inOffcanvasNav={true}
          moduleTypeComponentMap={{ GlobalEyebrowNav: GlobalEyebrowNavMobile }}
          />
      );
    }
  }

  _renderGlobalLeftHandNav({businessToolsSelected, memberServicesSelected,
    accountSelected}):?ReactElement {
    if (!memberServicesSelected && !businessToolsSelected && !accountSelected) {
      return (
        <TempoZone
          zoneName="nav_flyout_1_zone"
          moduleTypeComponentMap={{ GlobalLefthandNav: GlobalLefthandNavMobile }}
          onSuperDeptClick={this._toggleDeptSelected}
          onBackClick={this._toggleDeptSelected}/>
      );
    }
  }
  _renderClubLocator({deptSelected, businessToolsSelected, memberServicesSelected,
    accountSelected, userName}):?ReactElement {
    if (!deptSelected && !businessToolsSelected && !memberServicesSelected
        && !accountSelected) {
      const closestClub = userName ? this._cLSignedIn() : this._cLNotSignedIn();
      return (
        <div>
          {closestClub}
        </div>
      );
    }
  }

  _renderGlobalAccountNav({businessToolsSelected, memberServicesSelected,
    deptSelected}):?ReactElement {
    if (!memberServicesSelected && !businessToolsSelected && !deptSelected) {
      return (
        <TempoZone
          zoneName="your_accont_zone"
          moduleTypeComponentMap={{ CloneGlobalAccountFlyout: GlobalAccountNavMobile }}
          onAccountLinkClick={this._toggleAccountSelected}
          onBackClick={this._toggleAccountSelected}/>
      );
    }
  }

  _renderSeperator({businessToolsSelected, memberServicesSelected,
    accountSelected, deptSelected}):?ReactElement {
    if (!memberServicesSelected && !businessToolsSelected &&
      !accountSelected && !deptSelected) {
      return (
        <Separator/>
      );
    }
  }

  render() {
    const {userName} = this.props;
    const {open} = this.state;

    return (
      <div className="hide-content-l">
        {this._renderOverlay(open)}
        <nav
          className="header-OffcanvasNav"
          ref="nav"
          {...getDataAutomationIdPair("OffcanvasNav", "header")}>
          {this._renderUser(this.state, userName)}
          {this._renderGlobalLeftHandNav(this.state)}
          {this._renderSeperator(this.state)}
          {this._renderBusinessTools(this.state)}
          {this._renderMemberServices(this.state)}
          {this._renderSeperator(this.state)}
          {this._renderNavLinks(this.state)}
          {this._renderSeperator(this.state)}
          {this._renderGlobalAccountNav(this.state)}
          {this._renderClubLocator(this.state)}
          {this._renderSeperator(this.state)}
          {this._renderEyebrowNav(this.state)}
          {this._renderSignOut(this.state)}
        </nav>
      </div>
    );
  }
}

OffcanvasNav.displayName = "OffcanvasNav";

OffcanvasNav.propTypes = {
  userName: React.PropTypes.string,
  bizToolsMob: React.PropTypes.object.isRequired,
  renderBizToolsMobile: React.PropTypes.func.isRequired,
  indexSuperDeptMobile: React.PropTypes.func.isRequired,
  renderDeptMobile: React.PropTypes.func.isRequired,
  indexDeptMobile: React.PropTypes.func.isRequired,
  btoolsIndexMobile: React.PropTypes.func.isRequired
};

OffcanvasNav.defaultProps = {
  userName: null
};

export default OffcanvasNav;
