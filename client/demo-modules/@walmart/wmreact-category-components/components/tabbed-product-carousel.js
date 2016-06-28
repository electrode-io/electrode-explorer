"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tabNavigation = require("./tab-navigation");

var _tabNavigation2 = _interopRequireDefault(_tabNavigation);

var _productCarousel = require("./product-carousel");

var _productCarousel2 = _interopRequireDefault(_productCarousel);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var TabbedProductCarousel = function TabbedProductCarousel(_ref) {
  var tabs = _ref.tabs;
  var active = _ref.active;
  var onChange = _ref.onChange;
  var moduleType = _ref.moduleType;
  var tabsToLoad = _ref.tabsToLoad;

  var options = tabs.map(function (tab) {
    return tab.title;
  });
  tabsToLoad = tabsToLoad || [active];

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "Tabbed-product-carousel"
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
      __self: undefined
    }),
    _react2.default.createElement(_tabNavigation2.default, { options: options, onChange: onChange, value: active, __self: undefined
    }),
    tabsToLoad.map(function (tabNo) {
      return _react2.default.createElement(
        "span",
        { key: tabNo, className: tabNo === active ? "" : "hide-content", __self: undefined
        },
        _react2.default.createElement(_productCarousel2.default, { items: tabs[tabNo].items, __self: undefined
        })
      );
    })
  );
};

TabbedProductCarousel.propTypes = {
  /**
   * Current active tab
   */
  active: _react.PropTypes.number,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
   * Callback for tab changes. Redux dispatch callback.
   */
  onChange: _react.PropTypes.func.isRequired,
  /**
  Tabs to display: Tab title and product data
  */
  tabs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    /**
     * Tab Title: Will be displayed as Chooser option or Button text
     */
    title: _react.PropTypes.string.isRequired,
    /**
     * Product data array
     */
    items: _react.PropTypes.array.isRequired
  })),
  /**
  Number of tabs to load. This will be used to lazily load the tabs into dom
  only when tabs are switched. Currently we just render the active tab.
  So onchanging the tabs, there is always going to dom modifications.
  */
  tabsToLoad: _react.PropTypes.array.isRequired
};

TabbedProductCarousel.defaultProps = {
  active: 0,
  moduleType: "TabbedProductCarousel"
};

exports.default = TabbedProductCarousel;