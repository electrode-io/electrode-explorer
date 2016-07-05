"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moduleDrawer = require("./module-drawer");

var _moduleDrawer2 = _interopRequireDefault(_moduleDrawer);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for displaying a list of popular categories.
@examples
```jsx
<PopularCategories data={[
  {
    "itle": "TVs",
    "url": "/browse/electronics/tvs/3944_1060825_447913",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
      "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
    "categoryId": "3944_1060825_447913",
    "assetId": "b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
    "uid": "2TXEZx_h"
  },
  {
    "title": "Laptops",
    "url": "/browse/electronics/laptop-computers/3944_3951_132960",
    "alt": "Laptops",
    "imageUrl": "http://i5.walmartimages.com/dfw/4ff9c6c9-ce9a/" +
      "k2-_71a2c162-b553-428e-8e52-d149efbf0da9.v1.jpg",
    "categoryId": "3944_3951_132960",
    "assetId": "d1229ec0-d357-11e4-8c7c-258c79afbf66",
    "uid": "IE78xV1I"
  }
]} />
```
@component PopularCategories
@import {PopularCategories}
@playground
PopularCategories
```
<PopularCategories data={[
  {
    "title": "TVs",
    "url": "/browse/electronics/tvs/3944_1060825_447913",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
      "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
    "categoryId": "3944_1060825_447913",
    "assetId": "b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
    "uid": "2TXEZx_h"
  },
  {
    "title": "Laptops",
    "url": "/browse/electronics/laptop-computers/3944_3951_132960",
    "alt": "Laptops",
    "imageUrl": "http://i5.walmartimages.com/dfw/4ff9c6c9-ce9a/" +
      "k2-_71a2c162-b553-428e-8e52-d149efbf0da9.v1.jpg",
    "categoryId": "3944_3951_132960",
    "assetId": "d1229ec0-d357-11e4-8c7c-258c79afbf66",
    "uid": "IE78xV1I"
  }
]} />
```
*/

var PopularCategories = function PopularCategories(props) {
  var _props = (0, _extends3.default)({}, props, { data: props.data.slice(0, props.maxTiles) });
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({ className: "PopularCategories"
    }, (0, _categoryUtils.getTempoModuleAutomationId)(props.moduleType, process)),
    _react2.default.createElement(_moduleDrawer2.default, _props)
  );
};

PopularCategories.displayName = "PopularCategories";

PopularCategories.propTypes = {
  /**
  Array of tile data
  */
  data: _react.PropTypes.array.isRequired,
  /**
  Maximum number of tiles displayed in the open revealer
  */
  maxTiles: _react.PropTypes.number,
  /**
  Component title
  */
  moduleTitle: _react.PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  Number of rows that are visible when the revealer is closed
  */
  rows: _react.PropTypes.number
};

PopularCategories.defaultProps = {
  maxTiles: 20,
  moduleTitle: "Popular Categories",
  moduleType: _categoryUtils.moduleTypes.FEATURED_CATEGORIES,
  rows: 2
};

exports.default = PopularCategories;