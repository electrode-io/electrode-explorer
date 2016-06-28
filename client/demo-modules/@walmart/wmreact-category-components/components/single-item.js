"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _categoryUtils = require("@walmart/category-utils");

var _productCarousel = require("./product-carousel");

var _productCarousel2 = _interopRequireDefault(_productCarousel);

var _moduleTitle = require("./module-title");

var _moduleTitle2 = _interopRequireDefault(_moduleTitle);

var _analyticsDispatcher = require("./analytics-dispatcher");

var _analyticsDispatcher2 = _interopRequireDefault(_analyticsDispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Single Item Module: Consist of One Title and product carousel with see more link.
@examples
```jsx
<SingleItem
  zone="contentZone1"
  moduleType="SingleItem"
  backgroundImage="//backgroundimage.url"
  items={[{item1, item2}]}
  firstTile={firstTile}
/>
```
@component SingleItem
@import {SingleItem}
@playground
```
<SingleItem
  zone="contentZone1"
  moduleType="SingleItem"
  backgroundImage="//backgroundimage.url"
  items={[{item1, item2}]}
  firstTile={firstTile}
/>
```
*/

var SingleItem = function SingleItem(props) {
  var backgroundColor = props.backgroundColor;
  var backgroundImage = props.backgroundImage;
  var title = props.title;
  var seeAllUrl = props.seeAllUrl;
  var firstTile = props.firstTile;
  var items = props.items;
  var zone = props.zone;
  var moduleType = props.moduleType;
  var isMobile = props.isMobile;


  var inlineStyle = backgroundImage ? { backgroundImage: "url(" + backgroundImage + ")" } : { backgroundColor: backgroundColor };

  return _react2.default.createElement(
    _analyticsDispatcher2.default,
    (0, _extends3.default)({}, props, {
      __self: undefined
    }),
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        style: inlineStyle,
        className: "SingleItem",
        "data-zone": zone
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
        __self: undefined
      }),
      _react2.default.createElement(_moduleTitle2.default, {
        title: title,
        linkUrl: seeAllUrl,
        __self: undefined
      }),
      _react2.default.createElement(_productCarousel2.default, (0, _extends3.default)({ firstTile: firstTile, items: items, isMobile: isMobile }, {
        __self: undefined
      }))
    )
  );
};

SingleItem.displayName = "SingleItem";

SingleItem.propTypes = {
  /**
  background color on the module. Optional.
  */
  backgroundColor: _react.PropTypes.string,
  /**
  background image on the module. Optional.
  */
  backgroundImage: _react.PropTypes.string,
  /**
  First tile configuration for themed tile
  */
  firstTile: _react.PropTypes.object,
  /**
  Products array to be displayed as part of carousel
  */
  items: _react.PropTypes.array.isRequired,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  Url for see all link on right side.
  */
  seeAllUrl: _react.PropTypes.string,
  /**
  Module Title
  */
  title: _react.PropTypes.string,
  /**
  zone configured in tempo
  */
  zone: _react.PropTypes.string.isRequired,
  /**
  is Mobile or desktop?
  */
  isMobile: _react.PropTypes.bool
};

SingleItem.defaultProps = {
  backgroundColor: "#fff",
  backgroundImage: "",
  firstTile: {},
  moduleType: _categoryUtils.moduleTypes.SINGLE_ITEM,
  seeAllUrl: "",
  title: "",
  isMobile: false
};

exports.default = SingleItem;