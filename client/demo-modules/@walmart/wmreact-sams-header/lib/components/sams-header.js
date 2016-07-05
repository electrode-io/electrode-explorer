"use strict";

exports.__esModule = true;
exports.mapHeaderDispatchToProps = exports.mapHeaderStateToProps = exports.SamsHeader = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _fixie = require("@walmart/wmreact-layout/lib/components/fixie");

var _fixie2 = _interopRequireDefault(_fixie);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _tempoAnalyticsCollector = require("@walmart/wmreact-tempo-analytics-utils/lib/components/tempo-analytics-collector");

var _tempoAnalyticsCollector2 = _interopRequireDefault(_tempoAnalyticsCollector);

var _tempoCore = require("@walmart/wmreact-header/lib/tempo-core");

var _offcanvasNav = require("./offcanvas-nav");

var _offcanvasNav2 = _interopRequireDefault(_offcanvasNav);

var _globalAccountFlyout = require("./global-account-flyout");

var _globalAccountFlyout2 = _interopRequireDefault(_globalAccountFlyout);

var _headerCart = require("@walmart/wmreact-header/lib/components/header-cart");

var _headerCart2 = _interopRequireDefault(_headerCart);

var _headerLogo = require("@walmart/wmreact-header/lib/components/header-logo");

var _headerLogo2 = _interopRequireDefault(_headerLogo);

var _samsSearch = require("./sams-search");

var _samsSearch2 = _interopRequireDefault(_samsSearch);

var _globalSearch = require("@walmart/wmreact-header/lib/components/global-search");

var _globalSearch2 = _interopRequireDefault(_globalSearch);

var _globalEyebrowNav = require("./global-eyebrow-nav");

var _globalEyebrowNav2 = _interopRequireDefault(_globalEyebrowNav);

var _globalMarketingMessages = require("@walmart/wmreact-header/lib/components/global-marketing-messages");

var _globalMarketingMessages2 = _interopRequireDefault(_globalMarketingMessages);

var _globalLefthandNav = require("./global-lefthand-nav");

var _globalLefthandNav2 = _interopRequireDefault(_globalLefthandNav);

var _globalSecondaryNav = require("@walmart/wmreact-header/lib/components/global-secondary-nav");

var _globalSecondaryNav2 = _interopRequireDefault(_globalSecondaryNav);

var _headerButtonToggle = require("@walmart/wmreact-header/lib/components/header-button-toggle");

var _headerButtonToggle2 = _interopRequireDefault(_headerButtonToggle);

var _storefinderLink = require("@walmart/wmreact-header/lib/components/storefinder-link");

var _storefinderLink2 = _interopRequireDefault(_storefinderLink);

var _actions = require("@walmart/wmreact-header/lib/actions");

var _storesProp = require("@walmart/wmreact-header/lib/props/stores-prop");

var _storesProp2 = _interopRequireDefault(_storesProp);

var _headerAdapter = require("../adapters/header-adapter");

var _headerAdapter2 = _interopRequireDefault(_headerAdapter);

var _typeahead = require("@walmart/wmreact-header/lib/typeahead.prop");

var _typeahead2 = _interopRequireDefault(_typeahead);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _businessToolsNav = require("./business-tools-nav");

var _businessToolsNav2 = _interopRequireDefault(_businessToolsNav);

var _memberServicesNav = require("./member-services-nav");

var _memberServicesNav2 = _interopRequireDefault(_memberServicesNav);

var _clubLocator = require("./club-locator");

var _clubLocator2 = _interopRequireDefault(_clubLocator);

var _bannerMessage = require("./banner-message");

var _bannerMessage2 = _interopRequireDefault(_bannerMessage);

var _storeFinder = require("../actions/store-finder.js");

var _businessToolNavMobile = require("../actions/business-tool-nav-mobile");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleTypeComponentMap = {
  CloneGlobalAccountFlyout: _globalAccountFlyout2.default,
  GlobalSearch: _globalSearch2.default,
  GlobalEyebrowNav: _globalEyebrowNav2.default,
  BannerMessage: _bannerMessage2.default,
  GlobalMarketingMessages: _globalMarketingMessages2.default,
  GlobalLefthandNav: _globalLefthandNav2.default,
  BusinessToolsNav: _businessToolsNav2.default,
  MemberServicesNav: _memberServicesNav2.default,
  GlobalSecondaryNav: _globalSecondaryNav2.default
};
var ANALYTICS_PAGE_CONTEXT = "Header";

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

