"use strict";

exports.__esModule = true;
exports.mapHeaderDispatchToProps = exports.mapHeaderStateToProps = exports.Header = undefined;

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

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _tempoAnalyticsCollector = require("@walmart/wmreact-tempo-analytics-utils/lib/components/tempo-analytics-collector");

var _tempoAnalyticsCollector2 = _interopRequireDefault(_tempoAnalyticsCollector);

var _tempoCore = require("../tempo-core");

var _offcanvasNav = require("./offcanvas-nav");

var _offcanvasNav2 = _interopRequireDefault(_offcanvasNav);

var _globalAccountFlyout = require("./global-account-flyout");

var _globalAccountFlyout2 = _interopRequireDefault(_globalAccountFlyout);

var _headerCart = require("./header-cart");

var _headerCart2 = _interopRequireDefault(_headerCart);

var _headerLogo = require("./header-logo");

var _headerLogo2 = _interopRequireDefault(_headerLogo);

var _searchbarWrapper = require("./searchbar-wrapper");

var _searchbarWrapper2 = _interopRequireDefault(_searchbarWrapper);

var _globalSearch = require("./global-search");

var _globalSearch2 = _interopRequireDefault(_globalSearch);

var _globalEyebrowNav = require("./global-eyebrow-nav");

var _globalEyebrowNav2 = _interopRequireDefault(_globalEyebrowNav);

var _globalMarketingMessages = require("./global-marketing-messages");

var _globalMarketingMessages2 = _interopRequireDefault(_globalMarketingMessages);

var _globalLefthandNav = require("./global-lefthand-nav");

var _globalLefthandNav2 = _interopRequireDefault(_globalLefthandNav);

var _globalSecondaryNav = require("./global-secondary-nav");

var _globalSecondaryNav2 = _interopRequireDefault(_globalSecondaryNav);

var _headerButtonToggle = require("./header-button-toggle");

var _headerButtonToggle2 = _interopRequireDefault(_headerButtonToggle);

var _storefinderLink = require("./storefinder-link");

var _storefinderLink2 = _interopRequireDefault(_storefinderLink);

var _actions = require("../actions");

var _storesProp = require("../props/stores-prop");

var _storesProp2 = _interopRequireDefault(_storesProp);

var _headerAdapter = require("../adapters/header-adapter");

var _headerAdapter2 = _interopRequireDefault(_headerAdapter);

var _typeahead = require("../typeahead.prop");

var _typeahead2 = _interopRequireDefault(_typeahead);

var _typeaheadMobile = require("../typeahead-mobile.prop");

var _typeaheadMobile2 = _interopRequireDefault(_typeaheadMobile);

var _typeaheadMobile3 = require("./typeahead-mobile");

var _typeaheadMobile4 = _interopRequireDefault(_typeaheadMobile3);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _appBanner = require("./app-banner");

