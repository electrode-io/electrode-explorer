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
import { TempoWrapper, TempoZone, mapQuimbyStateToProps } from "../tempo-core";
import OffcanvasNav from "./offcanvas-nav";
import GlobalAccountFlyout from "./global-account-flyout";
import HeaderCart from "./header-cart";
import HeaderLogo from "./header-logo";
import SearchbarWrapper from "./searchbar-wrapper";
import GlobalSearch from "./global-search";
import GlobalEyebrowNav from "./global-eyebrow-nav";
import GlobalMarketingMessages from "./global-marketing-messages";
import GlobalLefthandNav from "./global-lefthand-nav";
import GlobalSecondaryNav from "./global-secondary-nav";
import HeaderButtonToggle from "./header-button-toggle";
import StorefinderLink from "./storefinder-link";
import { fetchStores, getCartCount, getUserName, getShippingPass } from "../actions";
import StoresProp from "../props/stores-prop";
import HeaderAdapter from "../adapters/header-adapter";
import typeAheadProp from "../typeahead.prop";
import typeAheadPropMobile from "../typeahead-mobile.prop";
import TypeaheadMobile from "./typeahead-mobile";
import isEmpty from "lodash/isEmpty";
import AppBanner from "./app-banner";

const moduleTypeComponentMap = {
  GlobalAccountFlyout,
  GlobalSearch,
  GlobalEyebrowNav,
  GlobalMarketingMessages,
  GlobalLefthandNav,
  GlobalSecondaryNav
};
const ANALYTICS_PAGE_CONTEXT = "Header";

const APPBANNER_URL =
  "//ad.apsalar.com/api/v1/ad?re=0&st=497849314445&h=0dec6462a7078c2562a2193e9630f66a8fd23d62";

/**
  Global Header component connected to Tempo and Redux
  ```jsx
  <StatelessHeader searchExposed={true} totalItemsCount={100} userName="Test" />
  ```

  @import {Header}
  @flags noVisibleRender
  @component Header
  @playground
  Header
*/

export class Header extends Component {
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

  _renderMainNav(): ReactElement {
    return (
      <div className="ResponsiveContainer">
        <TempoZone
          zoneName="headerZone4"
          className="pull-left" />
        <TempoZone
          zoneName="headerZone5"
          className="pull-right" />
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
      searchExposed,
      isMobile,
      isBot
    } = this.props;

    return (
      <div className="header-HeaderPrimary">
        <div className="ResponsiveContainer">
          <Arrange>
            <Arrange.Fit>
              {!isMobile &&
                <TempoZone zoneName="headerZone3" className="hide-content-max-l" isBot={isBot} />}
              <HeaderButtonToggle
                className="hide-content-l"
                onClick={this._setOffcanvasNavOpen}
                name="menu"
                {...getDataAutomationIdPair("offcanvasNavToggle", "header-HeaderPrimarySmall")} />
            </Arrange.Fit>
            <Arrange.Fit>
              <HeaderButtonToggle
                className="hide-content-l"
                onClick={this._toggleSearch}
                name="search"
                {...getDataAutomationIdPair("searchToggle", "header-HeaderPrimarySmall")} />
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
            <SearchbarWrapper
              ref="searchbarWrapper"
              searchExposed={searchExposed}
              isMobile={isMobile}
              selectedCategory={selectedCategory} />
            <Arrange.Fit>
              {!isMobile &&
                <div className="header-HeaderPrimary-user hide-content-max-l">
                  <TempoZone
                    zoneName="headerZone10"
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
                zoneName="headerZone1"
                onStoreFinderActive={() => {onStoreFinderActive(storeFinderUrl);}}
                storeFinderResponse={storeFinderResponse}
              />
            </nav>}
          {this._renderPrimaryHeader()}
          {!isMobile &&
            <nav className="header-Header-mainNav hide-content-max-l">
              {this._renderMainNav()}
            </nav>}
        </div>
      </Fixie>
    );
  }

  _setTypeAheadUrl(): ?ReactElement {
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
      quimbyData,
      enableMobileTypeahead
    } = this.props;

    return (
      <CollectorContext pageContext={ANALYTICS_PAGE_CONTEXT}>
        <header className="header-Header" {...getDataAutomationIdPair("Header", "header")}>
          { isMobile && <AppBanner
            title="Save Money. Live better"
            author="Walmart.com"
            url={APPBANNER_URL} /> }
          <TempoWrapper
            zoneNameModuleMap={mapQuimbyStateToProps(quimbyData)}
            moduleTypeComponentMap={moduleTypeComponentMap}
          >
            <TempoAnalyticsCollector />
            <OffcanvasNav ref="offcanvasNav" userName={userName} isMobile={isMobile} isBot={isBot}/>
            {this._renderHeader()}
            <TempoZone zoneName="headerZone5" size="small" className="hide-content-m" />
            {this._setTypeAheadUrl()}
            {isMobile && enableMobileTypeahead ? <TypeaheadMobile /> : null}
            {isMobile && enableMobileTypeahead ?
              <script {...typeAheadPropMobile} /> :
                <script {...typeAheadProp} />}
          </TempoWrapper>
        </header>
      </CollectorContext>
    );
  }
}

Header.displayName = "Header";

Header.propTypes = {
  /**
  Boolean for enabling mobile typeahead
  */
  enableMobileTypeahead: PropTypes.bool,
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
  Url to fetch nearby stores
  */
  storeFinderUrl: PropTypes.string,
  /**
  Url to fetch recomendations in searchbar
  */
  typeAheadUrl: PropTypes.string
};

Header.defaultProps = {
  enableMobileTypeahead: true,
  isMobile: false,
  isBot: false,
  searchExposed: true,
  selectedCategory: null,
  shippingPass: false,
  userName: null,
  totalItemsCount: 0,
  maxCountThreshold: 99,
  onBootstrap: () => {},
  storeFinderUrl: "/store/ajax/preferred-flyout",
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

    onStoreFinderActive: (storeFinderUrl) => {
      dispatch(fetchStores(storeFinderUrl));
    }
  };
};

export default connect(mapHeaderStateToProps, mapHeaderDispatchToProps)(Header);
