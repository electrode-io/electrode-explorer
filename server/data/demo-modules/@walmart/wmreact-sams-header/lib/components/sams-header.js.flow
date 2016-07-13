/* @flow */
import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import ExecutionEnvironment from "exenv";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import Fixie from "@walmart/wmreact-layout/lib/components/fixie";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import TempoAnalyticsCollector
from "@walmart/wmreact-tempo-analytics-utils/lib/components/tempo-analytics-collector";
import { TempoWrapper, TempoZone, mapQuimbyStateToProps }
  from "@walmart/wmreact-header/lib/tempo-core";
import OffcanvasNav from "./offcanvas-nav";
import CloneGlobalAccountFlyout from "./global-account-flyout";
import HeaderCart from "@walmart/wmreact-header/lib/components/header-cart";
import HeaderLogo from "@walmart/wmreact-header/lib/components/header-logo";
import SamsSearch from "./sams-search";
import GlobalSearch from "@walmart/wmreact-header/lib/components/global-search";
import GlobalEyebrowNav from "./global-eyebrow-nav";
import GlobalMarketingMessages
  from "@walmart/wmreact-header/lib/components/global-marketing-messages";
import GlobalLefthandNav from "./global-lefthand-nav";
import GlobalSecondaryNav from "@walmart/wmreact-header/lib/components/global-secondary-nav";
import HeaderButtonToggle from "@walmart/wmreact-header/lib/components/header-button-toggle";
import StorefinderLink from "@walmart/wmreact-header/lib/components/storefinder-link";
import { getCartCount, getUserName, getShippingPass }
  from "@walmart/wmreact-header/lib/actions";
import StoresProp from "@walmart/wmreact-header/lib/props/stores-prop";
import HeaderAdapter from "../adapters/header-adapter";
import typeAheadProp from "@walmart/wmreact-header/lib/typeahead.prop";
import isEmpty from "lodash/isEmpty";
import BusinessToolsNav from "./business-tools-nav";
import MemberServicesNav from "./member-services-nav";
import ClubLocator from "./club-locator";
import BannerMessage from "./banner-message";
import { fetchStoresRequest } from "../actions/store-finder.js";


import {
  renderBizToolsMobile,
  indexSuperDeptMobile,
  renderDeptMobile,
  indexDeptMobile,
  btoolsIndexMobile} from "../actions/business-tool-nav-mobile";


const moduleTypeComponentMap = {
  CloneGlobalAccountFlyout,
  GlobalSearch,
  GlobalEyebrowNav,
  BannerMessage,
  GlobalMarketingMessages,
  GlobalLefthandNav,
  BusinessToolsNav,
  MemberServicesNav,
  GlobalSecondaryNav
};
const ANALYTICS_PAGE_CONTEXT = "Header";

/**
  Global SamsHeader component connected to Tempo and Redux
  ```jsx
  <SamsHeader searchExposed={true} totalItemsCount={100} userName="Test" />
  ```
  @import {SamsHeader}
  @flags noVisibleRender
  @component Header
  @playground
  SamsHeader
*/


export class SamsHeader extends Component {
  constructor(props: Object): void {
    super(props);

    this._toggleSearch = this._toggleSearch.bind(this);
    this._setOffcanvasNavOpen = this._setOffcanvasNavOpen.bind(this);

    if (ExecutionEnvironment.canUseDOM) {
      props.onBootstrap();
    }
  }

  _setOffcanvasNavOpen() {
    this.refs.offcanvasNav.setOpen();
  }

  _toggleSearch(): void {
    this.refs.searchbarWrapper.toggle();
  }

  _renderTempoZone(zoneName, isBot): ReactElement {
    return (
      <TempoZone zoneName={zoneName} className="hide-content-max-l" isBot={isBot} />
    );
  }
  _renderMainNav(): ReactElement {
    const {
      isMobile,
      isBot
    } = this.props;

    return (
      <div className="header-Header-mainNav-inner">
        <div className="ResponsiveContainer">
          {!isMobile && this._renderTempoZone("nav_flyout_2_zone", isBot)}
          {!isMobile && this._renderTempoZone("nav_flyout_3_zone", isBot)}
          <TempoZone
            zoneName="nav_links_zone"/>
        </div>
      </div>
    );
  }