var SamsHeader = exports.SamsHeader = function (_Component) {
  (0, _inherits3.default)(SamsHeader, _Component);

  function SamsHeader(props) {
    (0, _classCallCheck3.default)(this, SamsHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._toggleSearch = _this._toggleSearch.bind(_this);
    _this._setOffcanvasNavOpen = _this._setOffcanvasNavOpen.bind(_this);

    if (_exenv2.default.canUseDOM) {
      props.onBootstrap();
    }
    return _this;
  }

  SamsHeader.prototype._setOffcanvasNavOpen = function _setOffcanvasNavOpen() {
    this.refs.offcanvasNav.setOpen();
  };

  SamsHeader.prototype._toggleSearch = function _toggleSearch() {
    this.refs.searchbarWrapper.toggle();
  };

  SamsHeader.prototype._renderTempoZone = function _renderTempoZone(zoneName, isBot) {
    return _react2.default.createElement(_tempoCore.TempoZone, { zoneName: zoneName, className: "hide-content-max-l", isBot: isBot });
  };

  SamsHeader.prototype._renderMainNav = function _renderMainNav() {
    var _props = this.props;
    var isMobile = _props.isMobile;
    var isBot = _props.isBot;


    return _react2.default.createElement(
      "div",
      { className: "header-Header-mainNav-inner" },
      _react2.default.createElement(
        "div",
        { className: "ResponsiveContainer" },
        !isMobile && this._renderTempoZone("nav_flyout_2_zone", isBot),
        !isMobile && this._renderTempoZone("nav_flyout_3_zone", isBot),
        _react2.default.createElement(_tempoCore.TempoZone, {
          zoneName: "nav_links_zone" })
      )
    );
  };

  SamsHeader.prototype._renderPrimaryHeader = function _renderPrimaryHeader() {
    var _props2 = this.props;
    var selectedCategory = _props2.selectedCategory;
    var shippingPass = _props2.shippingPass;
    var totalItemsCount = _props2.totalItemsCount;
    var maxCountThreshold = _props2.maxCountThreshold;
    var userName = _props2.userName;
    var onStoreFinderActive = _props2.onStoreFinderActive;
    var searchExposed = _props2.searchExposed;
    var isMobile = _props2.isMobile;
    var isBot = _props2.isBot;
    var stores = _props2.storeFinderResponse.stores;


    return _react2.default.createElement(
      "div",
      { className: "header-HeaderPrimary" },
      _react2.default.createElement(
        "div",
        { className: "ResponsiveContainer" },
        _react2.default.createElement(
          _arrange2.default,
          null,
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            !isMobile && this._renderTempoZone("nav_flyout_1_zone", isBot),
            _react2.default.createElement(_headerButtonToggle2.default, (0, _extends3.default)({
              className: "hide-content-l",
              onClick: this._setOffcanvasNavOpen,
              name: "menu"
            }, (0, _automationIdUtils.getDataAutomationIdPair)("offcanvasNavToggle", "header-HeaderPrimarySmall", process)))
          ),
          _react2.default.createElement(
            _arrange2.default.Fit,
            { className: "header-HeaderPrimary-logoWrapper" },
            _react2.default.createElement(_headerLogo2.default, { shippingPass: shippingPass })
          ),
          !isMobile && _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            _react2.default.createElement(_tempoCore.TempoZone, {
              zoneName: "headerZone5",
              size: "medium",
              className: "hide-content-max-m hide-content-l" })
          ),
          _react2.default.createElement(_samsSearch2.default, {
            ref: "searchbarWrapper",
            searchExposed: searchExposed,
            isMobile: isMobile,
            selectedCategory: selectedCategory }),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            _react2.default.createElement(_clubLocator2.default, {
              btnMessage: "Change club",
              notificationText: "We've found a club near you",
              notification: "Find a club",
              userMessage: "Choose a club to see local pricing and availability",
              btnMessage2: "Cancel",
              btnMessage1: "Find",
              cancelBtn: "cancel",
              changeLocationBtn: "Change Location",
              titleText: "No Clubs Found within 150 miles",
              isUserLoggedIn: false,
              stores: stores,
              showClubPopup: true,
              onStoreFinderActive: onStoreFinderActive
            })
          ),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            !isMobile && _react2.default.createElement(
              "div",
              { className: "header-HeaderPrimary-user hide-content-max-l" },
              _react2.default.createElement(_tempoCore.TempoZone, {
                zoneName: "your_accont_zone",
                customerName: userName })
            ),
            _react2.default.createElement(_storefinderLink2.default, { className: "hide-content-l" })
          ),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            _react2.default.createElement(
              "div",
              { className: "header-HeaderPrimary-cart" },
              _react2.default.createElement(_headerCart2.default, {
                maxCountThreshold: maxCountThreshold,
                totalItemsCount: totalItemsCount })
            )
          )
        )
      )
    );
  };

  SamsHeader.prototype._renderHeader = function _renderHeader() {
    var _props3 = this.props;
    var isMobile = _props3.isMobile;
    var storeFinderUrl = _props3.storeFinderUrl;
    var _onStoreFinderActive = _props3.onStoreFinderActive;
    var storeFinderResponse = _props3.storeFinderResponse;


    return _react2.default.createElement(
      _fixie2.default,
      { fixedAtBottom: true, cssMode: true },
      _react2.default.createElement(
        "div",
        { className: "header-Header-wrapper" },
        !isMobile && _react2.default.createElement(
          "nav",
          { className: "ResponsiveContainer header-HeaderPrimary-eyebrowNavWrapper hide-content-max-l" },
          _react2.default.createElement(_tempoCore.TempoZone, {
            zoneName: "eyebrow_zone",
            onStoreFinderActive: function onStoreFinderActive() {
              _onStoreFinderActive(storeFinderUrl);
            },
            storeFinderResponse: storeFinderResponse
          })
        ),
        this._renderPrimaryHeader(),
        !isMobile && _react2.default.createElement(
          "nav",
          { className: "header-Header-mainNav hide-content-max-l" },
          this._renderMainNav()
        ),
        !isMobile && _react2.default.createElement(
          "nav",
          { className: "BannerMessage" },
          _react2.default.createElement(_tempoCore.TempoZone, {
            className: "sams-banner-message",
            zoneName: "global_messaging_zone"
          })
        )
      )
    );
  };

  SamsHeader.prototype._setTypeAheadUrl = function _setTypeAheadUrl() {
    var typeAheadUrl = this.props.typeAheadUrl;


    if (!(0, _isEmpty2.default)(typeAheadUrl)) {
      var innerHtml = "window._wml.typeAheadUrl=\"" + typeAheadUrl + "\"";
      return _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: innerHtml } });
    }
  };

  SamsHeader.prototype.render = function render() {
    var _props4 = this.props;
    var userName = _props4.userName;
    var isMobile = _props4.isMobile;
    var isBot = _props4.isBot;
    var quimbyData = _props4.quimbyData;


    return _react2.default.createElement(
      _collectorContext2.default,
      { pageContext: ANALYTICS_PAGE_CONTEXT },
      _react2.default.createElement(
        "header",
        (0, _extends3.default)({ className: "header-Header" }, (0, _automationIdUtils.getDataAutomationIdPair)("Header", "header", process)),
        _react2.default.createElement(
          _tempoCore.TempoWrapper,
          {
            zoneNameModuleMap: (0, _tempoCore.mapQuimbyStateToProps)(quimbyData),
            moduleTypeComponentMap: moduleTypeComponentMap
          },
          _react2.default.createElement(_tempoAnalyticsCollector2.default, null),
          _react2.default.createElement(_offcanvasNav2.default, { ref: "offcanvasNav", userName: userName, isMobile: isMobile, isBot: isBot,
            bizToolsMob: this.props.bizToolsMob,
            renderBizToolsMobile: this.props.renderBizToolsMobile,
            indexSuperDeptMobile: this.props.indexSuperDeptMobile,
            renderDeptMobile: this.props.renderDeptMobile,
            indexDeptMobile: this.props.indexDeptMobile,
            btoolsIndexMobile: this.props.btoolsIndexMobile
          }),
          this._renderHeader(),
          _react2.default.createElement(_tempoCore.TempoZone, { zoneName: "headerZone5", size: "small", className: "hide-content-m" }),
          this._setTypeAheadUrl(),
          _react2.default.createElement("script", _typeahead2.default)
        )
      )
    );
  };

  return SamsHeader;
}(_react.Component);

