import React, { PropTypes } from "react";
import TabNavigation from "./tab-navigation";
import ProductCarousel from "./product-carousel";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

/**
 * Tabbed Product carousel
 * Content pane will be Product Carousel and navigation will depend on device width.
 * For mobile breakpoints, it will render a Chooser component.
 * For desktop breakpoints, it will be normal group of badge buttons
 * @param {Object} props Component props
 * @return {ReactElement} Tabbed Product Carousel Component
 *
 * @component TabbedProductCarousel
 * @import {TabbedProductCarousel}
 * @playground
 * TabbedProductCarousel
 * ```
 * <TabbedProductCarousel
 *  tabs={[
 *    { title: "Tab 1", items: [1, 2, 3, 4]},
 *    { title: "Tab 1", items: [1, 2, 3, 4]}
 *  ]}
 *  active={1}
 * />
 * ```
 */

const TabbedProductCarousel = ({ tabs, active, onChange, moduleType, tabsToLoad }) => {
  const options = tabs.map((tab) => tab.title);
  tabsToLoad = tabsToLoad || [active];

  return (
    <div className="Tabbed-product-carousel"
      {...getTempoModuleAutomationId(moduleType, process)}>
      <TabNavigation options={options} onChange={onChange} value={active} />
      { tabsToLoad.map((tabNo) => {
        return (
          <span key={tabNo} className={tabNo === active ? "" : "hide-content"}>
            <ProductCarousel items={tabs[tabNo].items} />
          </span>
        );
      })
      }
    </div>
  );
};

TabbedProductCarousel.propTypes = {
  /**
   * Current active tab
   */
  active: PropTypes.number,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
   * Callback for tab changes. Redux dispatch callback.
   */
  onChange: PropTypes.func.isRequired,
  /**
  Tabs to display: Tab title and product data
  */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Tab Title: Will be displayed as Chooser option or Button text
     */
    title: PropTypes.string.isRequired,
    /**
     * Product data array
     */
    items: PropTypes.array.isRequired
  })),
  /**
  Number of tabs to load. This will be used to lazily load the tabs into dom
  only when tabs are switched. Currently we just render the active tab.
  So onchanging the tabs, there is always going to dom modifications.
  */
  tabsToLoad: PropTypes.array.isRequired
};

TabbedProductCarousel.defaultProps = {
  active: 0,
  moduleType: "TabbedProductCarousel"
};

export default TabbedProductCarousel;