  _renderPrimaryHeader(): ReactElement {
    const {
      selectedCategory,
      shippingPass,
      totalItemsCount,
      maxCountThreshold,
      userName,
      onStoreFinderActive,
      searchExposed,
      isMobile,
      isBot,
      storeFinderResponse: {
        stores
      }
    } = this.props;

    return (
      <div className="header-HeaderPrimary">
        <div className="ResponsiveContainer">
          <Arrange>
            <Arrange.Fit>
              {!isMobile && this._renderTempoZone("nav_flyout_1_zone", isBot)}
              <HeaderButtonToggle
                className="hide-content-l"
                onClick={this._setOffcanvasNavOpen}
                name="menu"
                {...getDataAutomationIdPair("offcanvasNavToggle", "header-HeaderPrimarySmall",
                process)} />
            </Arrange.Fit>
            <Arrange.Fit className="header-HeaderPrimary-logoWrapper">
              <HeaderLogo shippingPass={shippingPass} />
            </Arrange.Fit>
            {!isMobile &&
              <Arrange.Fit>
                <TempoZone
                  zoneName="headerZone5"
                  size="medium"
                  className="hide-content-max-m hide-content-l" />
              </Arrange.Fit>}
            <SamsSearch
              ref="searchbarWrapper"
              searchExposed={searchExposed}
              isMobile={isMobile}
              selectedCategory={selectedCategory} />
            <Arrange.Fit>
               <ClubLocator
                 btnMessage="Change club"
                 notificationText="We've found a club near you"
                 notification="Find a club"
                 userMessage="Choose a club to see local pricing and availability"
                 btnMessage2="Cancel"
                 btnMessage1="Find"
                 cancelBtn="cancel"
                 changeLocationBtn="Change Location"
                 titleText="No Clubs Found within 150 miles"
                 isUserLoggedIn={false}
                 stores={stores}
                 showClubPopup={true}
                 onStoreFinderActive={onStoreFinderActive}
              />
            </Arrange.Fit>
            <Arrange.Fit>
              {!isMobile &&
                <div className="header-HeaderPrimary-user hide-content-max-l">
                  <TempoZone
                    zoneName="your_accont_zone"
                    customerName={userName} />
                </div>}
              <StorefinderLink className="hide-content-l" />
            </Arrange.Fit>
            <Arrange.Fit>
              <div className="header-HeaderPrimary-cart">
                <HeaderCart
                  maxCountThreshold={maxCountThreshold}
                  totalItemsCount={totalItemsCount} />
              </div>
            </Arrange.Fit>
          </Arrange>
        </div>
      </div>
    );
  }

  _renderHeader(): ReactElement {

    const {
      isMobile,
      storeFinderUrl,
      onStoreFinderActive,
      storeFinderResponse
    } = this.props;

    return (
      <Fixie fixedAtBottom={true} cssMode>
        <div className="header-Header-wrapper">
          {!isMobile &&
            <nav className="ResponsiveContainer header-HeaderPrimary-eyebrowNavWrapper
              hide-content-max-l">
              <TempoZone
                zoneName="eyebrow_zone"
                onStoreFinderActive={() => {onStoreFinderActive(storeFinderUrl);}}
                storeFinderResponse={storeFinderResponse}
              />
            </nav>}
          {this._renderPrimaryHeader()}
          {!isMobile &&
            <nav className="header-Header-mainNav hide-content-max-l">
              {this._renderMainNav()}
            </nav>}
          {!isMobile &&
            <nav className="BannerMessage">
              <TempoZone
                className="sams-banner-message"
                zoneName="global_messaging_zone"
              />
            </nav>}
        </div>

      </Fixie>
    );
  }

  _setTypeAheadUrl(): ReactElement {
    const { typeAheadUrl } = this.props;

    if (!isEmpty(typeAheadUrl)) {
      const innerHtml = `window._wml.typeAheadUrl="${typeAheadUrl}"`;
      return (
        <script dangerouslySetInnerHTML={{__html: innerHtml}} />
      );
    }
  }