var _appBanner2 = _interopRequireDefault(_appBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moduleTypeComponentMap = {
  GlobalAccountFlyout: _globalAccountFlyout2.default,
  GlobalSearch: _globalSearch2.default,
  GlobalEyebrowNav: _globalEyebrowNav2.default,
  GlobalMarketingMessages: _globalMarketingMessages2.default,
  GlobalLefthandNav: _globalLefthandNav2.default,
  GlobalSecondaryNav: _globalSecondaryNav2.default
};
var ANALYTICS_PAGE_CONTEXT = "Header";

var APPBANNER_URL = "//ad.apsalar.com/api/v1/ad?re=0&st=497849314445&h=0dec6462a7078c2562a2193e9630f66a8fd23d62";

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

var Header = exports.Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._toggleSearch = _this._toggleSearch.bind(_this);
    _this._setOffcanvasNavOpen = _this._setOffcanvasNavOpen.bind(_this);

    if (_exenv2.default.canUseDOM) {
      props.onBootstrap();
    }
    return _this;
  }

  Header.prototype._setOffcanvasNavOpen = function _setOffcanvasNavOpen() {
    this.refs.offcanvasNav.setOpen();
  };

  Header.prototype._toggleSearch = function _toggleSearch() {
    this.refs.searchbarWrapper.toggle();
  };

  Header.prototype._renderMainNav = function _renderMainNav() {
    return _react2.default.createElement(
      "div",
      { className: "ResponsiveContainer" },
      _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "headerZone4",
        className: "pull-left" }),
      _react2.default.createElement(_tempoCore.TempoZone, {
        zoneName: "headerZone5",
        className: "pull-right" })
    );
  };

  Header.prototype._renderPrimaryHeader = function _renderPrimaryHeader() {
    var _props = this.props;
    var selectedCategory = _props.selectedCategory;
    var shippingPass = _props.shippingPass;
    var totalItemsCount = _props.totalItemsCount;
    var maxCountThreshold = _props.maxCountThreshold;
    var userName = _props.userName;
    var searchExposed = _props.searchExposed;
    var isMobile = _props.isMobile;
    var isBot = _props.isBot;


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
            !isMobile && _react2.default.createElement(_tempoCore.TempoZone, { zoneName: "headerZone3", className: "hide-content-max-l", isBot: isBot }),
            _react2.default.createElement(_headerButtonToggle2.default, (0, _extends3.default)({
              className: "hide-content-l",
              onClick: this._setOffcanvasNavOpen,
              name: "menu"
            }, (0, _automationIdUtils.getDataAutomationIdPair)("offcanvasNavToggle", "header-HeaderPrimarySmall")))
          ),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            _react2.default.createElement(_headerButtonToggle2.default, (0, _extends3.default)({
              className: "hide-content-l",
              onClick: this._toggleSearch,
              name: "search"
            }, (0, _automationIdUtils.getDataAutomationIdPair)("searchToggle", "header-HeaderPrimarySmall")))
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
          _react2.default.createElement(_searchbarWrapper2.default, {
            ref: "searchbarWrapper",
            searchExposed: searchExposed,
            isMobile: isMobile,
            selectedCategory: selectedCategory }),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            !isMobile && _react2.default.createElement(
              "div",
              { className: "header-HeaderPrimary-user hide-content-max-l" },
              _react2.default.createElement(_tempoCore.TempoZone, {
                zoneName: "headerZone10",
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

  Header.prototype._renderHeader = function _renderHeader() {
    var _props2 = this.props;
    var isMobile = _props2.isMobile;
    var storeFinderUrl = _props2.storeFinderUrl;
    var _onStoreFinderActive = _props2.onStoreFinderActive;
    var storeFinderResponse = _props2.storeFinderResponse;


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
            zoneName: "headerZone1",
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
        )
      )
    );
  };

  Header.prototype._setTypeAheadUrl = function _setTypeAheadUrl() {
    var typeAheadUrl = this.props.typeAheadUrl;


    if (!(0, _isEmpty2.default)(typeAheadUrl)) {
      var innerHtml = "window._wml.typeAheadUrl=\"" + typeAheadUrl + "\"";
      return _react2.default.createElement("script", { dangerouslySetInnerHTML: { __html: innerHtml } });
    }
  };

  Header.prototype.render = function render() {
    var _props3 = this.props;
    var userName = _props3.userName;
    var isMobile = _props3.isMobile;
    var isBot = _props3.isBot;
    var quimbyData = _props3.quimbyData;
    var enableMobileTypeahead = _props3.enableMobileTypeahead;


    return _react2.default.createElement(
      _collectorContext2.default,
      { pageContext: ANALYTICS_PAGE_CONTEXT },
      _react2.default.createElement(
        "header",
        (0, _extends3.default)({ className: "header-Header" }, (0, _automationIdUtils.getDataAutomationIdPair)("Header", "header")),
        isMobile && _react2.default.createElement(_appBanner2.default, {
          title: "Save Money. Live better",
          author: "Walmart.com",
          url: APPBANNER_URL }),
        _react2.default.createElement(
          _tempoCore.TempoWrapper,
          {
            zoneNameModuleMap: (0, _tempoCore.mapQuimbyStateToProps)(quimbyData),
            moduleTypeComponentMap: moduleTypeComponentMap
          },
          _react2.default.createElement(_tempoAnalyticsCollector2.default, null),
          _react2.default.createElement(_offcanvasNav2.default, { ref: "offcanvasNav", userName: userName, isMobile: isMobile, isBot: isBot }),
          this._renderHeader(),
          _react2.default.createElement(_tempoCore.TempoZone, { zoneName: "headerZone5", size: "small", className: "hide-content-m" }),
          this._setTypeAheadUrl(),
          isMobile && enableMobileTypeahead ? _react2.default.createElement(_typeaheadMobile4.default, null) : null,
          isMobile && enableMobileTypeahead ? _react2.default.createElement("script", _typeaheadMobile2.default) : _react2.default.createElement("script", _typeahead2.default)
        )
      )
    );
  };

  return Header;
}(_react.Component);

Header.displayName = "Header";

Header.propTypes = {
  /**
  Boolean for enabling mobile typeahead
  */
  enableMobileTypeahead: _react.PropTypes.bool,
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
  Url to fetch nearby stores
  */
  storeFinderUrl: _react.PropTypes.string,
  /**
  Url to fetch recomendations in searchbar
  */
  typeAheadUrl: _react.PropTypes.string
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
  onBootstrap: function onBootstrap() {},
  storeFinderUrl: "/store/ajax/preferred-flyout",
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

    onStoreFinderActive: function onStoreFinderActive(storeFinderUrl) {
      dispatch((0, _actions.fetchStores)(storeFinderUrl));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapHeaderStateToProps, mapHeaderDispatchToProps)(Header);