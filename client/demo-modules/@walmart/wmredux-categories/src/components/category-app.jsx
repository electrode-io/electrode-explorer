import React, { Component, PropTypes } from "react";
import className from "classnames";
import { connect } from "react-redux";
import { canUseDOM } from "exenv";
import { Shelf } from "@walmart/wmreact-containers";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import { moduleTypes as ModuleTypes } from "@walmart/category-utils";

import CategoryComponent from "@walmart/wmreact-category-components";
import { default as ConnectedComponents } from "./facet-tab";
import PageMetadata from "@walmart/electrode-seo-metadata/dist/lib/page-metadata";
import performanceFactory from "@walmart/usertiming";
import {Ads, showAdsAction} from "@walmart/wmreact-ads";
import { P13NContainer } from "@walmart/wmreact-p13n";
import EnvironmentInfo from "@walmart/wmreact-env-info/lib/components/env-info";
import {
  getConfigVariable,
  getBooleanValue
} from "@walmart/category-utils/lib/get-config-variable";

const P13N_ENABLED_KEY = `ccm["features"].enableP13NModule`;
const P13N_ENABLED_DEFAULT_KEY = "ui.p13n.enabled";

export class CategoryApp extends Component {

  componentDidMount() {
    const isAdsEnabled = getBooleanValue(
      getConfigVariable("ccm[\"midasConfig\"].wpaAds", "ui.midasConfig.wpaAds")
    );

    this._atfComplete();

    if (canUseDOM && isAdsEnabled) {
      const midasConfig = {};
      const midasContext = this._buildAdContext();
      this.props.showAds({midasContext, midasConfig});
    }
  }

  _atfComplete() {
    const perf = performanceFactory(window && window.performance);

    perf.mark("above-the-fold");
    perf.measure("entrypoint to above-the-fold", "entrypoint", "above-the-fold");
  }

  _getWindow(): Object {
    return window;
  }

  _getPageMetadata() {
    const seoTags = canUseDOM ? (this._getWindow()._wml || {}).seoTags : this.context.seoTags;
    return new PageMetadata(seoTags);
  }

  _renderTopModules(top) {
    const { isMobile } = this.props;
    return top.map((module, index) => {
      if (this._isValidModule(module)) {
        module.isMobile = isMobile;
        switch (module.moduleType) {
        case ModuleTypes.BREADCRUMB:
          return <CategoryComponent.BreadCrumbs key={index} {...module} />;
        case ModuleTypes.REDIRECT_MESSAGE:
          return <CategoryComponent.RedirectMessage key={index} {...module} />;
        default: return null;
        }
      }
    });
  }

  /*eslint-disable complexity*/
  _renderCenterModules(center) {
    const { isMobile } = this.props;
    const modulesLength = center.length;
    const reactModules = center.map((module, index) => {
      if (this._isValidModule(module)) {
        module.isMobile = isMobile;
        switch (module.moduleType) {
        case ModuleTypes.REDIRECT_MESSAGE:
          return <CategoryComponent.RedirectMessage key={index} {...module} />;
        case ModuleTypes.SINGLE_STORY_POV_RESPONSIVE:
          return <CategoryComponent.SingleStory key={index} {...module} />;
        case ModuleTypes.MULTI_STORY_POV_RESPONSIVE:
          return <CategoryComponent.MultiStory key={index} {...module} />;
        case ModuleTypes.MINI_STORY:
          return <CategoryComponent.MinistoryStackable key={index} {...module} />;
        case ModuleTypes.FEATURED_CATEGORIES_CURATED:
        case ModuleTypes.FEATURED_CATEGORIES:
          return <CategoryComponent.PopularCategories key={index} {...module} />;
        case ModuleTypes.FEATURED_BRANDS_CURATED:
        case ModuleTypes.TOP_BRAND:
          return <CategoryComponent.TopBrands key={index} {...module} />;
        case ModuleTypes.SINGLE_ITEM:
          return <CategoryComponent.SingleItem key={index} {...module} />;
        case ModuleTypes.FACET_TAB:
          return <ConnectedComponents.FacetTab key={index} {...module} />;
        case ModuleTypes.SEO_CUSTOM_HTML:
          return <CategoryComponent.ExpandableHtmlText key={index} {...module} />;
        case ModuleTypes.CATEGORY_NAV:
          return <CategoryComponent.InfiniteMenu key={index} {...module} />;
        case ModuleTypes.BANNER_MESSAGE:
        case ModuleTypes.VALUE_OF_DAY_MESSAGING:
          return <CategoryComponent.Banner key={index} {...module} />;
        default:
          return null;
        }
      }
    });

    let adsIndex = 0;

    if (modulesLength > 0) {
      // insert at the 2nd and 3rd
      reactModules.splice(1, 0,
          this._getSponsoredAd(++adsIndex), this._getSponsoredAd(++adsIndex));
    }

    // insert at the 10th position
    if (modulesLength > 8) {
      reactModules.splice(9, 0,
          this._getSponsoredAd(++adsIndex));
    }

    return reactModules;
  }

  _getSponsoredAd(index) {
    const props = {
      key: `sponsoredAd${index}`,
      className: "hide-content",
      id: `sponsored-container-middle-${index}`
    };

    return <div {...props} />;
  }

  _renderBottomSponsoredContainer() {
    return (
      <div className="zone">
        <div
          id="sponsored-container-bottom-1"
          className="sponsored-container-bottom hide-content"/>
        <div
          id="sponsored-container-bottom-2"
          className="sponsored-container-bottom hide-content"/>
        <div
          id="sponsored-container-bottom-3"
          className="sponsored-container-bottom hide-content"/>
        <div
          id="sponsored-container-bottom-4"
          className="sponsored-container-bottom hide-content"/>
      </div>
    );
  }