SamsHeader.displayName = "SamsHeader";

SamsHeader.propTypes = {
  /**
  check mobile device
  */
  isMobile: _react.PropTypes.bool,
  /**
  check for bots
  */
  isBot: _react.PropTypes.bool,
  /**
  True if search should be exposed by default at smaller screen widths.
  */
  searchExposed: _react.PropTypes.bool,
  /**
  Initially selected category ID in the search dropdown on larger screen widths.
  */
  selectedCategory: _react.PropTypes.string,
  /**
  True if the shipping pass logo should show on larger screen widths.
  */
  shippingPass: _react.PropTypes.bool,
  /**
  First name of the user if signed in. Null otherwise.
  */
  userName: _react.PropTypes.string,
  /**
  Total number of items.
   */
  totalItemsCount: _react.PropTypes.number,
  /**
  The max count value. After totalItemsCount reaches maxCountThreshold,
  the HeaderCartCount would start displaying the value as
  (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
  and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
  Default value for this is 99.
   */
  maxCountThreshold: _react.PropTypes.number,
  /**
  Data used to render storefinder panel.
  This includes the loading and error states and stores data
  */
  storeFinderResponse: _react.PropTypes.shape({
    loading: _react.PropTypes.bool,
    didInvalidate: _react.PropTypes.bool,
    stores: _react.PropTypes.shape(_storesProp2.default)
  }),
  /**
  The first action dispatched
  */
  onBootstrap: _react.PropTypes.func,
  /**
  On location change is a action that is called when user's location changes
  */
  onStoreFinderActive: _react.PropTypes.func,
  /**
  quimbyData is the result of tempo-core calls to quimby stored in redux
  */
  quimbyData: _react.PropTypes.object,
  /**
  Url to fetch recomendations in searchbar
  */
  typeAheadUrl: _react.PropTypes.string,
  /**
   */
  storeFinderUrl: _react.PropTypes.string,

  bizToolsMob: _react.PropTypes.object.isRequired,
  renderBizToolsMobile: _react.PropTypes.func,
  indexSuperDeptMobile: _react.PropTypes.func,
  renderDeptMobile: _react.PropTypes.func,
  indexDeptMobile: _react.PropTypes.func,
  btoolsIndexMobile: _react.PropTypes.func
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
  onBootstrap: function onBootstrap() {},
  onStoreFinderActive: function onStoreFinderActive() {},
  storeFinderResponse: {
    loading: false,
    didInvalidate: false,
    stores: {}
  },
  typeAheadUrl: ""
};

