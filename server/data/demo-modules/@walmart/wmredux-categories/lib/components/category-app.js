"use strict";

exports.__esModule = true;
exports.CategoryApp = undefined;

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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = require("react-redux");

var _exenv = require("exenv");

var _wmreactContainers = require("@walmart/wmreact-containers");

var _automationUtils = require("@walmart/automation-utils");

var _categoryUtils = require("@walmart/category-utils");

var _wmreactCategoryComponents = require("@walmart/wmreact-category-components");

var _wmreactCategoryComponents2 = _interopRequireDefault(_wmreactCategoryComponents);

var _facetTab = require("./facet-tab");

var _facetTab2 = _interopRequireDefault(_facetTab);

var _pageMetadata = require("@walmart/electrode-seo-metadata/dist/lib/page-metadata");

var _pageMetadata2 = _interopRequireDefault(_pageMetadata);

var _usertiming = require("@walmart/usertiming");

var _usertiming2 = _interopRequireDefault(_usertiming);

var _wmreactAds = require("@walmart/wmreact-ads");

var _wmreactP13n = require("@walmart/wmreact-p13n");

var _envInfo = require("@walmart/wmreact-env-info/lib/components/env-info");

var _envInfo2 = _interopRequireDefault(_envInfo);

var _getConfigVariable = require("@walmart/category-utils/lib/get-config-variable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13N_ENABLED_KEY = "ccm[\"features\"].enableP13NModule";
var P13N_ENABLED_DEFAULT_KEY = "ui.p13n.enabled";

var CategoryApp = exports.CategoryApp = function (_Component) {
  (0, _inherits3.default)(CategoryApp, _Component);

  function CategoryApp() {
    (0, _classCallCheck3.default)(this, CategoryApp);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CategoryApp.prototype.componentDidMount = function componentDidMount() {
    var isAdsEnabled = (0, _getConfigVariable.getBooleanValue)((0, _getConfigVariable.getConfigVariable)("ccm[\"midasConfig\"].wpaAds", "ui.midasConfig.wpaAds"));

    this._atfComplete();

    if (_exenv.canUseDOM && isAdsEnabled) {
      var midasConfig = {};
      var midasContext = this._buildAdContext();
      this.props.showAds({ midasContext: midasContext, midasConfig: midasConfig });
    }
  };

  CategoryApp.prototype._atfComplete = function _atfComplete() {
    var perf = (0, _usertiming2.default)(window && window.performance);

    perf.mark("above-the-fold");
    perf.measure("entrypoint to above-the-fold", "entrypoint", "above-the-fold");
  };

  CategoryApp.prototype._getWindow = function _getWindow() {
    return window;
  };

  CategoryApp.prototype._getPageMetadata = function _getPageMetadata() {
    var seoTags = _exenv.canUseDOM ? (this._getWindow()._wml || {}).seoTags : this.context.seoTags;
    return new _pageMetadata2.default(seoTags);
  };

  CategoryApp.prototype._renderTopModules = function _renderTopModules(top) {
    var _this2 = this;

    var isMobile = this.props.isMobile;

    return top.map(function (module, index) {
      if (_this2._isValidModule(module)) {
        module.isMobile = isMobile;
        switch (module.moduleType) {
          case _categoryUtils.moduleTypes.BREADCRUMB:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.BreadCrumbs, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.REDIRECT_MESSAGE:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.RedirectMessage, (0, _extends3.default)({ key: index }, module));
          default:
            return null;
        }
      }
    });
  };

  /*eslint-disable complexity*/


  CategoryApp.prototype._renderCenterModules = function _renderCenterModules(center) {
    var _this3 = this;

    var isMobile = this.props.isMobile;

    var modulesLength = center.length;
    var reactModules = center.map(function (module, index) {
      if (_this3._isValidModule(module)) {
        module.isMobile = isMobile;
        switch (module.moduleType) {
          case _categoryUtils.moduleTypes.REDIRECT_MESSAGE:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.RedirectMessage, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.SINGLE_STORY_POV_RESPONSIVE:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.SingleStory, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.MULTI_STORY_POV_RESPONSIVE:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.MultiStory, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.MINI_STORY:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.MinistoryStackable, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.FEATURED_CATEGORIES_CURATED:
          case _categoryUtils.moduleTypes.FEATURED_CATEGORIES:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.PopularCategories, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.FEATURED_BRANDS_CURATED:
          case _categoryUtils.moduleTypes.TOP_BRAND:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.TopBrands, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.SINGLE_ITEM:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.SingleItem, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.FACET_TAB:
            return _react2.default.createElement(_facetTab2.default.FacetTab, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.SEO_CUSTOM_HTML:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.ExpandableHtmlText, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.CATEGORY_NAV:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.InfiniteMenu, (0, _extends3.default)({ key: index }, module));
          case _categoryUtils.moduleTypes.BANNER_MESSAGE:
          case _categoryUtils.moduleTypes.VALUE_OF_DAY_MESSAGING:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.Banner, (0, _extends3.default)({ key: index }, module));
          default:
            return null;
        }
      }
    });

    var adsIndex = 0;

    if (modulesLength > 0) {
      // insert at the 2nd and 3rd
      reactModules.splice(1, 0, this._getSponsoredAd(++adsIndex), this._getSponsoredAd(++adsIndex));
    }

    // insert at the 10th position
    if (modulesLength > 8) {
      reactModules.splice(9, 0, this._getSponsoredAd(++adsIndex));
    }

    return reactModules;
  };

  CategoryApp.prototype._getSponsoredAd = function _getSponsoredAd(index) {
    var props = {
      key: "sponsoredAd" + index,
      className: "hide-content",
      id: "sponsored-container-middle-" + index
    };

    return _react2.default.createElement("div", props);
  };

  CategoryApp.prototype._renderBottomSponsoredContainer = function _renderBottomSponsoredContainer() {
    return _react2.default.createElement(
      "div",
      { className: "zone" },
      _react2.default.createElement("div", {
        id: "sponsored-container-bottom-1",
        className: "sponsored-container-bottom hide-content" }),
      _react2.default.createElement("div", {
        id: "sponsored-container-bottom-2",
        className: "sponsored-container-bottom hide-content" }),
      _react2.default.createElement("div", {
        id: "sponsored-container-bottom-3",
        className: "sponsored-container-bottom hide-content" }),
      _react2.default.createElement("div", {
        id: "sponsored-container-bottom-4",
        className: "sponsored-container-bottom hide-content" })
    );
  };

  /*eslint-disable complexity*/

  CategoryApp.prototype._renderLeftModules = function _renderLeftModules(left) {
    var _this4 = this;

    var isMobile = this.props.isMobile;


    var lhnModules = left.map(function (module, index) {
      if (_this4._isValidModule(module)) {
        module.isMobile = isMobile;

        switch (module.moduleType) {
          case _categoryUtils.moduleTypes.SHOP_BY_CATEGORY:
          case _categoryUtils.moduleTypes.POPULAR_IN_CATEGORY:
          case _categoryUtils.moduleTypes.CATEGORY_CURATED_LEFTNAV:
            return _react2.default.createElement(_wmreactCategoryComponents2.default.SideBarMenuModule, (0, _extends3.default)({ key: index }, module));
          default:
            return null;
        }
      }
    });

    return _react2.default.createElement(
      _wmreactContainers.Shelf,
      { threeCol: false },
      lhnModules
    );
  };

  CategoryApp.prototype._buildAdContext = function _buildAdContext() {
    var adContext = this.props.others && this.props.others.adContext ? this.props.others.adContext : null;

    if (adContext !== null) {
      window._wml = window._wml || {};
      window._wml.midasContext = window._wml.midasContext || {};
      window._wml.midasContext.categoryPathName = adContext.categoryPathName;
      window._wml.midasContext.categoryPathId = adContext.categoryPathId;
      window._wml.midasContext.pageType = adContext.pageType;
      return window._wml.midasContext;
    }
    return null;
  };

  /*eslint-disable complexity*/


  CategoryApp.prototype._isValidModule = function _isValidModule(module) {
    switch (module.moduleType) {
      case _categoryUtils.moduleTypes.SINGLE_STORY_POV_RESPONSIVE:
      case _categoryUtils.moduleTypes.MULTI_STORY_POV_RESPONSIVE:
        return !!(module.stories && module.stories.length);
      case _categoryUtils.moduleTypes.FEATURED_CATEGORIES:
      case _categoryUtils.moduleTypes.FEATURED_CATEGORIES_CURATED:
      case _categoryUtils.moduleTypes.BREADCRUMB:
      case _categoryUtils.moduleTypes.TOP_BRAND:
      case _categoryUtils.moduleTypes.FEATURED_BRANDS_CURATED:
        return !!(module.data && module.data.length);
      case _categoryUtils.moduleTypes.CUSTOM_HTML:
        // must have some html
        return !!(module.markup && module.markup.length);
      case _categoryUtils.moduleTypes.FACET_TAB:
        return !!(module.tabs && module.tabs.length);
      case _categoryUtils.moduleTypes.SINGLE_ITEM:
        return !!(module.items && module.items.length);
      case _categoryUtils.moduleTypes.SEO_CUSTOM_HTML:
        // must have html
        return !!(module.markup && module.markup.length);
      case _categoryUtils.moduleTypes.BANNER_MESSAGE:
      case _categoryUtils.moduleTypes.VALUE_OF_DAY_MESSAGING:
        return !!module.data;
      case _categoryUtils.moduleTypes.CATEGORY_NAV:
      case _categoryUtils.moduleTypes.SHOP_BY_CATEGORY:
      case _categoryUtils.moduleTypes.CATEGORY_CURATED_LEFTNAV:
      case _categoryUtils.moduleTypes.POPULAR_IN_CATEGORY:
        return !!(module.data && module.data.length);
      default:
        return true;
    }
  };
  /*eslint-disable complexity*/

  CategoryApp.prototype._renderSkylineBanner = function _renderSkylineBanner() {
    return _react2.default.createElement(
      "div",
      { className: "sponsored-container-top-wrapper hide-content display-block-l" },
      _react2.default.createElement("div", { id: "sponsored-container-top"
        /*eslint-disable max-len */
        , className: "sponsored-container-top container container-responsive container-full sponsored-display-ad"
        /*eslint-enable max-len */
      })
    );
  };

  CategoryApp.prototype._isP13NModuleEnabled = function _isP13NModuleEnabled() {
    var p13nEnabled = (0, _getConfigVariable.getConfigVariable)(P13N_ENABLED_KEY, P13N_ENABLED_DEFAULT_KEY);
    return (0, _getConfigVariable.getBooleanValue)(p13nEnabled);
  };

  CategoryApp.prototype.render = function render() {
    var _props$modules = this.props.modules;
    var top = _props$modules.top;
    var left = _props$modules.left;
    var center = _props$modules.center;

    var pageMetadata = this._getPageMetadata() ? this._getPageMetadata().get("cwc") : null;
    var seoText = pageMetadata ? { "markup": pageMetadata } : null;

    var classes = (0, _classnames2.default)("Grid-col", {
      "u-size-4-5-l u-size-5-6-xl": left.length > 0
    });

    return _react2.default.createElement(
      "div",
      null,
      this._renderSkylineBanner(),
      _react2.default.createElement(
        "div",
        { className: "page-content-wrapper Container" },
        _react2.default.createElement(
          "div",
          { className: "CategoryApp" },
          _react2.default.createElement(
            "div",
            { className: "CategoryApp-topModules" },
            this._renderTopModules(top)
          ),
          _react2.default.createElement(
            "div",
            { className: "Grid" },
            left.length > 0 && _react2.default.createElement(
              "div",
              { className: "Grid-col u-size-1-5-l u-size-1-6-xl hide-content-max-l" },
              this._renderLeftModules(left),
              _react2.default.createElement(_wmreactAds.Ads, { id: "sponsored-container-left-1", className: "sponsored-container-left" })
            ),
            _react2.default.createElement(
              "div",
              (0, _extends3.default)({
                className: classes
              }, (0, _automationUtils.getDataAutomationIdPair)("MainContent", "CategoryApp", process)),
              this._renderCenterModules(center),
              this._renderBottomSponsoredContainer(),
              seoText && _react2.default.createElement(_wmreactCategoryComponents2.default.ExpandableHtmlText, seoText)
            )
          )
        )
      ),
      this._isP13NModuleEnabled() && _react2.default.createElement(_wmreactP13n.P13NContainer, { page: "Category" }),
      _react2.default.createElement(_envInfo2.default, null)
    );
  };

  return CategoryApp;
}(_react.Component);

CategoryApp.displayName = "CategoryApp";

CategoryApp.contextTypes = {
  seoTags: _react.PropTypes.object
};

CategoryApp.propTypes = {
  modules: _react.PropTypes.shape({
    left: _react.PropTypes.array,
    top: _react.PropTypes.array,
    center: _react.PropTypes.array
  }),
  showAds: _react.PropTypes.func,
  others: _react.PropTypes.object,
  isMobile: _react.PropTypes.bool.isRequired
};

CategoryApp.defaultProps = {
  modules: {
    left: [],
    top: [],
    center: []
  },
  others: {}
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showAds: function showAds(data) {
      dispatch((0, _wmreactAds.showAdsAction)(data));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    modules: state.presoData.modules,
    others: state.presoData.others,
    isMobile: state.isMobile
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CategoryApp);