import React, { PropTypes } from "react";

import TabbedProductCarousel from "./tabbed-product-carousel";
import ModuleTitle from "./module-title";
import AnalyticsDispatcher from "./analytics-dispatcher";

import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

/** Facet Tab module component.
 * @param {String} title Module Title text.
 * @param {String} seeAllUrl see more link on right side.
 * @param {Array} tabs tabbed carousel data.
 * @component FacetTab
 * @import {FacetTab}
 * @playground
 * FacetTab
 * ```jsx
 *  <FacetTab
 *    title="Awesome module"
 *    seeAllUrl="//walmart.com/cp/3944"
 *    tabs={[
 *      { title: "Tab 1", items: [1, 2, 3, 4]},
 *      { title: "Tab 1", items: [1, 2, 3, 4]}
 *    ]}
 *  />
 * ```
 */

const FacetTab = ({ active, moduleType, title, ...rest }) => {
  let seeAllUrl;
  if (rest.tabs && rest.tabs[active]) {
    seeAllUrl = rest.tabs[active].seeAllLink;
  }

  return (
    <AnalyticsDispatcher {...{ active, moduleType, title, ...rest }}>
      <div className="Facet-tab ResponsiveContainer"
        {...getTempoModuleAutomationId(moduleType, process)}>
        <ModuleTitle title={title} linkUrl={seeAllUrl} />
        <TabbedProductCarousel {...{...rest, active}}/>
      </div>
    </AnalyticsDispatcher>
  );
};

FacetTab.propTypes = {
  /**
  current active tab index.
  */
  active: PropTypes.number,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  on tab Change callback. should be connected with redux connect
  */
  onChange: PropTypes.func.isRequired,
  /**
  tabbed product carousel data
  */
  tabs: PropTypes.array.isRequired,
  /**
  Number of tabs to load. This will be used to lazily load the tabs into dom
  only when tabs are switched. Currently we just render the active tab.
  So onchanging the tabs, there is always going to dom modifications.
  */
  tabsToLoad: PropTypes.array.isRequired,
  /**
  Module title
  */
  title: PropTypes.string
};

FacetTab.defaultProps = {
  active: 0,
  moduleType: ModuleTypes.FACET_TAB,
  title: ""
};

export default FacetTab;