var mapHeaderStateToProps = exports.mapHeaderStateToProps = function mapHeaderStateToProps(state) {
  var headerAdapter = new _headerAdapter2.default(state);
  return headerAdapter.adapt();
};

var mapHeaderDispatchToProps = exports.mapHeaderDispatchToProps = function mapHeaderDispatchToProps(dispatch) {
  return {
    onBootstrap: function onBootstrap() {
      dispatch((0, _actions.getCartCount)());
      dispatch((0, _actions.getUserName)());
      dispatch((0, _actions.getShippingPass)());
    },

    onStoreFinderActive: function onStoreFinderActive(clubPreferences) {
      dispatch((0, _storeFinder.fetchStoresRequest)(clubPreferences));
    },

    renderBizToolsMobile: function renderBizToolsMobile(renderBizTools) {
      dispatch((0, _businessToolNavMobile.renderBizToolsMobile)(renderBizTools));
    },

    indexSuperDeptMobile: function indexSuperDeptMobile(idx) {
      dispatch((0, _businessToolNavMobile.indexSuperDeptMobile)(idx));
    },

    renderDeptMobile: function renderDeptMobile(renderDept) {
      dispatch((0, _businessToolNavMobile.renderDeptMobile)(renderDept));
    },

    indexDeptMobile: function indexDeptMobile(idxDept) {
      dispatch((0, _businessToolNavMobile.indexDeptMobile)(idxDept));
    },

    btoolsIndexMobile: function btoolsIndexMobile(btoolsIndex) {
      dispatch((0, _businessToolNavMobile.btoolsIndexMobile)(btoolsIndex));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapHeaderStateToProps, mapHeaderDispatchToProps)(SamsHeader);