  /*eslint-disable complexity*/

  _renderLeftModules(left) {
    const { isMobile } = this.props;

    const lhnModules = left.map((module, index) => {
      if (this._isValidModule(module)) {
        module.isMobile = isMobile;

        switch (module.moduleType) {
        case ModuleTypes.SHOP_BY_CATEGORY:
        case ModuleTypes.POPULAR_IN_CATEGORY:
        case ModuleTypes.CATEGORY_CURATED_LEFTNAV:
          return <CategoryComponent.SideBarMenuModule key={index} {...module} />;
        default:
          return null;
        }
      }
    });

    return <Shelf threeCol={false}>{lhnModules}</Shelf>;
  }

  _buildAdContext() {
    const adContext = (this.props.others && this.props.others.adContext) ?
        this.props.others.adContext : null;

    if (adContext !== null) {
      window._wml = window._wml || {};
      window._wml.midasContext = window._wml.midasContext || {};
      window._wml.midasContext.categoryPathName = adContext.categoryPathName;
      window._wml.midasContext.categoryPathId = adContext.categoryPathId;
      window._wml.midasContext.pageType = adContext.pageType;
      return window._wml.midasContext;
    }
    return null;
  }

  /*eslint-disable complexity*/
  _isValidModule(module) {
    switch (module.moduleType) {
    case ModuleTypes.SINGLE_STORY_POV_RESPONSIVE:
    case ModuleTypes.MULTI_STORY_POV_RESPONSIVE:
      return !!(module.stories && module.stories.length);
    case ModuleTypes.FEATURED_CATEGORIES:
    case ModuleTypes.FEATURED_CATEGORIES_CURATED:
    case ModuleTypes.BREADCRUMB:
    case ModuleTypes.TOP_BRAND:
    case ModuleTypes.FEATURED_BRANDS_CURATED:
      return !!(module.data && module.data.length);
    case ModuleTypes.CUSTOM_HTML:
      // must have some html
      return !!(module.markup && module.markup.length);
    case ModuleTypes.FACET_TAB:
      return !!(module.tabs && module.tabs.length);
    case ModuleTypes.SINGLE_ITEM:
      return !!(module.items && module.items.length);
    case ModuleTypes.SEO_CUSTOM_HTML:
      // must have html
      return !!(module.markup && module.markup.length);
    case ModuleTypes.BANNER_MESSAGE:
    case ModuleTypes.VALUE_OF_DAY_MESSAGING:
      return !!(module.data);
    case ModuleTypes.CATEGORY_NAV:
    case ModuleTypes.SHOP_BY_CATEGORY:
    case ModuleTypes.CATEGORY_CURATED_LEFTNAV:
    case ModuleTypes.POPULAR_IN_CATEGORY:
      return !!(module.data && module.data.length);
    default:
      return true;
    }
  }
  /*eslint-disable complexity*/

  _renderSkylineBanner() {
    return (
      <div className="sponsored-container-top-wrapper hide-content display-block-l">
        <div id="sponsored-container-top"
          /*eslint-disable max-len */
          className="sponsored-container-top container container-responsive container-full sponsored-display-ad"
          /*eslint-enable max-len */
        />
      </div>
    );
  }

  _isP13NModuleEnabled() {
    const p13nEnabled = getConfigVariable(P13N_ENABLED_KEY, P13N_ENABLED_DEFAULT_KEY);
    return getBooleanValue(p13nEnabled);
  }

  render() {
    const { top, left, center } = this.props.modules;
    const pageMetadata = this._getPageMetadata() ? this._getPageMetadata().get("cwc") : null;
    const seoText = pageMetadata ? {"markup": pageMetadata} : null;

    const classes = className("Grid-col", {
      "u-size-4-5-l u-size-5-6-xl": left.length > 0
    });

    return (
      <div>
        { this._renderSkylineBanner() }
        <div className="page-content-wrapper Container">
          <div className="CategoryApp">
            <div className="CategoryApp-topModules">{ this._renderTopModules(top) }</div>
            <div className="Grid">
              { left.length > 0 &&
                <div className="Grid-col u-size-1-5-l u-size-1-6-xl hide-content-max-l">
                  {this._renderLeftModules(left)}
                  <Ads id="sponsored-container-left-1" className="sponsored-container-left"/>
                </div>
              }
              <div
                className={classes}
                {...getDataAutomationIdPair("MainContent", "CategoryApp", process)}>
                { this._renderCenterModules(center) }
                { this._renderBottomSponsoredContainer() }
                { seoText &&
                  <CategoryComponent.ExpandableHtmlText {...seoText} />
                }
              </div>
            </div>
          </div>
        </div>
        { this._isP13NModuleEnabled() && <P13NContainer page="Category" /> }
        <EnvironmentInfo />
      </div>
    );
  }
}

CategoryApp.displayName = "CategoryApp";

CategoryApp.contextTypes = {
  seoTags: PropTypes.object
};

CategoryApp.propTypes = {
  modules: PropTypes.shape({
    left: PropTypes.array,
    top: PropTypes.array,
    center: PropTypes.array
  }),
  showAds: PropTypes.func,
  others: PropTypes.object,
  isMobile: PropTypes.bool.isRequired
};

CategoryApp.defaultProps = {
  modules: {
    left: [],
    top: [],
    center: []
  },
  others: {}
};

const mapDispatchToProps = (dispatch) => ({
  showAds: (data) => {
    dispatch(showAdsAction(data));
  }
});

const mapStateToProps = (state) => ({
  modules: state.presoData.modules,
  others: state.presoData.others,
  isMobile: state.isMobile
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryApp);
