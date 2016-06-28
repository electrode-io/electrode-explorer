"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tabbedProductCarousel = require("./tabbed-product-carousel");

var _tabbedProductCarousel2 = _interopRequireDefault(_tabbedProductCarousel);

var _moduleTitle = require("./module-title");

var _moduleTitle2 = _interopRequireDefault(_moduleTitle);

var _analyticsDispatcher = require("./analytics-dispatcher");

var _analyticsDispatcher2 = _interopRequireDefault(_analyticsDispatcher);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FacetTab = function FacetTab(_ref) {
  var active = _ref.active;
  var moduleType = _ref.moduleType;
  var title = _ref.title;
  var rest = (0, _objectWithoutProperties3.default)(_ref, ["active", "moduleType", "title"]);

  var seeAllUrl = void 0;
  if (rest.tabs && rest.tabs[active]) {
    seeAllUrl = rest.tabs[active].seeAllLink;
  }

  return _react2.default.createElement(
    _analyticsDispatcher2.default,
    (0, _extends3.default)({}, (0, _extends3.default)({ active: active, moduleType: moduleType, title: title }, rest), {
      __self: undefined
    }),
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "Facet-tab ResponsiveContainer"
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
        __self: undefined
      }),
      _react2.default.createElement(_moduleTitle2.default, { title: title, linkUrl: seeAllUrl, __self: undefined
      }),
      _react2.default.createElement(_tabbedProductCarousel2.default, (0, _extends3.default)({}, (0, _extends3.default)({}, rest, { active: active }), {
        __self: undefined
      }))
    )
  );
};

FacetTab.propTypes = {
  /**
  current active tab index.
  */
  active: _react.PropTypes.number,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  on tab Change callback. should be connected with redux connect
  */
  onChange: _react.PropTypes.func.isRequired,
  /**
  tabbed product carousel data
  */
  tabs: _react.PropTypes.array.isRequired,
  /**
  Number of tabs to load. This will be used to lazily load the tabs into dom
  only when tabs are switched. Currently we just render the active tab.
  So onchanging the tabs, there is always going to dom modifications.
  */
  tabsToLoad: _react.PropTypes.array.isRequired,
  /**
  Module title
  */
  title: _react.PropTypes.string
};

FacetTab.defaultProps = {
  active: 0,
  moduleType: _categoryUtils.moduleTypes.FACET_TAB,
  title: ""
};

exports.default = FacetTab;