  render(): ReactElement {
    const {
      userName,
      isMobile,
      isBot,
      quimbyData
    } = this.props;

    return (
      <CollectorContext pageContext={ANALYTICS_PAGE_CONTEXT}>
        <header className="header-Header" {...getDataAutomationIdPair("Header", "header", process)}>
          <TempoWrapper
            zoneNameModuleMap={mapQuimbyStateToProps(quimbyData)}
            moduleTypeComponentMap={moduleTypeComponentMap}
          >
            <TempoAnalyticsCollector />
            <OffcanvasNav ref="offcanvasNav" userName={userName} isMobile={isMobile} isBot={isBot}
              bizToolsMob={this.props.bizToolsMob}
              renderBizToolsMobile={this.props.renderBizToolsMobile}
              indexSuperDeptMobile={this.props.indexSuperDeptMobile}
              renderDeptMobile={this.props.renderDeptMobile}
              indexDeptMobile={this.props.indexDeptMobile}
              btoolsIndexMobile={this.props.btoolsIndexMobile}
            />
            {this._renderHeader()}
            <TempoZone zoneName="headerZone5" size="small" className="hide-content-m" />
            {this._setTypeAheadUrl()}
            <script {...typeAheadProp} />
          </TempoWrapper>
        </header>
      </CollectorContext>
    );
  }
}

SamsHeader.displayName = "SamsHeader";

SamsHeader.propTypes = {
  /**
  check mobile device
  */
  isMobile: PropTypes.bool,
  /**
  check for bots
  */
  isBot: PropTypes.bool,
  /**
  True if search should be exposed by default at smaller screen widths.
  */
  searchExposed: PropTypes.bool,
  /**
  Initially selected category ID in the search dropdown on larger screen widths.
  */
  selectedCategory: PropTypes.string,
  /**
  True if the shipping pass logo should show on larger screen widths.
  */
  shippingPass: PropTypes.bool,
  /**
  First name of the user if signed in. Null otherwise.
  */
  userName: PropTypes.string,
  /**
  Total number of items.
   */
  totalItemsCount: PropTypes.number,
  /**
  The max count value. After totalItemsCount reaches maxCountThreshold,
  the HeaderCartCount would start displaying the value as
  (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
  and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
  Default value for this is 99.
   */
  maxCountThreshold: PropTypes.number,
  /**
  Data used to render storefinder panel.
  This includes the loading and error states and stores data
  */
  storeFinderResponse: PropTypes.shape({
    loading: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    stores: PropTypes.shape(StoresProp)
  }),
  /**
  The first action dispatched
  */
  onBootstrap: PropTypes.func,
  /**
  On location change is a action that is called when user's location changes
  */
  onStoreFinderActive: PropTypes.func,
  /**
  quimbyData is the result of tempo-core calls to quimby stored in redux
  */
  quimbyData: PropTypes.object,
  /**
  Url to fetch recomendations in searchbar
  */
  typeAheadUrl: PropTypes.string,
  /**
   */
  storeFinderUrl: PropTypes.string,

  bizToolsMob: PropTypes.object.isRequired,
  renderBizToolsMobile: PropTypes.func,
  indexSuperDeptMobile: PropTypes.func,
  renderDeptMobile: PropTypes.func,
  indexDeptMobile: PropTypes.func,
  btoolsIndexMobile: PropTypes.func
};

SamsHeader.defaultProps = {
  isMobile: false,
  isBot: false,
  searchExposed: true,
  selectedCategory: null,
  shippingPass: false,
  userName: null,
  totalItemsCount: 0,
  maxCountThreshold: 99,
  onBootstrap: () => {},
  onStoreFinderActive: () => {},
  storeFinderResponse: {
    loading: false,
    didInvalidate: false,
    stores: {}
  },
  typeAheadUrl: ""
};

export const mapHeaderStateToProps = (state) => {
  const headerAdapter = new HeaderAdapter(state);
  return headerAdapter.adapt();
};

export const mapHeaderDispatchToProps = (dispatch) => {
  return {
    onBootstrap: () => {
      dispatch(getCartCount());
      dispatch(getUserName());
      dispatch(getShippingPass());
    },

    onStoreFinderActive: (clubPreferences) => {
      dispatch(fetchStoresRequest(clubPreferences));
    },

    renderBizToolsMobile: (renderBizTools) => {
      dispatch(renderBizToolsMobile(renderBizTools));
    },

    indexSuperDeptMobile: (idx) => {
      dispatch(indexSuperDeptMobile(idx));
    },

    renderDeptMobile: (renderDept) => {
      dispatch(renderDeptMobile(renderDept));
    },

    indexDeptMobile: (idxDept) => {
      dispatch(indexDeptMobile(idxDept));
    },

    btoolsIndexMobile: (btoolsIndex) => {
      dispatch(btoolsIndexMobile(btoolsIndex));
    }
  };
};

export default connect(mapHeaderStateToProps, mapHeaderDispatchToProps)(SamsHeader);
